import React from 'react'
import { Link } from "react-router-dom"
import Nav from "./nav"
import Rail from "./rail"

function algebraQuintoGradoDos() {
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
              
              <div class="bloque">
                <div class="sixTwo">
                  <div>
                    <span>1) Suma</span>
                    <article>
                      <p>84455+</p>
                    <p>63420</p>
                    <p>284128</p>
                    <p className="underline">778292</p>
                    </article>
                  </div>
                  <div>
                    <span>2) Suma</span>
                    <article>
                      <p>21389+</p>
                    <p>95574</p>
                    <p>56137</p>
                    <p className="underline">791211</p>
                    </article>
                  </div>
                  <div>
                    <span>3) Suma</span>
                    <article>
                      <p>929293+</p>
                    <p>293593</p>
                    <p>794837</p>
                    <p className="underline">5945161</p>
                    </article>
                  </div>
                  <div>
                    <span>4) Suma</span>
                    <article>
                      <p>87946+</p>
                    <p>75919</p>
                    <p>55982</p>
                    <p className="underline">66631</p>
                    </article>
                  </div>
                  <div>
                    <span>5) Suma</span>
                    <article>
                      <p>21436+</p>
                    <p>12575</p>
                    <p>43258</p>
                    <p className="underline">109520</p>
                    </article>
                  </div>
                  <div>
                    <span>6) Suma</span>
                    <article>
                      <p>13108+</p>
                    <p>34793</p>
                    <p>94698</p>
                    <p className="underline">696969</p>
                    </article>
                  </div>
                </div>
              
              </div>
              <div className="twoButton">
                <Link to="/ejercicios/quinto-grado/matematica/algebra-2/respuestas"><button className="showAnswers" id="abre0">Ver respuestas</button></Link>
                <Link to="/quizzes/quinto-grado/matematica/algebra" class="doExam">Dar Quiz</Link>
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
            <div className="changingPage">
             <Link to="/ejercicios/quinto-grado/matematica/algebra"> <button className="next opaco" id="n1">1</button></Link>
              <button className="next disable" id="n2">2</button>
            </div>
        </div> 
  </div>
   </>
  )
} 

export default algebraQuintoGradoDos

