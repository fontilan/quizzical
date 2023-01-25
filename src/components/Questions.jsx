/* eslint-disable react/prop-types */
import React from 'react';
import Question from './Question';

function Questions({ currentQuestions, gameEnded, selectAnswer }) {
  return (
    <div className="questionsSection">
      {currentQuestions.map((questionObject) => (
        <Question
          allAnswers={questionObject.all_answers}
          correctAnswer={questionObject.correct_answer}
          gameEnded={gameEnded}
          id={questionObject.id}
          key={questionObject.id}
          question={questionObject.question}
          selectAnswer={selectAnswer}
          selectedAnswer={questionObject.selected_answer}
        />
      ))}
    </div>
  );
}

export default Questions;
