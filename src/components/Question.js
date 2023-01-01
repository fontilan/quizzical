import React from 'react';
import { nanoid } from 'nanoid';

const Question = ({
  id,
  correctAnswer,
  question,
  allAnswers,
  gameEnded,
  selectAnswer,
  selectedAnswer,
}) => {
  const styles = (answer) => {
    if (gameEnded === false) {
      return {
        backgroundColor: selectedAnswer === answer ? '#d6dbf5' : '#ffffff',
        border:
          selectedAnswer === answer
            ? 'solid 1px transparent'
            : 'solid 1px #4d5b9e',
      };
    } else if (selectedAnswer === answer && selectedAnswer !== correctAnswer)
      return {
        backgroundColor: '#f8bcbc',
        border: 'none',
      };
    else if (answer === correctAnswer) {
      return {
        backgroundColor: '#94d7a2',
        border: 'none',
      };
    }
  };

  return (
    <div className="question-card">
      <p className="question-card--question">{decodeURIComponent(question)}</p>
      <div className="question-card--answers">
        {allAnswers.map((answer) => (
          <button
            className="question-card--answers--answer"
            key={nanoid()}
            value={answer}
            onClick={() => selectAnswer(id, answer)}
            style={styles(answer)}>
            {decodeURIComponent(answer)}
          </button>
        ))}
      </div>
      <hr />
    </div>
  );
};

export default Question;
