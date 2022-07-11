import React, { useState, useEffect } from 'react';

import Questions from './components/Questions';

const placeholderObject = [
  {
    category: 'History',
    type: 'multiple',
    difficulty: 'hard',
    question:
      'When%20did%20Lithuania%20declare%20independence%20from%20the%20Soviet%20Union%3F',
    correct_answer: 'March%2011th%2C%201990',
    incorrect_answers: [
      'December%2025th%2C%201991',
      'December%205th%2C%201991',
      'April%2020th%2C%201989',
    ],
  },
];

const placeholderAllAnswers = [
  'March%2011th%2C%201990',
  'December%2025th%2C%201991',
  'December%205th%2C%201991',
  'April%2020th%2C%201989',
];

const App = () => {
  const [questionNumber, setQuestionNumber] = useState(1);
  const [currentQuestion, setCurrentQuestion] = useState(placeholderObject);
  const [reloadQuestions, setReloadQuestions] = useState(false);
  const [selectedAnswer, setSelectedAnswer] = useState('');
  const [showResults, setShowResults] = useState(false);
  const [points, setPoints] = useState(0);
  const [pointsCalculated, setPointsCalculated] = useState(false);
  const [shuffledAnswers, setShuffledAnswers] = useState(placeholderAllAnswers);

  useEffect(() => {
    fetch(
      'https://opentdb.com/api.php?amount=1&category=18&type=multiple&encode=url3986',
    )
      .then((res) => res.json())
      .then((data) => setCurrentQuestion(data.results));
  }, [reloadQuestions]);

  useEffect(() => {
    setShuffledAnswers(allAnswers.sort(() => Math.random() - 0.5));
  }, [currentQuestion]);

  // const category = decodeURIComponent(currentQuestion[0].category);
  // const difficulty = currentQuestion[0].difficulty;

  const question = decodeURIComponent(currentQuestion[0].question);
  const correctAnswer = currentQuestion[0].correct_answer;
  const incorrectAnswers = currentQuestion[0].incorrect_answers;

  const allAnswers = [correctAnswer, ...incorrectAnswers];

  const newQuestion = () => {
    if (pointsCalculated === true) {
      setReloadQuestions((reloadQuestions) => !reloadQuestions);
      setSelectedAnswer('');
      setShowResults(false);
      setPointsCalculated(false);
      setQuestionNumber((prevNum) => prevNum + 1);
    }
  };

  const selectAnswer = (answer) => {
    if (!showResults) {
      setSelectedAnswer(answer);
    }
  };

  const confirm = () => {
    if (selectedAnswer === '') {
      alert('Please select an answer');
    } else {
      setShowResults(true);
      calculatePoints();
    }
  };

  const calculatePoints = () => {
    if (pointsCalculated === false) {
      if (selectedAnswer === correctAnswer) {
        setPoints((prevPoints) => prevPoints + 1);
      }
    }
    setPointsCalculated(true);
  };

  const styles = (answer) => {
    if (showResults === false) {
      return {
        backgroundColor: selectedAnswer === answer ? '#d6dbf5' : '#ffffff',
        border: selectedAnswer === answer ? 'none' : 'solid 1px #4d5b9e',
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

  console.log('questionNumber', questionNumber);

  return (
    <div className="App">
      <Questions
        question={question}
        points={points}
        shuffledAnswers={shuffledAnswers}
        newQuestion={newQuestion}
        styles={styles}
        selectAnswer={selectAnswer}
        confirm={confirm}
        questionNumber={questionNumber}
      />
    </div>
  );
};

export default App;
