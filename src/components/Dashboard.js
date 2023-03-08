import React from 'react'
import { useEffect, useState } from 'react'


const Dashboard = () => {
  const [user, setUser] = useState([])

   useEffect(()=>{

     fetch('http://localhost:3500/api/dashboard', {
      method: "GET",
      mode: "cors",
      headers: {
        "Accept": "application/json",
        "Content-Type": "application/json"
      }
     })

     .then((result)=>{
      if(!result){
        console.log("No result found")
      }else{
      return result.json()
      }
     })

     .then((res)=>{
      console.log(res)
      setUser(res)
      return res
     })
      
    }, [])

  
     
    
  
  return (

    <div>
    
       {
        user.map(user =>
        <div>
        <h3>Welcome {user.firstname}</h3>

        <h2>All Users</h2>
        <h4>{user.firstname}</h4>
        <h4>{user.lastname}</h4>
        <h4>{user.email}</h4>
        </div>
        )
       }
       
    </div>
  )
}

export default Dashboard