import React from 'react';
// import { nanoid } from 'nanoid';
import Question from './Question';

const Questions = ({ currentQuestions, gameEnded }) => {
  let isCorrect = false;
  return (
    <div className="questionsSection">
      {currentQuestions.map((questionObject, i) => (
        <Question
          correctAnswer={questionObject.correct_answer}
          question={questionObject.question}
          allAnswers={questionObject.all_answers}
          gameEnded={gameEnded}
          key={i}
          isCorrect={isCorrect}
        />
      ))}
    </div>
  );
};

export default Questions;
