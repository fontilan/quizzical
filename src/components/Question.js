import React from 'react';
import { nanoid } from 'nanoid';

const Question = ({
  correctAnswer,
  numberOfQuestions,
  question,
  questionNumber,
  selectAnswer,
  selectedAnswer,
  showResults,
  shuffledAnswers,
}) => {
  const styles = (answer) => {
    if (showResults === false) {
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
      <p>
        Question {questionNumber} / {numberOfQuestions}
      </p>
      <p className="question-card--question">{question}</p>
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
