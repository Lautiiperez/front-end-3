import { useState } from 'react'
import './App.css'
import Hijo from './Hijo.jsx'

function App() {
  const [lista, setLista] = useState([]);


  return (
    <>
    <div>
    <h1>Produtos</h1>

<ul>
{lista.map((item, index) => (
   <li key={index}>
    <h2>El item {item} ah sido añadido a la lista</h2>
   </li>
))}
  </ul>

    </div>
    
      <div className="card">
      <Hijo lista={lista} setLista={setLista}/>
      </div>
      
    </>
  )
}

export default App
