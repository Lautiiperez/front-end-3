import React from 'react'
import ReactDOM from 'react-dom/client'
import Header from './Header.jsx'
import Footer from './Footer.jsx'
import Producto from './Producto.jsx'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Header/>

    <Producto nombre="Buzo DH" precio="100"/>
    <Producto nombre="Pantalon DH" precio="200"/>
    <Producto nombre="Remera DH" precio="50"/>

    <Footer/>
  </React.StrictMode>,
)
