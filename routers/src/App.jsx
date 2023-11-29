
import './App.css'
import { BrowserRouter, Routes, Route } from "react-router-dom";
//Pages
import Home from './pages/Home'
import About from './pages/About'
import Panel from './pages/Panel'
import Product from './pages/Product';
import Info from './pages/Info';
import  NotFound  from './pages/NotFound';

import Search from './pages/Search';

//Components
import NavBar from './components/NavBar';
import SearchForm from './pages/SearchForm';


function App() {
  return (
    <>
     <BrowserRouter>
     <NavBar/>
    <SearchForm />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/panel" element={<Panel />} />
        <Route path="/products/:id" element={<Product />} />
        <Route path="/products/:id/info" element={<Info />} />
        <Route path="/search" element={<Search />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
     </BrowserRouter>
    </>
  )
}

export default App
