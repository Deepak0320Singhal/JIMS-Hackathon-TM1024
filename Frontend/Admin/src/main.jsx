import React from 'react'
import ReactDOM from 'react-dom/client'
import Sidebar from './components/sidebar.jsx'
import './index.css'
import Navbar from './components/navbar.jsx'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Navbar/>
    <Sidebar />
  </React.StrictMode>,
)
