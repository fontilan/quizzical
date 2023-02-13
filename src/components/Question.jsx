import React from 'react';
import PropTypes from 'prop-types';
import { nanoid } from 'nanoid';

function Question({
  allAnswers,
  correctAnswer,
  gameEnded,
  id,
  question,
  selectAnswer,
  selectedAnswer,
}) {
  const styles = (answer) => {
    if (gameEnded === false) {
      return {
        backgroundColor: answer === selectedAnswer ? '#d6dbf5' : '#ffffff',
        border:
          answer === selectedAnswer
            ? 'solid 1px transparent'
            : 'solid 1px #4d5b9e',
      };
    }
    if (answer === selectedAnswer && selectedAnswer !== correctAnswer) {
      return {
        backgroundColor: '#f8bcbc',
        border: 'none',
        color: '#4e546e',
      };
    }
    if (answer === correctAnswer) {
      return {
        backgroundColor: '#94d7a2',
        border: 'none',
      };
    }
    return {
      backgroundColor: '#f5f7fb',
      border: 'solid 1px #A8B0D1',
      color: '#686f92',
    };
  };

  return (
    <div className="question-card">
      <p className="question-card__question">{decodeURIComponent(question)}</p>
      <div className="question-card__answers">
        {allAnswers.map((answer) => (
          <button
            className="question-card__answer"
            key={nanoid()}
            onClick={() => selectAnswer(id, answer)}
            style={styles(answer)}
            type="button"
            value={answer}>
            {decodeURIComponent(answer)}
          </button>
        ))}
      </div>
      <hr />
    </div>
  );
}

Question.propTypes = {
  allAnswers: PropTypes.arrayOf(PropTypes.string).isRequired,
  correctAnswer: PropTypes.string.isRequired,
  gameEnded: PropTypes.bool.isRequired,
  id: PropTypes.string.isRequired,
  question: PropTypes.string.isRequired,
  selectAnswer: PropTypes.func.isRequired,
  selectedAnswer: PropTypes.string.isRequired,
};

export default Question;
