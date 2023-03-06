import React from 'react'
import '../styles/About.css'

const About = () => {
  return (
    <div className='about-container'>

    <div className='image-holder'>
    <img src="https://images.unsplash.com/photo-1559251606-c623743a6d76?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80" alt="about-us" />
    </div>

    <div className='about-text'>
        This is About Page
    </div>
    </div>
  )
}

export default About