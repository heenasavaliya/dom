import React, { useState } from 'react'
import { signInWithEmailAndPassword } from 'firebase/auth';
import { auth } from '../../firebaseConfig'
import { Link,useNavigate } from 'react-router-dom';

function Login() {
  const[mail,setMail] = useState("");
    const[pass,setPass] = useState("");

    const navigate = useNavigate();

    const login = () => {
        signInWithEmailAndPassword(auth,mail,pass)
        .then((user) => {
            console.log(user);
            navigate("/dashboard")
        }).catch((err)=>{
            console.log(err);
        })
    }
  return (
    <div className='bb'>
      <h1 className='b1'>log in</h1>

<input className='b2' type="text" placeholder='enter you email' onChange={(e) => setMail(e.target.value)} />
<input className='b2' type="text" placeholder='enter you password' onChange={(e) => setPass(e.target.value)} />
<button className='b3' onClick={login}>Sign Up</button> <br />
<Link to="/">Sign up</Link>
      
    </div>
  )
}

export default Login
