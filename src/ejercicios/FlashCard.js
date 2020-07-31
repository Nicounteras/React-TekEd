import React, { useState, useEffect, useRef } from 'react'

export default function Flashcard({ flashcard }) {
  const [flip, setFlip] = useState(false)

  return (
    <div
    className={`card ${flip ? 'flip' : ''}`}
  >
    <div className="front">
      <h5 className="theQuestion">{flashcard.question}</h5>
      <div className="flashcard-options">
        {flashcard ? flashcard.options.map(option => {
          return <ul className="flashcard-option" key={option}><p>{option}</p></ul>
        }): ""}
      </div>
      <button onClick={() => setFlip(!flip)}>Ver respuesta</button>
    </div>
    <div className="back" onClick={() => setFlip(!flip)}>
        <p className="Explanation">{flashcard.explanation}</p>
        <h3>Respuesta: {flashcard.answer}</h3>
    </div>
  </div>
  )
}