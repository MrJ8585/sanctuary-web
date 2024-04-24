import { HashRouter, Routes, Route } from 'react-router-dom'
import Landing  from './pages/Landing'
import About from './pages/About'
import Blog from './pages/Blog'
import Contact from './pages/Contacto'
import Novelas from './pages/Novelas'
import Proyectos from './pages/Proyectos'
import Esports from './pages/Esports'

function App() {

  return (
    <HashRouter>
      <Routes>
        <Route path="/" element={<Landing />} />
        <Route path="/about" element={<About />} />
        <Route path="/blog" element={<Blog />} />
        <Route path="/contacto" element={<Contact />} />
        <Route path="/novelas" element={<Novelas />} />
        <Route path="/proyectos" element={<Proyectos />} />
        <Route path="/esports" element={<Esports />} />
      </Routes>
    </HashRouter>
  )
}

export default App
