import React from "react";
import { Route,Routes,BrowserRouter } from "react-router-dom";
import Home from "./Pages/Home";
import Add_user from "./Pages/Add_user";


function App() {
  return (
    <div className="App">
     hello
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/add_user" element={<Add_user/>}/>
      </Routes>
    </BrowserRouter>
    </div>
  );
}

export default App;
