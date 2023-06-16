import React from "react";
import { Link } from "react-router-dom";
import { useState } from "react";
import { useUserAuth } from "../UserAuthContext";
function SignUpPage(){
    const [email,setEmail]=useState("")
    const [password,setPassword]=useState("")
    const[error,setError]=useState("");
    const {signup}=useUserAuth();
    const handleSubmit= async(e)=>{
        e.prevent.default()
        setError("")
        try {
            await signup(email,password)
        } catch (error) {

            setError(error.message);
        }

    };



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