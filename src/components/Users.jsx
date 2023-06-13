import React from "react";
import { useState,useEffect } from "react";
import { db } from "../firebase-config";
import {collection,getDocs} from "firebase/firestore"

function User_display(){
    const[users,setUsers]=useState([]);
    const UsersCollectionRef=collection(db,"users");

    useEffect(()=>{
        const getUsers=async()=>{
            const data=await getDocs(UsersCollectionRef);
            setUsers(data.docs.map((doc)=>({...doc.data(),id:doc.id})));

        }
        getUsers();
    },[])
    return(
        <>
           {users.map((user)=>{
            return(
                <div>
                    <h1>Name:{user.name}</h1>
                    <h1>Age:{user.age}</h1>
                    <h1>Email:{user.email}</h1>
                    <h1>Contact:{user.contact}</h1>
                </div>
            )
           })}
            users display;
        </>
    )
}

export default User_display;