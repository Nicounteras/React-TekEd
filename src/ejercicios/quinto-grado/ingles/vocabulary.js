import React from "react"
import Rail from "./rail"
import Nav from "../mate/nav"
import { Link } from "react-router-dom"

function vocabularyQuintoGrado (){
    return(
        <>
        <Nav/>
        <Rail/>
        <div className="elMeroMero">
  <div className="blockN1">
            <h4>Vocabulary</h4>
            <span>Find the synonymous and match it!</span>
            <div className="theFirstDiv">
            <div class="bloqueIngles">
                    <article>
                      1) Rabbit
                      <div>Lion - Cat - Bunny</div>
                    </article>
                    <article>
                      2) Rest
                      <div>Relax - Work - Jump</div>
                    </article>
                    <article>
                      3) Horrible 
                      <div>Awful - Amazing - Fine</div>
                    </article>
                    <article>
                      4) Start
                      <div>Doing - Begin - End</div>
                    </article>
                    <article>
                      5) Large 
                      <div>Little - Tired - Enormous</div>
                    </article>
                    <article>
                      6) Scared
                      <div> Frightned - Ronaldo - Large</div>
                    </article>
                    <article>
                      7) Happiness
                      <div>Joy - Cool - Fine</div>
                    </article>
                    <article>
                      8) Astonishing 
                      <div>Impressive - Horrible - Done</div>
                    </article>
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
                <Link to="/ejercicios/quinto-grado/ingles/vocabulary/answers"><button className="showAnswers" id="abre0">Show answers</button></Link>
                <Link to="/quizzes/quinto-grado/ingles/grammar" class="doExam">Do the quiz</Link>
                <hr className="flexing"/>
              </div>
        </div> 
        </div>
        </div>
        </>
    )
}
export default vocabularyQuintoGrado