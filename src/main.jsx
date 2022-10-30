import React from 'react'
import ReactDOM from 'react-dom/client'
import {BrowserRouter} from 'react-router-dom'
import UserProvider from './components/Context/UserProvider'
import ExtRouter from './Router/Router'


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <UserProvider>

    <BrowserRouter>
      <ExtRouter/>
    </BrowserRouter>
    </UserProvider>
  </React.StrictMode>
)
