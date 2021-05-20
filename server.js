const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");
const multer = require("multer");
const path = require("path");

const fileUpload = require('express-fileupload');

const stripe = require('stripe')('sk_test_n5ZhCDFVWE4Q5YuzE2hBas5h00DsT1KFwY');

const app = express();

var nodemailer = require('nodemailer');

var mandrillTransport = require('nodemailer-mandrill-transport');

var http = require('http');

const pg = require('pg');

var config = {
    user: 'postgres',
    password: 'rajp2020',
    database: 'easy_wallet'
}

const pool = new pg.Pool({
    connectionString: 'postgres://jhxrsiuftjvyzh:a298e5fcdd6b814e98bff8dac23c6cc87fff0d5dbca01d8e29af493eb0d71600@ec2-107-22-83-3.compute-1.amazonaws.com:5432/d5j96e57hv4ump',
    ssl: {
        rejectUnauthorized: false
    }
});

// const pool = new pg.Pool(config);
const PORT = process.env.PORT || 8080;


const storage = multer.diskStorage({
    destination: './images/profile',
    filename: (req, file, cb) => {
        return cb(null, `${file.fieldname}_${Date.now()}${path.extname(file.originalname)}`)
    }
})

const upload = multer({
    storage: storage,
    // limits: {
    //     fileSize: 10
    // }
})

var corsOptions = {
    origin: "http://localhost:8080"
};

pool.connect();

app.use(express.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(express.static(path.join(__dirname, 'public')));
app.use(fileUpload());

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}.`);
});

// simple route
app.get("/", (req, res) => {
    res.json({ message: "Welcome to Easy Wallet ." });
});

app.post("/api/user/Login", function (req, res) {
    const values = [req.body.Email, req.body.Password, 1]

    pool.query('SELECT * FROM users WHERE email = $1', [req.body.Email])
        .then(data => {

            if (data.rows.length > 0) {
                pool.query('SELECT * FROM users WHERE email = $1 and password = $2 and verified = $3 ', values)
                    .then(data => {

                        if (data.rows.length > 0) {
                            datas = {
                                success: 1,
                                message: "Successfully login",
                                // data: data.rows[0]
                                data: {
                                    id: data.rows[0].id,
                                    first_name: data.rows[0].first_name,
                                    last_name: data.rows[0].last_name,
                                    email: data.rows[0].email,
                                    mobile: data.rows[0].mobile,
                                    profile_image: data.rows[0].profile_image,
                                    verified: data.rows[0].verified,
                                }
                            }
                            res.send(datas);
                        }
                        else {
                            datas = {
                                success: 0,
                                message: "Wrong password, Try again!",
                            }
                            res.send(datas);
                        }
                    })
                    .catch(e => {
                        let response = {
                            success: 0,
                            message: e.message,
                        }
                        res.send(response);
                    })
            }
            else {
                datas = {
                    success: 0,
                    message: "Email not registered",
                }
                res.send(datas);
            }
        })
        .catch(e => {
            let response = {
                success: 0,
                message: e.message,
            }
            res.send(response);
        })



});

app.post("/api/user/Signup", function (req, res) {

    let otp = Math.floor(1000 + Math.random() * 9000);

    const values = [req.body.FirstName, req.body.LastName, req.body.Email, req.body.Mobile, otp, req.body.Password, 0];

    pool.query('SELECT * FROM users WHERE email = $1 and verified = $2', [req.body.Email, 1])
        .then(data => {

            if (data.rows.length > 0) {
                datas = {
                    success: 0,
                    message: "Email is alreay exits, Try again with another email id"
                }
                res.send(datas);
            }
            else {

                pool.query('SELECT * FROM users WHERE email = $1 and verified = $2', [req.body.Email, 0])
                    .then(data => {

                        if (data.rows.length > 0) {
                            pool.query('UPDATE users SET first_name = $1, last_name = $2, email = $3, mobile = $4, otp = $5, password = $6, verified = $7, create_date = NOW() WHERE email = $3 ', values)
                                .then(datas => {

                                    sendmail(req.body.Email, otp)

                                    let response = {
                                        success: "1",
                                        message: "OTP is sent to your given email.",
                                        otp: otp,
                                        UserId: data.rows[0].id
                                    }

                                    res.send(response);
                                })
                                .catch(e => {

                                    let response = {
                                        success: 0,
                                        message: e.message,
                                    }
                                    res.send(response);
                                });
                        }
                        else {

                            pool.query('INSERT INTO users(first_name, last_name, email, mobile, otp, password, verified, create_date) VALUES($1, $2, $3, $4, $5, $6, $7, NOW())', values)
                                .then(datas => {

                                    sendmail(req.body.Email, otp)

                                    pool.query('SELECT * FROM users WHERE email = $1', [req.body.Email])
                                        .then(data => {
                                            let response = {
                                                success: "1",
                                                message: "OTP is sent to your given email.",
                                                otp: otp,
                                                UserId: data.rows[0].id
                                            }

                                            res.send(response);
                                        })
                                        .catch(e => {

                                            let response = {
                                                success: 0,
                                                message: e.message,
                                            }
                                            res.send(response);
                                        });

                                })
                                .catch(e => {

                                    let response = {
                                        success: 0,
                                        message: e.message,
                                    }
                                    res.send(response);
                                });
                        }
                    })
                    .catch(e => {
                        let response = {
                            success: 0,
                            message: e.message,
                        }
                        res.send(response);
                    })
            }
        })
        .catch(e => {
            let response = {
                success: 0,
                message: e.message,
            }
            res.send(response);
        })
});

app.post("/api/user/OtpValidation", function (req, res) {
    const values = [req.body.UserId, req.body.Otp]

    pool.query('SELECT * FROM users WHERE id = $1 and otp = $2', values)
        .then(data => {

            if (data.rows.length > 0) {
                pool.query('UPDATE users SET verified = $1 WHERE id = $2 ', [1, req.body.UserId])
                    .then(data => {

                        datas = {
                            success: 1,
                            message: "Successfully verified",
                        }
                        res.send(datas);

                    })
                    .catch(e => {
                        let response = {
                            success: 0,
                            message: e.message,
                        }
                        res.send(response);
                    })
            }
            else {
                datas = {
                    success: 0,
                    message: "Invalid Otp!",
                }
                res.send(datas);
            }
        })
        .catch(e => {
            let response = {
                success: 0,
                message: e.message,
            }
            res.send(response);
        })



});

app.post("/api/user/Forgotpassword", function (req, res) {

    pool.query('SELECT * FROM users WHERE email = $1 and verified = $2', [req.body.Email, 1])
        .then(data => {

            if (data.rows.length > 0) {
                var randomstring = Math.random().toString(36).slice(-8);

                pool.query('UPDATE users SET password = $1 WHERE email = $2 ', [randomstring, req.body.Email])
                    .then(data => {

                        send_Password_mail(req.body.Email, randomstring)
                        datas = {
                            success: 1,
                            message: "Password is sent to your given email."
                        }
                        res.send(datas);
                    })
                    .catch(e => {

                        let response = {
                            success: 0,
                            message: e.message
                        }
                        res.send(response);
                    });

            }
            else {
                datas = {
                    success: 0,
                    message: "Email not registered",
                }
                res.send(datas);
            }

        })
        .catch(e => {
            let response = {
                success: 0,
                message: e.message,
            }
            res.send(response);
        })

});

app.post("/api/user/Changepassword", function (req, res) {

    pool.query('SELECT * FROM users WHERE id = $1 and password = $2', [req.body.UserId, req.body.OldPassword])
        .then(data => {

            if (data.rows.length > 0) {

                pool.query('UPDATE users SET password = $2 WHERE id = $1 ', [req.body.UserId, req.body.NewPasword])
                    .then(data => {

                        datas = {
                            success: 1,
                            message: "Password is successfully changed."
                        }
                        res.send(datas);
                    })
                    .catch(e => {

                        let response = {
                            success: 0,
                            message: e.message
                        }
                        res.send(response);
                    });

            }
            else {
                datas = {
                    success: 0,
                    message: "Invalid Old Password",
                }
                res.send(datas);
            }

        })
        .catch(e => {
            let response = {
                success: 0,
                message: e.message,
            }
            res.send(response);
        })

});

app.get("/api/user/GetUserProfile/:UserId", function (req, res) {

    pool.query('SELECT * FROM users WHERE id = $1', [req.params.UserId])
        .then(data => {

            if (data.rows.length > 0) {

                datas = {
                    success: 1,
                    message: "",
                    data: {
                        id: data.rows[0].id,
                        FirstName: data.rows[0].first_name,
                        LastName: data.rows[0].last_name,
                        Email: data.rows[0].email,
                        Mobile: data.rows[0].mobile,
                        Password: data.rows[0].password,
                        ProfileImage: data.rows[0].profile_image
                        // verified: data.rows[0].verified,
                    }
                }
                res.send(datas);

            }
            else {
                datas = {
                    success: 0,
                    message: "User not exits",
                }
                res.send(datas);
            }

        })
        .catch(e => {
            let response = {
                success: 0,
                message: e.message,
            }
            res.send(response);
        })

});

app.post("/api/user/UpdateUserProfile", function (req, res) {

    pool.query('SELECT * FROM users WHERE id = $1', [req.body.UserId])
        .then(data => {

            if (data.rows.length > 0) {

                pool.query('UPDATE users SET first_name = $2, last_name = $3, mobile = $4 WHERE id = $1 ', [req.body.UserId, req.body.FisrtName, req.body.LastName, req.body.Mobile])
                    .then(data => {

                        datas = {
                            success: 1,
                            message: "Profile updated successfully."
                        }
                        res.send(datas);
                    })
                    .catch(e => {

                        let response = {
                            success: 0,
                            message: e.message
                        }
                        res.send(response);
                    });

            }
            else {
                datas = {
                    success: 0,
                    message: "User not exits",
                }
                res.send(datas);
            }

        })
        .catch(e => {
            let response = {
                success: 0,
                message: e.message,
            }
            res.send(response);
        })

});

app.get("/api/user/GetUserHistory/:UserId", function (req, res) {

    pool.query('SELECT * FROM transaction WHERE user_id = $1', [req.params.UserId])
        .then(data => {

            if (data.rows.length > 0) {

                let array = [];

                for (let index = 0; index < data.rows.length; index++) {
                    const element = data.rows[index];

                    let obj = {
                        "id": element.id,
                        "CurrencyId": element.currency_id,
                        "CurrencyName": element.currency_name,
                        "CurrencyAmount": element.currency_amount,
                        "Amount": element.amount,
                        "TransactionType": element.transaction_type,
                        "Token": element.token,
                        "IsPaid": element.ispaid,
                        "Created_On": element.created_on
                    };

                    array.push(obj);

                }

                datas = {
                    success: 1,
                    message: "",
                    data: array
                }
                res.send(datas);

            }
            else {
                datas = {
                    success: 0,
                    message: "No records found!",
                }
                res.send(datas);
            }

        })
        .catch(e => {
            let response = {
                success: 0,
                message: e.message,
            }
            res.send(response);
        })

});

app.use('/profile', express.static('images/profile'));

app.post('/api/user/UploadImage', function (req, res) {
    let sampleFile;
    let uploadPath;

    if (!req.files || Object.keys(req.files).length === 0) {
        return res.json({
            success: 0,
            message: "No files were uploaded."
        })
    }

    pool.query('SELECT * FROM users WHERE id = $1', [req.body.UserId])
        .then(data => {

            if (data.rows.length > 0) {

                // The name of the input field (i.e. "sampleFile") is used to retrieve the uploaded file
                sampleFile = req.files.ProfileImage;
                uploadPath = __dirname + `/images/profile/${parseInt(req.body.UserId)}.jpg`;

                if (sampleFile.mimetype == 'image/jpeg' || sampleFile.mimetype == 'image/png') {
                    // Use the mv() method to place the file somewhere on your server
                    sampleFile.mv(uploadPath, function (err) {
                        if (err)
                            return res.status(500).send(err);

                        pool.query('UPDATE users SET profile_image = $2 WHERE id = $1 ', [req.body.UserId, `/profile/${parseInt(req.body.UserId)}.jpg`])
                            .then(data => {

                                datas = {
                                    success: 1,
                                    message: "Profile image saved."
                                }
                                res.send(datas);
                            })
                            .catch(e => {

                                let response = {
                                    success: 0,
                                    message: e.message
                                }
                                res.send(response);
                            });

                    });
                }
                else {
                    res.json({
                        success: 0,
                        message: "This formate is not allowed, please upload '.png' and '.jpeg' images."
                    })
                }

            }
            else {
                datas = {
                    success: 0,
                    message: "User not exits",
                }
                res.send(datas);
            }

        })
        .catch(e => {
            let response = {
                success: 0,
                message: e.message,
            }
            res.send(response);
        })
});

app.post('/api/payment', function (req, res) {

    // Moreover you can take more details from user
    // like Address, Name, etc from form

    stripe.tokens.create({
        card: {
            number: req.body.CardNumber,
            exp_month: req.body.Exp_month,
            exp_year: req.body.Exp_year,
            cvc: req.body.Cvc,
            name: req.body.Name
        },
    })
        .then((token) => {
            // res.send(token)

            stripe.customers.create({
                email: req.body.Email,
                source: token.id,
                name: req.body.Name,
            })
                .then((customer) => {

                    stripe.charges.create({
                        amount: req.body.Amount,
                        currency: 'INR',
                        customer: customer.id,
                        receipt_email: req.body.Email
                    })
                        .then((charge) => {
                            // res.json(charge)  // If no error occurs

                            if (charge.status == "succeeded") {

                                let amount = parseInt(req.body.Amount) / 100;

                                pool.query('INSERT INTO transaction(user_id, currency_id, currency_name, currency_amount, amount, transaction_type, ispaid, created_by, created_on) VALUES($1, $2, $3, $4, $5, $6, $7, $8, NOW())', [req.body.UserId, req.body.CurrencyId, req.body.CurrencyName, req.body.CurrencyAmount, amount, "Buy", 1, req.body.UserId])
                                    .then(transaction => {

                                        pool.query('SELECT * FROM wallet WHERE created_by = $1 and active = $2 and currency_id = $3', [req.body.UserId, 1, req.body.CurrencyId])
                                            .then(wallet => {

                                                if (wallet.rows.length > 0) {

                                                    let amount = parseFloat(wallet.rows[0].currency_amount) + parseFloat(req.body.CurrencyAmount)

                                                    pool.query('UPDATE wallet SET currency_amount = $1, updated_by = $2, updated_on = NOW() WHERE created_by = $2 and active = $3 and currency_id = $4 ', [amount, req.body.UserId, 1, req.body.CurrencyId])
                                                        .then(wallet => {

                                                            let response = {
                                                                success: "1",
                                                                message: "Successfully payment done.",
                                                            }
                                                            res.send(response);

                                                        })
                                                        .catch(e => {

                                                            let response = {
                                                                success: "0",
                                                                message: e.message,
                                                            }
                                                            res.send(response);
                                                        });

                                                }
                                                else {
                                                    pool.query('INSERT INTO wallet(currency_id, currency_name, currency_amount, active, created_by, created_on, updated_by, updated_on) VALUES($1, $2, $3, $4, $5, NOW(), $6, NOW())', [req.body.CurrencyId, req.body.CurrencyName, req.body.CurrencyAmount, 1, req.body.UserId, req.body.UserId])
                                                        .then(wallet => {

                                                            let response = {
                                                                success: "1",
                                                                message: "Successfully payment done.",
                                                            }
                                                            res.send(response);

                                                        })
                                                        .catch(e => {

                                                            let response = {
                                                                success: "0",
                                                                message: e.message,
                                                            }
                                                            res.send(response);
                                                        });
                                                }

                                            })
                                            .catch(e => {
                                                let response = {
                                                    success: 0,
                                                    message: e.message,
                                                }
                                                res.send(response);
                                            })

                                    })
                                    .catch(e => {

                                        let response = {
                                            success: "0",
                                            message: e.message,
                                        }
                                        res.send(response);
                                    });
                            }
                            else {

                            }

                        })
                        .catch((err) => {
                            // res.send(err)       // If some error occurs

                            let data = {
                                success: "0",
                                message: err.raw.message
                            }

                            res.json(data)
                        });

                })
                .catch((err) => {
                    // res.send(err)       // If some error occurs

                    let data = {
                        success: "0",
                        message: err.raw.message
                    }

                    res.json(data)
                });

        })
        .catch((err) => {
            // res.send(err)       // If some error occurs

            let data = {
                success: "0",
                message: err.raw.message
            }

            res.json(data)
        });

    // stripe.customers.create({
    //     email: req.body.stripeEmail,
    //     source: req.body.stripeToken,
    //     name: 'Gourav Hammad',
    //     address: {
    //         line1: 'TC 9/4 Old MES colony',
    //         postal_code: '452331',
    //         city: 'Indore',
    //         state: 'Madhya Pradesh',
    //         country: 'India',
    //     }
    // })
    //     .then((customer) => {

    //         return stripe.charges.create({
    //             amount: 2500,     // Charing Rs 25
    //             description: 'Web Development Product',
    //             currency: 'USD',
    //             customer: customer.id
    //         });
    //     })
    //     .then((charge) => {
    //         res.send("Success")  // If no error occurs
    //     })
    //     .catch((err) => {
    //         res.send(err)       // If some error occurs
    //     });
});

app.get("/api/wallet/GetAllWallets/:UserId", function (req, res) {

    pool.query('SELECT * FROM wallet WHERE created_by = $1 and active = $2 ', [req.params.UserId, 1])
        .then(data => {

            if (data.rows.length > 0) {

                let array = [];

                for (let index = 0; index < data.rows.length; index++) {
                    const element = data.rows[index];

                    let obj = {
                        "id": element.id,
                        "CurrencyId": element.currency_id,
                        "CurrencyName": element.currency_name,
                        "CurrencyAmount": element.currency_amount,
                        "Active": element.active,
                        "Created_On": element.created_on
                    };

                    array.push(obj);

                }

                let datas = {
                    success: "1",
                    message: "",
                    data: array
                }
                res.send(datas);

            }
            else {
                let datas = {
                    success: "0",
                    message: "No records found!",
                }
                res.send(datas);
            }

        })
        .catch(e => {
            let response = {
                success: 0,
                message: e.message,
            }
            res.send(response);
        })

});

app.post("/api/wallet/ActiveWallet", function (req, res) {

    pool.query('SELECT * FROM wallet WHERE created_by = $1 and active = $2 and currency_id = $3', [req.body.UserId, 1, req.body.CurrencyId])
        .then(data => {

            if (data.rows.length > 0) {

                let response = {
                    success: 0,
                    message: "Already exits"
                }
                res.send(response);

            }
            else {
                pool.query('INSERT INTO wallet(currency_id, currency_name, currency_amount, active, created_by, created_on, updated_by, updated_on) VALUES($1, $2, $3, $4, $5, NOW(), $6, NOW())', [req.body.CurrencyId, req.body.CurrencyName, req.body.CurrencyAmount, 1, req.body.UserId, req.body.UserId])
                    .then(wallet => {

                        let response = {
                            success: "1",
                            message: "Successfully activate wallet.",
                        }
                        res.send(response);

                    })
                    .catch(e => {

                        let response = {
                            success: "0",
                            message: e.message,
                        }
                        res.send(response);
                    });
            }

        })
        .catch(e => {
            let response = {
                success: 0,
                message: e.message,
            }
            res.send(response);
        })

});

app.get("/api/transaction/GetCurrencyHistory/:UserId/:CurrencyId", function (req, res) {

    pool.query('SELECT * FROM transaction WHERE user_id = $1 and currency_id = $2 ', [req.params.UserId, req.params.CurrencyId])
        .then(data => {

            if (data.rows.length > 0) {

                let array = [];

                for (let index = 0; index < data.rows.length; index++) {
                    const element = data.rows[index];

                    let obj = {
                        "id": element.id,
                        "CurrencyId": element.currency_id,
                        "CurrencyName": element.currency_name,
                        "CurrencyAmount": element.currency_amount,
                        "Amount": element.amount,
                        "TransactionType": element.transaction_type,
                        "Token": element.token,
                        "IsPaid": element.ispaid,
                        "Created_On": element.created_on
                    };

                    array.push(obj);

                }

                let datas = {
                    success: "1",
                    message: "",
                    data: array
                }
                res.send(datas);

            }
            else {
                let datas = {
                    success: "0",
                    message: "No records found!",
                }
                res.send(datas);
            }

        })
        .catch(e => {
            let response = {
                success: 0,
                message: e.message,
            }
            res.send(response);
        })

});

app.post("/api/transaction/SendCurrency", function (req, res) {

    pool.query('INSERT INTO transaction(user_id, currency_id, currency_name, currency_amount, transaction_type, token, created_by, created_on, istoken_used) VALUES($1, $2, $3, $4, $5, $6, $7, NOW(), $8)', [req.body.UserId, req.body.CurrencyId, req.body.CurrencyName, req.body.CurrencyAmount, "Send", req.body.Token, req.body.UserId, 0])
        .then(transaction => {

            pool.query('SELECT * FROM wallet WHERE created_by = $1 and active = $2 and currency_id = $3', [req.body.UserId, 1, req.body.CurrencyId])
                .then(wallet => {

                    if (wallet.rows.length > 0) {

                        let amount = parseFloat(wallet.rows[0].currency_amount) - parseFloat(req.body.CurrencyAmount);

                        pool.query('UPDATE wallet SET currency_amount = $1, updated_by = $2, updated_on = NOW() WHERE created_by = $2 and active = $3 and currency_id = $4 ', [amount, req.body.UserId, 1, req.body.CurrencyId])
                            .then(wallet => {

                                let response = {
                                    success: "1",
                                    message: "Successfully done.",
                                }
                                res.send(response);

                            })
                            .catch(e => {

                                let response = {
                                    success: "0",
                                    message: e.message,
                                }
                                res.send(response);
                            });

                    }
                    else {
                        // pool.query('INSERT INTO wallet(currency_id, currency_name, currency_amount, active, created_by, created_on, updated_by, updated_on) VALUES($1, $2, $3, $4, $5, NOW(), $6, NOW())', [req.body.CurrencyId, req.body.CurrencyName, req.body.CurrencyAmount, 1, req.body.UserId, req.body.UserId])
                        //     .then(wallet => {

                        //         let response = {
                        //             success: "1",
                        //             message: "Successfully payment done.",
                        //         }
                        //         res.send(response);

                        //     })
                        //     .catch(e => {

                        let response = {
                            success: "0",
                            message: "else",
                        }
                        res.send(response);
                        //     });
                    }

                })
                .catch(e => {
                    let response = {
                        success: 0,
                        message: e.message,
                    }
                    res.send(response);
                })

        })
        .catch(e => {

            let response = {
                success: "0",
                message: e.message,
            }
            res.send(response);
        });

});

app.post("/api/transaction/SendTo", function (req, res) {

    if (req.body.UserId !== req.body.SendTo) {

        // pool.query('INSERT INTO transaction(user_id, currency_id, currency_name, currency_amount, transaction_type, created_by, created_on) VALUES($1, $2, $3, $4, $5, $6, NOW() )', [req.body.UserId, req.body.CurrencyId, req.body.CurrencyName, req.body.CurrencyAmount, "Send", req.body.UserId])
        //     .then(transaction => {

        pool.query('SELECT * FROM wallet WHERE created_by = $1 and active = $2 and currency_id = $3', [req.body.UserId, 1, req.body.CurrencyId])
            .then(wallet => {

                if (wallet.rows.length > 0) {

                    if (wallet.rows[0].currency_amount !== "0.00") {

                        pool.query('INSERT INTO transaction(user_id, currency_id, currency_name, currency_amount, transaction_type, created_by, created_on) VALUES($1, $2, $3, $4, $5, $6, NOW() )', [req.body.UserId, req.body.CurrencyId, req.body.CurrencyName, req.body.CurrencyAmount, "Send", req.body.UserId])
                            .then(transaction => {

                                let amount = parseFloat(wallet.rows[0].currency_amount) - parseFloat(req.body.CurrencyAmount);

                                pool.query('UPDATE wallet SET currency_amount = $1, updated_by = $2, updated_on = NOW() WHERE created_by = $2 and active = $3 and currency_id = $4 ', [amount, req.body.UserId, 1, req.body.CurrencyId])
                                    .then(walletupdate => {

                                        pool.query('INSERT INTO transaction(user_id, currency_id, currency_name, currency_amount, transaction_type, created_by, created_on) VALUES($1, $2, $3, $4, $5, $6, NOW() )', [req.body.SendTo, req.body.CurrencyId, req.body.CurrencyName, req.body.CurrencyAmount, "Receive", req.body.UserId])
                                            .then(transaction => {

                                                pool.query('SELECT * FROM wallet WHERE created_by = $1 and active = $2 and currency_id = $3', [req.body.SendTo, 1, req.body.CurrencyId])
                                                    .then(wallet => {

                                                        if (wallet.rows.length > 0) {

                                                            let amount = parseFloat(wallet.rows[0].currency_amount) + parseFloat(req.body.CurrencyAmount);

                                                            pool.query('UPDATE wallet SET currency_amount = $1, updated_by = $2, updated_on = NOW() WHERE created_by = $4 and active = $3 and currency_id = $4 ', [amount, req.body.UserId, 1, req.body.CurrencyId, req.body.SendTo])
                                                                .then(wallet => {

                                                                    let response = {
                                                                        success: "1",
                                                                        message: "Successfully done.",
                                                                    }
                                                                    res.send(response);

                                                                })
                                                                .catch(e => {

                                                                    let response = {
                                                                        success: "0",
                                                                        message: e.message,
                                                                    }
                                                                    res.send(response);
                                                                });

                                                        }
                                                        else {
                                                            pool.query('INSERT INTO wallet(currency_id, currency_name, currency_amount, active, created_by, created_on, updated_by, updated_on) VALUES($1, $2, $3, $4, $6, NOW(), $5, NOW())', [req.body.CurrencyId, req.body.CurrencyName, req.body.CurrencyAmount, 1, req.body.UserId, req.body.SendTo])
                                                                .then(wallet => {

                                                                    let response = {
                                                                        success: "1",
                                                                        message: "Successfully done.",
                                                                    }
                                                                    res.send(response);

                                                                })
                                                                .catch(e => {

                                                                    let response = {
                                                                        success: "0",
                                                                        message: e.message,
                                                                    }
                                                                    res.send(response);
                                                                });
                                                        }

                                                    })
                                                    .catch(e => {
                                                        let response = {
                                                            success: "0",
                                                            message: e.message,
                                                        }
                                                        res.send(response);
                                                    })

                                            })
                                            .catch(e => {

                                                let response = {
                                                    success: "0",
                                                    message: e.message,
                                                }
                                                res.send(response);
                                            });

                                    })
                                    .catch(e => {

                                        let response = {
                                            success: "0",
                                            message: e.message,
                                        }
                                        res.send(response);
                                    });

                            })
                            .catch(e => {

                                let response = {
                                    success: "0",
                                    message: e.message,
                                }
                                res.send(response);
                            });

                    }
                    else {
                        let response = {
                            success: "0",
                            message: "You are not able to sent currency",
                        }
                        res.send(response);
                    }

                }
                else {

                    let response = {
                        success: "0",
                        message: "You are not able to sent currency",
                    }
                    res.send(response);
                    //     });
                }

            })
            .catch(e => {
                let response = {
                    success: "0",
                    message: e.message,
                }
                res.send(response);
            })

        // })
        // .catch(e => {

        //     let response = {
        //         success: "0",
        //         message: e.message,
        //     }
        //     res.send(response);
        // });

    }
    else {
        let response = {
            success: "0",
            message: "You can't sent",
        }
        res.send(response);
    }

});

app.get("/api/user/GetAllUsers/:UserId", function (req, res) {

    pool.query('SELECT * FROM users WHERE verified = $1 ORDER BY id', [1])
        .then(data => {

            if (data.rows.length > 0) {

                let UserArray = [];

                for (let index = 0; index < data.rows.length; index++) {

                    let userObj = {
                        id: data.rows[index].id,
                        FirstName: data.rows[index].first_name,
                        LastName: data.rows[index].last_name,
                        Email: data.rows[index].email,
                        Mobile: data.rows[index].mobile,
                        ProfileImage: data.rows[index].profile_image
                    }

                    UserArray.push(userObj);

                }

                datas = {
                    success: "1",
                    message: "",
                    data: UserArray
                }
                res.send(datas);

            }
            else {
                datas = {
                    success: 0,
                    message: "No records found!",
                }
                res.send(datas);
            }

        })
        .catch(e => {
            let response = {
                success: 0,
                message: e.message,
            }
            res.send(response);
        })

});

app.get("/api/currency/GetCurrencyDetails/:CurrencyId", function (req, res) {

    pool.query('SELECT * FROM currency WHERE currency_id = $1 ORDER BY id', [req.params.CurrencyId])
        .then(data => {

            if (data.rows.length > 0) {

                datas = {
                    success: "1",
                    message: "",
                    data: data.rows[0]
                }
                res.send(datas);

            }
            else {
                datas = {
                    success: 0,
                    message: "No records found!",
                }
                res.send(datas);
            }

        })
        .catch(e => {
            let response = {
                success: 0,
                message: e.message,
            }
            res.send(response);
        })

});

function sendmail(mail, message) {

    var transporter = nodemailer.createTransport({
        host: 'mail.vidhaninfotech.com',
        port: 587,
        secure: false, // true for 465, false for other ports
        auth: {
            user: 'noreply@vidhaninfotech.com', // generated ethereal user
            pass: '47@mg7J5G4BcU'  // generated ethereal password
        },
        tls: {
            rejectUnauthorized: false
        }
    });

    // var transporter = nodemailer.createTransport(mandrillTransport({
    //     auth: {
    //       apiKey : 'cZ4cj4r0pAuLFa3V3MuR-Q'
    //     }
    // }));

    var mailOptions = {
        from: 'noreply@vidhaninfotech.com',
        to: mail,
        subject: 'Easy Wallet',
        text: `Your otp to validate Easy Wallet is ${message}. `
    };

    transporter.sendMail(mailOptions, function (error, info) {
        if (error) {
            console.log("error == ", error);
        } else {
            console.log('Email sent: ' + info.response);
        }
    });

}

function send_Password_mail(mail, message) {

    var transporter = nodemailer.createTransport({
        host: 'mail.vidhaninfotech.com',
        port: 587,
        secure: false, // true for 465, false for other ports
        auth: {
            user: 'noreply@vidhaninfotech.com', // generated ethereal user
            pass: '47@mg7J5G4BcU'  // generated ethereal password
        },
        tls: {
            rejectUnauthorized: false
        }
    });


    // var transporter = nodemailer.createTransport(mandrillTransport({
    //     auth: {
    //       apiKey : 'j1_ib1-0RBmJjcHYPw0Igg'
    //     }
    // }));

    var mailOptions = {
        from: 'noreply@vidhaninfotech.com',
        to: mail,
        subject: 'Easy Wallet',
        text: `Your Easy Wallet new password is ${message} `
    };

    transporter.sendMail(mailOptions, function (error, info) {
        if (error) {
            console.log("error == ", error);
        } else {
            console.log('Email sent: ' + JSON.stringify(info));
        }
    });

}


