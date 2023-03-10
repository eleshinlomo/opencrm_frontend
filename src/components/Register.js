import React from 'react';
import {Link} from 'react-router-dom'
import '../styles/Home.css'
import '../styles/register.css'
import { useEffect, useState } from 'react';

const Register = () => {

    const [firstname, setFirstname] = useState("")
    const [lastname, setLastname] = useState("")
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")
    const [error, setError] = useState(null)
    

    
    const submitHandler =(e)=>{
        
        e.preventDefault()
        fetch('http://localhost:3500/api/addUser', {
            method: "POST",
            mode: "cors",
            headers: {
                "Accept": "application/json",
                "Content-Type": "application/json"
            },
            body: JSON.stringify({
                email: email,
                firstname: firstname,
                lastname: lastname,
                password: password
            })
        })

        .then((result)=>{
            if(!result){
                setError(result.message)
            }else{
                return result
            }
        })

        .catch((err)=>console.log(err))
    
    }


   
        
    

    
    
  return (
    <div className='register-container'>
    <div className="register-main">
        <div className='image-holder'>
            <img src="https://images.unsplash.com/photo-1573167627769-e201a7ddf409?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1169&q=80" alt="advert"/>
        </div>

       <div className='form-content-register'>
        <div className='register-message'>
        {error}
    
        </div>
        <form onSubmit={submitHandler}>
            <label for="email">Email</label>
            <input type="email" onChange={(e)=>setEmail(e.target.value)} name="email" value={email} placeholder='email' required />
            <label for="firstname">Firstname</label>
            <input type="text" onChange={(e)=>setFirstname(e.target.value)} name="firstname" value={firstname} placeholder='firstname' required />
            <label for="lastname">Lastname</label>
            <input type="text" onChange={(e)=>setLastname(e.target.value)} name="lastname" value={lastname} placeholder='lastname' required />
            <label for="password">Password</label>
            <input type="password" onChange={(e)=>setPassword(e.target.value)} name="password" value={password} placeholder='password' required />
            <button type='submit' className='register-btn'>REGISTER</button>
           </form>
           <Link to="/" className='home-btn2'><button>HOME</button></Link>
           </div>    
    </div>
    </div>
  )
}

export default Register