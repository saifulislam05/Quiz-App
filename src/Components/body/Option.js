import React from "react";

const Option = ({ id, answer, isSelected, onOptionChange }) => {
  return (
    <label
      className={`form-control p-2 flex items-center w-full border-2 cursor-pointer rounded-xl ${
        isSelected ? "bg-success text-success-content" : "text-neutral-content"
      }`}
      htmlFor={`op${id}`}
    >
      <div className="label cursor-pointer">
        <input
          type="radio"
          name="option"
          id={`op${id}`}
          className="radio checked:bg-blue-500 hidden"
          onChange={onOptionChange}
          checked={isSelected}
        />
        <span className="label-text text-lg font-semibold">
          {answer.answer}
        </span>
      </div>
    </label>
  );
};

export default Option;
