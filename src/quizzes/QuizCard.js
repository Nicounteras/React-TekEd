import React, { useState, useEffect, useRef } from 'react'

export default function Quizcard({ quizcard }) {
  const [correctAnswer, setCorrectAnswer] = useState(false)
  const [falseAnswer, setFalseAnswer] = useState(false)
  const [count, setCount] = useState(0);
  const handleIncrease = () => {
    setCount(count + 1);
    setCorrectAnswer(!correctAnswer)
  };
  return (
  <>
    <div
    className="card-quiz"
  >
      <h5 className="quizQuestion">{quizcard.question}</h5>
      <div className="grid-button-quiz">
        <button onClick={() => setFalseAnswer(!falseAnswer)}>{quizcard.wrongOne}</button>
        <button onClick={() => setFalseAnswer(!falseAnswer)}>{quizcard.wrongTwo}</button>
        <button onClick={() => setFalseAnswer(!falseAnswer)}>{quizcard.wrongThree}</button>
        <button onClick={handleIncrease}>{quizcard.correct}</button>
      </div>
    <div className={`correct ${correctAnswer ? 'go' : 'none'}`}>
        <h3>¡Respuesta correcta!</h3>
        <p className="correctAns">{quizcard.explanation}</p>
    </div>
    <div className={`false ${falseAnswer ? 'go' : 'none'}`}>
      <h3>¡Los mejores se equivocan!</h3>
        <h5>Respuesta correcta: {quizcard.answer}</h5>
        <p className="correctAns">{quizcard.explanation}</p>
    </div>
  </div>
  </>
  )
}