import React from 'react'
import { Link } from "react-router-dom"
import Nav from "./nav"
import Rail from "./rail"

function algebraQuintoGrado() {
  return (
   <>
   <Nav/>
   <Rail/>
   <a href="https://www.youtube.com/watch?v=SyCS1V-5Uc4" target="blank" class="verEx">Ver explicación</a>
  <div className="elMeroMero">
  <div className="blockN1">
            <h4>Ejercicios de álgebra</h4>
            <span>¡Resuelve los ejercicios y compara tus respuestas!</span>
            <div className="theFirstDiv">
              <div className="bloque" id="green">
                <div className="exDOS">
                  <div>
                    <p>1) 106 = 42 + ? + 32</p>
                  </div>
                  <div>
                    <p>2) 100 = 4 + ? + 32</p>
                  </div>
                  <div>
                    <p>3) 500 = 320 + 2 -1 + ? + 32</p>
                  </div>
                  <div>
                    <p>4) 10 = 42 + ? + 32</p>
                  </div>
                  <div>
                    <p>5) 240 = 42 + ? + 32</p>
                  </div>
                  <div>
                    <p>6) 120 = 41 + ? + 35</p>
                  </div>
                  <div>
                    <p>7) 21 = 42 + ? + 20</p>
                  </div>
                  <div>
                    <p>8) 30 = 415 + ? + 2</p>
                  </div>
                  <div>
                    <p>9) 111 = 110 + ? + -1</p>
                  </div>
                  <div>
                    <p>10) -2 = 42 + ? + 10</p>
                  </div>
                  <div>
                    <p>11) 106 = 53 x ?</p>
                  </div>
                  <div>
                    <p>12) 106 = 26.5 x ?</p>
                  </div>
                  <div>
                    <p>13) 106 = 13.25 x ?</p>
                  </div>
                  <div>
                    <p>14) 100 = 80 + ? + 32</p>
                  </div>
                  <div>
                    <p>15) 19 = 19 x 0 + ?</p>
                  </div>
                  <article class="esfuerzo">
                    <span>¡Vas bien crack!</span>
                  </article>
                </div>
              </div>
              <div className="twoButton">
                <Link to="/ejercicios/quinto-grado/matematica/algebra/respuestas"><button className="showAnswers" id="abre0">Ver respuestas</button></Link>
                <Link to="/quizzes/quinto-grado/matematica/algebra" class="doExam">Dar Quiz</Link>

                <hr className="flexing"/>
              </div>
          
            {/* <!-- <div id="div2" class="the2ndDiv hide">
              <div class="bloque">
                
              </div>
              <div class="twoButton">
                <button class="showAnswers" id="abre0">Ver respuestas</button>
                <hr style="flex: 1;">
              </div>
            </div> --> */}
            <div className="changingPage">
            <button className="next disable" id="n1">1</button>
            <Link to="/ejercicios/quinto-grado/matematica/algebra-2"><button className="next opaco" id="n2">2</button></Link>
            </div>
        </div> 
        </div>
        </div>
   </>
  )
} 

export default algebraQuintoGrado
