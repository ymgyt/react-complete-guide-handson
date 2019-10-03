import React from 'react';
import classes from './Cocpit.css';

const cocpit = (props) => {
    console.log(classes);
    const assignedClasses = [];
    let btnClass = '';
    if (props.showPersons) {
        btnClass = classes.Red;
    }

    if (props.persons.length <= 2) {
        assignedClasses.push(classes.red);
    }
    if (props.persons.length <= 1) {
        assignedClasses.push(classes.bold);
    }
    return (
        <div className={classes.Cocpit}>
            <h1>Hi, I'm a React App</h1>
            <p className={assignedClasses.join(' ')}>Dynamic CSS Class !!!! </p>
            <button onClick={props.clicked} className={btnClass} >Toggle Persons</button>
        </div>
    );
};

export default cocpit;