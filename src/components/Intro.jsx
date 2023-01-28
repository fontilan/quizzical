/* eslint-disable jsx-a11y/label-has-associated-control */
/* eslint-disable react/prop-types */
import React from 'react';

function Intro({ onClick }) {
  return (
    <div className="intro">
      <h1 className="intro--title">Quizzical</h1>
      <p className="intro--description">See how good you are with trivia!</p>
      <form>
        <label>
          Select Category:
          <select>
            <option value="any">Any Category</option>
            <option value="e-books">Entertainment: Books</option>
            <option value="e-film">Entertainment: Film</option>
            <option value="e-music">Entertainment: Music</option>
            <option value="general">General Knowledge</option>
          </select>
        </label>
        <label>
          Difficulty
          <select>
            <option value="any">Any difficulty</option>
            <option value="easy">Easy</option>
            <option value="medium">Medium</option>
            <option value="hard">Hard</option>
          </select>
        </label>
        <button type="button" className="intro--button" onClick={onClick}>
          Start quiz
        </button>
      </form>
    </div>
  );
}

export default Intro;
