/* eslint-disable react/prop-types */
import React from 'react';

function Summary({ handleClick, gameEnded, numberOfQuestions, points }) {
  return (
    <div className="summary">
      {gameEnded && (
        <p className="summary--text">
          You scored {points}/{numberOfQuestions} correct answers
        </p>
      )}
      <button className="summary--button" onClick={handleClick} type="button">
        {`${gameEnded ? `Play again` : 'Check answers'}`}
      </button>
    </div>
  );
}

export default Summary;