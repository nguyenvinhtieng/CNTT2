import React from 'react'
import Header from '../components/Header/HeaderAdmin'
import Footer from '../components/Footer'

function DedaultLayout({children}) {
  return (
    <>
      <Header />
      <main className='container'>
        {children}
      </main>
      {/* <Footer /> */}
    </>
  )
}

export default DedaultLayout
