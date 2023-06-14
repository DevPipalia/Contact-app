import React from "react";
import { collection, addDoc,doc } from "firebase/firestore";
import { useState } from "react";
import { db } from "../firebase-config";
import { Link } from "react-router-dom";

function NewUser(){
    const UsersCollectionRef=collection(db,"users");
    const [newName,setNewName]=useState("");
    const [newAge,setAge]=useState("");
    const [newEmail,setEmail]=useState("");
    const [newContact,setContact]=useState("");

    const createUser=async()=>{
        await addDoc(UsersCollectionRef,{name:newName,age:Number(newAge),email:newEmail,contact:Number(newContact)})
    }
    return(
        <>
            <h1>Add user</h1>
            <input placeholder="Name.." type="text" onChange={(event)=> {setNewName(event.target.value);}}/>
            <input placeholder="Age.." type="number" onChange={(event)=> {setAge(event.target.value);}}/>
            <input placeholder="Email.." type="email" onChange={(event)=> {setEmail(event.target.value);}}/>
            <input placeholder="Contact..." type="number" onChange={(event)=> {setContact(event.target.value);}}/>
            <Link to="/"><button onClick={createUser}>Add User</button></Link>
        </>
    )
}

export default NewUser;