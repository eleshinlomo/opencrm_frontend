import React from 'react'
import {Link} from 'react-router-dom'
import '../styles/Home.css'
import '../styles/Login.css'
import { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom';

const Login = () => {
const [email, setEmail] = useState('')
const [password, setPassword] = useState('')
const [error, setError] = useState(null);
const navigate = useNavigate();

    const loginHandler =(e)=>{
        
        e.preventDefault()
        fetch('http://localhost:3500/api/login', {
            method: "POST",
            mode: "cors",
            headers: {
                "Accept": "application/json",
                "Content-Type": "application/json"
            },
            body: JSON.stringify({
                email: email,
                password: password
            })
        })

        .then((result)=>{
            if(result.status === 401){
                setError('User does not exist')
                navigate('/login')
            }
           
            if(result.status === 200){
                navigate('/dashboard')
            }else{
                setError("User does not exist. Please check username and password");
            }
        })

        .catch((err)=>console.log(err))
    
    }
  return (

    
    <div className='login-container'>

<div className="login-main">
        <div className='image-holder'>
            <img src="https://images.unsplash.com/photo-1590650516494-0c8e4a4dd67e?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1171&q=80" alt="advert"/>
        </div>

       <div className='form-content-login'>
       {error}
       <h3>LOGIN AND BEGIN TO MANAGE YOUR BUSINESS REAL-TIME</h3>
        <form onSubmit={loginHandler}>
            <input type="email" value={email} onChange={(e)=>setEmail(e.target.value)} placeholder='Email'  />
            <input type="password" value={password} onChange={(e)=>setPassword(e.target.value)}  placeholder='Password'  />
            <button type='submit' className='login-btn'>LOGIN</button>
           </form>
           <Link to="/" className='home-btn2'><button>HOME</button></Link>
           </div>
    </div>
    </div>
  )
}

export default Login