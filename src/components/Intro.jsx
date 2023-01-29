/* eslint-disable jsx-a11y/label-has-associated-control */
/* eslint-disable react/prop-types */
import React from 'react';

function Intro({ onClick }) {
  function handleSubmit(e) {
    e.preventDefault();
    const form = e.target;
    const formData = new FormData(form);
    // option 1
    console.log(new URLSearchParams(formData).toString());
    // option 2
    const formJSON = Object.fromEntries(formData.entries());
    console.log(formJSON);
    // option 3
    console.log([...formData.entries()]);

    onClick();
  }

  return (
    <div className="intro">
      <h1 className="intro--title">Quizzical</h1>
      <p className="intro--description">See how good you are with trivia!</p>
      <form onSubmit={handleSubmit}>
        <label>
          Select Category:
          <select name="selectedCategory">
            <option value="any">Any Category</option>
            <option value="e-books">Entertainment: Books</option>
            <option value="e-film">Entertainment: Film</option>
            <option value="e-music">Entertainment: Music</option>
            <option value="general">General Knowledge</option>
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
