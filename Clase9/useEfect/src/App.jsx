import { useState, useEffect } from 'react'
import './App.css'

function App() {
  const [contador, setContador] = useState(0)
  const [forzador, setForzador] = useState(false)

  //Se ejecuta solo la primera vez
  useEffect(()=>{console.log("El componenete se ha montado") 
  alert("Bienvenido a la aplicacion Inutil")}, []);


//Se ejecuta cada vez que se actualiza el componenete
  useEffect(()=>{console.log("El componente se Actualiza")})


//Se ejecuta cuando se actualiza el estado "contador"
  useEffect(()=>{console.log("El estado contador se a actualizado a" +contador);},[contador])

  function forzadorHandler() {
    setForzador(!forzador)
    
  }

  return (
    <>
      <div classeName="App">
      <h1>Ejemplo de useEffect</h1>
      <p>contador: {contador}</p>
      <button onClick={()=>setContador(contador+1)}>Incrementar Contador</button>

      <button onClick={()=>setForzador(forzadorHandler)}>Forzar Render</button>

      </div>
    </>
  )
}

export default App
