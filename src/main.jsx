import React from 'react'
import ReactDOM from 'react-dom/client'
import * as bootstrap from 'bootstrap'
import './index.css'
import GestionarTareas from './components/GestionarTareas'


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <div className='container mt-3'>
      <GestionarTareas />
    </div>
  </React.StrictMode>,
)
