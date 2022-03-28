import React from 'react';
import { useSelector } from 'react-redux';

const Hello = () => {   
    const counter = useSelector(state=> state.counter)

    return(
        <h1>Counter: { counter }</h1>
    )
}
export default Hello;