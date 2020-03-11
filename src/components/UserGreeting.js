import React, { Component } from 'react'

class UserGreeting extends Component {

    constructor(props) {
        super(props)
    
        this.state = {
             isLoggedIn: true
        }
    }
    
    render() {

        // Example #1
        // let message
        // if(this.state.isLoggedIn) {
        //     message = <div>Welcome Juan</div>
        // } else {
        //     message = <div>Welcome Guest</div>
        // }

        // return(
        //     <div>{message}</div>
        // )

        // Example #2
        // return(
        //     this.state.isLoggedIn ? <div>Welcome Juan</div> : <div>Welcome Guest</div>
        // )

        // Example #3
        return this.state.isLoggedIn ? (
            <div>Welcome Juan</div>
        ) : (
            <div>Welcome Guest</div>
        )

    }
}

export default UserGreeting
