import React, { useState } from 'react';

import Intro from './components/Intro';
import Questions from './components/Questions';
import Summary from './components/Summary';

import { nanoid } from 'nanoid';

const App = () => {
  const [currentQuestions, setCurrentQuestions] = useState();
  const [gameEnded, setGameEnded] = useState(false);
  const [gameStarted, setGameStarted] = useState(false);
  const [points, setPoints] = useState(0);

  let category, numberOfQuestions;

  category = 9;
  numberOfQuestions = 5;

  const fetchQuestions = async () => {
    const response = await fetch(
      `https://opentdb.com/api.php?amount=${numberOfQuestions}&category=${category}&type=multiple&encode=url3986`,
    );
    const data = await response.json();
    let questions = [];
    data.results.forEach((q) => {
      questions.push({
        id: nanoid(),
        question: q.question,
        correct_answer: q.correct_answer,
        all_answers: [...q.incorrect_answers, q.correct_answer].sort(
          () => Math.random() - 0.5,
        ),
        selected_answer: '',
      });
    });
    setCurrentQuestions(questions);
  };

  const startNewGame = () => {
    setPoints(0);
    setGameStarted(true);
    setGameEnded(false);
    fetchQuestions();
  };

  const endGame = () => {
    setGameEnded(true);
    calculatePoints();
  };

  const handleClick = () => {
    gameEnded ? startNewGame() : endGame();
  };

  const selectAnswer = (id, answer) => {
    if (gameEnded === false) {
      setCurrentQuestions((prevQuestions) =>
        prevQuestions.map((question) =>
          question.id === id
            ? { ...question, selected_answer: answer }
            : question,
        ),
      );
    }
  };

  const calculatePoints = () => {
    currentQuestions.forEach((question) => {
      if (question.selected_answer === question.correct_answer) {
        setPoints((points) => points + 1);
      }
    });
  };

  return (
    <div className="App">
      {!gameStarted && <Intro onClick={startNewGame} />}

      {gameStarted && currentQuestions && (
        <>
          <Questions
            currentQuestions={currentQuestions}
            gameEnded={gameEnded}
            selectAnswer={selectAnswer}
          />
          <Summary
            handleClick={handleClick}
            gameEnded={gameEnded}
            numberOfQuestions={numberOfQuestions}
            points={points}
          />
        </>
      )}
    </div>
  );
};

export default App;
