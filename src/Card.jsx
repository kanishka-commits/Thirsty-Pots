import React from 'react'
import "./Card.css"

const Card = ({plantName,waterTime,image}) => {
  return (
    <div className="card-list">
        <img src={image}/>
        <h2>{plantName}</h2>
        <p>water by : {waterTime}</p>
    </div>
  )
}

export default Card