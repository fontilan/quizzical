import React, { useState, useEffect } from 'react';
import { nanoid } from 'nanoid';

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

const App = () => {
  const [currentQuestion, setCurrentQuestion] = useState(placeholderObject);
  const [reloadQuestions, setReloadQuestions] = useState(false);
  const [selectedAnswer, setSelectedAnswer] = useState('');
  const [showResults, setShowResults] = useState(false);
  const [points, setPoints] = useState(0);
  const [pointsCalculated, setPointsCalculated] = useState(false);

  useEffect(() => {
    fetch(
      'https://opentdb.com/api.php?amount=1&category=19&type=multiple&encode=url3986',
    )
      .then((res) => res.json())
      .then((data) => setCurrentQuestion(data.results));
  }, [reloadQuestions]);

  // const category = decodeURIComponent(currentQuestion[0].category);
  // const difficulty = currentQuestion[0].difficulty;

  const question = decodeURIComponent(currentQuestion[0].question);
  const correctAnswer = currentQuestion[0].correct_answer;
  const incorrectAnswers = currentQuestion[0].incorrect_answers;

  const allAnswers = [correctAnswer, ...incorrectAnswers];

  // this just switches the state from true to false to true etc. and based on this change the useEffect is triggered and a new question is fetched from the API
  const newQuestion = () => {
    if (pointsCalculated === true) {
      setReloadQuestions((reloadQuestions) => !reloadQuestions);
      setSelectedAnswer('');
      setShowResults(false);
      setPointsCalculated(false);
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
        setPoints((oldValue) => oldValue + 1);
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

  return (
    <div className="App">
      <div className="questionsSection">
        <div className="question-card">
          <p className="question-card--question">{question}</p>
          <div>DEBUG current points: {points}</div>
          <div className="question-card--answers">
            {allAnswers.map((answer) => (
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
    </div>
  );
};

export default App;
