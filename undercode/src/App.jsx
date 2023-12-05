import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import { onAuthStateChanged } from "firebase/auth";

import { useState, useEffect} from "react";
import { useAuthentication } from "./hooks/userAuthentication";

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
import Dashboard from "./pages/dashboard/Dashboard";
import CreatePost from "./pages/CreatePost/CreatePost";


function App() {
  const [user, setUser] = useState(undefined);
  const {auth} = useAuthentication()
  const loadingUser = user === undefined;

  useEffect(()=>{
    onAuthStateChanged(auth, (user) => {
      setUser(user)
    })
  }, [auth])

  if(loadingUser){
    return <p>Carregando...</p>;
  }
  return (
    <>
     <AuthContextProvider value={{user}}>
     <BrowserRouter>
        <Navbar />
        <div className="container">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/register" element={<Register />} />
            <Route path="/login" element={<Login />} />
            <Route path="/dashboard" element={<Dashboard />} />
            <Route path="/posts/create" element={<CreatePost />} />
          </Routes>
        </div>
        <Footer />
      </BrowserRouter>
     </AuthContextProvider>
    </>
  );
}

export default App;
