import React from 'react';
import {Link} from 'react-router-dom'
import '../styles/Home.css'
import { useEffect, useState } from 'react';

const Register = () => {
    const [username, setUsername] = useState([])
    const [firstname, setFirstname] = useState([])
    const [lastname, setLastname] = useState([])
    const [email, setEmail] = useState([])
    const [password, setPassword] = useState([])

    const submitHandler =(e)=>{
        e.preventDefault()
        fetch('', {
            method: "POST",
            mode: "cors",
            headers: {"Content-Type": "application/json"},
            body: JSON.stringify({
                email: email,
                firstname: firstname,
                lastname: lastname,
                username: username,
                password: password

            })
        })

        
    }

    
    
  return (
    <div className='contianer'>
    <main>
        <div className='image-holder'>
            <img src="https://images.unsplash.com/photo-1573167627769-e201a7ddf409?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1169&q=80" alt="advert"/>
        </div>

       <div className='form-content-register'>
        <form onSubmit={submitHandler}>
            <label for="email">Email</label>
            <input type="email" onChange={(e)=>setEmail(e.target.value)} value={email} placeholder='email' />
            <label for="firstname">Firstname</label>
            <input type="text" onChange={(e)=>setFirstname(e.target.value)} value={firstname} placeholder='firstname'  />
            <label for="lastname">Lastname</label>
            <input type="text" onChange={(e)=>setLastname(e.target.value)} value={lastname} placeholder='lastname' />
            <label for="username">Username</label>
            <input type="username" onChange={(e)=>setUsername(e.target.value)} value={username} placeholder='username'  />
            <label for="password">Password</label>
            <input type="password" onChange={(e)=>setPassword(e.target.value)} value={password} placeholder='password' />
            <button type='submit' className='register-btn'>REGISTER</button>
           </form>
           <Link to="/" className='home-btn2'><button>HOME</button></Link>
           </div>
           {email}, {password}, {firstname}, {username}, {lastname}
    </main>
    </div>
  )
}

export default Register