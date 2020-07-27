import React from 'react'
import { Link } from "react-router-dom"
import Nav from "../mate/nav"
import Rail from "./rail"

function pastSimpleQuintoGradoRespuestas() {
  return (
   <>
  <div className="showingTheAnswer0">
    <div className="whiteSec">
    <h3 className="bajaEsaVainaI">Answers</h3>      
          <div className="ingles10">
            <h5>1) started</h5>
            <h5>2) wrote</h5>
            <h5>3) jumped</h5>
            <h5>4) met</h5>
            <h5>5) watched</h5>
            <h5>6) drunk</h5>
            <h5>7) liked</h5>
            <h5>8) Screamed</h5>
            <h5>9) went</h5>
            <h5>10) was</h5>
          </div>
      <Link to="/ejercicios/quinto-grado/ingles/past-simple"><button id="cierreCool1" className="entendidoCapitán">Go back</button></Link>
    </div>
    <div className="toggleClose enWhiteSecBig" id="cierre"> 
      <Link to="/ejercicios/quinto-grado/ingles/past-simple">
        <div className="izquierda"></div>
        <div className="derecha"></div>
   </Link>
 </div>
</div>
   </>
  )
} 

export default pastSimpleQuintoGradoRespuestas

