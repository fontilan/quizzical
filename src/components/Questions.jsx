import React from 'react';
import PropTypes from 'prop-types';
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

Questions.propTypes = {
  currentQuestions: PropTypes.arrayOf(
    PropTypes.objectOf(
      PropTypes.oneOfType([PropTypes.array, PropTypes.string]),
    ),
  ).isRequired,
  gameEnded: PropTypes.bool.isRequired,
  selectAnswer: PropTypes.func.isRequired,
};

export default Questions;
