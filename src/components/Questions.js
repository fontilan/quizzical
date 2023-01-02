import React from 'react';
import Question from './Question';

const Questions = ({ currentQuestions, gameEnded, selectAnswer }) => {
  return (
    <div className="questionsSection">
      {currentQuestions.map((questionObject, i) => (
        <Question
          allAnswers={questionObject.all_answers}
          correctAnswer={questionObject.correct_answer}
          gameEnded={gameEnded}
          id={questionObject.id}
          key={i}
          question={questionObject.question}
          selectAnswer={selectAnswer}
          selectedAnswer={questionObject.selected_answer}
        />
      ))}
    </div>
  );
};

export default Questions;
