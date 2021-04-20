import React from 'react';

//Function Component example
// function Greet() {
//     return <h1>Hello Shiva.</h1>
// }

//This is the constant export
const Greet = (props) => {
        return(
            <div>
                <h1>Hello {props.name}!!!</h1>
                {props.children}
            </div>
        ) 
}
//This is is a default export
 export default Greet