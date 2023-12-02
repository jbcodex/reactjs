import './App.css'
import{BrowserRouter, Routes, Route, Link, Navigate} from "react-router-dom"

//Components
import NavBar from './components/NavBar'

//Pages
import Home from "./pages/Home"
import About from "./pages/About"
import NotFound from './pages/NotFound'
import Produtos from "./pages/Produtos"


function App() {

  return (
    <>
    <BrowserRouter>
    <NavBar/>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/produtos" element={<Produtos />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </BrowserRouter>
     
    </>
  )
}

export default App
