import React from 'react'
import { Link } from "react-router-dom"
import Nav from "./nav"
import Rail from "./rail"

function redondeoQuintoGrado() {
  return (
   <>
   <Nav/>
   <Rail/>
  <div className="elMeroMero">
  <div className="blockN1">
            <h4>Ejercicios de redondeo</h4>
            <span>¡Resuelve los ejercicios y compara tus respuestas!</span>
            <div className="theFirstDiv">
              
              <div class="bloque">
              <div class="exOnce">
                  <div>
                    <p>1) 6828 a la decena más cercana</p>
                  </div>
                  <div>
                    <p>2) 3803 a la decena más cercana</p>
                  </div>
                  <div>
                    <p>3) 3725 a la decena más cercana</p>
                  </div>
                  <div>
                    <p>4) 7997 a la decena más cercana</p>
                  </div>
                  <div>
                    <p>5) 5668 a la decena más cercana</p>
                  </div>
                  <div>
                    <p>6) 2314 a la decena más cercana</p>
                  </div>
                  <div>
                    <p>7) 9491 a la decena más cercana</p>
                  </div>
                  <div>
                    <p>8) 2083 a la decena más cercana</p>
                  </div>
                  <div>
                    <p>9) 2811 a la decena más cercana</p>
                  </div>
                  <div>
                    <p>10) 1059 a la decena más cercana</p>
                  </div>
                  <div>
                    <p>11) 1047 a la decena más cercana</p>
                  </div>
                  <div class="pepitoJuarez">
                    <p>12. Está bueno, no?</p>
                  </div>
                  <main>
                    ¡Sonríe makina!
                  </main>
                </div>
              </div>
              <div className="twoButton">
                <Link to="/ejercicios/quinto-grado/matematica/algebra-2/respuestas"><button className="showAnswers" id="abre0">Ver respuestas</button></Link>
                <hr className="flexing"/>
              </div>
            </div>
            {/* <!-- <div id="div2" class="the2ndDiv hide">
              <div class="bloque">
                
              </div>
              <div class="twoButton">
                <button class="showAnswers" id="abre0">Ver respuestas</button>
                <hr style="flex: 1;">
              </div>
            </div> --> */}
           
        </div> 
  </div>
   </>
  )
} 

export default redondeoQuintoGrado

