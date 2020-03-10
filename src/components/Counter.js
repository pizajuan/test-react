import React, { Component } from 'react'

class Counter extends Component {

    constructor() {
        super();
        this.state = {
            count : 0
        }
    }

    async increment() {
        await this.setState({
            count : this.state.count + 1
        });
        console.log(this.state.count);
    }

    render() {
        return (
            <div>
                <div>Count - {this.state.count}</div>
                <button onClick={async () => this.increment()}>Increment</button>
            </div>
        )
    }
}

export default Counter
