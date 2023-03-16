import "./App.css";
import { questions } from "./questions";
import { useState } from "react";

function App() {
  const [displayResult, setdisplayResult] = useState(false);
  const [score, setscore] = useState(0);
  const [currentQuestion, setcurrentQuestion] = useState(0);

  //helperFunctions

  const playAgain = () => {
    setdisplayResult(false);
    setscore(0);
    setcurrentQuestion(0);
  };

  const optionClicked = (isCorrect) => {
    if (isCorrect === true) {
      setscore(score + 1);
    }

    if (currentQuestion < questions.length - 1) {
      setcurrentQuestion(currentQuestion + 1);
    } else {
      setdisplayResult(true);
    }
  };

  return (
    <div className="App text-center">
      {/* Header */}
      <div className="container">
        <h1 className=" mt-2">Welcome to Quiz</h1>
        <p>Quiz game for the top 10 states and their capitals of India.</p>
      </div>
      {/* Questions and score display */}
      <div className="container-md w-50 bg-light border align-items-center flex-column d-flex justify-content-between flex-md-row">
        <p className="my-1 lead">
          Questions <b>{currentQuestion + 1}</b> of <b>{questions.length}</b>
        </p>
        <p className="my-1 lead">
          Current Score: <b>{score}</b>
        </p>

        {/* Actual Quiz Question */}
      </div>
      {displayResult ? (
        // Display result pannel when the displayResult is true
        <div className="container my-3 text-center py-3 w-50 border bg-primary-subtle">
          <p className="fs-3 ps-3 ">Final Results</p>
          <p className="fs-5">
            {score} out of {questions.length} correct - (
            {(score / questions.length) * 100}%)
          </p>
          <button className="btn btn-primary" onClick={playAgain}>
            Play Again
          </button>
        </div>
      ) : (
        // Display questions and option when displayResult is false
        <div className="container my-3 text-start py-3 w-75 border bg-primary-subtle">
          {/* Question */}
          <p className="fs-3 ps-3 text-start">
            {questions[currentQuestion].text}
          </p>
          {/* Options */}
          <div>
            <div className="card">
              <ul className="list-group list-group-flush">
                {questions[currentQuestion].options.map((option) => {
                  return (
                    <li
                      className="list-group-item"
                      key={option.id}
                      onClick={() => optionClicked(option.isCorrect)}
                    >
                      <button className="btn fs-5 text-start ps-4 w-100">
                        {option.text}
                      </button>
                    </li>
                  );
                })}
              </ul>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export default App;
