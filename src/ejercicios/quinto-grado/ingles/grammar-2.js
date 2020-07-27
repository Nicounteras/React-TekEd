import React from "react"
import Rail from "./rail"
import Nav from "../mate/nav"
import { Link } from "react-router-dom"

function G2QuintoGrado (){
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
                  1) I will _____ 5000 pushups
                  <div>Effort - Does - Do</div>
                </article>
                <article>
                  2) I am _____ strong
                  <div>Arnold - Much - Very</div>
                </article>
                <article>
                  3) Our love is just a ___ game! 
                  <div>Tried - Tiring - tired</div>
                </article>
                <article>
                  4) I never _____ a thing to change
                  <div>Doing - Wanting - Want</div>
                </article>
                <article>
                  5) This _____ a song from John 
                  <div>Is - are - They</div>
                </article>
                <article>
                  6) She ____ run against you!
                  <div> Wilfred- Will - Was</div>
                </article>
                <article>
                  7) He ____ our pizza!
                  <div>Liking - Will - Likes</div>
                </article>
                <article>
                  8) They ____ an astonishing work (future)! 
                  <div>Made - Doing - Will make</div>
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
                <Link to="/ejercicios/quinto-grado/ingles/grammar-2/answers"><button className="showAnswers" id="abre0">Show answers</button></Link>
                <Link to="/quizzes/quinto-grado/ingles/grammar" class="doExam">Do the quiz</Link>
                <hr className="flexing"/>
              </div>
        </div> 
        </div>
        </div>
        </>
    )
}
export default G2QuintoGrado