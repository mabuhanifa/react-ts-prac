import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import UseContext from './HooksComponents/UseContext'
import { UserContextProvider } from './HooksComponents/UserContext'
import './index.css'

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <UserContextProvider>
      <UseContext>
        <App />
      </UseContext>
    </UserContextProvider>
  </React.StrictMode>
)
