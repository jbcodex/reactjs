
import './App.css'
import { BrowserRouter, Routes, Route } from "react-router-dom";
//Pages
import Home from './pages/Home'
import About from './pages/About'
import SignIn from './pages/SignIn'
import Panel from './pages/Panel'
import Product from './pages/Product';
import Info from './pages/Info';
import  NotFound  from './pages/NotFound';

//Components
import NavBar from './components/NavBar';


function App() {
  return (
    <>
     <BrowserRouter>
     <NavBar/>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/panel" element={<Panel />} />
        <Route path="/products/:id" element={<Product />} />
        <Route path="/products/:id/info" element={<Info />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
     </BrowserRouter>
    </>
  )
}

export default App
