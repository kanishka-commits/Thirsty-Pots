import React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Card from "./Card.jsx"
import Add from "./Add.jsx"
import Login from './Login';
import SignUp from './SignUp';
// import Dashboard from './Dashboard'; 

import './App.css'


function Dashboard() {
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

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/login" element={<Login />} />
        <Route path="/" element={<Dashboard />} />
        <Route path="/signup" element={<SignUp />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App
