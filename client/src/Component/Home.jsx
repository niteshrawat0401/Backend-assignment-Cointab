import React from 'react'
import "./styles/Home.css"
import { useNavigate } from 'react-router-dom'

export const Home = () => {
  const navigate= useNavigate();
  return (
    <div className='outer_div'>
        <button>Fetch Users</button>
        <button>Delete Users</button>
        <button onClick={()=>navigate("/user")}>User Details</button>
    </div>
  )
}
