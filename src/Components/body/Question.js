import React, { useState } from "react";
import questions from "../../Data/questions.json";
import Option from "./Option";

const Question = () => {
  const [selectedOption, setSelectedOption] = useState(null);

  const handleOptionChange = (index) => {
    setSelectedOption(index);
  };

  return (
    <>
      <h4 className="mt-10 text-base text-base-content">Question 1 of 5</h4>
      <div className="mt-4 text-2xl font-medium text-base-content">
        What type of framework is Next.js?
          </div>
          <hr className="w-full mt-2 h-1" />
      <div className="my-6 w-full grid grid-cols-2 grid-rows-2 gap-6">
        {questions[0].answerOptions.map((answer, index) => (
          <Option
            key={index}
            id={index}
            answer={answer}
            isSelected={selectedOption === index}
            onOptionChange={() => handleOptionChange(index)}
          />
        ))}
      </div>
    </>
  );
};

export default Question;
