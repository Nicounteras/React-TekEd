import React, { useState, useEffect, useRef, component } from 'react'
import { Link } from "react-router-dom"
import Nav from "./nav"
import Rail from "./rail"
import FlashCardList from "../../FlashCardListC"

function VertebradosQuintoEj() {
  const [flashcards, setFlashcards] = useState(FlashCards)
  return (
   <>
<Nav/>
<Link to="/aprende/quinto-grado/ciencias/animales-vertebrados" className="goToOtherArticle cool-link">
  Leer el artículo
</Link>
<Rail/>
  <div className="elMeroMero">
  <div className="blockN1">
            <h4>Animales vertebrados</h4>
            <p className="pOfQuizzes">¡Pon a prueba tus conocimientos!</p>
            <FlashCardList flashcards = {flashcards}/>    
            {/* <div className="threeButton">
            <Link className="cool-link go-btn" to="/aprende/quinto-grado/ciencias/animales-vertebrados">Ver artículo</Link>
              </div>     */}   
  </div>
  </div>
   </>
  )
} 

const FlashCards = [
  {
    id: 1,
    question: "Los vertebrados poseen columna vertebral",
    answer: "Verdadero",
    options: [
      "a) Verdadero",
      "b) Falso",
    ],
  },
  {
    id: 2,
    question: "La columna vertebral permite ...",
    answer: "Simetria bilateral",
    options: [
      "a) Adaptarse fisicamente",
      "b) Adaptars conductualmente",
      "c) La simetria bilateral",
    ],
    explanation: "La columna vertebral divide al cuerpo en dos"
  },
  {
    id: 3,
    question: "Los reptiles poseen ...",
    answer: "Sólo escamas",
    options: [
      "a) Sólo escamas",
      "b) Sólo branquias",
      "c) Branquias y escamas",
    ],
    explanation: ""
  },
  {
    id: 4,
    question: "Los anfibios tienen la piel",
    answer: "Húmeda",
    options: [
      "a) Seca",
      "b) Húmeda",
      "c) Venenosa",
    ],
    explanation: "Algunos anfibios tienen veneno en su piel, sin embargo, todos tienen la piel húmeda"
  },
  {
    id: 5,
    question: '"Las aves pueden volar"',
    answer: "Algunas pueden volar",
    options: [
      "a) Algunas pueden volar",
      "b) Verdadero",
      "c) Falso"
    ],
    explanation: "Las gallinas o las avestruces no son capaces de volar"
  },
  {
    id: 6,
    question: "Los mamíferos ...",
    answer: "Todas las anteriores",
    options: [
      "a) Son animales de sangre caliente",
      "b) Nacen del vientre materno",
      "c) Poseen pelaje",
      "d) Todas las anteriores"
    ],
  },
  {
    id: 7,
    question: "Todas las aves poseen un pico",
    answer: "Verdadero",
    options: [
      "a) Verdadero",
      "b) Falso",
    ],
  },
  {
    id: 8,
    question: "Los humanos somos mamíferos",
    answer: "Verdadero",
    options: [
      "a) Verdadero",
      "b) Falso",
    ],
    explanation: "Nacemos del vientre de nuestra madre, por lo que somos mamíferos."
  },
  {
    id: 9,
    question: '"Las hormigas son animales vertebrados"',
    answer: "Falso",
    options: [
      "a) Verdadero",
      "b) Falso",
    ],
    explanation: "Estas no poseen una columna vertebral al igual que todos los artrópodos"
  },
]

export default VertebradosQuintoEj


