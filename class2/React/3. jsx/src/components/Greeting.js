import React from 'react';

const Greeting = () => {
    // let content = <h1>Hello World</h1>
    // return content;

    let user = 'Mark'
    if(user){
        return <h1>Hello { user }, { 10+20 }</h1>
    }else{
        return <h1>Hello Guest</h1>
    }

}
export default Greeting;