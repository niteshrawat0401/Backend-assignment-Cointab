import React from 'react'
import { useState } from 'react'
import "./styles/UserDetail.css"
export const UserDetail = () => {
  const [data, setData]= useState([]);



  return (
    <div>
      <div className='filter_div'>
          <select>
            <option value="">Filter By Gender</option>
            <option value="male">Male</option>
            <option value="female">Female</option>
          </select>
      </div>

      <table>
        <thead>
        <tr>
          <th>Picture</th>
          <th>First</th>
          <th>last</th>
          <th>Email</th>
          <th>Location</th>
          <th>Pin</th>
        </tr>
        </thead>
        <tbody>
          {
          <tr>
            <td>Nitesh</td>
            <td>Nitesh</td>
            <td>Singh Rawat</td>
            <td>nitesh@gmail.com</td>
            <td>Delhi</td>
            <td>110003</td>
          </tr>
          }
        </tbody>
      </table>
    </div>
  )
}
