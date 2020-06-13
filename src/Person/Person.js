import React from 'react';
import './Person.css';
import styled from 'styled-components'


const StyledDiv = styled.div`
    width: 60%;
    margin: 16px auto;
    border: 1px solid #eee;
    box-shadow: 0 2px 3px #ccc ;
    padding: 16px;
    text-align: center;

    @media (min-width: 500px) {
        width: 450px;
}`;

const Person = (props) => {
  
    return ( <div>
            <p onClick={props.click} >i am {props.name} person {props.age}</p>
            <p>{props.children}</p>
            <input type="text" onChange={props.changed} value={props.name}/>
    </div>
    );
}

export default Person;
