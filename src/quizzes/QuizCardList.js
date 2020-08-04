import React from 'react'
import QuizCard from './QuizCard';

export default function QuizCardList({ quizcards }) {
  return (
    <div className="card-grid-quiz">
      {quizcards ? quizcards.map(quizcard => {
        return <QuizCard quizcard={quizcard} key={quizcard.id} />
      }): ""}
    </div>
  )
}