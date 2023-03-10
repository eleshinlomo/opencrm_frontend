import React from 'react'
import { useEffect, useState } from 'react'
import Logout from './Logout'


const Dashboard = () => {
  const [user, setUser] = useState([])
  const [error, setError] = useState(null)

   useEffect(()=>{

     fetch('http://localhost:3500/api/user', {
      method: "GET",
      mode: "cors",
      headers: {
        "Accept": "application/json",
        "Content-Type": "application/json"
      }
     })

     .then((result)=>{
      if(result.status === 407){
        setError("You are not authorized to view this page")
      }else{
      return result.json()
      }
     })

     .then((res)=>{
      console.log(res.data)
      setUser(res.data)
      return res.data
     })
      
    }, [])

  
     
    
  
  return (

    <div>
    
       {
        user.map(user =>
        <div>
        <Logout />
        {error}
        <h3>Welcome {user.firstname}</h3>

       </div>
        )
       }
       
    </div>
  )
}

export default Dashboard