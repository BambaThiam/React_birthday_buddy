import React from 'react'
import Person from './Person'

function List({ person }) {
  return (
    <section>
      {person.map((pers) => {
        return <Person key={pers.id} {...pers} />
      })}
    </section>
  )
}

export default List
