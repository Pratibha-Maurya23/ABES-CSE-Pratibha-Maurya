import './App.css'
import Navbar from './components/Navbar'
import WelcomeMessage from './components/WelcomeMessage'
import Card from './components/Card'
import Footer from './components/Footer'

function App() {
  return (
    <div className='conatinter'>
    <Navbar/>
    <WelcomeMessage/>
    <div className='items'>
    <Card name="Burger" rate="99" imgs="https://assets.epicurious.com/photos/5c745a108918ee7ab68daf79/1:1/w_2503,h_2503,c_limit/Smashburger-recipe-120219.jpg"/>
    <Card name="Pizza" rate="149"  imgs="https://rukminim2.flixcart.com/image/480/480/kxgfzbk0/wall-decoration/d/q/e/food-pizza-wallpaper-paper-poster-1-vp-221221-617-poster-smoky-original-imag9wjrxfzzhrpd.jpeg?q=90"/>
    <Card name="Noodles" rate="89"  imgs="https://www.sharmispassions.com/wp-content/uploads/2012/09/HakkaNoodles4-e1689045142580-500x500.jpg"/>
    </div>
    <Footer/>
    </div>
  )
}

export default App
