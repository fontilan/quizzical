import React from 'react';
import PropTypes from 'prop-types';

function Intro({ setCategory, setDifficulty, setType, startGame }) {
  function handleCatChange(e) {
    setCategory(e.target.value);
  }

  function handleDiffChange(e) {
    setDifficulty(e.target.value);
  }

  function handleTypeChange(e) {
    setType(e.target.value);
  }

  function handleSubmit() {
    startGame();
  }

  return (
    <div className="intro">
      <h1 className="intro__title">Quizzical</h1>
      <p className="intro__description">See how good you are with trivia!</p>
      <form className="intro__form" onSubmit={handleSubmit}>
        <label className="intro__label" htmlFor="selectedCategory">
          Category:
          <select
            className="intro__select"
            name="selectedCategory"
            onChange={handleCatChange}>
            <option value="0">Any Category</option>
            <option value="9">General Knowledge</option>
            <option value="10">Entertainment: Books</option>
            <option value="11">Entertainment: Film</option>
            <option value="12">Entertainment: Music</option>
            <option value="13">Entertainment: Musicals & Theater</option>
            <option value="14">Entertainment: Television</option>
            <option value="15">Entertainment: Video Games</option>
            <option value="16">Entertainment: Board Games</option>
            <option value="17">Science & Nature</option>
            <option value="18">Science: Computers</option>
            <option value="19">Science: Mathematics</option>
            <option value="20">Mythology</option>
            <option value="21">Sports</option>
            <option value="22">Geography</option>
            <option value="23">History</option>
            <option value="24">Politics</option>
            <option value="25">Art</option>
            <option value="26">Celebrities</option>
            <option value="27">Animals</option>
            <option value="28">Vehicles</option>
            <option value="29">Entertainment: Comics</option>
            <option value="30">Science: Gadgets</option>
            <option value="31">Entertainment: Japanese Anime & Manga</option>
            <option value="32">Entertainment: Cartoons & Animation</option>
          </select>
        </label>
        <label className="intro__label" htmlFor="selectedDifficulty">
          Difficulty:
          <select
            className="intro__select"
            name="selectedDifficulty"
            onChange={handleDiffChange}>
            <option value="0">Any Difficulty</option>
            <option value="easy">Easy</option>
            <option value="medium">Medium</option>
            <option value="hard">Hard</option>
          </select>
        </label>
        <label className="intro__label" htmlFor="selectedType">
          Type:
          <select
            className="intro__select"
            name="selectedType"
            onChange={handleTypeChange}>
            <option value="0">Any Type</option>
            <option value="multiple">Multiple Choice</option>
            <option value="boolean">True / False</option>
          </select>
        </label>
        <button type="submit" className="intro__button">
          Start quiz
        </button>
      </form>
    </div>
  );
}

Intro.propTypes = {
  setCategory: PropTypes.func.isRequired,
  setDifficulty: PropTypes.func.isRequired,
  setType: PropTypes.func.isRequired,
  startGame: PropTypes.func.isRequired,
};

export default Intro;
