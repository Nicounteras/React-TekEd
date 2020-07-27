import React from 'react'
import { Link } from "react-router-dom"
import Nav from "./nav"
import Rail from "./rail"

function multiplicacionesQuintoGrado() {
  return (
   <>
   <Nav/>
   <Rail/>
  <div className="elMeroMero">
  <div className="blockN1">
            <h4>Ejercicios de multiplicaciones</h4>
            <span>¡Resuelve los ejercicios y compara tus respuestas!</span>
            <div class="theFirstDiv">
              <div class="bloque" id="green">
                <div class="exDOS">
                  <div>
                    <p>1) 40x2x3</p>
                  </div>
                  <div>
                    <p>2) 150x3.5</p>
                  </div>
                  <div>
                    <p>3) 40x10</p>
                  </div>
                  <div>
                    <p>4) 30x30</p>
                  </div>
                  <div>
                    <p>5) 69x2</p>
                  </div>
                  <div>
                    <p>6) 50x5</p>
                  </div>
                  <div>
                    <p>7) 3x3x10</p>
                  </div>
                  <div>
                    <p>8) 40x3.5</p>
                  </div>
                  <div>
                    <p>9) 90x11</p>
                  </div>
                  <div>
                    <p>10) 30x9</p>
                  </div>
                  <div>
                    <p>11) 50x7.5</p>
                  </div>
                  <div>
                    <p>12) 80x3</p>
                  </div>
                  <div>
                    <p>13) 90x4</p>
                  </div>
                  <div>
                    <p>14) 10x9.9</p>
                  </div>
                  <div>
                    <p>15) 74x0.5</p>
                  </div>
                  <article class="esfuerzo">
                    <span>¡Multiplica tu calidad!</span>
                  </article>
                  </div>
                </div>
            </div>   
            <div class="twoButton">
              <Link to="/ejercicios/quinto-grado/matematica/multiplicaciones/respuestas"><button class="showAnswers" id="abre0">Ver respuestas</button></Link>
                <hr className="flexa"/>
              </div>
           </div>
           </div>
   </>
  )
} 

export default multiplicacionesQuintoGrado
