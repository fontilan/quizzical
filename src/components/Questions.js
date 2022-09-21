import React from 'react';
import Question from './Question';

const Questions = ({
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
    </div>
  );
};

export default Questions;
