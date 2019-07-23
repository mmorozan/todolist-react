import React, { Component } from 'react';
import './App.css';
import Header from './components/Header';
import Body from './components/Body';
import 'bootstrap/dist/css/bootstrap.css';

class App extends Component {
  state = {
    count: 0
  }

  setCount = (count) => {
    this.setState({count: count});
  }

  render() {
    
    return(
      <div className="App">
        <Header countList={this.state.count} />
        <Body setCount={this.setCount} />
      </div>
    );
  }
}

export default App;
