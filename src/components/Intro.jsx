/* eslint-disable react/prop-types */
import React from 'react';

function Intro({ onClick }) {
  return (
    <div className="intro">
      <h1 className="intro--title">Quizzical</h1>
      <p className="intro--description">See how good you are with trivia!</p>
      <button type="button" className="intro--button" onClick={onClick}>
        Start quiz
      </button>
    </div>
  );
}

export default Intro;
