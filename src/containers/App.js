import React, { Component } from 'react';
import './App.css';
import Persons from "../components/Persons/Persons";
import Cockpit from "../components/Cockpit/Cockpit";

class App extends Component {
    constructor(props) {
        super(props);
        console.log('app.js constructor')
        this.state = {
            persons: [
                { id: 'df34fr1', name: 'Toni', age:28},
                { id: 'df34fr2', name: 'Pero', age:33},
                { id: 'df34fr3', name: 'Filp', age:44}
            ],
            showPersons: false
        };
    }

    render() {
        console.log('app.js render' );
        let persons = null;

        if (this.state.showPersons) {
            persons = (
                <Persons
                    persons={this.state.persons}
                    clicked={this.deletePersonHandler}
                    changed={this.nameChangedHandler}
                />
            );
        }

        return (
            <div className="App">
                <Cockpit
                    clicked={this.togglePersonsHandler}
                    appTitle={this.props.appTitle}
                />
                {persons}
            </div>
        );
    }

    togglePersonsHandler = () => {
        const doesShow = this.state.showPersons;
        this.setState({showPersons: !doesShow});
    };

    deletePersonHandler = (index) => {
        //TODO this is also a way to clone arrays const persons = this.state.persons.slice();
        const persons = [...this.state.persons];
        persons.splice(index, 1);
        this.setState({persons: persons});
    };

    nameChangedHandler = (event, id) => {
        const personIndex = this.state.persons.findIndex((person)=> { return person.id === id });
        const person = {
            ...this.state.persons[personIndex]
        };
        person.name = event.target.value;

        const persons = [...this.state.persons];
        persons[personIndex] = person;

        this.setState({
            persons: persons
        });
    };
    /*switchNameHandler = (newName) => {
        this.setState({
            persons: [
                { name: 'Toni1', age:281},
                { name: newName, age:332},
                { name: 'Filp3', age:443}
            ]
        });
        //WRONG///////this.state.persons[1].name = 'kurcina';
    };*/
}

export default App;