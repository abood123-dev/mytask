import React from 'react'
import { useNavigate } from 'react-router-dom';
import { useState } from 'react';
const Login = () => {
    const navigate=useNavigate();
      const[name,setName]=useState('');
      const[email,setEmail]=useState('');
        const handleSubmit = () => {
        const query = new URLSearchParams({ name, email }).toString();
        navigate(`/page2?${query}`);
      };
  return (
    <div className='border-box'>
      <div className='signin'>Signin to your PopX account</div>
      <div className='desc'> Lorem ipsum dolor sit amet, consectetur adipiscing elit,</div>
      <form onSubmit={handleSubmit}>
        <div><input className='put2' placeholder='Enter your Email address' value={email} onChange={(e)=>setEmail(e.target.value)} required/></div>
         <div><input className='put3' type='password' placeholder='Enter your Password' required/></div>
         <div className='full2'>Email address</div>
         <div className='full3'>Password</div>
         <div><button className='login' type='submit'>Login</button></div>
  </form>
    </div>
  )
}

export default Login
