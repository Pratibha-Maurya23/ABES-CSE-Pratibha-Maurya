import React from 'react'
import './card.css'

const Card = (props) => {
  return (
    <div id='adi'>
      <h1>{props.name}</h1>
      <img src={props.imgs} alt='' height={150} width={200}/>
      <h3>{props.rate}</h3>
    </div>
    
  )
}

export default Card
