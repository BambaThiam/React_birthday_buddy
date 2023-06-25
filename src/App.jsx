import { useState } from 'react'
import data from './data'

// const removeList = () => {
//   const
// }

const App = () => {
  const [person, setPerson] = useState(data)
  return (
    <section className="container">
      {/* Rendu de la liste */}
      <div>
        <h3 className="title">Today annivesaires</h3>
        <h4>Nous avons {person.length} anniversaires dans la liste</h4>
        {person.map((pers) => {
          return (
            <div key={pers.id} className="person">
              <h3>{pers.name}</h3>
              <span>{pers.age} years</span>
              <img src={pers.image} alt={pers.name} />
            </div>
          )
        })}
      </div>
      {/* Clear list */}
      <button className="btn" onClick={() => setPerson()}>
        Clear All
      </button>
    </section>
  )
}
export default App
