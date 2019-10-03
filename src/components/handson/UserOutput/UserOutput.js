import React from 'react';

const userOutput = props => {
    const style = {
        width: "50%",
        backgroundColor: "#eee"

    }
    return (
        <div className="userOutput" style={style}>
            <p>{props.userInput}</p>
        </div>
    )
}

export default userOutput