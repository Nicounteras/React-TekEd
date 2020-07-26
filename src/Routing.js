import React from 'react'
import "./App.css"
import Ejercicios from "./ejercicios"
import Nav from "./nav"
import Store from "./shop"
import Foot from "./foot"
import mateQuintoIndex from "./ejercicios/quinto-grado/mate"
import AcercaDe from "./acercaDe"
import ComoFunciona from "./comoFunciona"
import Contacto from "./contacto"
import restasQuintoGrado from "./ejercicios/quinto-grado/mate/restas"
import restasQuintoGradoRespuestas from "./ejercicios/quinto-grado/mate/restasR"
import algebraQuintoGradoDos from "./ejercicios/quinto-grado/mate/algebra2"
import algebraQuintoGradoRespuestas from "./ejercicios/quinto-grado/mate/algebraR"
import algebraQuintoGradoDosRespuestas from "./ejercicios/quinto-grado/mate/algebraR2"
import Quizzes from "./quizzes"
import algebraQuintoGrado from "./ejercicios/quinto-grado/mate/algebra"
import redondeoQuintoGrado from "./ejercicios/quinto-grado/mate/redondeo"
import { Link } from "react-router-dom"
import Quinto from "./ejercicios/quinto-grado/index"
import { BrowserRouter as Router, Switch, Route } from "react-router-dom"

function Routes() {
  return (
    <Router>
      <Switch>
      <Route path="/" exact component={Home}/>
      <Route path="/ejercicios" exact component={Ejercicios}/>
      <Route path="/quizzes" component={Quizzes}/>
      <Route path="/store" component={Store}/> 
      <Route path="/nosotros" component={AcercaDe}/>
      <Route path="/como-funciona" component={ComoFunciona}/>
      <Route path="/contacto" exact component={Contacto}/>
      <Route path="/ejercicios/quinto-grado" exact component={Quinto}/>
      <Route path="/ejercicios/quinto-grado/matematica" exact component={mateQuintoIndex}/>
      <Route path="/ejercicios/quinto-grado/matematica/algebra" exact component={algebraQuintoGrado}/>
      <Route path="/ejercicios/quinto-grado/matematica/algebra-2" exact component={algebraQuintoGradoDos}/>
      <Route path="/ejercicios/quinto-grado/matematica/algebra/respuestas" exact component={algebraQuintoGradoRespuestas}/>
      <Route path="/ejercicios/quinto-grado/matematica/algebra-2/respuestas" exact component={algebraQuintoGradoDosRespuestas}/>
      <Route path="/ejercicios/quinto-grado/matematica/restas" exact component={restasQuintoGrado}/>
      <Route path="/ejercicios/quinto-grado/matematica/restas/respuestas" exact component={restasQuintoGradoRespuestas}/>
      <Route path="/ejercicios/quinto-grado/matematica/redondeo" exact component={redondeoQuintoGrado}/>
     {/*  <Route path="/ejercicios/quinto-grado/matematica/redonde/respuestas" exact component={redondeoQuintoGradoRespuestas}/> */}
      </Switch>
      
    </Router>
  )
} 
const Home = () => (
    <>
     <Nav/>
     <div className="initialNew">
     <article className="articleInitial">
         <h3>Una forma <span className="aWay">divertida</span> de <span className="aprenderEn">aprender</span> en <span className="enCasa">casa</span></h3>
         <h5>Aprendizaje dinámico y personalizado para estudiantes de primaria completamente gratuito.</h5>
     </article>
     <div className="dospordos">
     <Link class="cool-link go-btn" to="/ejercicios">¡Empecemos!</Link>
     <Link className="cool-link start-btn" to="/quizzes">
       Toma un quiz
     </Link>
     </div>
   </div>
   <Foot/>
    </>
   
   )

export default Routes

