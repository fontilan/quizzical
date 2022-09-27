import React from 'react';
import Question from './Question';

const Questions = ({
  correctAnswer,
  question,
  selectAnswer,
  selectedAnswer,
  showResults,
  shuffledAnswers,
}) => {
  return (
    <div className="questionsSection">
      <Question
        correctAnswer={correctAnswer}
        question={question}
        selectAnswer={selectAnswer}
        selectedAnswer={selectedAnswer}
        showResults={showResults}
        shuffledAnswers={shuffledAnswers}
      />
    </div>
  );
};

export default Questions;
