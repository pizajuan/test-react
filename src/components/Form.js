import React, { Component } from 'react'

class Form extends Component {

    constructor(props) {
        super(props)
    
        this.state = {
            username: ''
        }

        this.handlerUsernameChange = this.handlerUsernameChange.bind(this);
    }

    handlerUsernameChange(event){
        this.setState({
            username: event.target.value
        });
    }
    
    render() {
        return (
            <div>
                <label>Username: </label>
                <input type='text' value={this.state.username} onChange={this.handlerUsernameChange}/>
            </div>
        )
    }
}

export default Form
