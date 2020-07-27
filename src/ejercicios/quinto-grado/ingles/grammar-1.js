import React from "react"
import Rail from "./rail"
import Nav from "../mate/nav"
import { Link } from "react-router-dom"

function G1QuintoGrado (){
    return(
        <>
        <Nav/>
        <Rail/>
        <div className="elMeroMero">
  <div className="blockN1">
            <h4>Grammar Exercises</h4>
            <span>Do your best and find the missing word!</span>
            <div className="theFirstDiv">
            <div class="bloqueIngles">
                <article>
                  1) I _____ french in the morning
                  <div>Studied - Study - Am studying</div>
                </article>
                <article>
                  2) I am _____ my favorite song
                  <div>Danced - Dancing - Have danced</div>
                </article>
                <article>
                  3) Yesterday you were ____ so hard! 
                  <div>Studied - Study - Studying</div>
                </article>
                <article>
                  4) Yes!, we are _____ the dishes
                  <div>Washing - Wash - Washed</div>
                </article>
                <article>
                  5) They _____ in a fun way
                  <div>Learn - Learned - Are learning</div>
                </article>
                <article>
                  6) Yesterday the weather ____ nice
                  <div> Is- Raining - Was</div>
                </article>
                <article>
                  7) He ____ always late!
                  <div>Are - Am - Is</div>
                </article>
                <article>
                  8) They ____ an astonishing work (past)! 
                  <div>Make - Doing - Made</div>
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
                <Link to="/ejercicios/quinto-grado/ingles/grammar-1/answers"><button className="showAnswers" id="abre0">Show answers</button></Link>
                <Link to="/quizzes/quinto-grado/ingles/grammar" class="doExam">Do the quiz</Link>
                <hr className="flexing"/>
              </div>
        </div> 
        </div>
        </div>
        </>
    )
}
export default G1QuintoGrado