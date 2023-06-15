import React from "react";
import { useState,useEffect } from "react";
import { db } from "../firebase-config";
import {collection,getDocs,deleteDoc,doc} from "firebase/firestore"
import "./users.css"
import { Link } from "react-router-dom";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function User_display(){
    const[users,setUsers]=useState([]);
    const UsersCollectionRef=collection(db,"users");

    const deleteUser=async(id)=>{
        const userDoc=doc(db,"users",id);
        await deleteDoc(userDoc);
        toast.error(' Deleting User ', {
            position: "top-center",
            autoClose: 5000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            theme: "colored",
            });
            setTimeout(function(){
                window.location.reload();
             }, 5000);
             
        
    }


    useEffect(()=>{
        const getUsers=async()=>{
            const data=await getDocs(UsersCollectionRef);
            setUsers(data.docs.map((doc)=>({...doc.data(),id:doc.id})));

        }
        getUsers();
    },[])
    return(
        <div className="user-body">
        <table className="head-table">
            <tr>
                <td className="name head-name">NAME</td>
                <td className="age">AGE</td>
                <td className="email">EMAIL</td>
                <td className="contact">CONTACT</td>
                <td className="hid"></td>
            </tr>
        </table>
           {users.map((user)=>{
            return(
                <div>
                    <table className="body-table">
                        <tbody>
                        <tr>
                            <td className="name">{user.name}</td>
                            <td className="age"> {user.age}</td>
                            <td className="email"> {user.email}</td>
                            <td className="contact">{user.contact}</td>
                            <td className="delete-btn" onClick={()=>{ deleteUser(user.id)}}> <button>Del</button></td>
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
                        </tr>

                        </tbody>
                    </table>
                    
                </div>
            )
           })}
            
        </div>
    )
}

export default User_display;