import React, { useState } from 'react';

const FormFunction = () => {
    const [name, setName] = useState('Mark')

    const onChangeHandler = (event) => {
        setName(event.target.value)
    }

    const onSubmitHandler = (event) => {
        event.preventDefault()
        console.log(name)
    }

    return(
        <div>
            <h1>{ name }</h1>
            <form onSubmit={onSubmitHandler}>
                <div className='form-group'>
                    <label>Name</label>
                    <input type="text" value={name} className="form-control" onChange={ onChangeHandler } />
                </div>
                <input type="submit" className='btn btn-primary' value="submit" />
            </form>
        </div>
    )
}
export default FormFunction;
