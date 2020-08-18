import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Person from './Person/Person';
class App extends Component {
  state = {
    persons : [
      {id: '1', name: 'Herve', age: '29'},
      {id: '2', name: 'Fidele', age: '30'},
      {id: '3', name: 'Ngenzi', age: '40'}
    ],
    otherStaff: 'other persons',
    showsPersons: false
  }

  switchNameRenderer = (event, id) => {
    const personIndex = this.state.persons.findIndex(p => {
      return p.id === id

    })

    const person = {
      ...this.state.persons[personIndex]
    };

    person.name = event.target.value;

    const persons = [...this.state.persons];
    persons[personIndex] = person;

    this.setState({persons: persons});

  }

  deletePersonHandler = (personIndex) => {
      // const persons = this.state.persons.slice();
      const persons = [...this.state.persons];
      persons.splice(personIndex, 1);
      this.setState({persons: persons});
  }

  toggleNameHandler = () => {
    const doesShow = this.state.showsPersons;
    this.setState({showsPersons: !doesShow});
  }

  render(){
    const style = {
      backgroundColor: 'green',
      font: 'inherit',
      color: 'white',
      border: '1px solid blue',
      padding: '8px',
      cursor: 'pointer',
      ':hover': {
        backgroundColor: 'lightgreen',
        color: 'black'
      }
    }

    let persons = null;
    if(this.state.showsPersons){
      persons = (
        <div>
          {this.state.persons.map((person, index) => {
            return <Person 
                click={() => this.deletePersonHandler(index)}
                name={person.name} 
                age={person.age}
                key={person.id}
                changed={(event) => this.switchNameRenderer(event, person.id)}/>
          })
          }
        </div>
      );
      style.backgroundColor = 'red';
      style[':hover']= {
        backgroundColor: 'lightred',
        color: 'black'
      };
    }

    let classes = [];
    if(this.state.persons.length <= 2){
      classes.push('red'); // classes = ['red']
    }
    if(this.state.persons.length <= 1){
      classes.push('bold'); // classes = ['red', 'bold']
    }

  return (
    <div className="App">
      <h1>I am a robot</h1>
      <p className={classes.join(' ')}>This is really working!!!</p>
      <button 
        style={style}
        onClick={this.toggleNameHandler}
        >
          Switch button
      </button> 
     {persons}
    </div>
    
  );
    // return React.createElement('div', { className: 'App'}, React.createElement('h1', null, 'I am a robot'));
  }
}

export default App;
