import React from "react";
import { Link } from "react-router-dom";
import { useState } from "react";
import { auth } from "../firebase-config";
import { createUserWithEmailAndPassword } from "firebase/auth";
import { useNavigate } from "react-router-dom";


function SignUpPage(){
    const [email,setEmail]=useState("")
    const [password,setPassword]=useState("")
    const navigate=useNavigate()
   
    const handleSubmit=(e)=>{
        e.preventDefault()
        createUserWithEmailAndPassword(auth,email,password)
        .then((userCredential)=>{
            const user=userCredential.user
            navigate("/")
            
        })
        .catch((error)=>{
            console.log(error)
        })
    }


    return(
        <>
            <h1>Sign Up</h1>
            <form onSubmit={handleSubmit}>
            <input type="email" placeholder="Email.." onChange={(e)=>setEmail(e.target.value)}/>
            <input type="password" placeholder="Password..." onChange={(e)=>setPassword(e.target.value)}/>
            <input type="submit" value="Sign Up"/>
           
            <p>Already have an account <Link to="/">login</Link> </p>
        </form>
        </>
    )
}

export default SignUpPage;