import React, {Component} from 'react';
import './App.css';
import Products from './Components/Products/Products';
import Navbar from './Components/Navbar/Navbar';

class App extends Component {

  state = {users: []};

  render() {
   return (
       <div className="App">
           <Navbar/>
           <Products productNumber={15}/>
        </div>
    );
  };
}

export default App;
