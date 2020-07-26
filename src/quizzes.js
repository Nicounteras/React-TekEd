import React from 'react'
import "./App.css"
import Nav from "./nav"
import Ejercicios from "./ejercicios"
import Foot from "./foot"
import { Link } from "react-router-dom"
import { BrowserRouter as Router, Switch, Route } from "react-router-dom"
import QuintoGrado from "./quizzes/quinto-grado/index"

function Quizzes() {
  return (
    <>
  <Nav/>
  <div className="quizInitialDiv">
      <h3>Quizzes <span className="teked">Tek<span>Ed</span></span></h3>
      <h5>Para comenzar, haz click en tu grado</h5>
      <div className="twotimesfour">
        <Link className="ar arti1">
          Primer grado
          <p>20 quizzes</p>
        </Link>
        <Link className="ar arti2">
          Segundo grado
          <p>20 quizzes</p>
        </Link>
        <Link className="ar arti3">
          Tercer grado
          <p>20 quizzes</p>
        </Link>
        <Link className="ar arti4">
          Cuarto grado
          <p>20 quizzes</p>
        </Link>
        <Link className="ar arti5" to="/quizzes/quinto-grado">
          Quinto grado
          <p>20 quizzes</p>
        </Link>
        <Link className="ar arti6">
          Sexto grado
          <p>20 quizzes</p>
        </Link>
        <Link className="ar arti7">
          Séptimo grado
          <p>20 quizzes</p>
        </Link>
      </div>
    </div>
    <Foot/>
  </> 
  )
} 

export default Quizzes
