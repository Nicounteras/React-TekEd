import React from 'react'
import { Link } from "react-router-dom"
import Nav from "../../nav"
import Foot from "../../foot"

function Quinto() {
  return (
    <>
  <Nav/>
  <div className="initialOfQuizzes">
      <h3>Elige el área que <span>desees</span></h3>
      <h5><span>¡Y manos a la obra!</span></h5>
      <div className="twotimesthree">
          <Link className="arq qui1" to="/ejercicios/quinto-grado/matematica">
              Matemática
              <p>6 temas</p>
          </Link>
          <Link className="arq qui2">
              Español 
              <p>5 artículos</p>
          </Link>
          <Link className="arq qui3" to="/ejercicios/quinto-grado/ciencias">
              Ciencias 
              <p>3 artículos</p>
          </Link>
          <Link className="arq qui4" to="/ejercicios/quinto-grado/ingles">
              Inglés
              <p>6 temas</p>
          </Link>
          <Link className="arq qui5">
              Humanidades
              <p>4 artículos</p>
          </Link>
      </div>
  </div>
  <Foot/>
  </>
  )
} 

export default Quinto

