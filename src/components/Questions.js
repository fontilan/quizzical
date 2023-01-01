import React from 'react';
import Question from './Question';

const Questions = ({ currentQuestions, gameEnded, selectAnswer }) => {
  return (
    <div className="questionsSection">
      {currentQuestions.map((questionObject, i) => (
        <Question
          correctAnswer={questionObject.correct_answer}
          question={questionObject.question}
          allAnswers={questionObject.all_answers}
          gameEnded={gameEnded}
          key={i}
          id={questionObject.id}
          selectAnswer={selectAnswer}
          selectedAnswer={questionObject.selected_answer}
        />
      ))}
    </div>
  );
};

export default Questions;
