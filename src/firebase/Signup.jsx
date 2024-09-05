import React, {useState} from 'react'
import { createUserWithEmailAndPassword } from 'firebase/auth';
import { auth, firestore } from '../../firebaseConfig'
import { Link,useNavigate } from 'react-router-dom';
import { setDoc,doc } from 'firebase/firestore';


export default  function Signup() {
    const[fname,setFname] = useState("");
    const[lname,setLname] = useState("");
    const[age,setAge] = useState("");
    const[sub,setSub] = useState("");
    const[mail,setMail] = useState("");
    const[pass,setPass] = useState("");

    const navigate = useNavigate();

    const Signup = () => {
        createUserWithEmailAndPassword(auth,mail,pass)
        .then((user) => {
            console.log(user.user.uid);
            setDoc(doc(firestore,"users",user.user.uid),{
                fname , lname , age , sub , mail
            })
            navigate("/dashboard")
        }).catch((err)=>{
            console.log(err);
        })
    }

  return (
    <div className='aa'>
        <h1 >Sign Up</h1>
        <input className='a2' type="text" placeholder='enter you First Name' onChange={(e) => setFname(e.target.value)} />
        <br />
        <input type="text" placeholder='enter you Last Name' onChange={(e) => setLname(e.target.value)} />
        <br />
        <input type="text" placeholder='enter you Age' onChange={(e) => setAge(e.target.value)} />
        <br />
        <input type="text" placeholder='enter you Subject' onChange={(e) => setSub(e.target.value)} />
        <br />

            <input type="text" placeholder='enter you email' onChange={(e) => setMail(e.target.value)} />
            <br />
            <input type="text" placeholder='enter you password' onChange={(e) => setPass(e.target.value)} />
            <br />
            <button  className='a1' onClick={Signup}>Sign up</button>
            <Link to='/login'> Log In</Link>
            

    </div>
  )
}


