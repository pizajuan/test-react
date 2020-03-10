import React from 'react';

// function Greet(props) {
//     console.log(props)
//     return (
//             <div>
//                 <h1>
//                     Hello {props.name} a.k.a {props.heroName}
//                 </h1>
//                 {props.children}
//             </div>
//     )
// }

//DESTRUCTURED
function Greet({name, heroName}) {
    return (
            <div>
                <h1>
                    Hello {name} a.k.a {heroName}
                </h1>
                {/* {props.children} */}
            </div>
    )
}


export default Greet;