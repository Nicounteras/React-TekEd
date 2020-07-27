import React from "react"
import Rail from "./rail"
import Nav from "../mate/nav"
import { Link } from "react-router-dom"

function pastSimpleQuintoGrado (){
    return(
        <>
        <Nav/>
        <Rail/>
        <div className="elMeroMero">
  <div className="blockN1">
            <h4>Past simple</h4>
            <span>Do your best and match the sentence!</span>
            <div className="theFirstDiv">
            <div class="bloqueInglesG">
                <article>
                  1) I ____ the game <span>(Start)</span>
                </article>
                <article>
                  2) I ____ the letter <span>(Write)</span>
                </article>
                <article>
                  3) They ____ constantly <span>(Jump)</span>
                </article>
                <article>
                  4) We ___ yesterday <span>(meet)</span>
                </article>
                <article>
                  5) John ___ that movie <span>(Watch)</span>
                </article>
                <article>
                  6) He ____ Coca-cola <span>(Drink)</span>
                </article>
                <article>
                  7) She ___ your movie <span>(like)</span>
                </article>
                <article>
                  8) Paulo ____ at you <span>(scream)</span> 
                </article>
                <article>
                  9) I ____ to the Gym <span>(go)</span>  
                  </article>
                  <article>
                    10) Alan ___ pretty cool <span>(is)</span>
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
                <Link to="/ejercicios/quinto-grado/ingles/past-simple/answers"><button className="showAnswers" id="abre0">Show answers</button></Link>
                <Link to="/quizzes/quinto-grado/ingles/grammar" className="doExam">Do the quiz</Link>
                <hr className="flexing"/>
              </div>
        </div> 
        </div>
        </div>
        </>
    )
}
export default pastSimpleQuintoGrado