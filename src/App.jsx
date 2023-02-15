import React, { useEffect, useState } from 'react';
import { nanoid } from 'nanoid';
import Intro from './components/Intro';
import Questions from './components/Questions';
import Summary from './components/Summary';

function App() {
  const [category, setCategory] = useState(0);
  const [currentQuestions, setCurrentQuestions] = useState();
  const [difficulty, setDifficulty] = useState('any');
  const [gameEnded, setGameEnded] = useState(false);
  const [gameStarted, setGameStarted] = useState(false);
  const [points, setPoints] = useState(0);
  const [url, setUrl] = useState(
    'https://opentdb.com/api.php?amount=5&type=multiple&encode=url3986',
  );

  useEffect(() => {
    if (category !== 0) {
      setUrl(
        `https://opentdb.com/api.php?amount=5&category=${category}&type=multiple&encode=url3986`,
      );
    }
    if (difficulty !== 'any') {
      setUrl(
        `https://opentdb.com/api.php?amount=5&category=${category}&difficulty=${difficulty}&type=multiple&encode=url3986`,
      );
    }
  }, [category, difficulty]);

  const fetchQuestions = async () => {
    const response = await fetch(url);
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

  const startNewGame = () => {
    setPoints(0);
    setGameStarted(true);
    setGameEnded(false);
    fetchQuestions();
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
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
      {!gameStarted && (
        <Intro
          setCategory={setCategory}
          setDifficulty={setDifficulty}
          startGame={startNewGame}
        />
      )}
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
            points={points}
          />
        </>
      )}
    </div>
  );
}

export default App;
