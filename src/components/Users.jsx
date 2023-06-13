import React from "react";
import { useState,useEffect } from "react";
import { db } from "../firebase-config";
import {collection,getDocs} from "firebase/firestore"
import "./users.css"

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
        <table className="head-table">
            <tr>
                <td className="name">Name</td>
                <td className="age">Age</td>
                <td className="email">Email</td>
                <td className="contact">Contact</td>
            </tr>
        </table>
           {users.map((user)=>{
            return(
                <div>
                    <table>

                        <tr>
                            <td className="name">{user.name}</td>
                            <td className="age">{user.age}</td>
                            <td className="email">{user.email}</td>
                            <td className="contact">{user.contact}</td>
                        </tr>
                    </table>
                    
                </div>
            )
           })}
            
        </>
    )
}

export default User_display;