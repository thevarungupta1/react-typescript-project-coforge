import React, { useState } from 'react';

const FunctionEvent = () => {
    const [name, setName] = useState('Mark')

    // function onClickHandler(){
    //     setName('Paul')
    // }

    const onClickHandler =() => {
        setName('Paul')
    }

    return(
        <div>
            <h1>{name}</h1>
            <button onClick={onClickHandler} >Update</button>
        </div>
    )
}
export default FunctionEvent;