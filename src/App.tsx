import { useState } from 'react'
import { HashRouter, Routes, Route } from 'react-router-dom'
import './App.css'
import Landing  from './pages/Landing'

function App() {

  return (
    <HashRouter>
      <Routes>
        <Route path="/" element={<App />} />
        <Route path="/home" element={<Landing />} />
      </Routes>
    </HashRouter>
  )
}

export default App
