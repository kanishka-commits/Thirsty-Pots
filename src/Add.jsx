import React from 'react'
import { Link } from 'react-router-dom'
import Icon from "./components/addicon.png"
import "./Add.css"

const Add = () => {
  return (
    <div className="add">
      <h1>
        Add a plant friend 
        <Link to="/addplant" className="icon">
          <img src={Icon} alt="Add Icon" />
        </Link>
      </h1>
    </div>
  )
}

export default Add
