import React from 'react';

const Summary = ({ confirm, gameEnded, numberOfQuestions, points }) => {
  return (
    <div className="summary">
      {gameEnded && (
        <p className="summary--text">
          You scored {points}/{numberOfQuestions} correct answers
        </p>
      )}
      <button className="summary--button" onClick={confirm} type="button">
        {`${gameEnded ? `Play again` : 'Check answers'}`}
      </button>
    </div>
  );
};

export default Summary;
