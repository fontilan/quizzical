import React from 'react';

const Summary = ({ confirm, gameEnded, numberOfQuestions, points }) => {
  const Button = () => {
    let buttonText;
    gameEnded ? (buttonText = 'Play again') : (buttonText = 'Check answers');

    return (
      <button className="summary--button" onClick={confirm} type="button">
        {buttonText}
      </button>
    );
  };

  return (
    <div className="summary">
      {gameEnded && (
        <p className="summary--text">
          You scored {points}/{numberOfQuestions} correct answers
        </p>
      )}
      <Button />
    </div>
  );
};

export default Summary;
