import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import UseContext from './HooksComponents/UseContext'
import './index.css'

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <UseContext>
      <App />
    </UseContext>
  </React.StrictMode>
)
