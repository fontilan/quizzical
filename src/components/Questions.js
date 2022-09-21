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
  buttonText,
  confirm,
  correctAnswer,
  numberOfQuestions,
  points,
  question,
  questionNumber,
  selectAnswer,
  selectedAnswer,
  showResults,
  shuffledAnswers,
}) => {
  return (
    <div className="questionsSection">
      <Question
        correctAnswer={correctAnswer}
        numberOfQuestions={numberOfQuestions}
        points={points}
        question={question}
        questionNumber={questionNumber}
        selectAnswer={selectAnswer}
        selectedAnswer={selectedAnswer}
        showResults={showResults}
        shuffledAnswers={shuffledAnswers}
      />
      <Button buttonText={buttonText} onClick={confirm} />
    </div>
  );
};

export default Questions;
