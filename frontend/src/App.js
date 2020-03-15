import React, {Component} from 'react';
import {Route, Switch} from 'react-router-dom';
import './App.css';

import Products from './Components/Products/Products';
import Navbar from './Components/Navbar/Navbar';
import Login from './Pages/Auth/Login/Login';
import Signup from "./Pages/Auth/Signup/Signup";
import Vendors from "./Container/Vendors/Vendors";

class App extends Component {

  state = {users: []};

  render() {
   return (
       <div className="App">
           <Navbar/>
           <Vendors/>
           <Switch>
               {/*<Route path="/jewelry" render={() => <Products productNumber={10} queryFilterParam={""}/>} />*/}
               <Route path="/login" render={() => <Login/>} />
               <Route path="/signup" render={() => <Signup/>} />
               <Route path="/" exact />
           </Switch>
        </div>
    );
  };
}

export default App;
