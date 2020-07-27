import React from "react"
import Rail from "./rail"
import Nav from "../mate/nav"
import { Link } from "react-router-dom"

function presentSQuintoGrado (){
    return(
        <>
        <Nav/>
        <Rail/>
        <div className="elMeroMero">
  <div className="blockN1">
            <h4>Present simple</h4>
            <span>Do your best and match the sentence!</span>
            <div className="theFirstDiv">
            <div className="bloqueInglesG">
                <article>
                  1) What <span>do/does</span> she <span>like/likes</span>?
                </article>
                <article>
                  2) My brother <span>don't/doesn't </span> play tennis
                </article>
                <article>
                  3) We often <span>Visits/visit</span> grandpa 
                </article>
                <article>
                  4) Sometimes we <span>go/goes</span> out
                </article>
                <article>
                  5) Where <span>do/does</span> you come from? 
                </article>
                <article>
                  6) <span>Is/are</span> you resting?
                </article>
                <article>
                  7) He <span>prefering / prefers</span> our pizza!
                 
                </article>
                <article>
                  8) I <span>don't/doesn't</span> watch TV! 
                </article>
                <article>
                    9) John <span>lives/living</span> in Brazil 
                  </article>
                  <article>
                    10) They <span>eating/eat</span> a lot! 
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
                <Link to="/ejercicios/quinto-grado/ingles/present-simple/answers"><button className="showAnswers" id="abre0">Show answers</button></Link>
                <Link to="/quizzes/quinto-grado/ingles/grammar" class="doExam">Do the quiz</Link>
                <hr className="flexing"/>
              </div>
        </div> 
        </div>
        </div>
        </>
    )
}
export default presentSQuintoGrado