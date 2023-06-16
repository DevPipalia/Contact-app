import React, { useState } from "react";
import { Link } from "react-router-dom";
import { signInWithEmailAndPassword } from "firebase/auth";
import { auth } from "../firebase-config";
import { useNavigate } from "react-router-dom";

function LoginPage(){

    const navigate=useNavigate();
    const [email,setEmail]=useState("")
    const [password,setPassword]=useState("")
    const handleSubmit=(e)=>{
        e.preventDefault()
        signInWithEmailAndPassword(auth, email, password)
        .then((userCredential) => {
            const user = userCredential.user;
            navigate('/home')
        })
        .catch((error) => {
            console.log(error)
        });
    }


    return(
        <>

        <h1>Login</h1>
        <form onSubmit={handleSubmit}>
            <input type="email" placeholder="Email.."  onChange={(e)=>setEmail(e.target.value)}/>
            <input type="password" placeholder="Password..."  onChange={(e)=>setPassword(e.target.value)}/>
            <input type="submit" value="Login"/>
            <button>Sign in with Google</button>
            <p>Dont have an account <Link to="/signup">signup</Link> </p>
        </form>
        </>
    )
}

export default LoginPage;