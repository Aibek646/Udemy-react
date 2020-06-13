import React from 'react';

const UserInput = (props) => {
   
    const style = {
        border: '2px solid red'
    }

    return (
        <div>
            <input type="text" 
            onChange={props.change} 
            value={props.value}
            style={style} />
        </div>
    );
}

export default UserInput;
