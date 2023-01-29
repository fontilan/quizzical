/* eslint-disable jsx-a11y/label-has-associated-control */
/* eslint-disable react/prop-types */
import React from 'react';

function Intro({ startGame }) {
  function handleSubmit(e) {
    e.preventDefault();
    const form = e.target;
    const formData = new FormData(form);
    const formJSON = Object.fromEntries(formData.entries());

    const category = formJSON.selectedCategory;
    const difficulty = formJSON.selectedDifficulty;

    startGame(category, difficulty);
  }

  return (
    <div className="intro">
      <h1 className="intro--title">Quizzical</h1>
      <p className="intro--description">See how good you are with trivia!</p>
      <form onSubmit={handleSubmit}>
        <label>
          Select Category:
          <select name="selectedCategory">
            <option value="0">Any Category</option>
            <option value="9">General Knowledge</option>
            <option value="10">Entertainment: Books</option>
            <option value="11">Entertainment: Film</option>
            <option value="12">Entertainment: Music</option>
          </select>
        </label>
        <label>
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
