import React from 'react'
import { Link } from "react-router-dom"
import Nav from "../mate/nav"
import Rail from "./rail"

function vocabularyQuintoGradoRespuestas() {
  return (
   <>
  <div className="showingTheAnswer0">
    <div className="whiteSec">
    <h3 className="bajaEsaVainaI">Answers</h3>      
          <div className="ingles8">
            <h5>1) Bunny</h5>
            <h5>2) Relax</h5>
            <h5>3) Awful</h5>
            <h5>4) Begin</h5>
            <h5>5) Enormous</h5>
            <h5>6) Frightned</h5>
            <h5>7) Joy</h5>
            <h5>8) Impressive</h5>
          </div>
      <Link to="/ejercicios/quinto-grado/ingles/vocabulary"><button id="cierreCool1" className="entendidoCapitán">Go back</button></Link>
    </div>
    <div className="toggleClose enWhiteSecBig" id="cierre"> 
      <Link to="/ejercicios/quinto-grado/ingles/vocabulary">
        <div className="izquierda"></div>
        <div className="derecha"></div>
   </Link>
 </div>

</div>

   </>
  )
} 

export default vocabularyQuintoGradoRespuestas

