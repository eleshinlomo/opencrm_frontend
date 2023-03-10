import React from 'react'
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const Logout = () => {
    const [error, setError] = useState(null);
  const navigate = useNavigate();
    const handleLogout = ()=>{
        fetch('http://localhost:3500/api/logout', {
          method: 'GET',
          mode: "no-cors",
          credentials: 'include'
        })
          .then(response => {
            if (response.ok) {
              setError("You have successfully logged out")
              navigate('/');
            } else {
              setError('Failed to logout');
            }
          })
          .catch(error => {
            console.error(error);
            setError('Failed to logout');
          });
        }
  return (
    <div>
    {error}
    <button onClick={handleLogout}>LOGOUT</button>

    </div>
  )
}

export default Logout