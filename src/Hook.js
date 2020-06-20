import React, { useState } from 'react';
import './App.css';
import Person from './components/Persons/Person/Person'

const App = props => {

    const [personsState, personsStateMethod] = useState({
        persons: [
            { name: 'Max', age: 26 },
            { name: 'Manu', age: 29 },
            { name: 'Justin', age: 24 }
        ]
    });


    const switchNameHandles = () => {
        personsStateMethod({
            persons: [
                { name: 'Joker', age: 26 },
                { name: 'Manu', age: 29 },
                { name: 'Justin', age: 21 }
            ]
        })
    }




    return (
        <div className="App">
            <h1>Test</h1>
            <button onClick={switchNameHandles}>Switch Name</button>
            <Person name={personsState.persons[0].name} age={personsState.persons[0].age} />
            <Person name={personsState.persons[1].name} age={personsState.persons[1].age}>My Hobbies: Racing</Person>
            <Person name={personsState.persons[2].name} age={personsState.persons[2].age} />

        </div>
    );

};

export default App;

