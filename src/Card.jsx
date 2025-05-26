import React from 'react'
import "./Card.css"

const Card = ({plantname,watertime,image}) => {
  return (
    <div className="card">
        <img src={image}/>
        <h2>{plantname}</h2>
        <p>water by : {watertime}</p>
    </div>
  )
}

export default Card