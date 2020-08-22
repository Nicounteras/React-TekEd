import React from 'react'
import "./App.css"
import Nav from "./devNav"
import Foot from "./foot"
import { Link } from "react-router-dom"

function MateInitial() {
  return (
    <>
  <Nav/>
  <div className="devInitial">
     <h3>Matemáticas</h3>
     <h5>¡Elige tu grado y empieza a aprender!</h5>
     </div>
    <Foot/>
  </> 
  )
} 

export default MateInitial