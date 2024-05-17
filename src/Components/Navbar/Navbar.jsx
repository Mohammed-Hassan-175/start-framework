import React from 'react'
import { Link, NavLink } from 'react-router-dom'

export default function Navbar() {
  return <>
  
  
  <div className='container mx-auto py-9 bg-[#2c3e50] flex fixed z-50 top-0 right-0 left-0 items-center justify-between'>
   
      <li className='text-3xl text-white font-bold list-none ps-32'><Link to="">START FRAMEWORK</Link></li>
    
    <ul className='flex pe-32	text-white gap-4'>
      <li className='font-bold '><NavLink to="About">ABOUT</NavLink></li>
      <li className='font-bold pl-10 '><NavLink to="Portfolio">PORTFOLIO</NavLink></li>
      <li className='font-bold pl-10 '><NavLink to="Contact">CONTACT</NavLink></li>
    </ul>
  </div>
  
  

  </>
    
  
}
