import React, { Component } from 'react';
import './App.css';
import Person from './components/Persons/Person/Person'

class App extends Component {
    state = {
        persons: [
            { id: 'hgdf33', name: 'Max', age: 26 },
            { id: 'hdfj2', name: 'Manu', age: 29 },
            { id: 'hdgfhg2', name: 'Justin', age: 24 }
        ],
        otherState: 'some other state',
        showPersons: false,

    }


    nameChangedHandler = (event, id) => {
        const personIndex = this.state.persons.findIndex(p => {
            return p.id === id
        })

        const person = {
            ...this.state.persons[personIndex]
        }

        person.name = event.target.value;

        const persons = [...this.state.persons];
        persons[personIndex] = person;


        this.setState(
            { persons: persons }
        )
    }

    deletePersonHandler = (personIndex) => {
        const persons = [...this.state.persons];
        persons.splice(personIndex, 1);
        this.setState({ persons: persons })
    }



    togglePersonsHandler = () => {
        const doesShow = this.state.showPersons;
        this.setState({ showPersons: !doesShow })
    }





    render() {

        const style = {
            backgroundColor: 'white',
            font: 'inherit',
            border: '1px solid blue',
            padding: '8px',
            cursor: 'pointer'
        }

        let persons = null;

        if (this.state.showPersons) {
            persons = (
                <div>
                    {this.state.persons.map((person, index) => {
                        return <Person
                            click={() => this.deletePersonHandler(index)}
                            name={person.name}
                            age={person.age}
                            key={person.id}
                            changed={(event) => this.nameChangedHandler(event, person.id)} />
                    })}
                </div>
            )
        }


        return (
            <div className="App">
                <h1>Test</h1>

                <button
                    style={style}
                    onClick={this.togglePersonsHandler}>Switch Name</button>
                {persons}

            </div>
        );
    }
}

export default App;
