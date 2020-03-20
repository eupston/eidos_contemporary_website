import React, { Component } from "react";
import { Route, Switch } from "react-router-dom";
import "./App.css";

import Home from './Components/Home/Home';
import Navbar from "./Components/Navbar/Navbar";
import Login from "./Components/Auth/Login/Login";
import Signup from "./Components/Auth/Signup/Signup";
import Vendors from "./Containers/Vendors/Vendors";
import Footer from "./Components/Footer/Footer";


class App extends Component {
  state = { users: [] };

  render() {
    return (
      <div className='App'>
        <Navbar />
        <Switch>
          <Route path='/jewelry' render={() => <Vendors />} />
          <Route path='/login' render={() => <Login />} />
          <Route path='/signup' render={() => <Signup />} />
          <Route path='/' exact render={() => <Home/>} />
        </Switch>
        <Footer />
      </div>
    );
  }
}

export default App;
