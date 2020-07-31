import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component {
  render(){
  return (
    <div className="App">
      <h1>I am a robot</h1>
    </div>
  );
    // return React.createElement('div', { className: 'App'}, React.createElement('h1', null, 'I am a robot'));
  }
}

export default App;
