import React, { Component } from 'react'

class ChildComponent extends Component {
    render() {
        return (
            <div>
                {/* esto llama una funcion del padre desde el hijo */}
                <button onClick={this.props.greetHandler}>Greet Parent</button>
                {/* esto enviara una variable desde el hijo al padre */}
                <button onClick={() => this.props.greetHandlerVar('child')}>Greet Parent Passing</button>
            </div>
        )
    }
}

export default ChildComponent
