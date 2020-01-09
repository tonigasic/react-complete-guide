import React, { Component } from 'react';
import './App.css';
import Person from './Person/Person';

class App extends Component {

  state = {
      persons: [
          {
              name: 'Toni',
              age:28
          },
          {
              name: 'Pero',
              age:33
          },
          {
              name: 'Filp',
              age:44
          }
      ]
  };

  render() {
    return (
      <div className="App">
          <h1>React file</h1>
          <button onClick={this.switchNameHandler}>Switch name</button>
          <Person name={this.state.persons[0].name} age={this.state.persons[0].age}/>
          <Person name={this.state.persons[1].name} age={this.state.persons[1].age}>
              <p>My my my</p>
          </Person>
          <Person name={this.state.persons[2].name} age={this.state.persons[2].age}/>
      </div>
    );
  }

  switchNameHandler = () => {
      console.log('ulalala')
  }
}

export default App;
