
import './App.css'
import Event from './Event.jsx'
import Form from './Form.jsx'


function App() {
  
  return (
    <>
      <div className="App">
        
      <h2>Practicando Event y Form</h2>
      <Event/>
      <Event numero="1"/>
      <Event numero="2"/>
      <Form/>

      </div>
      
    </>
  )
}

export default App
