import React from 'react';

const Student = (props) => {
    const {id, name, email} = props
    return(
        <div>
            {/* <h1>
                Id: { props.id }, Name: { props.name }, Email: { props.email }
            </h1> */}
            <h1>
                Id: { id }, Name: { name }, Email: { email }
            </h1>
        </div>
    )
}
export default Student;