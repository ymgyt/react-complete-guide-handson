import React from 'react';

const userInput = props => {
    const style = {
        border: '2px solid red'
    }
    return (
        <div className="userInput">
            <input style={style} type="text" onChange={props.onChange} value={props.userInput}></input>
        </div>
    )
}

export default userInput