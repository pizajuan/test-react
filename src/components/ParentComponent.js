import React, { Component } from 'react'
import ChildComponent from './ChildComponent'

class ParentComponent extends Component {

    constructor(props) {
        super(props)
    
        this.state = {
             parentName: 'Parent'
        }

        this.greetParent = this.greetParent.bind(this)
        this.greetParentWithVar = this.greetParentWithVar.bind(this)
    }

    greetParent() {
        alert('Hello '+ this.state.parentName)
    }

    greetParentWithVar(childName) {
        alert('Hello from '+ childName)
    }
    
    render() {
        return (
            <div>
                <ChildComponent greetHandler={this.greetParent} greetHandlerVar={this.greetParentWithVar}/>
            </div>
        )
    }
}

export default ParentComponent
