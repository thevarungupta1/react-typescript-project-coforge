import React from 'react';

const Employee = (props) => {
    const {id, name, email} = props.data;
    return(
        <div>
            <h1>{id}, {name}, {email}</h1>
        </div>
    )
}
export default Employee;