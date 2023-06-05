import React from "react";
import { Link } from "react-router-dom";
import "./navbar.css"

function Navbar(){
    return(
        <>
        <div className="nav-bar">
           <Link to="/" className="link1"> <h3>Contact App</h3></Link>
            <Link to="/add_user" className="link2"><h3>Add user</h3></Link>
            
        </div>
        </>
    )
}

export default Navbar;