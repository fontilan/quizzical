import React from 'react';
// import { nanoid } from 'nanoid';
import Question from './Question';

const Questions = ({ currentQuestions, gameEnded, correctAnswersArray }) => {
  return (
    <div className="questionsSection">
      {currentQuestions.map((questionObject, i) => (
        <Question
          correctAnswer={questionObject.correct_answer}
          question={questionObject.question}
          shuffledAnswers={[
            questionObject.correct_answer,
            ...questionObject.incorrect_answers,
          ]}
          gameEnded={gameEnded}
          key={i}
          index={i}
          correctAnswersArray={correctAnswersArray}
        />
      ))}
    </div>
  );
};

export default Questions;
