import React from "react"
import { Link } from "react-router-dom" 
import { NavLink } from "react-router-dom" 


function Rail(){
        return(
            <>
        <div class="barraDemenú">
            <h3>5to grado</h3>
            <h5>Ejercicios</h5>
            <div class="subVamos">
            <li><NavLink activeClassName="active" exact to="/ejercicios/quinto-grado/ingles/grammar">Grammar</NavLink></li>
                <li><NavLink activeClassName="active" exact to="/ejercicios/quinto-grado/ingles/present-simple">Present simple</NavLink></li>
                <li><NavLink activeClassName="active" exact to="/ejercicios/quinto-grado/ingles/vocabulary">Vocabulary</NavLink></li>
                <li><NavLink activeClassName="active" exact to="/ejercicios/quinto-grado/ingles/past-simple">Past simple</NavLink></li>
                <li><NavLink activeClassName="active" exact to="/ejercicios/quinto-grado/ingles/time">Time</NavLink></li>
            </div>
            <div class="otherCourses">
               <h4>Más ejercicios</h4>
               <Link class="m" to="/ejercicios/quinto-grado/matematica">Matemática</Link>
               <Link class="nola">Español</Link>
               <Link to="/ejercicios/quinto-grado/ciencias" class="ciencias">Ciencias</Link>
               <Link to="/ejercicios/quinto-grado/personal-social" class="humanidades">Personal social</Link>
            </div>
        </div>
        </>
        )
}
export default Rail