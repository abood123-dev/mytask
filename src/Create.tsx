import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'

const Create = () => {
  const navigate=useNavigate();
  const[name,setName]=useState('');
  const[email,setEmail]=useState('');
    const handleSubmit = () => {
    const query = new URLSearchParams({ name, email }).toString();
    navigate(`/page2?${query}`);
  };
  return (
    <div className='border-box'>
     <div className='create'>Create your PopX account</div> 
     <div><input className='crinput' type='text' placeholder='Enter your Fullname' value={name} onChange={(e)=>setName(e.target.value)} /></div>
     <div><input className='crinput1' placeholder='Enter your Phone number'/></div>
     <div><input className='crinput2' placeholder='Enter your Email address' value={email} onChange={(e)=>setEmail(e.target.value)}/></div>
     <div><input className='crinput3' placeholder='Enter your Password'/></div>
     <div><input className='crinput4' placeholder='Enter your Company name'/></div>
       <div className='fullname'>Full Name<span className='star'>*</span></div>
       <div className='fullname1'>Phone number<span className='star'>*</span></div>
       <div className='fullname2'>Email address<span className='star'>*</span></div>
       <div className='fullname3'>Password<span className='star'>*</span></div>
       <div className='fullname4'>Company name<span className='star'>*</span></div>
      <div className='agency'> Are you an Agency?<span className='star'>*</span></div>
        <input type='radio' value='yes' name='ageny' className='inyes' checked/>
      <label className='layes'>
        Yes
      </label>
        <input type='radio' value='no' name='ageny' className='inno'/>
         <label className='lano'>
        No
      </label>
      <div><button className='btn11' onClick={handleSubmit}> Create Account </button></div> 
    </div>
  )
}

export default Create
