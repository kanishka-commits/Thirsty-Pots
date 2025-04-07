import React from 'react'
import "./Card.css"

const Card = ({plantname,watertime}) => {
  return (
    <div className="card">
        <img src="#"/>
        <h2>{plantname}</h2>
        <p>water by : {watertime}</p>
    </div>
  )
}

export default Card