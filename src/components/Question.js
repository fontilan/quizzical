import React, { useState } from 'react';
import { nanoid } from 'nanoid';

const Question = ({
  correctAnswer,
  question,
  shuffledAnswers,
  gameEnded,
  number,
}) => {
  const [selectedAnswer, setSelectedAnswer] = useState('');

  const selectAnswer = (answer) => {
    setSelectedAnswer(answer);
    console.log('answer selected:', answer);
  };
  console.log('number:', number);

  console.log('selectedAnswer:', selectedAnswer);

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
        {shuffledAnswers.map((answer) => (
          <button
            className="question-card--answers--answer"
            key={nanoid()}
            value={answer}
            onClick={() => selectAnswer(answer)}
            style={styles(answer)}>
            {decodeURIComponent(answer)}
          </button>
        ))}
      </div>
    </div>
  );
};

export default Question;
