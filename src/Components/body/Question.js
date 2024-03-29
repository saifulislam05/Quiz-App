import React, { useEffect, useState } from "react";
import Option from "./Option";

// Question component
const Question = ({
  questions,
  currentQuestion,
  handleAnswerOption,
  selectedOptions,
  handleNext,
}) => {
  const [timer, setTimer] = useState(5);

  useEffect(() => {
    const interval = setInterval(() => {
      setTimer((prevTimer) => prevTimer - 1);
    }, 1000);

    return () => clearInterval(interval);
  }, [currentQuestion]);

  useEffect(() => {
    setTimer(5);
  }, [currentQuestion]);

  useEffect(() => {
    if (timer === 0) {
      handleNext();
    }
  }, [timer]);

  return (
    <>
      <div className="mt-10 flex justify-between w-full text-base text-base-content">
        <span>
          Question {currentQuestion + 1} of {questions?.length}
        </span>
        <span>
          You have{" "}
          <span className="countdown font-semibold">
            <span style={{ "--value": timer }}></span>
          </span>{" "}
          second
        </span>
      </div>
      <div className="mt-4 text-2xl font-medium text-base-content">
        {questions[currentQuestion]?.question}
      </div>
      <hr className="w-full mt-2 h-1" />
      <div className="my-6 w-full grid grid-cols-2 grid-rows-2 gap-6">
        {questions[currentQuestion]?.incorrect_answers.map((answer, index) => (
          <Option
            key={index}
            id={`op${index}`} // Use a unique id for each option
            answer={answer}
            handleAnswerOption={handleAnswerOption}
            selectedOptions={selectedOptions}
            currentQuestion={currentQuestion}
          />
        ))}
        <Option
          id={`op${questions[currentQuestion]?.incorrect_answers.length}`} // Unique id for the correct answer
          answer={questions[currentQuestion]?.correct_answer}
          handleAnswerOption={handleAnswerOption}
          selectedOptions={selectedOptions}
          currentQuestion={currentQuestion}
        />
      </div>
    </>
  );
};

export default Question;
