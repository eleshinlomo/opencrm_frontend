import React from 'react'
import '../styles/Home.css'
import {Link, Routes, Route} from 'react-router-dom'
import Login from './Login'
import {useEffect, useState} from 'react'


const Home = () => {

    const login = true
    const [register, setRegister] = useState(false)

  return (
    <div className='home-container'>
    

        <main>
        <div>
            <img src="https://images.unsplash.com/photo-1573496130141-209d200cebd8?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1169&q=80" alt="advert"/>
        </div>

        <div className='home-content'>
        <h2>ALL INCLUSIVE CRM FOR BUSINESSES</h2>

        <Link to="/login"><button>Login</button></Link>
        <Link to="/register"><button>Register</button></Link>
        </div>
        </main>

    </div>
  )
}

export default Home