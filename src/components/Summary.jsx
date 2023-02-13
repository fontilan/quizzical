import React from 'react';
import PropTypes from 'prop-types';

function Summary({ gameEnded, handleClick, points }) {
  return (
    <div className="summary">
      {gameEnded && (
        <p className="summary__text">You scored {points}/5 correct answers</p>
      )}
      <button className="summary__button" onClick={handleClick} type="button">
        {`${gameEnded ? `Play again` : 'Check answers'}`}
      </button>
    </div>
  );
}

Summary.propTypes = {
  gameEnded: PropTypes.bool.isRequired,
  handleClick: PropTypes.func.isRequired,
  points: PropTypes.number.isRequired,
};

export default Summary;
