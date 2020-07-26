import React from 'react'
import "./App.css"
import { Link } from "react-router-dom"

function Nav() {
  return (
    <>
    <nav id="inicio" className="initialNav">
    <a href="/" className="Tekito"><h1>Tek<span>Ed</span></h1></a>
    <article id="menu" className="theMenuLinks">
      <Link to="/ejercicios">
        <li className="cool-link">Aprende en TekEd</li>
      </Link>
       <Link to="/quizzes">
       <li className="cool-link">Quizzes</li>
       </Link>
       <a href="https://docs.google.com/forms/d/e/1FAIpQLSegwzDAMFV7s8iMbmxIhdG5-YSSpD63l9YxFL-xTLrdiakZug/viewform?vc=0&c=0&w=1" target="blank" className="feedback">¡Danos tu feedback!</a>
       {/* <Link to="/store">
       <li className="cool-link">Tienda</li>
       </Link> */}
    </article>
    <i className="fas fa-bars" id="theNewResp"></i>
</nav>
<div className="respNav">
  <article className="alineaos">
      <a href="/">Inicio</a>
      <a href="/nosotros">Acerca de</a>
      <a href="/como-funciona-teked">Cómo funciona</a>
  </article>
  </div>
    </>
  )
} 

export default Nav
