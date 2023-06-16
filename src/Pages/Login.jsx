import React, { useState } from "react";
import { Link } from "react-router-dom";
import { signInWithEmailAndPassword } from "firebase/auth";
import { auth } from "../firebase-config";
import { useNavigate } from "react-router-dom";
import { GoogleAuthProvider,signInWithPopup } from "firebase/auth";

function LoginPage(){

    const navigate=useNavigate();
    const [email,setEmail]=useState("")
    const [password,setPassword]=useState("")
    const provider = new GoogleAuthProvider();
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

    function handleGoogle(){
        signInWithPopup(auth, provider)
  .then((result) => {
   
    const credential = GoogleAuthProvider.credentialFromResult(result);
    const token = credential.accessToken;
   
    const user = result.user;
    navigate("/home")

  }).catch((error) => {
    
    const errorCode = error.code;
    const errorMessage = error.message;
   
    const email = error.customData.email;
    
    const credential = GoogleAuthProvider.credentialFromError(error);
 
  });
    }


    return(
        <>

        <h1>Login</h1>
        <form onSubmit={handleSubmit}>
            <input type="email" placeholder="Email.."  onChange={(e)=>setEmail(e.target.value)}/>
            <input type="password" placeholder="Password..."  onChange={(e)=>setPassword(e.target.value)}/>
            <input type="submit" value="Login"/>
            
        </form>
        <button onClick={handleGoogle}>Sign in with Google</button>
            <p>Dont have an account <Link to="/signup">signup</Link> </p>
        </>
    )
}

export default LoginPage;