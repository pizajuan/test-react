import React, { Component } from 'react';

// props: se le pasa al componente, no puede ser cambiado por el children
// state: manejado en el componente, puede ser cambiado, useState hook in functional components y this.state en class components

class Message extends Component {

    constructor() {
        super();
        this.state = {
            message : 'Welcome Visitor'
        }
    }

    changeMessage() {
        this.setState({
            message : 'Thanks'
        })
    }

    render() {
        return(
            <div>
                <h1>{this.state.message}</h1>
                <button onClick={() => this.changeMessage()}>Subscribe</button>
            </div>
        ) 
    }
}

export default Message;