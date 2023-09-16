import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Beer from './Beer';
import Contacto from './Contacto';
import Home from './Home';
import Layout from './Layout';

function App() {
  return (
    <div>
      <h1>Mas que solo bebidas, festejemos el encuentro.</h1> 
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Layout/>} >
            <Route index element={<Home/>} />
            <Route path="Beer" element={<Beer/>}>
              <Route path=":id" element={<Beer/>}/>
            </Route>
            <Route path="Contacto" element={<Contacto/>} />
          </Route>
        </Routes>
      </BrowserRouter>
    </div>
  )
}

export default App
