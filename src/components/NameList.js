import React, { Component } from 'react'
import Person from './Person';

class NameList extends Component {

    constructor(props) {
        super(props)

        const persons = [
            {
                id: 1,
                name: 'Bruce',
                age: 30,
                skill: 'React'
            },
            {
                id: 2,
                name: 'Clark',
                age: 25,
                skill: 'Angular'
            },
            {
                id: 3,
                name: 'Diana',
                age: 28,
                skill: 'React'
            }
        ];
    
        this.state = {
            persons: persons
        }

    }
    
    render() {
        // Sin Filtro
        // const personList = this.state.persons.map(person => 
        //     <Person key={person.id} person={person}/>    
        // )
        // Con Filtro
        // const personList = this.state.persons
        //                     .filter(person => person.age >= 28)
        //                     .map(person => 
        //                         <Person key={person.id} person={person}/>)
        // Con Ordenamiento
        const personList = this.state.persons
                            .sort((p1, p2) => (p1.age > p2.age) ? 1 : -1)
                            .map(person => 
                                <Person key={person.id} person={person} primary={person.skill === 'Angular'}/>)                        
        return (
            <div>{personList}</div>
        )
    }
}

export default NameList
