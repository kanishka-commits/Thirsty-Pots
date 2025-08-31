import React,{useState} from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Card from "./Card.jsx"
import Add from "./Add.jsx"
import Login from './Login';
import SignUp from './SignUp';

// import Dashboard from './Dashboard'; 

import './App.css'


function Dashboard() {
  const [plantList,uptPlantList]=useState([
    { 
      id:1,
      name:"Potato",
      time:"2"
    },
    {
      id:2,
      name:"Tomato",
      time:"3"
    }
  ]);

  const addPlant=(prop)=>{
    uptPlantList([...plantList,{
      name:prop.name, 
      id:prop.id, 
      time:prop.time
    }])
  }

  return (
    <div className="app">
      <div className="card-class">
        {plantList.map((x)=>{
          return(
            <Card key={x.id} plantName={x.name} waterTime={x.time}/>
          )
        })}
        </div>
  
      <div className="app-class">
        <Add onAdd={addPlant}/>
      </div>
      </div>
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
