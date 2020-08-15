import React from "react"
import { Link } from "react-router-dom" 
import { NavLink } from "react-router-dom" 


function Rail(){
        return(
            <>
        <div class="barraDemenú">
            <h3>5to grado</h3>
            <h5>Personal social</h5>
            <div class="subVamos">
                <li><NavLink exact to="/aprende/quinto-grado/personal-social/contexto-peruano" activeClassName="active">Cont. Peruano</NavLink></li>
                <li><NavLink exact to="/aprende/quinto-grado/personal-social/egipto" activeClassName="active">Egipto</NavLink></li>
                <li><NavLink exact to="/aprende/quinto-grado/personal-social/geografia-peruana" activeClassName="active">Geo. Peruana</NavLink></li>
                <li><NavLink exact to="/aprende/quinto-grado/personal-social/puntos-cardinales" activeClassName="active">Puntos cardinales</NavLink></li>
            </div>
            <div class="otherCourses">
               <h4>Más cursos</h4>
               <Link to="/aprende/quinto-grado/matematica" class="m">Matemática</Link>
               <Link class="nola">Español</Link>
               <Link class="ingles" to="/aprende/quinto-grado/ingles">Inglés</Link>
               <Link to="/aprende/quinto-grado/ciencias" class="ciencias">Ciencias</Link>
            </div>
        </div>
        </>
        )
}
export default Rail