import React from 'react'
import { Link } from "react-router-dom"
import Nav from "../../nav"
import Ejercicios from "../../ejercicios"
import Quizzes from "../../quizzes"
import { BrowserRouter as Router, Switch, Route } from "react-router-dom"

function QuintoGrado() {
  return (
    <Router>
      <Switch>
      <Route path="/ejercicios" exact component={Ejercicios}/>
      <Route path="/quizzes" exact component={Quizzes}/>
      <Route path="/quizzes/quinto-grado" exact component={intial}/>
      </Switch>
    </Router>
  )
} 
const intial = () => (
  <>
  <Nav/>
  <div className="initialOfQuizzes">
      <h3>Elige el área que <span>desees</span></h3>
      <h5><span>¡Y manos a la obra!</span></h5>
      <div className="twotimesthree">
          <Link className="arq qui1">
              Matemática
              <p>5 artículos</p>
          </Link>
          <Link className="arq qui2">
              Español 
              <p>5 quizzes</p>
          </Link>
          <Link className="arq qui3">
              Ciencias 
              <p>3 quizzes</p>
          </Link>
          <Link className="arq qui4">
              Inglés
              <p>3 quizzes</p>
          </Link>
          <Link className="arq qui5">
              Humanidades
              <p>4 quizzes</p>
          </Link>
      </div>
  </div>
  </>
)

export default QuintoGrado

