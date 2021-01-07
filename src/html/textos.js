import React, { Component } from 'react'
import Rail from "./rail"
import Nav from "./nav"
import { Link } from "react-router-dom"

export default function TextosHTML () {
        return (
            <>
            <Nav/>
            <Rail/>
            <div className="devCourse">
            <h1 id="htmlHead">Textos en HTML</h1>
                <h4>¿Cómo puedo colocar textos en HTML?, apréndelo en este artículo.</h4>
             <div className="center margin20px-0-0-0">
                 <span className="coding-example lato">
                 &lt;p&gt;Aprende acerca de los textos en HTML&lt;/p&gt;
                 </span>
             </div>
             <h5>
                 Primero que nada, ¿en qué parte de el código deben estar incluido el contenido visual?
             </h5>
             <p>El contenido visual debe estar dentro de la etiqueta <span className="htmlNewLink">body</span></p>
             <div className="coding-example lato margin30px-0-0-0">
                 &lt;body&gt; 
                 <br/><br/>
                 &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                 Todo el contenido visual de tu página web debe ir dentro de la etiqueta body
                 <br/><br/>
                 &lt;/body&gt;
                 </div>
                <div id="twoButtonDev">
                <Link to="/programacion/desarrollo-web/cursos/html/meta-tags" className="theDevLink devBTN">&lArr; Meta-tags</Link>
                <div className="flexing"/>
                <Link to="/programacion/desarrollo-web/cursos/html/divs" className="theDevLink devBTN">Divs &rArr;</Link>
                </div>
            </div>
            </>
        )
}