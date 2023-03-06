import React from 'react'
import {Link} from 'react-router-dom'
import '../styles/Nav.css'

const Nav = () => {
  return (
    <div>
     <nav>
        <Link to="/">Home</Link>
        <Link to="/about">About</Link>
        <Link to="/contact">Contact</Link>
     </nav>
    </div>
  )
}

export default Nav