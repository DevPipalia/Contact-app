import React from "react";
import { Link } from "react-router-dom";

function LoginPage(){
    return(
        <>
        <h1>Login</h1>
        <form>
            <input type="email" placeholder="Email.."/>
            <input type="password" placeholder="Password..."/>
            <input type="submit" value="Login"/>
            <button>Sign in with Google</button>
            <p>Dont have an account <Link to="/signup">signup</Link> </p>
        </form>
        </>
    )
}

export default LoginPage;