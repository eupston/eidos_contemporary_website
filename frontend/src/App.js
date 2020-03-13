import React, {Component} from 'react';
import './App.css';
import Products from './Components/Products/Products';

class App extends Component {

  state = {users: []};

  render() {
   return (
       <div className="App">
           <h1>Eidos Contemporary</h1>
           <Products productNumber={15}/>
        </div>
    );
  };
}

export default App;
