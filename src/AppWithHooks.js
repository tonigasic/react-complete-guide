import React, { useState } from 'react';
import './containers/App.css';
import Person from './components/Persons/Person/Person';

const appHooks = props => {

    const [ personsState, setPersonsState ] = useState({
        persons: [
            { name: 'Toni', age:28},
            { name: 'Pero', age:33},
            { name: 'Filp', age:44}
        ]
    });
    const switchNameHandler = () => {
        setPersonsState({
            persons: [
                { name: 'Toni1', age:281},
                { name: 'Pero2', age:332},
                { name: 'Filp3', age:443}
            ]
        });

        //WRONG///////this.state.persons[1].name = 'kurcina';
    };

    return (
        <div className="AppHooks">
            <h1>React file</h1>
            <button onClick={switchNameHandler}>Switch name</button>
            <Person
                name={personsState.persons[0].name}
                age={personsState.persons[0].age}
            />
            <Person
                name={personsState.persons[1].name}
                age={personsState.persons[1].age}
            >
                <p>My my my</p>
            </Person>
            <Person
                name={personsState.persons[2].name}
                age={personsState.persons[2].age}
            />
        </div>
    );
};

export default appHooks;