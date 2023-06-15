import React from "react";
import { Route,Routes,BrowserRouter } from "react-router-dom";
import Home from "./Pages/Home";
import Add_user from "./Pages/Add_user";
import LoginPage from "./Pages/Login";
import SignUpPage from "./Pages/SignUp";

function App() {
  return (
    <div className="App">
     
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<LoginPage/>}/>
        <Route path="/signup" element={<SignUpPage/>}/>
        <Route path="/home" element={<Home/>}/>
        <Route path="/add_user" element={<Add_user/>}/>
      </Routes>
    </BrowserRouter>
    </div>
  );
}

export default App;
