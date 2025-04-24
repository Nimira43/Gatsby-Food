import * as React from 'react'
import Navbar from '../components/Navbar'

export default function Home() {
  return (
    <div>
      <Navbar />
      <div>
        <h1>Gatsby Food Company</h1>
        <img src="/favicon.ico" alt="logo" width={100} height={80} />
      </div>
    </div>
  )
}
