import React, { useState, useEffect, useRef, component } from 'react'
import { Link } from "react-router-dom"
import Nav from "./nav"
import Rail from "./rail"
import FlashCardList from "../../FlashCardList"

function ContextoQuintoEj() {
  const [flashcards, setFlashcards] = useState(FlashCards)
  return (
   <>
<Nav/>
<div className="buttonDivTo">
<Link to="/aprende/quinto-grado/ciencias/adaptaciones" className="goToOtherArticle cool-link">
  Leer el artículo
</Link>
</div>
<Rail/>
  <div className="elMeroMero">
  <div className="blockN1">
            <h4>Contexto peruano</h4>
            <p className="pOfQuizzes">¡Pon a prueba tus conocimientos!</p>
            <FlashCardList flashcards = {flashcards}/>    
           {/*  <div className="threeButton">
            <Link className="cool-link go-btn" to="/aprende/quinto-grado/ciencias/adaptaciones">Ver artículo</Link>
              </div>  */}     
  </div>
  </div>
   </>
  )
} 

const FlashCards = [
  
{
  id: 1,
  question: "El Perú es un país políticamente",
  answer: "Democrático",
  options: [
    "a) Comunista",
    "b) Fascista",
    "c) Democrático",
  ],

},
{
  id: 2,
  question: "En el Perú hay ",
  answer: "24 departamentos",
  options: [
    "a) 20 departamentos",
    "b) 24 departamentos",
    "c) 30 departamentos",
  ],
},
{
  id: 3,
  question: "El Perú está dividido en tres regiones:",
  answer: "Costa, sierra y selva",
  options: [
    "a) Costa, sierra y selva",
    "b) Costa, desierto y selva",
    "c) Costa, montaña y jungla",
  ],
},
{
  id: 4,
  question: "El gobernador del Perú es elegido por",
  answer: "los ciudadanos",
  options: [
    "a) los ciudadanos",
    "b) los niños",
    "c) sorteo",
  ],
},
{
  id: 5,
  question: "En el Perú se puede votar a partir de los",
  answer: "18 años",
  options: [
    "a) 15 años",
    "b) 18 años",
    "c) 21 años",
  ],
},
{
  id: 6,
  question: "¿Con qué país NO limita Perú?",
  answer: "Venezuela",
  options: [
    "a) Brasil",
    "b) Venezuela",
    "c) Chile",
  ],
},
{
  id: 7,
  question: "El mar peruano se ubica en el océano ...",
  answer: "Pacífico",
  options: [
    "a) Pacífico",
    "b) Atlántico",
    "c) Índico",
  ],
},
{
  id: 8,
  question: "La capital del Perú es",
  answer: "Lima",
  options: [
    "a) Lima",
    "b) Miraflores",
    "c) Cuzco",
  ],
},
{
  id: 9,
  question: "Lima está ubicado en la región de la",
  answer: "costa",
  options: [
    "a) costa",
    "b) sierra",
    "c) selva",
  ],
},
{
  id: 10,
  question: "La amazonía es la selva más grande del mundo",
  answer: "Verdadero",
  options: [
    "a) Verdadero",
    "b) Falso",
  ],
},
{
  id: 11,
  question: "Un país democrático cree en",
  answer: "el respeto y la igualdad",
  options: [
    "a) el maltrato y la burla",
    "b) el respeto y la igualdad",
    "c) el amor y cariño",
  ],
},
{
  id: 12,
  question: "Las mujeres siempre han podido votar",
  answer: "Falso",
  options: [
    "a) Verdadero",
    "b) Falso",
  ],
},
]


export default ContextoQuintoEj


