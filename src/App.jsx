import React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Card from "./Card.jsx"
import Add from "./Add.jsx"
import AddPlant from "./AddPlant.jsx"
import './App.css'

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={
          <div>
            <div className="cardclass">
              <Card plantname="Tomato" watertime="5:00"/>
              <Card plantname="Pomato" watertime="5:00"/>
              <Card plantname="Comato" watertime="5:00"/>
            </div>
            <div className="appclass"><Add/></div>
          </div>
        } />
        <Route path="/addplant" element={<AddPlant />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App
