import React from 'react'

const Logo = () => {
  return (
    <div className='logo-wrapper'>
      <img
        class='logo-img'
        src="/favicon.ico"
        alt="logo"
        width={50}
        height={40} />
      <h1 className='logo'>Gatsby Food</h1>
     
    </div>
  )
}

export default Logo
