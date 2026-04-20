import { useState } from 'react'
import './App.css'
import UserDashboard from '../src/pages/UserDashboard'
import AdminDashboard from '../src/pages/AdminDashboard'

function App() {

  return (
    <>
      <UserDashboard/>
      <AdminDashboard/>
    </>
  )
}

export default App
