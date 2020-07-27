import React from 'react'
import { Link } from "react-router-dom"
import Nav from "./nav"
import Rail from "./rail"

function romanosQuintoGrado() {
  return (
   <>
   <Nav/>
   <Rail/>
  <div className="elMeroMero">
  <div className="blockN1">
            <h4>Números romanos</h4>
            <span>¡Resuelve los ejercicios y compara tus respuestas!</span>
            <div className="theFirstDiv">
              <div className="bloque" id="green">
              <div class="exDOS">
                  <div>
                    <p>1) LV</p>
                  </div>
                  <div>
                    <p>2) XX</p>
                  </div>
                  <div>
                    <p>3) XIX</p>
                  </div>
                  <div>
                    <p>4) IV</p>
                  </div>
                  <div>
                    <p>5) C</p>
                  </div>
                  <div>
                    <p>6) LX</p>
                  </div>
                  <div>
                    <p>7) IX</p>
                  </div>
                  <div>
                    <p>8) II</p>
                  </div>
                  <div>
                    <p>9) VIII</p>
                  </div>
                  <div>
                    <p>10) XVI</p>
                  </div>
                  <div>
                    <p>11) XV</p>
                  </div>
                  <div>
                    <p>12) CL</p>
                  </div>
                  <div>
                    <p>13) XC</p>
                  </div>
                  <div>
                    <p>14) D</p>
                  </div>
                  <div>
                    <p>15) M</p>
                  </div>
                  <article class="esfuerzo">
                    <span>¡Vas bien crack!</span>
                  </article>
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
            <div className="twoButton">
                <Link to="/ejercicios/quinto-grado/matematica/numeros-romanos/respuestas"><button className="showAnswers" id="abre0">Ver respuestas</button></Link>
                <Link to="/quizzes/quinto-grado/matematica/numeros-romanos" class="doExam">Dar Quiz</Link>
                <hr className="flexing"/>
              </div>
        </div> 
        </div>
        </div>
   </>
  )
} 

export default romanosQuintoGrado
