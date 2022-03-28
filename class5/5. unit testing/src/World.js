import React, { useState } from 'react';

const World = () => {
    const [changedText, setChangedText] = useState(false)
   
    const onChangeTextHandler = () => {
        setChangedText(true)
    }

    return(
        <div>
            <h2>Hello World</h2>
            { !changedText && <p>Some Paragraph</p> }
            { changedText && <p>Changed</p> }
            <button onClick={ onChangeTextHandler } >Changed Text</button>
        </div>
    )
   
    
}
export default World;