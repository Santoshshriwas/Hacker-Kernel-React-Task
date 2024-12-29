import React from 'react'
import Logo from "../assets/Logo.png"
import { Link, Outlet, useNavigate } from 'react-router-dom'

export const Home = () => {
  const navigate = useNavigate();
  const logout = ()=>{
    localStorage.removeItem('token');
    navigate('/');

  }
  return (
   <>
     <nav className='Nabvar'>
      <ul className='logo'>
          <li><img width={"50px"} src={Logo} alt="Logo.png" /></li>
          <span className='logo1'>HackerKernel</span>
      </ul>
      <ul className='second-nav'>
          <li ><Link to="display">Display</Link></li>
          <li><Link to="product">Add-Product</Link></li>
          <li><Link to="serach">Search</Link></li>
      </ul>
      <button className='btn' onClick={logout}>Logout</button>
      
     </nav>
     <ul><Outlet/></ul>
     <footer className='footer'>© All Rights Reserved, HackerKernel a registered trademark of Compile Technologies Pvt Ltd</footer>
   </>
  )
}

 
