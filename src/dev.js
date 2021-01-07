import React from 'react'
import "./App.css"
import Nav from "./devNav"
import Foot from "./foot"
import { Link } from "react-router-dom"

function InitialDev() {
  return (
    <>
  <Nav/>
  <div className="devInitial">
     <h3>Desarrollo web</h3>
     <h5>Aprende y equípate para empezar a escribir y crear código</h5>
     <div className="startingDev">
         <article className="borderBlue">
             <h2>Aprende las tecnologías que conforman la web con tutoriales dinámicos y prácticos.</h2>
             <p>Cursos de HTML y CSS para todas las edades. Aprende donde y cuando quieras.</p>
             <Link to="/programacion/desarrollo-web/cursos" className="blueLink">¡Quiero aprender!</Link>
         </article>
         <article className="borderGreen">
<h2>¡Equípate con los mejores libros y laptops!</h2>
<p>Te ayudamos a encontrar material valioso para mejorar tus conocimientos y tu rendimiento.</p>
<Link to="/programación" className="greenLink">¡Quiero explorar!</Link>
         </article>
     </div>
  </div>
  <h2 id="titleForFind">Encuentra lo que necesites y haz la <span>diferencia</span></h2>
  <div className="threeGoDev">
       <article>
         <h5>Aprende</h5>
         <Link className="beforeGo HtmlGo" to="/programacion/desarrollo-web/cursos/html/introduccion"><i class="fas fa-code"></i>Curso de HTMl 5</Link>
         <Link className="beforeGo cssGo" to="/programacion/desarrollo-web/cursos/css/introduccion"><i class="fab fa-css3-alt" id="css"></i>Curso de CSS 3</Link>
       </article>
       <article>
         <h5>Explora</h5>
         <Link className="beforeGo laptopGo"><i class="fas fa-laptop-code"></i>Laptops de desarrolladores</Link>
         <Link className="beforeGo booksGo"><i class="fas fa-book"></i>Libros de HTML y CSS</Link>
         <Link className="beforeGo javaSGo"><i class="fab fa-js"></i>Libros de JavaScript</Link>
         <Link className="beforeGo pyGo"><i class="fab fa-python"></i>Libros de Python</Link>
         {/* <Link className="beforeGo cGo">Libros de C++</Link>
         <Link className="beforeGo javaGo">Libros de Java</Link> */}
       </article>
       <article>
         <h5>Blog</h5>
         <Link className="beforeGo whyGo" to="/programacion/desarrollo-web/blog/por-que-programar"><i class="fas fa-laptop"></i>Por qué aprender a programar</Link>
         <Link className="beforeGo fbGo" to="/programacion/desarrollo-web/blog/tips-para-aprender"><i class="fas fa-rocket"></i>Tips para aprender a programar</Link>
         <Link className="beforeGo whatGo paddingExtra" to="/programacion/desarrollo-web/blog/ciencias-de-la-computacion"><i class="fas fa-laptop-code"></i>Qué es la ciencia de la computación</Link>
       </article>
     </div>
    <Foot/>
  </> 
  )
} 

export default InitialDev