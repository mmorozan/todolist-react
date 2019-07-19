import React, { Component } from 'react';
import './App.css';
import Header from './components/Header';
import Body from './components/Body';
import 'bootstrap/dist/css/bootstrap.css';

class App extends Component {
  render() {
    console.log(this.state);
    return(
      <div className="App">
        <Header />
        <Body />
      </div>
    );
  }
}

export default App;
