import React from 'react';
// import logo from '../src/images/logo.png';
// import './App.css';
import Login from './screens/Login/Login';
import Signup from './screens/Signup/Signup';
import ForgotPassword from './screens/Forgot/ForgotPassword';
import Otp from './screens/Otp/Otp';
import Dashboard from './screens/Dashboard/Dashboard';
import Chartdetail from './screens/Dashboard/Chartdetail';
import Sidebar from './screens/Sidebar/Sidebar';
import Buybitcoin from './screens/Buybitcoin/Buybitcoin';
import Transaction from './screens/Transaction/Transaction';
import Wallet from './screens/Wallet/Wallet';
import Wallet1 from './screens/Wallet/Wallet1';
import Sendbtc from './screens/Wallet/Sendbtc';
import Calculate from './screens/Calculate/Calculate';
import Profile from './screens/Profile/Profile';
import Profileedit from './screens/Profile/Profileedit';
import profile from './screens/Profile/Profile';
import Welcome from './screens/Components/Welcome';
import { Route, BrowserRouter, Switch, Redirect, withRouter, HashRouter} from 'react-router-dom';

function App() {
       return (
        <HashRouter>
        <Switch>
        <Route exact path = "/Login" component = { Login }/>
        <Route exact path = "/Signup" component = { Signup }/>
        <Route exact path = "/ForgotPassword" component = { ForgotPassword }/>
        <Route exact path = "/Otp" component = { Otp }/>
        <Route exact path = "/Dashboard" component = { Dashboard }/>
        <Route exact path = "/Chartdetail" component = { Chartdetail }/>
        <Route exact path = "/Transaction" component = { Transaction }/>
        <Route exact path = "/Wallet" component = { Wallet }/>
        <Route exact path = "/Wallet1" component = { Wallet1 }/>
        <Route exact path = "/Sendbtc" component = { Sendbtc }/>
        <Route exact path = "/Calculate" component = { Calculate }/>
        <Route exact path = "/Buybitcoin" component = { Buybitcoin }/>
        <Route exact path = "/Profile" component = { Profile }/>
        <Route exact path = "/Profileedit" component = { Profileedit }/>
        <Route exact path = "/Welcome" component = { Welcome }/>
        <Route exact path = "/" ><Redirect to = "/Login" /></Route>
        </Switch>
        </HashRouter>
    );
}

export default App;