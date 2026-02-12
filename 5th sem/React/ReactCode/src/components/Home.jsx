import React from 'react'
import Navbar from './Navbar'
import Card from './Card'

function Home() {
  return (
    <div>
    <Navbar name="abes"/>
   <Card name="Aditya" edu="Ph.D."/>
   <Card name="Deepak" edu="M.tech"/>
   <Card name="Rupak" edu="B.tech"/>
    </div>
  )
}

export default Home