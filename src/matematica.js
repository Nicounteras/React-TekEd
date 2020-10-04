import React, {useState} from 'react'
import "./App.css"
import Nav from "./acadeNav"
import Foot from "./foot"
import { Link } from "react-router-dom"

function MateInitial() {
    const [flip1, setFlip1] = useState(false)
    const [content, setContent] = useState(false)
    const [flip2, setFlip2] = useState(false)
    const [exercises, setExercises] = useState(false)
  
  return (
    <>
  <Nav/>
  <div className="devInitial">
    <div className="blogLayoutDev">
    <h3>Mejora en matemática con <span className="teked">Tek<span>Ed</span></span></h3>
     <h5>¡Elige un método y comienza!</h5>
     <div className="watchOut WatchOut">
    <div className="blogLayoutDev2">
    <article>
      <div className={`flipper ${flip1 ? 'fliping' : ''}`}>
      <div className={`choose ${content ? 'active' : ''}`}>
    <h3>¿En qué grado estás?</h3>
    <div className="twoGrid">
      <Link to="/aprende/quinto-grado/matematica" className="btnInit red cool-link">5to de primaria</Link>
      <Link to="/aprende/sexto-grado/matematica" className="btnInit orange cool-link">6to de primaria</Link>
    </div>
    <i className="fas fa-times" onClick={() => setContent(!content)}></i>
  </div>
        <div className="front">
            <h4>Lectura de artículos</h4>
            <p>Lee y repasa acerca de cualquier tema con el que sientas dificultad y estúdialo hasta que lo domines.</p>
            <div className="buttons">
            <button onClick={() => setFlip1(!flip1)} className="showButton seeThe">Ver temas</button>
            <button className="showButton starting" onClick={() => setContent(!content)}>Empezar</button>
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
            </div>
        </div>
      </div>
      <div className={`flipper ${flip2 ? 'fliping' : ''}`}>
      <div className={`choose ${exercises ? 'active' : ''}`}>
    <h3>¿En qué grado estás?</h3>
    <div className="twoGrid">
      <Link to="/ejercicios/quinto-grado/matematica" className="btnInit red cool-link">5to de primaria</Link>
      <Link to="/ejercicios/sexto-grado/matematica" className="btnInit orange cool-link">6to de primaria</Link>
    </div>
    <i className="fas fa-times" onClick={() => setExercises(!exercises)}></i>
  </div>
        <div className="front">
            <h4>Resolución de ejercicios</h4>
            <p>Encuentra ejercicios de algún tema con el que quieras practicar y pon a prueba tus conocimientos.</p>
            <div className="buttons">
            <button onClick={() => setFlip2(!flip2)} className="showButton seeThe">Ver temas</button>
            <button onClick={() => setExercises(!exercises)} className="showButton starting">Empezar</button>
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
            </div>
        </div>
      </div>
    </article>
    </div>
  </div>
  <p className="text-for-engage">¿Quieres añadir algún tema de tu interés a TekEd? <Link to="/contacto" className="blueNewLink">Contáctanos.</Link></p>
<div className="layer left margin20-0 relative20Top">
  <h3 id="whyLearning">Por qué aprender matemática</h3>
  <iframe src="https://www.youtube.com/embed/Cwq4dRBWcr8" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen className="iFrameVideo"></iframe>
    <p id="whyTitle">¿Nunca te has preguntado por qué se estudia matemática en la escuela?</p>
    <p>La matemática es la ciencia que estudia la vida cuantitativamente. Además de permitirnos analizar los objetos que nos rodean en la vida cotidiana y llevarnos a dar un resultado exacto acerca de lo que queremos encontrar, las matemáticas sirven para desarrollar nuestro pensamiento analítico y razonamiento.</p>
    <p>Piensa en un deportista. Del deporte que tú quieras. Este deportista quiere mejorar su rendimiento atlético, por lo que corre, realiza abdominales, sentadillas y muchos otros ejercicios por bastantes meses. Después de un buen tiempo, este deportista mejoró mucho su forma física.</p>
    <p>¿Y qué tiene que ver esto con las matemáticas?</p>
    <p>Las matemáticas hacen exactamente lo mismo con nuestro pensamiento crítico que el hacer ejercicio con nuestro cuerpo. Si practicamos la matemática con atención y buenos descansos, nuestra intuición y razonamiento mejorarán mucho. Además, nos dan formación teórica y práctica que nos prepara en caso querramos dedicarnos a la ingeniería o a las ciencias. Es por ello que se enseña matemática en las escuelas y universidades.</p>
    </div>
    </div>
     </div>
     <div className="CatchMarket">
    <div className="layout3">
      <article>
        <h2>¡Encuentra el mejor material para que aprendas desde la comodidad de tu casa!</h2>
        <h5>Te recomendamos los mejores libros, laptops y útiles escolares de muy buena calidad que puedes comprar en línea.</h5>
        <Link to="/tienda" className="goToBlog goToBlue">Quiero explorar</Link>
      </article>
      <article className="backgroundPurple">
<h2>Visita nuestro blog</h2>
<h5>Historias escritas por estudiantes, para estudiantes. ¡Encuentra algo que te apasiona o conoce nuevos métodos de adquirir conocimientos!</h5>
     <Link to="/blog" className="goToBlog goToPurple">Ir al blog</Link>
      </article>
    </div>
   </div>
    <Foot/>
  </> 
  )
} 

export default MateInitial