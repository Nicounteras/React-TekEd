import React from "react"
import { Link } from "react-router-dom" 
import { NavLink } from "react-router-dom" 
import { Component } from "react"

function Rail(){
        return(
            <>
        <div class="barraDemenú">
            <h3>5th Grade</h3>
            <h5>English</h5>
            <div class="subVamos">
                <li><NavLink activeClassName="active" exact to="/aprende/quinto-grado/ingles/grammar">Grammar</NavLink></li>
                <li><NavLink activeClassName="active" exact to="/aprende/quinto-grado/ingles/present-simple">Present simple</NavLink></li>
                <li><NavLink activeClassName="active" exact to="/aprende/quinto-grado/ingles/vocabulary">Vocabulary</NavLink></li>
                <li><NavLink activeClassName="active" exact to="/aprende/quinto-grado/ingles/past-simple">Past simple</NavLink></li>
                <li><NavLink activeClassName="active" exact to="/aprende/quinto-grado/ingles/time">Time</NavLink></li>
            </div>
            <div class="otherCourses">
               <h4>Más cursos</h4>
               <Link class="m" to="/aprende/quinto-grado/matematica">Matemática</Link>
               <Link class="nola">Español</Link>
               <Link to="/aprende/quinto-grado/ciencias" class="ciencias">Ciencias</Link>
               <Link to="/aprende/quinto-grado/personal-social" class="humanidades">Personal Social</Link>
            </div>
        </div>
        </>
        )
}
export default Rail