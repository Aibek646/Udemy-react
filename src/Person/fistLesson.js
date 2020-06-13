import React, { Component } from 'react';
import './App.css';
import Person from './Person/Person'

class App extends Component {
    state = {
        persons: [
            { name: 'Max', age: 26 },
            { name: 'Manu', age: 29 },
            { name: 'Justin', age: 24 }
        ],
        otherState: 'some other state',
        showPersons: false,

    }


    switchNameHandles = (newName) => {
        this.setState({
            persons: [
                { name: newName, age: 26 },
                { name: 'Manu', age: 29 },
                { name: 'Justin', age: 21 }
            ]
        })
    }

    nameChangedHandler = (event) => {
        this.setState({
            persons: [
                { name: 'Max', age: 26 },
                { name: event.target.value, age: 29 },
                { name: 'Justin', age: 21 }
            ]
        })
    }

    togglePersonsHandler = () => {

    }





    render() {

        const style = {
            backgroundColor: 'white',
            font: 'inherit',
            border: '1px solid blue',
            padding: '8px',
            cursor: 'pointer'
        }


        return (
            <div className="App">
                <h1>Test</h1>

                <button
                    style={style}
                    onClick={this.togglePersonsHandler}>Switch Name</button>

                { 
                  this.state.showPersons ? 
                    <div>
                    <Person
                        name={this.state.persons[0].name}
                        age={this.state.persons[0].age} />

                    <Person
                        name={this.state.persons[1].name}
                        age={this.state.persons[1].age}
                        click={this.switchNameHandles.bind(this, 'Murka')}
                        changed={this.nameChangedHandler}
                    >My Hobbies: Racing</Person>

                    <Person
                        name={this.state.persons[2].name}
                        age={this.state.persons[2].age} />
                </div> : null

                }
                  
          
            </div>
        );
    }
}

export default App;
