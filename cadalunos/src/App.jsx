import "./App.css";
import { onAuthStateChanged } from "firebase/auth";
import { useEffect, useState } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Login from "./pages/Login/login";
import Register from "./pages/Register/Register";
import Home from "./pages/Home/Home";
import NavBar from "./components/NavBar";
import StudentRegister from "./pages/StudentRegister/StudentRegister";
import { useAuthentication } from "./hooks/useAuthentication";
import { AuthContextProvider } from "./context/AuthContext";

function App() {
  const [user, setUser] = useState()
  const { auth } = useAuthentication();
  const loadingUser = user === undefined;

  useEffect(()=>{
    onAuthStateChanged(auth, (user)=>{
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
        <NavBar />
        <Routes>
          <Route path="/" element={!user ? <Login /> : <Home />} />
          <Route path="/register" element={!user ? <Login /> : <Register />}  />
          <Route path="/login" element={<Login />}/>
          <Route path="/student-register" element={!user ? <Login /> : <StudentRegister />} />
        </Routes>
      </BrowserRouter>
      </AuthContextProvider>
    </>
  );
}

export default App;
