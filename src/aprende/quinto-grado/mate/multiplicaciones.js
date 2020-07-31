import React from 'react'
import { Link } from "react-router-dom"
import Nav from "./nav"
import Rail from "./rail"

function multiplicacionesQuintoGrado() {
  return (
   <>
   <Nav/>
   <Rail/>
   <a href="https://www.youtube.com/watch?v=SyCS1V-5Uc4" target="blank" class="verEx">Ver explicación</a>
  <div className="elMeroMero">
  <div className="blockN1">
            <h4>Álgebra básica</h4>
            <p className="pOfQuizzes">¿Cómo se resuleven los ejercicios de álgebra? Descúbrelo en éste artículo</p>
          </div>
          </div>
   </>
  )
} 

export default multiplicacionesQuintoGrado
