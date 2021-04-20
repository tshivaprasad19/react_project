import React from 'react'
import Person from './Person'

function NameList() {
    const names = ['Aa','Bb','Cc','Dd']
    const persons = [
        {
            id : 1,
            name : 'aA',
            age : 30,
            skills : 'React'
        },
        {
            id : 2,
            name : 'bB',
            age : 25,
            skills : 'Angular'
        },
        {
            id : 3,
            name : 'cC',
            age : 27,
            skills : 'Java'
        }
    ]
    // const personList = persons.map(person => <Person key={person.id} person={person}></Person>)
    const nameList = names.map(name =><h2 key={name}>{name}</h2>)
    return (<div>{nameList}</div>)
}

export default NameList
