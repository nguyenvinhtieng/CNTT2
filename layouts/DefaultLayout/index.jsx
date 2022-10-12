import React from 'react'
import Header from '../components/Header'

function DedaultLayout({children}) {
  return (
    <>
      <Header></Header>
      {children}
    </>
  )
}

export default DedaultLayout
