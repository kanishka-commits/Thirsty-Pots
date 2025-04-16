import React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Card from "./Card.jsx"
import Add from "./Add.jsx"

import './App.css'

function App() {
  return (
    <>
            <div className="cardclass">
              <Card plantname="Tomato" watertime="5:00"/>
              <Card plantname="Pomato" watertime="5:00"/>
              <Card plantname="Comato" watertime="5:00"/>
            </div>
            <div className="appclass"><Add/></div>
          
        </>
  )
}

export default App
