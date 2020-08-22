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
            <li><NavLink activeClassName="active" exact to="/ejercicios/quinto-grado/matematica/algebra">Álgebra</NavLink></li>
            <li><NavLink activeClassName="active" exact to="/ejercicios/quinto-grado/matematica/divisiones">Divisiones</NavLink></li>
                <li><NavLink activeClassName="active" exact to="/ejercicios/quinto-grado/matematica/multiplicaciones">Multiplicaciones</NavLink></li>
                <li><NavLink activeClassName="active" exact to="/ejercicios/quinto-grado/matematica/numeros-romanos">N°Romanos</NavLink></li>
                <li><NavLink activeClassName="active" exact to="/ejercicios/quinto-grado/matematica/restas">Restas</NavLink></li>
                <li><NavLink activeClassName="active" exact to="/ejercicios/quinto-grado/matematica/redondeo">Redondeo</NavLink></li>
            </div>
            <div class="otherCourses">
               <h4>Más ejercicios</h4>
               <Link class="nola">Español</Link>
               <Link class="ingles" to="/ejercicios/quinto-grado/ingles">Inglés</Link>
               <Link to="/ejercicios/quinto-grado/ciencias" class="ciencias">Ciencias</Link>
               <Link to="/ejercicios/quinto-grado/personal-social" class="humanidades">Personal social</Link>
            </div>
        </div>
        </>
        )
}
export default Rail