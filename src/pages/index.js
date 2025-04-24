import * as React from 'react'
import { Link } from 'gatsby'

export default function Home() {
  return (
    <div>
      <nav>
        <Link to='/'>Home</Link>
        <Link to='/projects'>Projects</Link>
        <Link to='/about'>About</Link>
        <Link to='/contact'>Contact</Link>
      </nav>
      <div>
        <h1>Gatsby Food Company</h1>
        <img src="/favicon.ico" alt="logo" width={100} height={80} />
      </div>
    </div>
  )
}
