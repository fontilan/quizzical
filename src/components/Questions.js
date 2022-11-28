import React from 'react';
// import { nanoid } from 'nanoid';
import Question from './Question';

const Questions = ({ currentQuestions, gameEnded }) => {
  const shuffledAnswersArray = [];
  currentQuestions.map((question) => {
    shuffledAnswersArray.push(
      [...question.incorrect_answers, question.correct_answer].sort(
        () => Math.random() - 0.5,
      ),
    );
    return shuffledAnswersArray;
  });

  return (
    <div className="questionsSection">
      {currentQuestions.map((questionObject, i) => (
        <Question
          correctAnswer={questionObject.correct_answer}
          question={questionObject.question}
          // allAnswers={[
          //   questionObject.correct_answer,
          //   ...questionObject.incorrect_answers,
          // ]}
          allAnswers={[
            ...questionObject.incorrect_answers,
            questionObject.correct_answer,
          ].sort(() => Math.random() - 0.5)}
          gameEnded={gameEnded}
          key={i}
        />
      ))}
    </div>
  );
};

export default Questions;
