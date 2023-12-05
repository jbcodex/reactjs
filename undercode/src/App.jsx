import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";

//Pages
import Home from "./pages/Home/Home";
import About from "./pages/About/About";

//Components
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Register from "./pages/Register/Register";
import Login from "./pages/Login/Login";

//Styles
import "./App.css";
import { AuthContextProvider } from "./context/AuthContext";


function App() {
  return (
    <>
     <AuthContextProvider>
     <BrowserRouter>
        <Navbar />
        <div className="container">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/register" element={<Register />} />
            <Route path="/login" element={<Login />} />
          </Routes>
        </div>
        <Footer />
      </BrowserRouter>
     </AuthContextProvider>
    </>
  );
}

export default App;
