import React, { useState, useEffect, useRef, component } from 'react'
import { Link } from "react-router-dom"
import Nav from "./nav"
import Rail from "./rail"
import FlashCardList from "../../FlashCardListC"

function InvertebradosQuintoEj() {
  const [flashcards, setFlashcards] = useState(FlashCards)
  return (
   <>
<Nav/>
<Link to="/aprende/quinto-grado/ciencias/animales-invertebrados" className="goToOtherArticle cool-link">
  Leer el artículo
</Link>
<Rail/>
  <div className="elMeroMero">
  <div className="blockN1">
            <h4>Animales invertebrados</h4>
            <p className="pOfQuizzes">¡Pon a prueba tus conocimientos!</p>
            <FlashCardList flashcards = {flashcards}/>    
          {/*   <div className="threeButton">
            <Link className="cool-link go-btn" to="/aprende/quinto-grado/ciencias/animales-invertebrados">Ver artículo</Link>
              </div>      */}   
  </div>
  </div>
   </>
  )
} 

const FlashCards = [
  {
    id: 1,
    question: "Al no tener columna, experimentan la ...",
    answer: "Metamorfosis",
    options: [
      "a) Metamorfosis",
      "b) Fotosíntesis",
      "c) Vertebración",
    ],
    explanation: "Por este proceso, cambian de forma o/y color durante su desarrollo"
  },
  {
    id: 2,
    question: "Los artrópodos son los únicos invertebrados con ...",
    answer: "Patas",
    options: [
      "a) Cuerpo flácido",
      "b) Escamas",
      "c) Patas",
    ],
    explanation: ""
  },
  {
    id: 3,
    question: "Las esponjas pertenecen a los ...",
    answer: "Portíferos",
    options: [
      "a) Artópodos",
      "b) Portíferos",
      "c) Poctriferos",
    ],
  },
  {
    id: 4,
    question: "Los moluscos poseen caparazón",
    answer: "Algunos sí, otros no",
    options: [
      "a) Verdadero",
      "b) Falso",
      "c) Algunos sí, otros no",
    ],
    explanation: "Los bivalvos y los gasterópodos tienen caparazón, sin embargo, los cefalópodos no tienen ninguno"
  },
  {
    id: 5,
    question: "Las esponjas se caracterizan por tener ...",
    answer: "Poros",
    options: [
      "a) Poros",
      "b) Escamas",
      "c) Anémonas",
    ],
  },
  {
    id: 6,
    question: "Los cangrejos son ..",
    answer: "Artrópodos",
    options: [
      "a) Vertebrados",
      "b) Artrópodos",
      "c) Anfibios",
    ],
  },
  {
    id: 7,
    question: "Las medusas y los corales son ...",
    answer: "Cnidarios",
    options: [
      "a) Mamíferos",
      "b) Artrópodos",
      "c) Cnidarios",
    ],
    explanation: ""
  },
  {
    id: 8,
    question: "Los equinodermos destacan por su ...",
    answer: "Dureza corporal",
    options: [
      "a) Dureza corporal",
      "b) Flacidez",
      "c) Fuerza",
    ],
  },
  {
    id: 9,
    question: "Los equinodermos viven principalmente en ...",
    answer: "Los oceanos",
    options: [
      "a) Los rios",
      "b) Los árboles",
      "c) Los oceanos",
    ],
  },
]


export default InvertebradosQuintoEj


