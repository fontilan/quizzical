import React from 'react';
import { nanoid } from 'nanoid';

const Question = ({
  question,
  shuffledAnswers,
  selectAnswer,
  styles,
  questionNumber,
  numberOfQuestions,
}) => {
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
            style={styles(answer)}
          >
            {decodeURIComponent(answer)}
          </button>
        ))}
      </div>
    </div>
  );
};

export default Question;
