import './App.css'
import { Routes, Route } from 'react-router-dom'
import Home from './components/Home'
import Login from './components/Login'
import Register from './components/Register'
import Wishlist from './components/Wishlist'
import Cart from './components/Cart'
import Navbar from './components/Navbar'
import Footer from './components/Footer'

function App() {


  return (
    <>  <Navbar   />
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/login" element={<Login />} />
      <Route path="/register" element={<Register />} />
      <Route path="/wishlist" element={<Wishlist />} />
      <Route path="/cart" element={<Cart />} />
    </Routes>
    <Footer />
    </>
  )
}

export default App;

