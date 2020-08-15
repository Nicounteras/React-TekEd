import React from "react"
import Rail from "./rail"
import Nav from "./nav"
import { Link } from "react-router-dom"

function pastSimpleQuintoGrado (){
    return(
        <>
        <Nav/>
        <div className="buttonDivTo">
        <Link to="/ejercicios/quinto-grado/ingles/past-simple" className="goToOtherArticle cool-link">
        Practicar
</Link></div>
        <Rail/>
        <div className="elMeroMero">
  <div className="blockN1">
    
            </div>
        </div>
        </>
    )
}
export default pastSimpleQuintoGrado