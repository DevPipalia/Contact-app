import React from "react";
import { Link } from "react-router-dom";
import { useState } from "react";
import { auth } from "../firebase-config";

function SignUpPage(){
    const [email,setEmail]=useState("")
    const [password,setPassword]=useState("")
   



    return(
        <>
            <h1>Sign Up</h1>
            <form >
            <input type="email" placeholder="Email.." onChange={(e)=>setEmail(e.target.value)}/>
            <input type="password" placeholder="Password..." onChange={(e)=>setPassword(e.target.value)}/>
            <input type="submit" value="Sign Up"/>
           
            <p>Already have an account <Link to="/">login</Link> </p>
        </form>
        </>
    )
}

export default SignUpPage;