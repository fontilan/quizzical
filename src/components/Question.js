import React from 'react';
import { nanoid } from 'nanoid';

const Question = ({
  allAnswers,
  correctAnswer,
  gameEnded,
  id,
  question,
  selectAnswer,
  selectedAnswer,
}) => {
  const styles = (answer) => {
    if (gameEnded === false) {
      return {
        backgroundColor: answer === selectedAnswer ? '#d6dbf5' : '#ffffff',
        border:
          answer === selectedAnswer
            ? 'solid 1px transparent'
            : 'solid 1px #4d5b9e',
      };
    } else if (answer === selectedAnswer && selectedAnswer !== correctAnswer) {
      return {
        backgroundColor: '#f8bcbc',
        border: 'none',
        color: '#8F95B0',
      };
    } else if (answer === correctAnswer) {
      return {
        backgroundColor: '#94d7a2',
        border: 'none',
      };
    } else {
      return {
        backgroundColor: '#f5f7fb',
        border: 'solid 1px #A8B0D1',
        color: '#8F95B0',
      };
    }
  };

  return (
    <div className="question_card">
      <p className="question_card--question">{decodeURIComponent(question)}</p>
      <div className="question_card--answers">
        {allAnswers.map((answer) => (
          <button
            className="question_card--answers--answer"
            key={nanoid()}
            onClick={() => selectAnswer(id, answer)}
            style={styles(answer)}
            value={answer}>
            {decodeURIComponent(answer)}
          </button>
        ))}
      </div>
      <hr />
    </div>
  );
};

export default Question;
