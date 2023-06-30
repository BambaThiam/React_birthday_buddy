import { useState } from 'react'
import data from './data'
import List from './List'

// const removeList = () => {
//   const
// }

const App = () => {
  const [personne, setPersonne] = useState(data)
  return (
    <main>
      <section className="container">
        <h3>{personne.length} birthdays today</h3>
        {/* Rendu de la liste */}
        <List person={personne} />
        {/* Clear list */}
        <button
          type="button"
          className="btn btn-block"
          onClick={() => setPersonne([])}
        >
          Clear All
        </button>
      </section>
    </main>
  )
}
export default App
