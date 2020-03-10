import React, { Component } from 'react';

// props: se le pasa al componente, no puede ser cambiado por el children
// state: manejado en el componente, puede ser cambiado, useState hook in functional components y this.state en class components

class Welcome extends Component {

    render() {
    return <h1>Welcome Class Component {this.props.name} aka {this.props.heroName}</h1>
    }
}

export default Welcome;