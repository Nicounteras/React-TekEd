import React from 'react'
import { Link } from "react-router-dom"
import Nav from "../mate/nav"
import Rail from "./rail"

function presentSQuintoGradoRespuestas() {
  return (
   <>
  <div className="showingTheAnswer0">
    <div className="whiteSec">
    <h3 className="bajaEsaVainaI">Answers</h3>      
          <div className="ingles10">
            <h5>1) Does-Like</h5>
            <h5>2) Doesn't</h5>
            <h5>3) Visit</h5>
            <h5>4) Go</h5>
            <h5>5) Do</h5>
            <h5>6) Are</h5>
            <h5>7) Prefers</h5>
            <h5>8) Don't</h5>
            <h5>9) Lives</h5>
            <h5>10) Eat</h5>
          </div>
      <Link to="/ejercicios/quinto-grado/ingles/present-simple"><button id="cierreCool1" className="entendidoCapitán">Go back</button></Link>
    </div>
    <div className="toggleClose enWhiteSecBig" id="cierre"> 
      <Link to="/ejercicios/quinto-grado/ingles/present-simple">
        <div className="izquierda"></div>
        <div className="derecha"></div>
   </Link>
 </div>

</div>

   </>
  )
} 

export default presentSQuintoGradoRespuestas

