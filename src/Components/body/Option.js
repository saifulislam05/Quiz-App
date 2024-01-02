import React from "react";

// Option component
const Option = ({
  id,
  answer,
  handleAnswerOption,
  selectedOptions,
  currentQuestion,
}) => {

  const isAnswerSelected =
    answer === selectedOptions.find((item) => item.id === currentQuestion)?.answerByUser;
console.log(selectedOptions);
  return (
    <label
      className={`form-control p-2 flex items-center w-full border-2 cursor-pointer rounded-xl ${
        isAnswerSelected? "bg-success text-success-content"
          : "text-neutral-content"
      }`}
    >
      <div className="label cursor-pointer">
        <input
          type="radio"
          name={`option${currentQuestion}`} // Use a unique name for each question
          id={id}
          className="radio checked:bg-blue-500 hidden"
          checked={isAnswerSelected}
          onChange={() => handleAnswerOption(answer)}
        />
        <span className="label-text text-lg font-semibold">{answer}</span>
      </div>
    </label>
  );
};

export default Option;