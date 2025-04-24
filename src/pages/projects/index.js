import React from 'react'
import { Link } from 'gatsby'
import Layout from '../../components/Layout'

const index = () => {
  return (
    <Layout> 
      <h1>Projects</h1>
      <hr />
      <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Similique sit tempore aliquam quaerat eius? Officiis laudantium eligendi fugit enim ad.</p>       
      <Link to='/projects/project1'>Project 1</Link>
      <Link to='/projects/project2'>Project 2</Link>
    </Layout>
  )
}

export default index
