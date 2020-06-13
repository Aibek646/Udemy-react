import React, { Component } from 'react';
import './App.css';
import Person from './Person/Person'



class App extends Component {
  state = {
    persons: [
      { id: 'hgdf33', name: 'Max', age: 26 },
      { id: 'hdfj2',  name: 'Manu', age: 29 },
      { id:'hdgfhg2', name: 'Justin', age: 24 }
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
       {persons: persons}
    )
  }

    deletePersonHandler = (personIndex) => {
        const persons = [...this.state.persons];
        persons.splice(personIndex, 1);
        this.setState({persons: persons})
    }
   


  togglePersonsHandler = () => {
     const doesShow = this.state.showPersons;
     this.setState({showPersons: !doesShow})
  }





  render() {

    const style = {
      backgroundColor: 'green',
      color: 'white',
      font: 'inherit',
      border: '1px solid blue',
      padding: '8px',
      cursor: 'pointer',
      ':hover': {
        backgroundColor: 'lightgreen',
        color: 'black'
      }
    }

    let persons = null;

    if( this.state.showPersons ) {
      persons = (
        <div>
          {this.state.persons.map( (person, index) => {
            return <Person
            click={ () => this.deletePersonHandler(index)}
            name={person.name} 
            age={person.age}
            key={person.id}
            changed={(event) => this.nameChangedHandler(event, person.id)}/>
          })}
        </div> 
      );

      style.backgroundColor = 'red';

      style[':hover'] = {
        backgroundColor: 'salmon',
          color: 'black'
      };
    }

    let classes = [];
    if(this.state.persons.length <= 2){
      classes.push('red');
    }
    if(this.state.persons.length <= 1){
      classes.push('bold');
    }

    return (
      <div className="App">
        <h1>Test</h1>
        <p className={classes.join(' ')}>This is really working</p>
        <button className="button" onClick={this.togglePersonsHandler}>
          Switch Name
        </button>
          {persons}
      </div>
    );
  }
}

export default App;
