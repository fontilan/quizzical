import React from 'react';
import { nanoid } from 'nanoid';
import Question from './Question';

const Questions = ({ currentQuestions, gameEnded }) => {
  return (
    <div className="questionsSection">
      {currentQuestions.map((questionObject) => (
        <Question
          number={questionObject.indexOf}
          correctAnswer={questionObject.correct_answer}
          question={questionObject.question}
          shuffledAnswers={[
            questionObject.correct_answer,
            ...questionObject.incorrect_answers,
          ]}
          gameEnded={gameEnded}
          key={nanoid()}
        />
      ))}
    </div>
  );
};

export default Questions;
