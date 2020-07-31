import React from "react"
import { Link } from "react-router-dom" 
import { NavLink } from "react-router-dom" 
import { Component } from "react"

function Rail(){
        return(
            <>
        <div class="barraDemenú">
            <h3>5to grado</h3>
            <h5>Ciencias</h5>
            <div class="subVamos">
                <li><NavLink activeClassName="active" exact to="/aprende/quinto-grado/ciencias/ecosistemas">Ecosistemas</NavLink></li>
                <li><NavLink activeClassName="active" exact to="/aprende/quinto-grado/ciencias/cadena-alimenticia">Cadena ali.</NavLink></li>
                <li><NavLink activeClassName="active" exact to="/aprende/quinto-grado/ciencias/animales-vertebrados">Ani. Vertebrados</NavLink></li>
                <li><NavLink activeClassName="active" exact to="/aprende/quinto-grado/ciencias/animales-invertebrados">Ani. Invertebrados</NavLink></li>
                <li><NavLink activeClassName="active" exact to="/aprende/quinto-grado/ciencias/adaptaciones">Adaptaciones</NavLink></li>
            </div>
            <div class="otherCourses">
               <h4>Más cursos</h4>
               <Link to="/aprende/quinto-grado/matematica" class="m">Matemática</Link>
               <Link class="nola">Español</Link>
               <Link class="ingles" to="/aprende/quinto-grado/ingles">Inglés</Link>
               <Link to="/aprende/quinto-grado/personal-social" class="humanidades">Per. Social</Link>
            </div>
        </div>
        </>
        )
}
export default Rail