import React from 'react'
import logo from '../favicon.ico'
import user from '../css/4584119-200.png'
import '../css/bai6.scss'
export default function Bai6() {
  return (
    <div>Bài 6
      <div className='navbar'>
      <div className='logo'>
        <img src='../favicon.ico' alt="Logo" />
      </div>
      <ul className='navLinks'>
        <li><a href="" className='font-bold'>Home</a></li>
        <li><a href="">Updates</a></li>
        <li><a href="">Services</a></li>
        <li><a href="">Features</a></li>
        <li><a href="">About Us</a></li>
      </ul>
      <div className='profileIcon'>
        <img src='../css/4584119-200.png'alt="User" />
      </div>
    </div>
    </div>
  )
}
