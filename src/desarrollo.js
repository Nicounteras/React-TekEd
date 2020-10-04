import React from 'react'
import "./App.css"
import Nav from "./devNav"
import Foot from "./foot"
import { Link } from "react-router-dom"
import html from "./images/html/html.png"
import css from "./images/html/css.png"

function Desarrollo() {
  return (
    <>
  <Nav/>
  <div className="devInitial">
      <h3>¡Aprende desarrollo web!</h3>
      <h5>Cursos para principiantes de todas las edades. Crea páginas web y expresa tu creatividad.</h5>
      <div className="twoCourses">
          <article className="htmlArticle">
              <span className="htmlSpan">Recomendado para principiantes</span>
              <img src={html} className="devImage" alt="Html 5"/>
              <h2>HTLM 5</h2>
              <p>HTML 5 es el lenguaje por el cual se crean las estructuras de las páginas web. No necesitas experiencia para empezar a aprenderlo.</p>
              <Link to="/programacion/desarrollo-web/cursos/html/introduccion" className="theDevLink linkHTML">Ir al curso</Link>
          </article>
          <article className="cssArticle">
              <span className="cssSpan">Requisitos: HTML básico</span>
              <img src={css} className="devImage" alt="CSS 3"/>
              <h2>CSS 3</h2>
              <p>CSS sirve para manipular el cómo los elementos de HTML están desplegados en la pantalla, alterando su color, tamaño, posicionamiento y muchos más.</p>
              <Link to="/programacion/desarrollo-web/curso/css/introduccion" className="theDevLink linkCSS">Ir al curso</Link>
          </article>
      </div>
  </div>
    <Foot/>
  </> 
  )
} 

export default Desarrollo
