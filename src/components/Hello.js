import React from 'react';

const Hello = () => {
    // return(
    //     <div>
    //         <h1>Hello Juan jsx</h1>
    //     </div>
    // )

    return React.createElement('div', 
                                {id: 'hello', className: 'hello-class'}, 
                                React.createElement('h1', null, 'Hello Juan'));
}

export default Hello;