import React from 'react'
import { Link } from 'gatsby'
import Logo from './Logo'

const Navbar = () => {
  return (
    <div className='navbar'>
      <Logo />
      <ul>
        <li>
          <Link className='nav-link' to='/'>Home</Link>
        </li>
        <li>
          <Link className='nav-link' to='/projects'>Projects</Link>
        </li>
        <li>
          <Link className='nav-link' to='/about'>About</Link>
        </li>
        <li>
          <Link className='nav-link' to='/resources'>Resources</Link>
        </li>
        <li>
          <Link className='nav-link' to='/contact'>Contact</Link>
        </li>
      </ul>
    </div>
  )
}

export default Navbar
