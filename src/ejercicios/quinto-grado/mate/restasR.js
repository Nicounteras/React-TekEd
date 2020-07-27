import React from 'react'
import { Link } from "react-router-dom"
import Nav from "./nav"
import Rail from "./rail"

function restasQuintoGradoRespuestas() {
  return (
   <>
<div className="showingTheAnswer1">
<div class="whiteSec">
    <h3 class="bajaEsaVaina">Respuestas de los ejercicios</h3> 
    <h5><span>1)</span> 122163</h5>
    <h5><span>2)</span> 231929</h5>
    <h5><span>3)</span> 788709</h5>
    <h5><span>4)</span> 85381</h5>
    <h5><span>5)</span> 791342</h5>
    <h5><span>6)</span> 1133911</h5>
    <Link to="/ejercicios/quinto-grado/matematica/restas">
    <button id="cierreCool1" class="entendidoCapitán">Volver a los ejercicios</button>
    </Link>
  </div>
  <div className="toggleClose" id="cierre2">
    <Link to="/ejercicios/quinto-grado/matematica/restas">
      <div className="izquierda"></div>
      <div className="derecha"></div>
 </Link>
</div>
  </div>
   </>
  )
} 

export default restasQuintoGradoRespuestas

