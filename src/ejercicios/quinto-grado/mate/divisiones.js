import React from 'react'
import { Link } from "react-router-dom"
import Nav from "./nav"
import Rail from "./rail"

function divisionesQuintoGrado() {
  return (
   <>
   <Nav/>
   <Rail/>
  <div className="elMeroMero">
  <div className="blockN1">
            <h4>Ejercicios de divisiones</h4>
            <span>¡Resuelve los ejercicios y compara tus respuestas!</span>
            <div className="theFirstDiv">
              <div className="bloque" id="green">
              <div class="exDOS">
                  <div>
                    <p>1) 30/4</p>
                  </div>
                  <div>
                    <p>2) 50/4</p>
                  </div>
                  <div>
                    <p>3) 70/4</p>
                  </div>
                  <div>
                    <p>4) 130/4</p>
                  </div>
                  <div>
                    <p>5) 150/4</p>
                  </div>
                  <div>
                    <p>6) 400/20</p>
                  </div>
                  <div>
                    <p>7) 300/75</p>
                  </div>
                  <div>
                    <p>8) 5/4</p>
                  </div>
                  <div>
                    <p>9) 4/5</p>
                  </div>
                  <div>
                    <p>10) 3/12</p>
                  </div>
                  <div>
                    <p>11) 12/3</p>
                  </div>
                  <div>
                    <p>12) 15/4</p>
                  </div>
                  <div>
                    <p>13) 4/16</p>
                  </div>
                  <div>
                    <p>14) 10/20</p>
                  </div>
                  <div>
                    <p>15) 30/30 + 40/2</p>
                  </div>
                  <article class="esfuerzo">
                    <span>¿Increíble, no?</span>
                  </article>
                </div>
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
                <Link to="/ejercicios/quinto-grado/matematica/divisiones/respuestas"><button className="showAnswers" id="abre0">Ver respuestas</button></Link>
                <Link to="/quizzes/quinto-grado/matematica/divisiones" class="doExam">Dar Quiz</Link>
                <hr className="flexing"/>
              </div>
        </div> 
        </div>
     
   </>
  )
} 

export default divisionesQuintoGrado
