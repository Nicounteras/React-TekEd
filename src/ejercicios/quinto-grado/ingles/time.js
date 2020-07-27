import React from "react"
import Rail from "./rail"
import Nav from "../mate/nav"
import { Link } from "react-router-dom"

function timeQuintoGrado (){
    return(
        <>
        <Nav/>
        <Rail/>
        <div className="elMeroMero">
  <div className="blockN1">
            <h4>Time</h4>
            <span>What time is it?</span>
            <div className="theFirstDiv">
            <div class="bloqueInglesGr">
                <article>
                  1) 8:15pm
                </article>
                <article>
                  2) 12:45pm
                </article>
                <article>
                  3) 1:00pm
                </article>
                <article>
                  4) 1:30pm
                </article>
                <article>
                  5) 4:00pm
                </article>
                <article>
                  6) 10:59pm
                </article>
                <article>
                  7) 9:01am
                </article>
                <article>
                  8) 6:20am 
                </article>
                <article>
                  9) 7:00pm  
                  </article>
                  <article>
                    10) 8:10am
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
                <Link to="/ejercicios/quinto-grado/ingles/time/answers"><button className="showAnswers" id="abre0">Show answers</button></Link>
                <Link to="/quizzes/quinto-grado/ingles/grammar" class="doExam">Do the quiz</Link>
                <hr className="flexing"/>
              </div>
        </div> 
        </div>
        </div>
        </>
    )
}
export default timeQuintoGrado