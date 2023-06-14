import React from "react";
import { useState,useEffect } from "react";
import { db } from "../firebase-config";
import {collection,getDocs,deleteDoc,doc} from "firebase/firestore"
import "./users.css"
import { Link } from "react-router-dom";

function User_display(){
    const[users,setUsers]=useState([]);
    const UsersCollectionRef=collection(db,"users");

    const deleteUser=async(id)=>{
        const userDoc=doc(db,"users",id);
        await deleteDoc(userDoc);
        window.location.reload(false);
        
    }


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
                <td className="hid"></td>
            </tr>
        </table>
           {users.map((user)=>{
            return(
                <div>
                    <table>
                        <tbody>
                        <tr>
                            <td className="name">{user.name}</td>
                            <td className="age">{user.age}</td>
                            <td className="email">{user.email}</td>
                            <td className="contact">{user.contact}</td>
                            <Link to="/"><td className="delete-btn" onClick={()=>{ deleteUser(user.id)}}> <button>Del</button></td></Link>
                        </tr>

                        </tbody>
                    </table>
                    
                </div>
            )
           })}
            
        </>
    )
}

export default User_display;