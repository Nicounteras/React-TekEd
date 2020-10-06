import React, {useState} from "react"
import Nav from "./nav"
import Foot from "./foot"
import { Link, NavLink } from "react-router-dom"
import img1 from "./images/blog-programacion/what.jpg"
import img2 from "./images/blog-programacion/types.jpg"
import img3 from "./images/blog-programacion/cs.jpg"

function Blog(){
    const [toggleNav, setToggleNav] = useState(false)
    return(
        <>
        {/* navigation bar */}
     <Nav/>
     <div className="doodles">
     <div className="padding40px-10vw-div black-theme-opacity9 align-items-center lato">
             <h1 className="font-50 text-center fredoka">Blog</h1>
             </div>
             <div className="padding40px-10vw-div background-black-purple align-items-center">
      <h2 className="font-33 lato margin0-0-20px-0">Aprendizaje</h2>
      <div className="griding-3-code">
      <Link to="/programacion/desarrollo-web/blog/porque-programar">
      <article>
         <img src={img1} height="150" width="150"></img>
         <h4 className="fredoka">Cómo aprender desde casa</h4>
       </article>
      </Link>
       <Link to="/programacion/desarrollo-web/blog/tips-para-aprender">
       <article>
         <img src={img2} height="150" width="150"></img>
         <h4 className="fredoka">Tips para mejorar en matemáticas</h4>
       </article>
       </Link>
      <Link to="/programacion/desarrollo-web/blog/ciencias-de-la-computacion">
      <article>
         <img src={img3} height="150" width="150"></img>
         <h4 className="fredoka">Cómo redactar buenos ensayos</h4>
       </article>
      </Link>
      </div>
     </div>
     <div className="padding40px-10vw-div background-black-blue align-items-center">
      <h2 className="font-33 lato margin0-0-20px-0">Programación</h2>
      <div className="griding-3-code">
      <Link to="/programacion/desarrollo-web/blog/porque-programar">
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
     </div>
     </div>
    
        <Foot/>
      </> 
      )
}

export default Blog