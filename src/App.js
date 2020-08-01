import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Person from './Person/Person';
class App extends Component {
  render(){
  return (
    <div className="App">
      <h1>I am a robot</h1>
      <Person name="Herve" age="29" />
      <Person name="Fidele" age="30"/>
      <Person name="Ngenzi" age="40"/>
    </div>
    
  );
    // return React.createElement('div', { className: 'App'}, React.createElement('h1', null, 'I am a robot'));
  }
}

export default App;
