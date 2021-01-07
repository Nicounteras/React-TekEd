import React, { useState } from 'react'
import Nav from "./devNav"
import Foot from "./foot"
import { Link, NavLink } from "react-router-dom"
import img1 from "./images/blog-programacion/what.jpg"
import img2 from "./images/blog-programacion/types.jpg"
import img3 from "./images/blog-programacion/cs.jpg"

export default function CodingInit (){
 return(
    <>
    <Nav/>
   <div className="create-Code-Back">
     <div className="create-Code">
     <h2><span>&lt; Crea un mejor código /&gt;</span></h2>
     <h5><span>Te ayudamos con lo que necesites para aprender a programar</span></h5>
     </div>
   </div>
   <div className="doodles">
   <div className="griding-3">
     <article className="back-black-rgba95">
       <h2>&lt; Cursos /&gt;</h2>
       <li>Aprende HTML</li>
       <li>Aprende CSS</li>
       <i class="fas fa-chalkboard-teacher"></i>
       <Link to="/programacion/laptops" class="btn-dev blue-dev-btn">Quiero aprender</Link>
     </article>
     <article className="back-blue-rgba95">
       <h2>&lt; Libros /&gt;</h2>
       <li>Libros de HTML y CSS</li>
       <li>Libros de JavaScript</li>
       <li>Libros de Python</li>
       <i class="fas fa-book-open"></i>
       <Link to="/programacion/laptops" class="btn-dev purple-dev-btn">Quiero un libro</Link>
     </article>
     <article className="back-purple-rgba95">
       <h2>&lt; Laptops /&gt;</h2>
       <li>Para desarrollo web</li>
       <li>Para crear videojuegos</li>
       <i class="fas fa-laptop-code"></i>
       <Link to="/programacion/laptops" class="btn-dev dark-dev-btn">Quiero una laptop</Link>
     </article>
   </div>
   </div>
   <div className="doodles">
     <div className="blog-code">
     <h3 className="fredoka">Blog</h3>
     <div className="griding-3-code">
      <Link to="/programacion/desarrollo-web/blog/por-que-programar">
      <article>
         <img src={img1} height="150" width="150"></img>
         <h4 className="fredoka">Por qué aprender a programar</h4>
       </article>
      </Link>
       <Link to="/programacion/desarrollo-web/blog/tips-para-aprender">
       <article>
         <img src={img2} height="150" width="150"></img>
         <h4 className="fredoka">Tips para aprender a programar</h4>
       </article>
       </Link>
      <Link to="/programacion/desarrollo-web/blog/ciencias-de-la-computacion">
      <article>
         <img src={img3} height="150" width="150"></img>
         <h4 className="fredoka">Qué es la ciencia de la computación</h4>
       </article>
      </Link>
     </div>
     <div className="flex-1"/>
     <Link className="goBlog cool-link" to="/blog">Ir al blog</Link>
     <div className="flex-1"/>
     </div>
   </div>
  <Foot/>
   </>
 )
}