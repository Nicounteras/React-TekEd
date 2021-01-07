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
            <li><NavLink activeClassName="active" exact to="/ejercicios/sexto-grado/ciencias/atomos">Átomos</NavLink></li>
            <li><NavLink activeClassName="active" exact to="/ejercicios/sexto-grado/ciencias/materia">Materia</NavLink></li>
                <li><NavLink activeClassName="active" exact to="/ejercicios/sexto-grado/ciencias/distintos-materiales">Dist. materiales</NavLink></li>
                <li><NavLink activeClassName="active" exact to="/ejercicios/sexto-grado/ciencias/tabla-periodica">Tabla Period.</NavLink></li>
            </div>
            <div class="otherCourses">
               <h4>Más cursos</h4>
               <Link to="/ejercicios/sexto-grado/matematica" class="m">Matemática</Link>
               <Link class="nola">Español</Link>
               <Link class="ingles" to="/ejercicios/sexto-grado/ingles">Inglés</Link>
               <Link to="/ejercicios/sexto-grado/personal-social" class="humanidades">Personal Social</Link>
            </div>
        </div>
        </>
        )
}
export default Rail