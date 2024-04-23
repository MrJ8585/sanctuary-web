import { HashRouter, Routes, Route } from 'react-router-dom'
import Landing  from './pages/Landing'

function App() {

  return (
    <HashRouter>
      <Routes>
        <Route path="/" element={<Landing />} />
      </Routes>
    </HashRouter>
  )
}

export default App
