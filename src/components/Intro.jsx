/* eslint-disable react/prop-types */
import React from 'react';

function Intro({ startGame, setCategory }) {
  function handleSubmit() {
    startGame();
  }

  function handleCatChange(e) {
    setCategory(e.target.value);
  }

  return (
    <div className="intro">
      <h1 className="intro--title">Quizzical</h1>
      <p className="intro--description">See how good you are with trivia!</p>
      <form onSubmit={handleSubmit}>
        <label htmlFor="selectedCategory">
          Select Category:
          <select name="selectedCategory" onChange={handleCatChange}>
            <option value="0">Any Category</option>
            <option value="9">General Knowledge</option>
            <option value="10">Entertainment: Books</option>
            <option value="11">Entertainment: Film</option>
            <option value="12">Entertainment: Music</option>
          </select>
        </label>
        <label htmlFor="selectedDifficulty">
          Difficulty
          <select name="selectedDifficulty">
            <option value="any">Any Difficulty</option>
            <option value="easy">Easy</option>
            <option value="medium">Medium</option>
            <option value="hard">Hard</option>
          </select>
        </label>
        <button type="submit" className="intro--button">
          Start quiz
        </button>
      </form>
    </div>
  );
}

export default Intro;
