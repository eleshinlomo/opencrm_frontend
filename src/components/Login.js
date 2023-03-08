import React from 'react'
import {Link} from 'react-router-dom'
import '../styles/Home.css'
import '../styles/Login.css'

const Login = () => {
  return (

    
    <div className='login-container'>

<main>
        <div className='image-holder'>
            <img src="https://images.unsplash.com/photo-1590650516494-0c8e4a4dd67e?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1171&q=80" alt="advert"/>
        </div>

       <div className='form-content-login'>
       <h3>LOGIN AND BEGIN TO MANAGE YOUR BUSINESS REAL-TIME</h3>
        <form>
            <input type="email" placeholder='Email'  />
            <input type="password" placeholder='Password'  />
            <Link to="/dashboard"><button className='login-btn'>LOGIN</button></Link>
           </form>
           <Link to="/" className='home-btn2'><button>HOME</button></Link>
           </div>
    </main>
    </div>
  )
}

export default Login