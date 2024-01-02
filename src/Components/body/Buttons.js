import React from 'react'

const Buttons = ({
  questions,
  currentQuestion,
  handlePrevious,
  handleNext,
  submitAnswer,
}) => {
  return (
    <div className="flex justify-between w-full mt-4">
      <button
        className="w-[20%] btn btn-primary text-lg rounded-lg"
        onClick={handlePrevious}
        disabled={currentQuestion === 0}
      >
        Previous
      </button>
      {currentQuestion !== questions.length - 1 ? (
        <button
          className="w-[20%] btn btn-primary text-lg rounded-lg"
          onClick={handleNext}
        >
          Next
        </button>
      ) : (
        <button
          className="w-[20%] btn btn-success text-lg rounded-lg"
          onClick={submitAnswer}
        >
          Submit Answer
        </button>
      )}
    </div>
  );
};

export default Buttons