import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import axios from 'axios';

class App extends Component {

  handleClick() {
    axios.get('/api/users?name=Chris')
      .then(res => {
        console.log(res);
      })
  }

  getNum() {
    axios.get('/api/add')
    .then(function(res) {
      console.log(res.data)
    })
  }

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to React</h1>
        </header>
        <p className="App-intro">
          To get started, edit <code>src/App.js</code> and save to reload.
        </p>
        <button onClick={this.handleClick}>Click me</button>
      </div>
    );
  }
}

export default App;
