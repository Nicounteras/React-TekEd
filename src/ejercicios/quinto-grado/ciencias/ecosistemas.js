import React, { useState, useEffect, useRef, component } from 'react'
import { Link } from "react-router-dom"
import Nav from "./nav"
import Rail from "./rail"
import FlashCardList from "../../FlashCardListC"

function EcosistemasQuintoEj() {
  const [flashcards, setFlashcards] = useState(FlashCards)
  return (
   <>
<Nav/>
<div className="buttonDivTo">
<Link to="/aprende/quinto-grado/ciencias/ecosistemas" className="goToOtherArticle cool-link">
  Leer el artículo
</Link>
</div>
<Rail/>
  <div className="elMeroMero">
  <div className="blockN1">
            <h4>Ecosistemas</h4>
            <p className="pOfQuizzes">¡Pon a prueba tus conocimientos!</p>
            <FlashCardList flashcards = {flashcards}/>    
           {/*  <div className="threeButton">
            <Link className="cool-link go-btn" to="/aprende/quinto-grado/ciencias/ecosistemas">Ver artículo</Link>
              </div>  */}  
  </div>
  </div>
   </>
  )
} 

const FlashCards = [
  {
    id: 1,
    question: "Se pueden encontrar plantas en un ecosistema acuático",
    answer: "Verdadero",
    options: [
      "a) Verdadero",
      "b) Falso",
    ],
  },
  {
    id: 2,
    question: "Se puede encontrar agua en un ecosistema desértico",
    answer: "Verdadero",
    options: [
      "a) Verdadero",
      "b) Falso",
    ],
  },
  {
    id: 3,
    question: "El agua salada se concentra en las montañas",
    options: [
      "a) Verdadero",
      "b) Falso",
    ],
    answer:"Falso",
    explanation:"El agua dulce se concentra en las montañas"
  },
  {
    id: 4,
    question: "Las plantas producen su propia comida",
    answer: "Verdadero",
    options: [
      "a) Verdadero",
      "b) Falso",
    ],
  },
  {
    id: 5,
    question: "Los consumidores consumen materia orgánica",
    answer: "Falso",
    options: [
      "a) Verdadero",
      "b) Falso",
    ],
    explanation:"Consumen a otros organismos"
  },
  {
    id: 6,
    question: "Los descomponedores descomponen materia orgánica",
    answer: "Verdadero",
    options: [
      "a) Verdadero",
      "b) Falso",
    ],
  },
  {
    id: 7,
    question: "El mar es un ecosistema de agua dulce",
    answer: "Falso",
    options: [
      "a) Verdadero",
      "b) Falso",
    ],
    explanation: "Es un ecosistema de agua salada"
  },
  {
    id: 8,
    question: "Se encuentran alacranes en el desierto",
    answer: "Verdadero",
    options: [
      "a) Verdadero",
      "b) Falso",
    ],
  },
  {
    id: 9,
    question: "Se pueden encontrar anguilas en el mar y el rio",
    answer: "Verdadero",
    options: [
      "a) Verdadero",
      "b) Falso",
    ],
  },
]


export default EcosistemasQuintoEj


