/* eslint-disable react-hooks/exhaustive-deps */
import React, { useState, useEffect } from 'react';
import Questions from './components/Questions';
import Intro from './components/Intro';

const App = () => {
  const [buttonText, setButtonText] = useState('Select answer');
  const [currentQuestions, setCurrentQuestions] = useState();
  const [gameEnded, setGameEnded] = useState(false);
  const [gameStarted, setGameStarted] = useState(false);
  const [points, setPoints] = useState(0);
  const [pointsCalculated, setPointsCalculated] = useState(false);
  const [questionNumber, setQuestionNumber] = useState(1);
  const [reloadQuestions, setReloadQuestions] = useState(false);
  const [selectedAnswer, setSelectedAnswer] = useState('');
  const [showResults, setShowResults] = useState(false);

  let category,
    correctAnswer,
    incorrectAnswers,
    numberOfQuestions,
    question,
    allAnswers;

  category = 16;
  numberOfQuestions = 5;

  useEffect(() => {
    fetch(
      `https://opentdb.com/api.php?amount=${numberOfQuestions}&category=${category}&type=multiple&encode=url3986`,
    )
      .then((res) => res.json())
      .then((data) => setCurrentQuestions(data.results));
  }, [reloadQuestions]);

  const newQuestion = () => {
    setReloadQuestions((reloadQuestions) => !reloadQuestions);
    setSelectedAnswer('');
    setShowResults(false);
    setPointsCalculated(false);
    setQuestionNumber((prevNum) => prevNum + 1);
    setButtonText('Select answer');
  };

  const confirm = () => {
    if (selectedAnswer === '') {
      alert('Please select an answer');
    } else {
      if (pointsCalculated === false) {
        setShowResults(true);
        calculatePoints();
        if (questionNumber < numberOfQuestions) {
          setButtonText('Next question');
        } else setButtonText('See results');
      } else {
        if (questionNumber === numberOfQuestions) {
          setGameEnded(true);
        } else newQuestion();
      }
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

  const startGame = () => {
    setGameStarted(true);
  };

  const Button = ({ buttonText, onClick }) => {
    return (
      <button
        className="questionsSection--button"
        onClick={onClick}
        type="button">
        {buttonText}
      </button>
    );
  };

  return (
    <div className="App">
      {!gameStarted && <Intro onClick={startGame} />}
      {gameStarted && currentQuestions && (
        <Questions currentQuestions={currentQuestions} gameEnded={gameEnded} />
      )}
      {/* the button below should be merged with the intro button */}
      {gameStarted && <Button buttonText={buttonText} onClick={confirm} />}
      {/* the element below could be a separate component */}
      {gameEnded && (
        <p>
          You scored {points} out of {numberOfQuestions}!
        </p>
      )}
    </div>
  );
};

export default App;
