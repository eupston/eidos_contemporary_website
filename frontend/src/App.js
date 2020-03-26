import React, { Component } from "react";
import { Route, Switch } from "react-router-dom";
import "./App.css";

import Home from './Components/Home/Home';
import Navbar from "./Components/Navbar/Navbar";
import Login from "./Components/Auth/Login/Login";
import Signup from "./Components/Auth/Signup/Signup";
import Vendors from "./Containers/Vendors/Vendors";
import Footer from "./Components/Footer/Footer";
import Contact from "./Components/Contact/Contact";
import OurStory from "./Components/OurStory/OurStory";


class App extends Component {
  state = { users: [] };

  render() {
    return (
      <div className='App' >
        <Navbar />
            <Switch>
              <Route path='/jewelry' render={() => <Vendors />} />
              <Route path='/our-story' render={() => <OurStory />} />
              <Route path='/login' render={() => <Login redirect={true} />} />
              <Route path='/signup' render={() => <Signup redirect={true} />} />
              <Route path='/contact' render={() => <Contact/>}/>
              <Route path='/' exact render={() => <Home/>} />
            </Switch>
        <Footer />
      </div>
    );
  }
}

export default App;
