import React from 'react'
import { Link } from 'gatsby'
import Logo from './Logo'

const Navbar = () => {
  return (
    <div className='navbar'>
      <Logo />
      <ul>
        <li>
          <Link to='/'>Home</Link>
        </li>
        <li>
          <Link to='/projects'>Projects</Link>
        </li>
        <li>
          <Link to='/about'>About</Link>
        </li>
        <li>
          <Link to='/resources'>Resources</Link>
        </li>
        <li>
          <Link to='/contact'>Contact</Link>
        </li>
      </ul>
    </div>
  )
}

export default Navbar
