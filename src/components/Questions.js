import React from 'react';
import { nanoid } from 'nanoid';

const Question = ({
  question,
  points,
  shuffledAnswers,
  selectAnswer,
  styles,
  questionNumber,
}) => {
  return (
    <div className="question-card">
      <p className="question-card--question">{question}</p>
      <div>
        Current points: {points} / {questionNumber}
      </div>
      <div className="question-card--answers">
        {shuffledAnswers.map((answer) => (
          <button
            className="question-card--answers--answer"
            key={nanoid()}
            value={answer}
            onClick={() => selectAnswer(answer)}
            style={styles(answer)}
            selected={false}
          >
            {decodeURIComponent(answer)}
          </button>
        ))}
      </div>
    </div>
  );
};

const Questions = ({
  question,
  points,
  shuffledAnswers,
  newQuestion,
  selectAnswer,
  styles,
  confirm,
  questionNumber,
}) => {
  return (
    <div className="questionsSection">
      <Question
        question={question}
        points={points}
        shuffledAnswers={shuffledAnswers}
        styles={styles}
        selectAnswer={selectAnswer}
        questionNumber={questionNumber}
      />
      <button
        type="button"
        className="questionsSection--button"
        onClick={confirm}
      >
        Check
      </button>
      <br />
      <button
        type="button"
        className="questionsSection--button"
        onClick={newQuestion}
      >
        Next Question
      </button>
    </div>
  );
};

export default Questions;
