import React from 'react'
import ReactDOM from 'react-dom/client'
import Padre from './Padre.jsx'
import Hijo from './Hijo.jsx'
import './index.css'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Padre/>
    <Padre/>
  </React.StrictMode>,
)
