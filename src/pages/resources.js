import React from 'react'
import { Link } from 'gatsby'

const resources = () => {
  return (
    <div>
      <h1>Resources</h1>
      <hr />
      <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
      <a href="https://www.bbc.co.uk/food/recipes">BBC Food</a>
      <a href="https://realfood.tesco.com/recipes.html">Tesco Food</a>
      <Link to='/'>Home</Link>
    </div>
  )
}

export default resources