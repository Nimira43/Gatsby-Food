import React from 'react'
import Navbar from './Navbar'
import Footer from './Footer'
import './layout.css'

const Layout = ({children}) => {
  return (
    <>
      <Navbar />
      <div className='content'>
        {children}
      </div>
      <Footer />
    </>
  )
}

export default Layout
