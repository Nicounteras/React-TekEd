import React from 'react'
import { Link } from "react-router-dom"
import Nav from "./nav"
import Rail from "./rail"

function divisionesQuintoGrado() {
  return (
    <>
    <Nav/>
    <div className="buttonDivTo">
    <Link to="/ejercicios/quinto-grado/matematica/divisiones" className="goToOtherArticle cool-link">
    Practicar
</Link>
</div>
    <Rail/>
   <div className="elMeroMero">
   <div className="blockN1">
             <h4>Álgebra básica</h4>
             <p className="pOfQuizzes">¿Cómo se resuleven los ejercicios de álgebra? Descúbrelo en éste artículo</p>
           </div>
           </div>
    </>
  )
} 

export default divisionesQuintoGrado
