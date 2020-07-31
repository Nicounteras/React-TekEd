import React from 'react'
import "./App.css"
import Nav from "./nav"
import Foot from "./foot"
import { Link } from "react-router-dom"

function Ejercicios() {
  return (
    <>
  <Nav/>
  <div className="quizInitialDiv waiting">
      <h3>Ejercicios <span className="teked">Tek<span>Ed</span></span></h3>
      <h5>Para comenzar, haz click en tu grado</h5>
    <div className="central2x2">
      <Link to="/ejercicios/quinto-grado"><button className="bigButtonRed">5to Grado</button></Link>
      <Link to="/ejercicios/sexto-grado"><button className="bigButtonPurple">6to Grado</button></Link>
    </div>
    
     {/*  <div className="twotimesfour">
        <Link className="ar arti1">
          Primer grado
          <p>20 artículos</p>
        </Link>
        <Link className="ar arti2">
          Segundo grado
          <p>20 artículos</p>
        </Link>
        <Link className="ar arti3">
          Tercer grado
          <p>20 artículos</p>
        </Link>
        <Link className="ar arti4">
          Cuarto grado
          <p>20 artículos</p>
        </Link>
        <Link className="ar arti5" to="/ejercicios/quinto-grado">
          Quinto grado
          <p>20 artículos</p>
        </Link>
        <Link className="ar arti6">
          Sexto grado
          <p>20 artículos</p>
        </Link>
        <Link className="ar arti7">
          Séptimo grado
          <p>20 artículos</p>
        </Link>
      </div> */}
    </div>
    <Foot/>
  </> 
  )
} 

export default Ejercicios
