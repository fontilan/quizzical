import React from 'react';
import Question from './Question';

const Button = ({ buttonText, onClick }) => {
  return (
    <button className="questionsSection--button" onClick={onClick}>
      {buttonText}
    </button>
  );
};

const Questions = ({
  question,
  points,
  shuffledAnswers,
  selectAnswer,
  styles,
  confirm,
  questionNumber,
  buttonText,
  numberOfQuestions,
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
        numberOfQuestions={numberOfQuestions}
      />
      <Button buttonText={buttonText} onClick={confirm} />
    </div>
  );
};

export default Questions;
