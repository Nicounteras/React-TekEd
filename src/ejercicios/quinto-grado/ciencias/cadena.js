import React, { useState, useEffect, useRef, component } from 'react'
import { Link } from "react-router-dom"
import Nav from "./nav"
import Rail from "./rail"
import FlashCardList from "../../FlashCardListC"

function CadenaQuintoEj() {
  const [flashcards, setFlashcards] = useState(FlashCards)
  return (
   <>
<Nav/>
<div className="buttonDivTo">
<Link to="/aprende/quinto-grado/ciencias/cadena-alimenticia" className="goToOtherArticle cool-link">
  Leer el artículo
</Link>
</div>
<Rail/>
  <div className="elMeroMero">
  <div className="blockN1">
            <h4>Cadena alimenticia</h4>
            <p className="pOfQuizzes">¡Pon a prueba tus conocimientos!</p>
            <FlashCardList flashcards = {flashcards}/>    
            {/* <div className="threeButton">
            <Link className="cool-link go-btn" to="/aprende/quinto-grado/ciencias/cadena-alimenticia">Ver artículo</Link>
              </div>        */}
  </div>
  </div>
   </>
  )
} 

const FlashCards = [
  {
    id: 1,
    question: "El porcentaje de energía aumenta en 10% por cada nivel",
    answer: "Falso",
    options: [
      "a) Verdadero",
      "b) Falso",
    ],
    explanation: "Disminuye 90% en cada nivel"
  },
  {
    id: 2,
    question: "Los descomponedores absorben energía",
    answer: "Verdadero",
    options: [
      "a) Verdadero",
      "b) Falso",
    ],
    explanation: ""
  },
  {
    id: 3,
    question: "Un león es un consumidor primario",
    answer: "Falso",
    options: [
      "a) Verdadero",
      "b) Falso",
    ],
    explanation: "Es un consumidor secundario o terciario"
  },
  {
    id: 4,
    question: "La jirafa es un consumidor primario",
    answer: "Verdadero",
    options: [
      "a) Verdadero",
      "b) Falso",
    ],
    explanation: "Se alimentan de plantas (productores)"
  },
  {
    id: 5,
    question: "El sol actúa en la descomposición",
    answer: "Verdadero",
    options: [
      "a) Verdadero",
      "b) Falso",
    ],
    explanation: ""
  },
  {
    id: 6,
    question: "Los humanos somos productores",
    answer: "Falso",
    options: [
      "a) Verdadero",
      "b) Falso",
      "c) A veces",
    ],
    explanation: "Somos consumidores"
  },
  {
    id: 7,
    question: "El sol genera energía en un ecosistema",
    answer: "Verdadero",
    options: [
      "a) Verdadero",
      "b) Falso",
    ],
    explanation: "Su radiación es la energía inicial del ecosistema"
  },
  {
    id: 8,
    question: "Los consumidores producen su propia comida",
    answer: "Falso",
    options: [
      "a) Verdadero",
      "b) Falso",
    ],
    explanation: "Se alimentan de otro ser vivo"
  },
  {
    id: 9,
    question: "Los descomponedores descomponen sólo plantas",
    answer: "Falso",
    options: [
      "a) Verdadero",
      "b) Falso",
    ],
    explanation: "Descomponen a cualquier organismo"
  },
]


export default CadenaQuintoEj


