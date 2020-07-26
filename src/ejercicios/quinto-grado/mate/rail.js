import React from "react"
import { Link } from "react-router-dom" 
import { Component } from "react"

function Rail(){
        return(
            <>
        <div class="barraDemenú">
            <h3>5to grado</h3>
            <h5>Matemática</h5>
            <div class="subVamos">
                <li><Link to="/ejercicios/quinto-grado/matematica/algebra">Álgebra</Link></li>
                <li><Link to="/ejercicios/quinto-grado/matematica/restas">Restas</Link></li>
                <li><Link to="/ejercicios/quinto-grado/matematica/redondeo">Redondeo</Link></li>
                <li><Link to="/ejercicios/quinto-grado/matematica/multiplicaciones">Multiplicaciones</Link></li>
                <li><Link to="/ejercicios/quinto-grado/matematica/divisiones">Divisiones</Link></li>
                <li><Link to="/ejercicios/quinto-grado/matematica/numeros-romanos">N°Romanos</Link></li>
            </div>
            <div class="otherCourses">
               <h4>Más cursos</h4>
               <Link class="nola">Español</Link>
               <Link class="ingles">Inglés</Link>
               <Link to="/ejercicios/quinto-grado/ciencias" class="ciencias">Ciencias</Link>
               <Link to="/ejercicios/quinto-grado/personal-social" class="humanidades">Per. Social</Link>
            </div>
        </div>
        </>
        )
}
export default Rail