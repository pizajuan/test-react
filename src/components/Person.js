import React, { Component } from 'react'
import './Person.css'

class Person extends Component {
    render() {
        const person = this.props.person;
        const className = this.props.primary ? 'primary' : ''
        return (
            <h2 className={className}>I am {person.name}, I am {person.age} years old.</h2>
        )
    }
}

export default Person
