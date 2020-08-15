import React, { useState } from 'react'
import Nav from "./nav"
import Foot from "./foot"
import { Link } from "react-router-dom"

export default function Home (){
 const [flip1, setFlip1] = useState(false)
 const [flip2, setFlip2] = useState(false)
 const [flip3, setFlip3] = useState(false)

 return(
    <>
    <Nav/>
    <div className="initialNew">
    <article className="articleInitial">
        <h3>Una forma <span className="aWay">divertida</span> de <span className="aprenderEn">aprender</span> en <span className="enCasa">casa</span></h3>
        <h5>Aprendizaje dinámico y personalizado para estudiantes de primaria completamente gratuito.</h5>
    </article>
    <div className="dospordos">
    <a class="cool-link go-btn" href="#cursos">¡Empecemos!</a>
    </div>
  </div>
  <div className="watchOut" id="cursos">
    <h3>¡Lee, practica y aprende!</h3>
    <article>
      <div className={`flipper ${flip1 ? 'fliping' : ''}`}>
        <div className="front">
            <h4>Artículos académicos</h4>
            <p>Lee acerca de cualquier tema con el que sientas dificultad y estúdialo hasta que lo domines.</p>
            <div className="buttons">
            <button onClick={() => setFlip1(!flip1)} className="showButton seeThe">Ver cursos</button>
            <Link className="showButton starting" to="/aprende">Empezar</Link>
            </div>
        </div>
        <div className="back">
            <h4>Disponible en <span>5to</span> y <span>6to</span> de primaria</h4>
            <span class="CoursesAv">Cursos:</span>
                <li>Matemática</li>
                <li>Español</li>
                <li>Ciencias</li>
                <li>Inglés</li>
                <li>Personal social</li>
                <div className="buttons">
            <button onClick={() => setFlip1(!flip1)} className="showButton seeThe">Volver</button>
            <Link className="showButton starting" to="/aprende">Empezar</Link>
            </div>
        </div>
      </div>
      <div className={`flipper ${flip2 ? 'fliping' : ''}`}>
      <div className="front">
            <h4>Ejercicios académicos</h4>
            <p>Pon a prueba tus conocimientos en distintas áreas con divertidos ejercicios.</p>
            <div className="buttons">
            <button onClick={() => setFlip2(!flip2)} className="showButton seeThe">Ver cursos</button>
            <Link className="showButton starting" to="/ejercicios">Empezar</Link>
            </div>
        </div>
        <div className="back">
            <h4>Disponible en <span>5to</span> y <span>6to</span> de primaria</h4>
            <span class="CoursesAv">Cursos:</span>
                <li>Matemática</li>
                <li>Español</li>
                <li>Ciencias</li>
                <li>Inglés</li>
                <li>Personal social</li>
                <div className="buttons">
            <button onClick={() => setFlip2(!flip2)} className="showButton seeThe">Volver</button>
            <Link className="showButton starting" to="/ejercicios">Empezar</Link>
            </div>
        </div>
      </div>
      <div className={`flipper ${flip3 ? 'fliping' : ''}`}>
      <div className="front">
            <h4>Desarrollo web</h4>
            <p>¡Aprende a codificar y diseñar una página web por tu propia cuenta!</p>
            <div className="buttons">
            <button onClick={() => setFlip3(!flip3)} className="showButton seeThe">Ver cursos</button>
            <Link className="showButton starting" to="/desarrollo-web">Empezar</Link>
            </div>
        </div>
        <div className="back">
            <h4>Aprende desarrollo web, sin<span> importar</span> tu <span>edad</span></h4>
            <span class="CoursesAv">Cursos:</span>
                <li>HTML 5</li>
                <li>Css 3</li>
                <li>Jquery</li>
                <li>Diseño de páginas web</li>
                <div className="buttons">
            <button onClick={() => setFlip3(!flip3)} className="showButton seeThe">Volver</button>
            <Link className="showButton starting" to="/desarrollo-web">Empezar</Link>
            </div>
        </div>
      </div>
    </article>
  </div>
  <Foot/>
   </>
 )
}