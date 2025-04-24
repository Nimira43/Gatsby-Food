import * as React from 'react'
import { Link } from 'gatsby'

export default function Home() {
  return (
    <div>
      <h1>Gatsby Food Company</h1>
      <hr />
      <Link to='/projects'>Projects</Link>
      <Link to='/about'>About</Link>
      <Link to='/contact'>Contact</Link>
    </div>
  )
}
