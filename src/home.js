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
    <div className="initialVuamos">
      <article className="welcomeTo">
        <h2>Aprende lo que quieras, <span>cuando quieras</span></h2>
        <h5>TekEd es una plataforma virtual donde estudiantes de todas las edades pueden reforzar sus conocimientos y aprender algo nuevo.</h5>
      </article>
      <article className="learning-links">
        <h3>¿Qué quieres aprender hoy?</h3>
        <div id="linkingTo">
        <Link to="/matematica" className="learninLink mathLink"><i class="fas fa-calculator"></i>Matemática</Link>
        <Link to="/ciencias" className="learninLink scienceLink"><i class="fas fa-atom"></i>Ciencias</Link>
        <Link to="/desarrollo-web" className="learninLink devInitLink"><i class="fas fa-code"></i>Desarrollo web</Link>
        <Link to="/ingles" className="learninLink inglesLink"><i class="fas fa-globe-americas"></i>Inglés</Link>
        <Link to="/humanidades" className="learninLink humanidadesLink"><i class="fas fa-child"></i>Humanidades</Link>
        </div>
      </article>
    </div>
    <div className="howItWorks">
     <div className="layer">
     <h3>Cómo funciona<span className="teked">Tek<span>Ed</span></span></h3>
    <div className="threeHowItWorks">
      <article>
        <h4>Escoge qué quieres aprender</h4>
        <p>Elige el tema que quieras, ya sea para sacar notas más altas o para descubrir algo nuevo.</p>
        <a href="#cursos" className="theColorChange cool-link">Encuentra un tema</a>
      </article>
      <article>
      <h4>Ve a tu propio ritmo</h4>
      <p>Ponte cómodo y empieza a aprender del tema que hayas elegido. Puedes leer y practicar de la forma que más te guste. Donde quieras, cuando quieras.</p>
      </article>
      <article>
      <h4>Ayúdanos a mejorar TekEd</h4>
      <p>Escríbenos si hay algún tema que te gustaría encontrar en nuestra plataforma o si hay algo que deseas mejorar. Te escucharemos.</p>
      <Link className="theColorChange cool-link" to="/contacto">Contáctanos</Link>
      </article>
    </div>
     </div>
    </div>
    <div className="watchOut" id="cursos">
    <h3>¡Empieza a aprender ahora!</h3>
    <article>
      <div className={`flipper ${flip1 ? 'fliping' : ''}`}>
        <div className="front">
            <h4>Contenido académico</h4>
            <p>Lee y practica ejercicios acerca de cualquier tema con el que sientas dificultad y estúdialo hasta que lo domines.</p>
            <div className="buttons">
            <button onClick={() => setFlip1(!flip1)} className="showButton seeThe">Ver temas</button>
            <Link className="showButton starting" to="/academico">Empezar</Link>
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
            <Link className="showButton starting" to="/academico">Empezar</Link>
            </div>
        </div>
      </div>
      <div className={`flipper ${flip2 ? 'fliping' : ''}`}>
      <div className="front">
            <h4>Desarrollo web</h4>
            <p>¡Aprende a codificar y diseñar una página web por tu propia cuenta!. Además, te proveemos con equipo y libros de programación para que mejores tu rendimiento.</p>
            <div className="buttons">
            <button onClick={() => setFlip2(!flip2)} className="showButton seeThe">Ver temas</button>
            <Link className="showButton starting" to="/desarrollo-web">Empezar</Link>
            </div>
        </div>
        <div className="back">
            <h4>Aprende desarrollo web, sin<span> importar</span> tu <span>edad</span></h4>
            <span class="CoursesAv">Cursos:</span>
                <li>HTML 5</li>
                <li>Css 3</li>
                <div className="buttons">
            <button onClick={() => setFlip2(!flip2)} className="showButton seeThe">Volver</button>
            <Link className="showButton starting" to="/desarrollo-web">Empezar</Link>
            </div>
        </div>
      </div>
    </article>
  </div>
  <div className="blogInit">
<div className="layer2">
<h2>Blog</h2>
<div className="threeGoDev">
       <article>
         <h5>Aprendizaje</h5>
         <Link className="beforeGo vamoGo paddingExtra" to="/blog/como-aprender-en-cuarentena"><i class="fas fa-brain"></i><p>Cómo aprender durante la cuarentena</p></Link>
         <Link className="beforeGo yeahGo" to="/blog/tips-para-el-ib"><i class="fas fa-school"></i>Tips para el IB</Link>
       </article>
       <article>
         <h5>Desarrollo web</h5>
         <Link className="beforeGo whyGo" to="/desarrollo-web/blog/porque-programar"><i class="fas fa-laptop"></i>Por qué aprender a programar</Link>
         <Link className="beforeGo fbGo"><i class="fas fa-rocket"></i>Desarrollo frontend vs backend</Link>
         <Link className="beforeGo whatGo paddingExtra" to="/desarrollo-web/blog/ciencias-de-la-computacion"><i class="fas fa-laptop-code"></i>Qué es la ciencia de la computación</Link>
         {/* <Link className="beforeGo cGo">Libros de C++</Link>
         <Link className="beforeGo javaGo">Libros de Java</Link> */}
       </article>
       <article>
         <h5>Más temas</h5>
         <Link className="beforeGo yeahGo"><i class="fas fa-laptop"></i>Qué es el marketing</Link>
         <Link className="beforeGo redGo"><i class="fas fa-laptop"></i>Qué es la bolsa de valores</Link>
       </article>
     </div>
</div>
  </div>

   {/*  <div className="initialNew">
    <article className="articleInitial">
        <h3>Una forma <span className="aWay">divertida</span> de <span className="aprenderEn">aprender</span> en <span className="enCasa">casa</span></h3>
        <h5>Aprendizaje dinámico y personalizado para estudiantes de primaria completamente gratuito.</h5>
    </article>
    <div className="dospordos">
    <a class="cool-link go-btn" href="#cursos">¡Empecemos!</a>
    </div> 
  </div> */}
  {/* <div className="watchOut" id="cursos">
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
  </div> */}
  <Foot/>
   </>
 )
}