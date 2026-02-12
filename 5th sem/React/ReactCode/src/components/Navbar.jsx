import './navbar.css'

const Navbar = (props) => {
  return (
    <div className='navbar-items'>
      <a href="#">{props.name}</a>
      <a href="#">Home</a>
      <a href="#">Class</a>
      <a href="#">{props.name}</a>
    </div>
  )
}

export default Navbar
