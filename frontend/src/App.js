import React, { Component } from "react";
import {Redirect, Route, Switch} from "react-router-dom";
import "./App.css";
import * as authActions from "./Store/Actions";
import {connect} from "react-redux";

import Home from './Components/Home/Home';
import Navbar from "./Components/Navbar/Navbar";
import Login from "./Components/Auth/Login/Login";
import Signup from "./Components/Auth/Signup/Signup";
import Vendors from "./Containers/Vendors/Vendors";
import Footer from "./Components/Footer/Footer";
import Contact from "./Components/Contact/Contact";
import OurStory from "./Components/OurStory/OurStory";
import Account from "./Components/Auth/Account/Account";
import Logout from "./Components/Auth/Logout/Logout";
import EthicalTrading from "./Components/EthicalTrading/EthicalTrading";
import ResetPassword from "./Components/Auth/ResetPassword/ResetPassword";

class App extends Component {
  state = {};

   componentWillMount() {
      this.props.onGetVendorInformation();
  }

    render() {
    return (
      <div className='App' >
        <Navbar />
            <Switch>
              <Route path='/ethical-trading' render={() => <EthicalTrading />} />
              <Route path='/jewelry' render={() => <Vendors />} />
              <Route path='/our-story' render={() => <OurStory />} />
              <Route path='/login' render={() => <Login redirect={true} />} />
              <Route path='/reset-password' render={() => <ResetPassword/>} />
              <Route path='/logout' render={() => <Logout/>} />
              <Route path='/signup' render={() => <Signup redirect={true} />} />
              <Route path='/account' render={() => <Account/>}/>
              <Route path='/contact' render={() => <Contact/>}/>
              <Route path='/' exact render={() => <Home/>} />
              <Redirect from="/*" to={"/"}/>
            </Switch>
        <Footer />
      </div>
    );
  }
}


const mapDispatchToProps = dispatch => {
    return {
        onGetVendorInformation: () => dispatch(authActions.getVendorInformation()),
    }
};

export default connect(null,mapDispatchToProps)(App);
