import React from 'react'
import { Link } from 'gatsby'

const about = () => {
  return (
    <div>
      <h1>About</h1>
      <hr />
      <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusantium in libero assumenda, eum facere aliquid natus placeat ipsa numquam! Repellat?</p>
      <Link to='/'>Home</Link>
    </div>
  )
}

export default about