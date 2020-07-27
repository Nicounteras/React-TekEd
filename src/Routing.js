import React from 'react'
import "./App.css"
import Ejercicios from "./ejercicios"
import Nav from "./nav"
import Store from "./shop"
import Foot from "./foot"
import mateQuintoIndex from "./ejercicios/quinto-grado/mate"
import inglesQuintoIndex from "./ejercicios/quinto-grado/ingles"
import AcercaDe from "./acercaDe"
import ComoFunciona from "./comoFunciona"
import Contacto from "./contacto"
import restasQuintoGrado from "./ejercicios/quinto-grado/mate/restas"
import restasQuintoGradoRespuestas from "./ejercicios/quinto-grado/mate/restasR"
import algebraQuintoGradoDos from "./ejercicios/quinto-grado/mate/algebra2"
import redondeoQuintoGradoRespuestas from "./ejercicios/quinto-grado/mate/redondeoR"
import redondeoQuintoGradoDosRespuestas from "./ejercicios/quinto-grado/mate/redondeoR2"
import redondeoQuintoGradoDos from "./ejercicios/quinto-grado/mate/redondeo2"
import algebraQuintoGradoRespuestas from "./ejercicios/quinto-grado/mate/algebraR"
import algebraQuintoGradoDosRespuestas from "./ejercicios/quinto-grado/mate/algebraR2"
import romanosQuintoGrado from "./ejercicios/quinto-grado/mate/romanos"
import romanosQuintoGradoRespuestas from "./ejercicios/quinto-grado/mate/romanosR"
import multiplicacionesQuintoGrado from "./ejercicios/quinto-grado/mate/multiplicaciones"
import multiplicacionesQuintoGradoRespuestas from "./ejercicios/quinto-grado/mate/multiplicacionesR"
import divisionesQuintoGrado from "./ejercicios/quinto-grado/mate/divisiones"
import divisionesQuintoGradoRespuestas from "./ejercicios/quinto-grado/mate/divisionesR"
import Quizzes from "./quizzes"
import G1QuintoGradoRespuestas from "./ejercicios/quinto-grado/ingles/grammar-1R"
import G2QuintoGradoRespuestas from "./ejercicios/quinto-grado/ingles/grammar-2R"
import presentSQuintoGradoRespuestas from "./ejercicios/quinto-grado/ingles/presentR"
import vocabularyQuintoGradoRespuestas from "./ejercicios/quinto-grado/ingles/vocabularyR"
import pastSimpleQuintoGradoRespuestas from "./ejercicios/quinto-grado/ingles/pastR"
import timeQuintoGradoRespuestas from "./ejercicios/quinto-grado/ingles/timeR"
import algebraQuintoGrado from "./ejercicios/quinto-grado/mate/algebra"
import redondeoQuintoGrado from "./ejercicios/quinto-grado/mate/redondeo"
import { Link } from "react-router-dom"
import G1QuintoGrado from "./ejercicios/quinto-grado/ingles/grammar-1"
import G2QuintoGrado from "./ejercicios/quinto-grado/ingles/grammar-2"
import presentSQuintoGrado from "./ejercicios/quinto-grado/ingles/present"
import vocabularyQuintoGrado from "./ejercicios/quinto-grado/ingles/vocabulary"
import pastSimpleQuintoGrado from "./ejercicios/quinto-grado/ingles/past"
import timeQuintoGrado from "./ejercicios/quinto-grado/ingles/time"
import Quinto from "./ejercicios/quinto-grado/index"
import vertebradosQuinto from "./ejercicios/quinto-grado/ciencias/vertebrados"
/* import invertebradosQuinto from "./ejercicios/quinto-grado/ciencias/invertebrados"
import ecosistemasQuinto from "./ejercicios/quinto-grado/ciencias/ecosistemas"
import cadenaAlimenticiaQuinto from "./ejercicios/quinto-grado/ciencias/cadena"
import adaptacionesQuinto from "./ejercicios/quinto-grado/ciencias/adaptaciones" */
import cienciasQuintoIndex from "./ejercicios/quinto-grado/ciencias"
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
      <Route path="/ejercicios/quinto-grado/ingles" exact component={inglesQuintoIndex}/>
      <Route path="/ejercicios/quinto-grado/ciencias" exact component={cienciasQuintoIndex}/>
      {/* Matemática quinto grado */}
      <Route path="/ejercicios/quinto-grado/matematica/algebra" exact component={algebraQuintoGrado}/>
      <Route path="/ejercicios/quinto-grado/matematica/algebra-2" exact component={algebraQuintoGradoDos}/>
      <Route path="/ejercicios/quinto-grado/matematica/algebra/respuestas" exact component={algebraQuintoGradoRespuestas}/>
      <Route path="/ejercicios/quinto-grado/matematica/algebra-2/respuestas" exact component={algebraQuintoGradoDosRespuestas}/>
      <Route path="/ejercicios/quinto-grado/matematica/restas" exact component={restasQuintoGrado}/>
      <Route path="/ejercicios/quinto-grado/matematica/redondeo-2" exact component={redondeoQuintoGradoDos}/>
      <Route path="/ejercicios/quinto-grado/matematica/restas/respuestas" exact component={restasQuintoGradoRespuestas}/>
      <Route path="/ejercicios/quinto-grado/matematica/redondeo" exact component={redondeoQuintoGrado}/>
      <Route path="/ejercicios/quinto-grado/matematica/redondeo/respuestas" exact component={redondeoQuintoGradoRespuestas}/>
      <Route path="/ejercicios/quinto-grado/matematica/redondeo-2/respuestas" exact component={redondeoQuintoGradoDosRespuestas}/>
      <Route path="/ejercicios/quinto-grado/matematica/multiplicaciones" exact component={multiplicacionesQuintoGrado}/>
      <Route path="/ejercicios/quinto-grado/matematica/multiplicaciones/respuestas" exact component={multiplicacionesQuintoGradoRespuestas}/>
      <Route path="/ejercicios/quinto-grado/matematica/divisiones" exact component={divisionesQuintoGrado}/>
      <Route path="/ejercicios/quinto-grado/matematica/divisiones/respuestas" exact component={divisionesQuintoGradoRespuestas}/>
      <Route path="/ejercicios/quinto-grado/matematica/numeros-romanos" exact component={romanosQuintoGrado}/>
      <Route path="/ejercicios/quinto-grado/matematica/numeros-romanos/respuestas" exact component={romanosQuintoGradoRespuestas}/>
      {/* Inglés quinto grado */}
      <Route path="/ejercicios/quinto-grado/ingles/grammar-1" exact component={G1QuintoGrado}/>
      <Route path="/ejercicios/quinto-grado/ingles/grammar-2" exact component={G2QuintoGrado}/>
      <Route path="/ejercicios/quinto-grado/ingles/present-simple" exact component={presentSQuintoGrado}/>
      <Route path="/ejercicios/quinto-grado/ingles/vocabulary" exact component={vocabularyQuintoGrado}/>
      <Route path="/ejercicios/quinto-grado/ingles/past-simple" exact component={pastSimpleQuintoGrado}/>
      <Route path="/ejercicios/quinto-grado/ingles/time" exact component={timeQuintoGrado}/>
      <Route path="/ejercicios/quinto-grado/ingles/grammar-1/answers" exact component={G1QuintoGradoRespuestas}/>
      <Route path="/ejercicios/quinto-grado/ingles/grammar-2/answers" exact component={G2QuintoGradoRespuestas}/>
      <Route path="/ejercicios/quinto-grado/ingles/present-simple/answers" exact component={presentSQuintoGradoRespuestas}/>
      <Route path="/ejercicios/quinto-grado/ingles/vocabulary/answers" exact component={vocabularyQuintoGradoRespuestas}/>
      <Route path="/ejercicios/quinto-grado/ingles/past-simple/answers" exact component={pastSimpleQuintoGradoRespuestas}/>
      <Route path="/ejercicios/quinto-grado/ingles/time/answers" exact component={timeQuintoGradoRespuestas}/>
      {/* Ciencias quinto grado */}
      <Route path="/ejercicios/quinto-grado/ciencias/animales-vertebrados" exact component={vertebradosQuinto}/>
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

