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
            <li><NavLink activeClassName="active" exact to="/ejercicios/quinto-grado/ciencias/adaptaciones">Adaptaciones</NavLink></li>
            <li><NavLink activeClassName="active" exact to="/ejercicios/quinto-grado/ciencias/animales-invertebrados">Ani. Invertebrados</NavLink></li>
                <li><NavLink activeClassName="active" exact to="/ejercicios/quinto-grado/ciencias/animales-vertebrados">Ani. Vertebrados</NavLink></li>
                <li><NavLink activeClassName="active" exact to="/ejercicios/quinto-grado/ciencias/cadena-alimenticia">Cadena ali.</NavLink></li>
                <li><NavLink activeClassName="active" exact to="/ejercicios/quinto-grado/ciencias/ecosistemas">Ecosistemas</NavLink></li>
            </div>
            <div class="otherCourses">
               <h4>Más cursos</h4>
               <Link to="/ejercicios/quinto-grado/matematica" class="m">Matemática</Link>
               <Link class="nola">Español</Link>
               <Link class="ingles" to="/ejercicios/quinto-grado/ingles">Inglés</Link>
               <Link to="/ejercicios/quinto-grado/personal-social" class="humanidades">Personal Social</Link>
            </div>
        </div>
        </>
        )
}
export default Rail