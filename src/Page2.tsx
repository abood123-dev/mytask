import React from 'react'
import { useLocation } from 'react-router-dom';
import Profile from './images/Ellipse 114.png';
import Small from './images/Group 1585.png';
const Page2 = () => {
     const location = useLocation();
  const queryParams = new URLSearchParams(location.search);

  const name = queryParams.get('name');
  const email = queryParams.get('email');
  return (
    <>
    <div className='border-white'>
    <div className='setting'> Account Settings </div>
    </div>
    <div className='border-box'>
      <div><img src={Profile} className='profile'/></div>
      <div><img src={Small} className='small'/></div>  
      <div className='name'>{name}</div>
      <div className='email'>{email}</div>
      <div className='lor'>Lorem Ipsum Dolor Sit Amet, Consetetur Sadipscing Elitr, Sed Diam Nonumy Eirmod Tempor Invidunt Ut Labore Et Dolore Magna Aliquyam Erat, Sed Diam</div>
    </div>
    </>
  )
}

export default Page2
