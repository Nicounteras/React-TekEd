import React from 'react'
import { Link } from "react-router-dom"
import Nav from "../../nav"
import Foot from "../../foot"

function SextoEjercicios() {
  return (
    <>
    <Nav/>
    <div className="initialOfQuizzes">
        <h3>Elige el área que <span>desees</span></h3>
        <h5><span>¡Y manos a la obra!</span></h5>
        <div className="twotimesthree">
        <Link className="arq qui1" to="/ejercicios/sexto-grado/matematica">
              Matemática
              <p>6 temas</p>
          </Link>
          <Link className="arq qui2" to="/ejercicios/sexto-grado/matematica">
              Español 
              <p>5 artículos</p>
          </Link>
          <Link className="arq qui3" to="/ejercicios/sexto-grado/ciencias">
              Ciencias 
              <p>5 artículos</p>
          </Link>
          <Link className="arq qui4" to="/ejercicios/sexto-grado/ingles">
              Inglés
              <p>6 temas</p>
          </Link>
          <Link className="arq qui5" to="/ejercicios/sexto-grado/humanidades">
              Humanidades
              <p>4 artículos</p>
          </Link>
        </div>
    </div>
    <Foot/>
    </>
  )
} 


export default SextoEjercicios

