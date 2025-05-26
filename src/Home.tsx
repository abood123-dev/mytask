import React from 'react';
import './index.css';
import { NavLink } from 'react-router-dom';
const Home = () => {
  return (
    <div className='border-box'>
    <div className='mobile-container'>
        <div className='welcome'>Welcome to PopX</div>
        <div className='lorem'>Lorem ipsum dolor sit amet, consectetur adipiscing elit,</div>
       <NavLink to='/Create'> <div><button className='btn1'> Create Account </button></div> </NavLink>
        <div > <button className='btn2'>Already Registered? Login</button></div>
        <div>h</div>
    </div>
    </div>
  )
}

export default Home
