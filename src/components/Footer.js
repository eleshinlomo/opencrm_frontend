import React from 'react'
import {Link} from 'react-router-dom'
import '../styles/Footer.css'

const Footer = () => {
  return (
    <div className='footer'>
    <div>
        Copyright Afrocoder 2023.
        <Link to="privacy">Privacy Policy</Link>
    </div>
    </div>
  )
}

export default Footer