import React from 'react'
import ReactDOM from 'react-dom/client'
import {BrowserRouter} from 'react-router-dom'
import ExtRouter from './Router/Router'


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BrowserRouter>
      <ExtRouter/>
    </BrowserRouter>
  </React.StrictMode>
)
