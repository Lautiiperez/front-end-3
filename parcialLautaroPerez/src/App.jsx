import { useState } from 'react'
import Card from "./Card";
import './App.css';
import Form from './Form';

function App() {
  const [pacientes, setPacientes] = useState([])
  const [error, setError] = useState("");


  const addPatient= (patient)=> {
    if(patient=="error"){
      setError("Por favor chequea que la información sea correcta")
    }else {
    setError("")
    setPacientes([...pacientes,patient]);}
    
  }
  

  function borrar() {
    setPacientes([]);
  }
  


  return (
    <div className="App">
      <h1>Carga de Medicamentos</h1>
      <Form onAddPatient={addPatient} />
      <h4>{error}</h4>
      <Card pacientes={pacientes}/>

      <button onClick={borrar}>Borrar lista</button>
    </div>
  );
}


export default App;