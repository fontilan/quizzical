const Intro = ({ startGame }) => (
  <div className="intro">
    <h1 className="intro--title">Quizzical</h1>
    <p className="intro--description">See how good you are with trivia!</p>
    <button className="intro--button" onClick={startGame}>
      Start quiz
    </button>
  </div>
);

export default Intro;
