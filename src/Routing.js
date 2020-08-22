import React from 'react'
import "./App.css"
import Aprende from "./aprende"
import Nav from "./nav"
import Store from "./shop"
import Desarrollo from "./desarrollo"
import Foot from "./foot"
import mateQuintoIndex from "./aprende/quinto-grado/mate"
import inglesQuintoIndex from "./aprende/quinto-grado/ingles"
import AcercaDe from "./acercaDe"
import ComoFunciona from "./comoFunciona"
import Contacto from "./contacto"
import puntosCardinalesQuinto from "./aprende/quinto-grado/personal-social/puntos"
import geoPeruanaQuinto from "./aprende/quinto-grado/personal-social/geografia"
import egiptoQuinto from "./aprende/quinto-grado/personal-social/egipto"
import restasQuintoGrado from "./aprende/quinto-grado/mate/restas"
import romanosQuintoGrado from "./aprende/quinto-grado/mate/romanos"
import multiplicacionesQuintoGrado from "./aprende/quinto-grado/mate/multiplicaciones"
import divisionesQuintoGrado from "./aprende/quinto-grado/mate/divisiones"
import Ejercicios from "./ejercicios"
import algebraQuintoGrado from "./aprende/quinto-grado/mate/algebra"
import redondeoQuintoGrado from "./aprende/quinto-grado/mate/redondeo"
import { Link } from "react-router-dom"
import personalQuintoIndex from "./aprende/quinto-grado/personal"
import G1QuintoGrado from "./aprende/quinto-grado/ingles/grammar-1"
import presentSQuintoGrado from "./aprende/quinto-grado/ingles/present"
import vocabularyQuintoGrado from "./aprende/quinto-grado/ingles/vocabulary"
import pastSimpleQuintoGrado from "./aprende/quinto-grado/ingles/past"
import timeQuintoGrado from "./aprende/quinto-grado/ingles/time"
import Quinto from "./aprende/quinto-grado/index"
import vertebradosQuinto from "./aprende/quinto-grado/ciencias/vertebrados"
import invertebradosQuinto from "./aprende/quinto-grado/ciencias/invertebrados"
import ecosistemasQuinto from "./aprende/quinto-grado/ciencias/ecosistemas"
import cadenaAlimenticiaQuinto from "./aprende/quinto-grado/ciencias/cadena"
import adaptacionesQuinto from "./aprende/quinto-grado/ciencias/adaptaciones"
import contextoPeruanoQuinto from "./aprende/quinto-grado/personal-social/contexto"
import cienciasQuintoIndex from "./aprende/quinto-grado/ciencias"
import { BrowserRouter as Router, Switch, Route } from "react-router-dom"
import QuintoEjercicios from "./ejercicios/quinto-grado/index"
import  MateQuintoEj from "./ejercicios/quinto-grado/mate"
import AlgebraQuintoEj from "./ejercicios/quinto-grado/mate/algebra"
import DivisionesQuintoEj from "./ejercicios/quinto-grado/mate/divisiones"
import RestasQuintoEj from "./ejercicios/quinto-grado/mate/restas"
import MultiplicacionesQuintoEj from "./ejercicios/quinto-grado/mate/multiplicaciones"
import RedondeoQuintoEj from "./ejercicios/quinto-grado/mate/redondeo"
import RomanosQuintoEj from "./ejercicios/quinto-grado/mate/romanos"
import inglesQuintoIndexEjercicios from "./ejercicios/quinto-grado/ingles"
import GrammarQuintoEjercicios from "./ejercicios/quinto-grado/ingles/grammar"
import PresentQuintoEjercicios from "./ejercicios/quinto-grado/ingles/present"
import VocabularyQuintoEjercicios from "./ejercicios/quinto-grado/ingles/vocabulary"
import PastQuintotEjercicios from "./ejercicios/quinto-grado/ingles/past"
import TimeQuintoEjercicios from "./ejercicios/quinto-grado/ingles/time"
import Quizzes from "./quizzes"
import AlgebraQuizQuinto from "./quizzes/quinto-grado/mate/algebra"
import Sexto from "./aprende/sexto-grado/index"
import mateSextoIndex from "./aprende/sexto-grado/mate"
import humanidadesSextoIndex from "./aprende/sexto-grado/humanidades"
import inglesSextoIndex from "./aprende/sexto-grado/ingles"
import cienciasSextoIndex from "./aprende/sexto-grado/ciencias"
import EcosistemasQuintoEj from "./ejercicios/quinto-grado/ciencias/ecosistemas"
import AdaptacionesQuintoEj from "./ejercicios/quinto-grado/ciencias/adaptaciones"
import CadenaQuintoEj from "./ejercicios/quinto-grado/ciencias/cadena"
import InvertebradosQuintoEj from "./ejercicios/quinto-grado/ciencias/invertebrados"
import VertebradosQuintoEj from "./ejercicios/quinto-grado/ciencias/vertebrados"
import cienciasQuintoIndexEjercicios from "./ejercicios/quinto-grado/ciencias" 
import personalQuintoEj from "./ejercicios/quinto-grado/personal"
import ContextoQuintoEj from "./ejercicios/quinto-grado/personal-social/context"
import GeoPerQuintoEj from "./ejercicios/quinto-grado/personal-social/geografia"
import EgiptoQuintoEj from "./ejercicios/quinto-grado/personal-social/egipto"
import PuntosCardiQuintoEj from "./ejercicios/quinto-grado/personal-social/puntos"
import Home from "./home"
import IntroHTML from "./html/intro"
import InstaHTML from "./html/instalacion"
import CompoHTML from "./html/compo"
import MetaHTML from "./html/meta"
import InitialDev from "./dev"
import MateInitial from "./matematica"
import whyCode from './blog/dev/porqueProgramar'
import cs from "./blog/dev/cs"

function Routes() {
  return (
    <Router>
      <Switch>
      <Route path="/" exact component={Home}/>
      <Route path="/desarrollo-web" exact component={InitialDev}/>
      <Route path="/desarrollo-web/blog/porque-programar" exact component={whyCode}/>
      <Route path="/matematica" exact component={MateInitial}/>
      <Route path="/desarrollo-web/blog/ciencias-de-la-computacion" exact component={cs}/>
      <Route path="/desarrollo-web/cursos" exact component={Desarrollo}/>
      <Route path="/desarrollo-web/cursos/html/introduccion" exact component={IntroHTML}/>
      <Route path="/desarrollo-web/cursos/html/instalacion" exact component={InstaHTML}/>
      <Route path="/desarrollo-web/cursos/html/composicion" exact component={CompoHTML}/>
      <Route path="/desarrollo-web/cursos/html/meta-tags" exact component={MetaHTML}/>
      <Route path="/aprende" exact component={Aprende}/>
      <Route path="/ejercicios" exact component={Ejercicios}/>
      <Route path="/ejercicios/quinto-grado" exact component={QuintoEjercicios}/>
      <Route path="/quizzes" exact component={Quizzes} />
      <Route path="/store" exact component={Store}/> 
      <Route path="/nosotros" exact component={AcercaDe}/>
      <Route path="/como-funciona" exact component={ComoFunciona}/>
      <Route path="/contacto" exact component={Contacto}/>
      <Route path= "/aprende/quinto-grado" exact component={Quinto}/>
      <Route path= "/aprende/sexto-grado" exact component={Sexto}/>
      <Route path="/aprende/sexto-grado/matematica" exact component={mateSextoIndex}/>
      <Route path="/aprende/sexto-grado/ciencias" exact component={cienciasSextoIndex}/>
      <Route path="/aprende/sexto-grado/ingles" exact component={inglesSextoIndex}/>
      <Route path="/aprende/sexto-grado/humanidades" exact component={humanidadesSextoIndex}/>
      <Route path="/aprende/quinto-grado/matematica" exact component={mateQuintoIndex}/>
      <Route path="/aprende/quinto-grado/ingles" exact component={inglesQuintoIndex}/>
      <Route path="/aprende/quinto-grado/ciencias" exact component={cienciasQuintoIndex}/>
      <Route path="/aprende/quinto-grado/personal-social" exact component={personalQuintoIndex}/>
      {/* Matemática quinto grado */}
      <Route path="/aprende/quinto-grado/matematica/algebra" exact component={algebraQuintoGrado}/>
      <Route path="/aprende/quinto-grado/matematica/restas" exact component={restasQuintoGrado}/>
      <Route path="/aprende/quinto-grado/matematica/redondeo" exact component={redondeoQuintoGrado}/>
      <Route path="/aprende/quinto-grado/matematica/multiplicaciones" exact component={multiplicacionesQuintoGrado}/>
      <Route path="/aprende/quinto-grado/matematica/divisiones" exact component={divisionesQuintoGrado}/>
      <Route path="/aprende/quinto-grado/matematica/numeros-romanos" exact component={romanosQuintoGrado}/>
      {/* Ejercicios*/}
      <Route path="/ejercicios/quinto-grado/matematica" exact component={MateQuintoEj}/>
      <Route path="/ejercicios/quinto-grado/matematica/algebra" exact component={AlgebraQuintoEj}/>
      <Route path="/ejercicios/quinto-grado/matematica/divisiones" exact component={DivisionesQuintoEj}/>
      <Route path="/ejercicios/quinto-grado/matematica/multiplicaciones" exact component={MultiplicacionesQuintoEj}/>
      <Route path="/ejercicios/quinto-grado/matematica/restas" exact component={RestasQuintoEj}/>
      <Route path="/ejercicios/quinto-grado/matematica/redondeo" exact component={RedondeoQuintoEj}/>
      <Route path="/ejercicios/quinto-grado/matematica/numeros-romanos" exact component={RomanosQuintoEj}/>
     {/* Quizzes */}
     <Route path="/quizzes/quinto-grado/matematica/algebra" exact component={AlgebraQuizQuinto}/>
     {/* Inglés quinto grado */}
      <Route path="/aprende/quinto-grado/ingles/grammar" exact component={G1QuintoGrado}/>
      <Route path="/aprende/quinto-grado/ingles/present-simple" exact component={presentSQuintoGrado}/>
      <Route path="/aprende/quinto-grado/ingles/vocabulary" exact component={vocabularyQuintoGrado}/>
      <Route path="/aprende/quinto-grado/ingles/past-simple" exact component={pastSimpleQuintoGrado}/>
      <Route path="/aprende/quinto-grado/ingles/time" exact component={timeQuintoGrado}/>
      {/* Ejercicios */}
      <Route path="/ejercicios/quinto-grado/ingles/present-simple" exact component={PresentQuintoEjercicios}/>
      <Route path="/ejercicios/quinto-grado/ingles" exact component={inglesQuintoIndexEjercicios}/>
      <Route path="/ejercicios/quinto-grado/ingles/grammar" exact component={GrammarQuintoEjercicios}/>
      <Route path="/ejercicios/quinto-grado/ingles/past-simple" exact component={PastQuintotEjercicios}/>
      <Route path="/ejercicios/quinto-grado/ingles/vocabulary" exact component={VocabularyQuintoEjercicios}/>
      <Route path="/ejercicios/quinto-grado/ingles/time" exact component={TimeQuintoEjercicios}/>
      {/* Ciencias quinto grado */}
      <Route path="/aprende/quinto-grado/ciencias/animales-vertebrados" exact component={vertebradosQuinto}/>
      <Route path="/aprende/quinto-grado/ciencias/animales-invertebrados" exact component={invertebradosQuinto}/>
      <Route path="/aprende/quinto-grado/ciencias/ecosistemas" exact component={ecosistemasQuinto}/>
      <Route path="/aprende/quinto-grado/ciencias/cadena-alimenticia" exact component={cadenaAlimenticiaQuinto}/>
      <Route path="/aprende/quinto-grado/ciencias/adaptaciones" exact component={adaptacionesQuinto}/>
     {/* Ejercicios */}
     <Route path="/ejercicios/quinto-grado/ciencias" exact component={cienciasQuintoIndexEjercicios}/>
     <Route path="/ejercicios/quinto-grado/ciencias/ecosistemas" exact component={EcosistemasQuintoEj}/>
     <Route path="/ejercicios/quinto-grado/ciencias/cadena-alimenticia" exact component={CadenaQuintoEj}/>
     <Route path="/ejercicios/quinto-grado/ciencias/animales-vertebrados" exact component={VertebradosQuintoEj}/>
     <Route path="/ejercicios/quinto-grado/ciencias/adaptaciones" exact component={AdaptacionesQuintoEj}/>
     <Route path="/ejercicios/quinto-grado/ciencias/animales-invertebrados" exact component={InvertebradosQuintoEj}/>
      {/* Personal social quinto grado */}
      <Route path="/aprende/quinto-grado/personal-social/contexto-peruano" exact component={contextoPeruanoQuinto}/>  
      <Route path="/aprende/quinto-grado/personal-social/egipto" exact component={egiptoQuinto}/>    
      <Route path="/aprende/quinto-grado/personal-social/puntos-cardinales" exact component={puntosCardinalesQuinto}/>    
      <Route path="/aprende/quinto-grado/personal-social/geografia-peruana" exact component={geoPeruanaQuinto}/>      
     {/* Ejericios */}
     <Route path="/ejercicios/quinto-grado/personal-social" exact component={personalQuintoEj}/>
     <Route path="/ejercicios/quinto-grado/personal-social/puntos-cardinales" exact component={PuntosCardiQuintoEj}/>
     <Route path="/ejercicios/quinto-grado/personal-social/egipto" exact component={EgiptoQuintoEj}/>
     <Route path="/ejercicios/quinto-grado/personal-social/geografia-peruana" exact component={GeoPerQuintoEj}/>
     <Route path="/ejercicios/quinto-grado/personal-social/contexto-peruano" exact component={ContextoQuintoEj}/>
      </Switch>
    </Router>
  )
}
{/* 
const Home = () => (
    <>
     <Nav/>
     <div className="initialNew">
     <article className="articleInitial">
         <h3>Una forma <span className="aWay">divertida</span> de <span className="aprenderEn">aprender</span> en <span className="enCasa">casa</span></h3>
         <h5>Aprendizaje dinámico y personalizado para estudiantes de primaria completamente gratuito.</h5>
     </article>
     <div className="dospordos">
     <Link class="cool-link go-btn" to="/aprende">¡Empecemos!</Link>
     <Link className="cool-link ex-btn" to="/ejercicios">Resuelve ejercicios</Link>
      <Link className="cool-link start-btn" to="/quizzes">
       Toma un quiz
     </Link> 
     </div>
   </div>
   <Foot/>
    </>
   
   )
*/}

export default Routes

