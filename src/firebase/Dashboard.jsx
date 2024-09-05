import React, { useEffect, useState } from 'react'
import { auth, firestore } from '../../firebaseConfig';
import {doc, getDoc } from 'firebase/firestore';

export default function Dashboard() {

    useEffect(()=>{
        fetchUser()
    }, [])
    const [user1,setUser1]=useState("");

    const fetchUser = async () =>{
        let user = auth.currentUser;
        let data = await getDoc(doc(firestore,"users",user.uid))
        setUser1(data.data())
    }
  return (
    <div>
      {/* <h1>welcome {user1.fname} to Dashboard page</h1> */}
      <header>
    <nav>
      <ul>
        <li><a href="#">Home</a></li>
        <li><a href="#">About</a></li>
        <li><a href="#">Contact</a></li>
      </ul>
    </nav>
  </header>
  <main>
    <section class="welcome">
      <h1>Welcome to Dashboard</h1>
      <p>Welcome <span id="username"></span> to your dashboard!</p>
    </section>
  </main>
    </div>
  )
}
