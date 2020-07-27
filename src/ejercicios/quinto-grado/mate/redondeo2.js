import React from 'react'
import { Link } from "react-router-dom"
import Nav from "./nav"
import Rail from "./rail"

function redondeoQuintoGradoDos() {
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
                    <p>1. 1041 a la decena más cercana</p>
                  </div>
                  <div>
                    <p>2. 1042 a la decena más cercana</p>
                  </div>
                  <div>
                    <p>3. 1043 a la decena más cercana</p>
                  </div>
                  <div>
                    <p>4. 1044 a la decena más cercana</p>
                  </div>
                  <div>
                    <p>5. 1045 a la decena más cercana</p>
                  </div>
                  <div>
                    <p>6. 1046 a la decena más cercana</p>
                  </div>
                  <div>
                    <p>7. 1048.5 a la decena más cercana</p>
                  </div>
                  <div>
                    <p>8. 1048 a la decena más cercana</p>
                  </div>
                  <div>
                    <p>9. 1050 a la decena más cercana</p>
                  </div>
                  <div>
                    <p>10. 2012 a la decena más cercana</p>
                  </div>
                  <div>
                    <p>11. 1049.9 a la decena más cercana</p>
                  </div>
                  <div class="pepitoJuarez">
                    <p>12. Sonríe, nunca sobra</p>
                  </div>
                  <main>
                    ¡Sonríe makina!
                  </main>
                </div>
              </div>
              <div className="twoButton">
                <Link to="/ejercicios/quinto-grado/matematica/redondeo-2/respuestas"><button className="showAnswers" id="abre0">Ver respuestas</button></Link>
                
                <hr className="flexing"/>
              </div>
            </div>
            <div className="changingPage">
            <Link to="/ejercicios/quinto-grado/matematica/redondeo"><button className="next opaco" id="n2">1</button></Link>
            <button className="next disable" id="n1">2</button>
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

export default redondeoQuintoGradoDos

