import React from 'react'
import { Link } from "react-router-dom"
import Nav from "./nav"
import Rail from "./rail"

function restasQuintoGrado() {
  return (
   <>
    <a href="https://www.youtube.com/watch?v=S8ACLQs-Bz4" target="blank" class="verEx">Ver explicación</a>
   <Nav/>
   <Rail/>
  <div className="elMeroMero">
  <div className="blockN1">
            <h4>Ejercicios de restas</h4>
            <span>¡Resuelve los ejercicios y compara tus respuestas!</span>
            <div className="theFirstDiv">
              <div className="bloque" id="green">
              <div class="sixTwo">
                  <div>
                    <span>1) Resta</span>
                    <article>
                      <p>200455-</p>
                    <p class="underline">78292</p>
                    </article>
                  </div>
                  <div>
                    <span>2) Resta</span>
                    <article>
                      <p>504873-</p>
                    <p class="underline">27252</p>
                    </article>
                  </div>
                  <div>
                    <span>3) Resta</span>
                    <article>
                      <p>843520-</p>
                    <p class="underline">54819</p>
                    </article>
                  </div>
                  <div>
                    <span>4) Resta</span>
                    <article>
                      <p>1008352-</p>
                    <p class="underline">922971</p>
                    </article>
                  </div>
                  <div>
                    <span>5) Resta</span>
                    <article>
                      <p>883576-</p>
                    <p class="underline">92234</p>
                    </article>
                  </div>
                  <div>
                    <span>6) Resta</span>
                    <article>
                      <p>2144780-</p>
                    <p class="underline">1133911</p>
                    </article>
                  </div>
                  </div>
              </div>
              <div className="twoButton">
                <Link to="/ejercicios/quinto-grado/matematica/restas/respuestas"><button className="showAnswers" id="abre0">Ver respuestas</button></Link>
                
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

export default restasQuintoGrado
