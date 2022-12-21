import React, { useState } from 'react';
import Questions from './components/Questions';
import Intro from './components/Intro';

const App = () => {
  const [buttonText, setButtonText] = useState('Check answers');
  const [currentQuestions, setCurrentQuestions] = useState();
  const [gameEnded, setGameEnded] = useState(false);
  const [gameStarted, setGameStarted] = useState(false);
  const [points, setPoints] = useState(0);

  let category, numberOfQuestions;

  category = 17;
  numberOfQuestions = 2;

  const fetchQuestions = async () => {
    const response = await fetch(
      `https://opentdb.com/api.php?amount=${numberOfQuestions}&category=${category}&type=multiple&encode=url3986`,
    );
    const data = await response.json();
    let questions = [];
    data.results.forEach((q) => {
      questions.push({
        question: q.question,
        correct_answer: q.correct_answer,
        all_answers: [...q.incorrect_answers, q.correct_answer].sort(
          () => Math.random() - 0.5,
        ),
        guessed: false,
      });
    });
    setCurrentQuestions(questions);
  };

  const startNewGame = () => {
    setPoints(0);
    setGameStarted(true);
    setGameEnded(false);
    fetchQuestions();
    setButtonText('Confirm');
  };

  const confirm = () => {
    if (gameEnded === false) {
      setGameEnded(true);
      calculatePoints();
      setButtonText('Start New Game');
    } else {
      startNewGame();
    }
  };

  const calculatePoints = () => {
    currentQuestions.forEach((question) => {
      console.log(question);
      if (question.guessed) {
        console.log(question.correct_answer, 'is correct');
        setPoints((points) => points + 1);
      }
    });
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
      {!gameStarted && <Intro onClick={startNewGame} />}
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
