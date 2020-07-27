import React from "react"
import { Link } from "react-router-dom" 
import { Component } from "react"

function Rail(){
        return(
            <>
        <div class="barraDemenú">
            <h3>5th Grade</h3>
            <h5>English</h5>
            <div class="subVamos">
                <li><Link to="/ejercicios/quinto-grado/ingles/grammar-1">Grammar 1</Link></li>
                <li><Link to="/ejercicios/quinto-grado/ingles/grammar-2">Grammar 2</Link></li>
                <li><Link to="/ejercicios/quinto-grado/ingles/present-simple">Present simple</Link></li>
                <li><Link to="/ejercicios/quinto-grado/ingles/vocabulary">Vocabulary</Link></li>
                <li><Link to="/ejercicios/quinto-grado/ingles/past-simple">Past simple</Link></li>
                <li><Link to="/ejercicios/quinto-grado/ingles/time">Time</Link></li>
            </div>
            <div class="otherCourses">
               <h4>Más cursos</h4>
               <Link class="m" to="/ejercicios/quinto-grado/matematica">Matemática</Link>
               <Link class="nola">Español</Link>
               <Link to="/ejercicios/quinto-grado/ciencias" class="ciencias">Ciencias</Link>
               <Link to="/ejercicios/quinto-grado/personal-social" class="humanidades">Per. Social</Link>
            </div>
        </div>
        </>
        )
}
export default Rail