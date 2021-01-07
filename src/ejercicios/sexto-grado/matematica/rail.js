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
            <li><NavLink activeClassName="active" exact to="/ejercicios/sexto-grado/matematica/divisiones">Divisiones</NavLink></li>
            <li><NavLink activeClassName="active" exact to="/ejercicios/sexto-grado/matematica/exponenciales">Exponenciales</NavLink></li>
                <li><NavLink activeClassName="active" exact to="/ejercicios/sexto-grado/matematica/fracciones">Fracciones</NavLink></li>
                <li><NavLink activeClassName="active" exact to="/ejercicios/sexto-grado/matematica/multiplicaciones">Multiplicaciones</NavLink></li>
                <li><NavLink activeClassName="active" exact to="/ejercicios/sexto-grado/matematica/restas">Restas</NavLink></li>
                <li><NavLink activeClassName="active" exact to="/ejercicios/sexto-grado/matematica/sumas">Sumas</NavLink></li>
            </div>
            <div class="otherCourses">
               <h4>Más ejercicios</h4>
               <Link class="nola">Español</Link>
               <Link class="ingles" to="/ejercicios/sexto-grado/ingles">Inglés</Link>
               <Link to="/ejercicios/sexto-grado/ciencias" class="ciencias">Ciencias</Link>
               <Link to="/ejercicios/sexto-grado/personal-social" class="humanidades">Humanidades</Link>
            </div>
        </div>
        </>
        )
}
export default Rail