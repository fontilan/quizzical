import React, { useState } from 'react';

import { nanoid } from 'nanoid';
import Intro from './components/Intro';
import Questions from './components/Questions';
import Summary from './components/Summary';

function App() {
  const [currentQuestions, setCurrentQuestions] = useState();
  const [gameEnded, setGameEnded] = useState(false);
  const [gameStarted, setGameStarted] = useState(false);
  const [points, setPoints] = useState(0);

  const category = 9;
  const numberOfQuestions = 5;

  const fetchQuestions = async (cat, dif) => {
    console.log(cat, dif);
    const response = await fetch(
      `https://opentdb.com/api.php?amount=${numberOfQuestions}&category=${category}&type=multiple&encode=url3986`,
    );
    const data = await response.json();
    const questions = [];
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

  const startNewGame = (cat, dif) => {
    setPoints(0);
    setGameStarted(true);
    setGameEnded(false);
    fetchQuestions(cat, dif);
  };

  const calculatePoints = () => {
    currentQuestions.forEach((question) => {
      if (question.selected_answer === question.correct_answer) {
        setPoints((pts) => pts + 1);
      }
    });
  };

  const endGame = () => {
    setGameEnded(true);
    calculatePoints();
  };

  const handleClick = () => {
    if (gameEnded) {
      startNewGame();
    } else {
      endGame();
    }
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

  return (
    <div className="App">
      {!gameStarted && <Intro startGame={startNewGame} />}

      {gameStarted && currentQuestions && (
        <>
          <Questions
            currentQuestions={currentQuestions}
            gameEnded={gameEnded}
            selectAnswer={selectAnswer}
          />
          <Summary
            gameEnded={gameEnded}
            handleClick={handleClick}
            numberOfQuestions={numberOfQuestions}
            points={points}
          />
        </>
      )}
    </div>
  );
}

export default App;
