import * as React from 'react'
import Layout from '../components/Layout'

export default function Home() {
  return (
    <Layout>
      <div className='home-bg'>
        <h1 className='logo'>Gatsby Food</h1>
        <img src="/favicon.ico" alt="logo" width={100} height={80} />
      </div>
    </Layout>
  )
}
