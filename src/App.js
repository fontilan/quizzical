import React, { useState, useEffect } from 'react';
import Questions from './components/Questions';
import Intro from './components/Intro';

const placeholderObject = [
  {
    category: '',
    type: '',
    difficulty: '',
    question: '',
    correct_answer: '',
    incorrect_answers: ['', '', ''],
  },
];

const placeholderAllAnswers = ['', '', '', ''];

const App = () => {
  const [questionNumber, setQuestionNumber] = useState(1);
  const [currentQuestion, setCurrentQuestion] = useState(placeholderObject);
  const [reloadQuestions, setReloadQuestions] = useState(false);
  const [selectedAnswer, setSelectedAnswer] = useState('');
  const [showResults, setShowResults] = useState(false);
  const [points, setPoints] = useState(0);
  const [pointsCalculated, setPointsCalculated] = useState(false);
  const [shuffledAnswers, setShuffledAnswers] = useState(placeholderAllAnswers);
  const [buttonText, setButtonText] = useState('Select answer');
  const [gameStarted, setGameStarted] = useState(false);
  const [gameEnded, setGameEnded] = useState(false);

  const numberOfQuestions = 5;

  useEffect(() => {
    fetch(
      'https://opentdb.com/api.php?amount=1&category=17&type=multiple&encode=url3986',
    )
      .then((res) => res.json())
      .then((data) => setCurrentQuestion(data.results));
  }, [reloadQuestions]);

  useEffect(() => {
    setShuffledAnswers(allAnswers.sort(() => Math.random() - 0.5));
    // eslint-disable-next-line react-hooks/exhaustive-deps
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
      setButtonText('Select answer');
    }
  };

  const selectAnswer = (answer) => {
    if (!showResults) {
      setSelectedAnswer(answer);
      setButtonText('Check answers');
    }
  };

  const confirm = () => {
    if (selectedAnswer === '') {
      alert('Please select an answer');
    }
    setShowResults(true);
    calculatePoints();
    if (questionNumber === 5) {
      setButtonText('See results');
      setGameEnded(true);
    } else {
      setButtonText('Next Question');
      newQuestion();
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

  const startGame = () => {
    setGameStarted(true);
  };

  return (
    <div className="App">
      {!gameStarted ? (
        <Intro onClick={startGame} />
      ) : (
        <Questions
          question={question}
          points={points}
          shuffledAnswers={shuffledAnswers}
          styles={styles}
          selectAnswer={selectAnswer}
          confirm={confirm}
          questionNumber={questionNumber}
          buttonText={buttonText}
          numberOfQuestions={numberOfQuestions}
        />
      )}
      {gameEnded && <p>You scored {points} out of 5!</p>}
    </div>
  );
};

export default App;
