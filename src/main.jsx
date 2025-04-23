
import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { Toaster } from "./components/ui/toaster"

// Create root instance before rendering
const root = ReactDOM.createRoot(document.getElementById('root'))

// Make sure we're using React.StrictMode properly
root.render(
  <React.StrictMode>
    <App />
    <Toaster />
  </React.StrictMode>
)
