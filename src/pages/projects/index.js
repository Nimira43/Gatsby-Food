import React from 'react'
import { Link } from 'gatsby'

const index = () => {
   return (
      <div>
        <h1>Gatsby Food Company</h1>
        <hr />
        <Link to='/project1'>Project 1</Link>
        <Link to='/project2'>Project 2</Link>
        <Link to='/'>Home</Link>
      </div>
    )
}

export default index
