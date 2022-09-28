/* eslint-disable react-hooks/exhaustive-deps */
import React, { useState, useEffect } from 'react';
import Questions from './components/Questions';
import Intro from './components/Intro';

const App = () => {
  const [buttonText, setButtonText] = useState('Select answer');
  const [currentQuestion, setCurrentQuestion] = useState();
  const [gameEnded, setGameEnded] = useState(false);
  const [gameStarted, setGameStarted] = useState(false);
  const [points, setPoints] = useState(0);
  const [pointsCalculated, setPointsCalculated] = useState(false);
  const [questionNumber, setQuestionNumber] = useState(1);
  const [reloadQuestions, setReloadQuestions] = useState(false);
  const [selectedAnswer, setSelectedAnswer] = useState('');
  const [showResults, setShowResults] = useState(false);
  const [shuffledAnswers, setShuffledAnswers] = useState();

  let category,
    correctAnswer,
    incorrectAnswers,
    numberOfQuestions,
    question,
    allAnswers;

  category = 16;
  numberOfQuestions = 5;

  if (currentQuestion) {
    question = decodeURIComponent(currentQuestion[0].question);
    correctAnswer = currentQuestion[0].correct_answer;
    incorrectAnswers = currentQuestion[0].incorrect_answers;
    allAnswers = [correctAnswer, ...incorrectAnswers];
  }

  useEffect(() => {
    fetch(
      `https://opentdb.com/api.php?amount=${numberOfQuestions}&category=${category}&type=multiple&encode=url3986`,
    )
      .then((res) => res.json())
      .then((data) => setCurrentQuestion(data.results));
  }, [reloadQuestions]);

  useEffect(() => {
    if (allAnswers)
      setShuffledAnswers(allAnswers.sort(() => Math.random() - 0.5));
  }, [currentQuestion]);

  const newQuestion = () => {
    setReloadQuestions((reloadQuestions) => !reloadQuestions);
    setSelectedAnswer('');
    setShowResults(false);
    setPointsCalculated(false);
    setQuestionNumber((prevNum) => prevNum + 1);
    setButtonText('Select answer');
  };

  const selectAnswer = (answer) => {
    if (!showResults) {
      setSelectedAnswer(answer);
      setButtonText('Check answers');
    }
  };

  const confirm = () => {
    // first check if any answer was selected - otherwise alert the user to select one
    if (selectedAnswer === '') {
      alert('Please select an answer');
    }
    // if the user selected an answer
    else {
      // check if the points were calculated, if not - calculate points and show the correct answer
      if (pointsCalculated === false) {
        setShowResults(true);
        calculatePoints();
        // set the button text according to whether or not it is the last question
        if (questionNumber < numberOfQuestions) {
          setButtonText('Next question');
        } else setButtonText('See results');
      }
      // if the points were calculated we can proceed
      else {
        // if it was the final question initiate end game
        if (questionNumber === numberOfQuestions) {
          setGameEnded(true);
        }
        // otherwise show next question
        else newQuestion();
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
      {gameStarted && question && (
        <Questions
          correctAnswer={correctAnswer}
          question={question}
          selectAnswer={selectAnswer}
          selectedAnswer={selectedAnswer}
          showResults={showResults}
          shuffledAnswers={shuffledAnswers}
        />
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
