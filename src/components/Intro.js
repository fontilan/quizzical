const Intro = ({ onClick }) => (
  <div className="intro">
    <h1 className="intro--title">Quizzical</h1>
    <p className="intro--description">See how good you are with trivia!</p>
    <button className="intro--button" onClick={onClick}>
      Start quiz
    </button>
  </div>
);

export default Intro;
