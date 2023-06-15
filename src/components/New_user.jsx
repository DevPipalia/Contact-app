import React from "react";
import { collection, addDoc,doc } from "firebase/firestore";
import { useState } from "react";
import { db } from "../firebase-config";
import { Link } from "react-router-dom";
import { ToastContainer, toast } from 'react-toastify';
  import 'react-toastify/dist/ReactToastify.css';

function NewUser(){
    const UsersCollectionRef=collection(db,"users");
    const [newName,setNewName]=useState("");
    const [newAge,setAge]=useState("");
    const [newEmail,setEmail]=useState("");
    const [newContact,setContact]=useState("");

    const createUser=async()=>{
        toast("User added");
        await addDoc(UsersCollectionRef,{name:newName,age:Number(newAge),email:newEmail,contact:Number(newContact)})
        toast.success('User Added!', {
            position: "top-center",
            autoClose: 5000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            theme: "colored",
            });
        
    }
    return(
        <>
            <h1>Add user</h1>
            <input placeholder="Name.." type="text" onChange={(event)=> {setNewName(event.target.value);}}/>
            <input placeholder="Age.." type="number" onChange={(event)=> {setAge(event.target.value);}}/>
            <input placeholder="Email.." type="email" onChange={(event)=> {setEmail(event.target.value);}}/>
            <input placeholder="Contact..." type="number" onChange={(event)=> {setContact(event.target.value);}}/>
            <Link to="/home"><button onClick={createUser}>Add User</button></Link>
            <ToastContainer
                                position="top-center"
                                autoClose={5000}
                                hideProgressBar={false}
                                newestOnTop={false}
                                closeOnClick
                                rtl={false}
                                pauseOnFocusLoss
                                draggable
                                pauseOnHover
                                theme="colored"
                                />
        </>
    )
}

export default NewUser;