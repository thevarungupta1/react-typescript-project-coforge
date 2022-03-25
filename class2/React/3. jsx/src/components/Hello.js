import React from 'react';

// With JSX
// const Hello = () => {
//     return(
//         <div>
//             <h1 className='text-danger'>Welcome User</h1>
//         </div>
//     )

// }

//Without JSX
const Hello = () => {
    return (
        React.createElement(
            'div',
            { class: 'text-danger', id: 'myText' },
           React.createElement(
               'h1',
               null,
               'Welcome User'
           )
        )
    )
}



export default Hello;