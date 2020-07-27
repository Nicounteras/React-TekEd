import React from "react"
import { Link } from "react-router-dom" 
import { Component } from "react"

function Rail(){
        return(
            <>
        <div class="barraDemenú">
            <h3>5to grado</h3>
            <h5>Ciencias</h5>
            <div class="subVamos">
                <li><Link to="/ejercicios/quinto-grado/ciencias/ecosistemas">Ecosistemas</Link></li>
                <li><Link to="/ejercicios/quinto-grado/ciencias/cadena-alimenticia">Cadena ali.</Link></li>
                <li><Link to="/ejercicios/quinto-grado/ciencias/animales-vertebrados">Ani. Vertebrados</Link></li>
                <li><Link to="/ejercicios/quinto-grado/ciencias/animales-invertebrados">Ani. Invertebrados</Link></li>
                <li><Link to="/ejercicios/quinto-grado/ciencias/adaptaciones">Adaptaciones</Link></li>
            </div>
            <div class="otherCourses">
               <h4>Más cursos</h4>
               <Link to="/ejercicios/quinto-grado/matematica" class="m">Matemática</Link>
               <Link class="nola">Español</Link>
               <Link class="ingles" to="/ejercicios/quinto-grado/ingles">Inglés</Link>
               <Link to="/ejercicios/quinto-grado/personal-social" class="humanidades">Per. Social</Link>
            </div>
        </div>
        </>
        )
}
export default Rail