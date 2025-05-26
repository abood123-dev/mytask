import React from 'react'

const Create = () => {
  return (
    <div className='border-box'>
     <div className='create'>Create your PopX account</div> 
     <div><input className='crinput' placeholder='Enter your Fullname'/></div>
     <div><input className='crinput1' placeholder='Enter your Phone number'/></div>
     <div><input className='crinput2' placeholder='Enter your Email address'/></div>
     <div><input className='crinput3' placeholder='Enter your Password'/></div>
     <div><input className='crinput4' placeholder='Enter your Company name'/></div>
       <div className='fullname'>Full Name<span className='star'>*</span></div>
       <div className='fullname1'>Phone number<span className='star'>*</span></div>
       <div className='fullname2'>Email address<span className='star'>*</span></div>
       <div className='fullname3'>Password<span className='star'>*</span></div>
       <div className='fullname4'>Company name<span className='star'>*</span></div>
    </div>
  )
}

export default Create
