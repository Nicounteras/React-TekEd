import React from "react"
import { Link } from "react-router-dom" 
import { NavLink } from "react-router-dom" 
import { Component } from "react"

function Rail(){
        return(
            <>
        <div class="barraDemenú">
            <h3>5to grado</h3>
            <h5>Matemática</h5>
            <div class="subVamos">
                <li><NavLink activeClassName="active" exact to="/aprende/quinto-grado/matematica/algebra">Álgebra</NavLink></li>
                <li><NavLink activeClassName="active" exact to="/aprende/quinto-grado/matematica/restas">Restas</NavLink></li>
                <li><NavLink activeClassName="active" exact to="/aprende/quinto-grado/matematica/redondeo">Redondeo</NavLink></li>
                <li><NavLink activeClassName="active" exact to="/aprende/quinto-grado/matematica/multiplicaciones">Multiplicaciones</NavLink></li>
                <li><NavLink activeClassName="active" exact to="/aprende/quinto-grado/matematica/divisiones">Divisiones</NavLink></li>
                <li><NavLink activeClassName="active" exact to="/aprende/quinto-grado/matematica/numeros-romanos">N°Romanos</NavLink></li>
            </div> 
            <div class="otherCourses">
               <h4>Más cursos</h4>
               <Link class="nola">Español</Link>
               <Link class="ingles" to="/aprende/quinto-grado/ingles">Inglés</Link>
               <Link to="/aprende/quinto-grado/ciencias" class="ciencias">Ciencias</Link>
               <Link to="/aprende/quinto-grado/personal-social" class="humanidades">Personal Social</Link>
            </div>
        </div>
        </>
        )
}
export default Rail