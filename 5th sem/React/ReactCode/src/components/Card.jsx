import React from 'react'
import './card.css'

const Card = (props) => {
  return (
    <div id='adi'>
      <img src='https://t4.ftcdn.net/jpg/08/82/55/47/360_F_882554750_gXooO33Uf4dpD1iEiSaYvZCWgqAEzegl.jpg' alt='' height={100} width={100}/>
      <h1>{props.name}</h1>
      <h3>{props.edu}</h3>
    </div>
  )
}

export default Card
