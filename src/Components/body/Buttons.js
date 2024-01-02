import React from 'react'

const Buttons = ({
  questions,
  currentQuestion,
  handlePrevious,
  handleNext,
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
      <button
        className="w-[20%] btn btn-primary text-lg rounded-lg"
        onClick={handleNext}
        disabled={currentQuestion === questions.length-1}
      >
        Next
      </button>
    </div>
  );
};

export default Buttons