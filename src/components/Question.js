import React from 'react';
import { nanoid } from 'nanoid';

const Question = (props) => {
  // Style for the selected answer
  const styles = {
    backgroundColor: props.selected ? '#d6dbf5' : '#FFFFFF',
    border: props.selected ? 'none' : 'solid 1px #4d5b9e',
  };

  // This array contains the correct answer and the three incorrect answers
  const answersArray = [
    props.item.correct_answer,
    ...props.item.incorrect_answers,
  ];

  // Shuffle the answers
  const shuffledAnswers = answersArray.sort(() => Math.random() - 0.5);

  const answers = shuffledAnswers.map((answer) => (
    <button
      type="button"
      className="question-card--answers--answer"
      style={styles}
      onClick={props.buttonSelect}
      key={nanoid()}
    >
      {decodeURIComponent(answer)}
    </button>
  ));

  return (
    <div className="question-card">
      <div className="question-card--question">
        {decodeURIComponent(props.item.question)}
      </div>
      <div>correct answer: {decodeURIComponent(props.item.correct_answer)}</div>
      <div className="question-card--answers">{answers}</div>
      <hr />
    </div>
  );
};

export default Question;
