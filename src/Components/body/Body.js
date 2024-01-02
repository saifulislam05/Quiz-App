import React, { useEffect, useState } from "react";
import axios from "axios";
import Buttons from "./Buttons";
import Question from "./Question";
import Result from "./Result";

const Body = () => {
  const [questions, setQuestions] = useState([]);
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [selectedOptions, setSelectedOptions] = useState([]);
  const [score, setScore] = useState(0);
  const [showScore, setShowScore] = useState(false);


  const handleAnswerOption = (answer) => {
    const existingOptionIndex = selectedOptions.findIndex(
      (item) => item.id === currentQuestion
    );

    if (existingOptionIndex !== -1) {
      // If an answer is already selected for the current question,
      // update the answerByUser with the new answer.
      setSelectedOptions((prevSelectedOptions) => {
        const updatedOptions = [...prevSelectedOptions];
        updatedOptions[existingOptionIndex].answerByUser = answer;
        return updatedOptions;
      });
    } else {
      // If no answer is selected for the current question, add a new option.
      setSelectedOptions((prevSelectedOptions) => [
        ...prevSelectedOptions,
        { id: currentQuestion, answerByUser: answer },
      ]);
    }

    console.log(selectedOptions);
  };

  const handlePrevious = () => {
    const prevQues = currentQuestion - 1;
    prevQues >= 0 && setCurrentQuestion(prevQues);
  };

  const handleNext = () => {
    const nextQues = currentQuestion + 1;
    nextQues < questions.length && setCurrentQuestion(nextQues);
  };

  useEffect(() => {
    const fetchQuestions = async () => {
      try {
        const response = await axios.get(
          "https://opentdb.com/api.php?amount=10&type=multiple"
        );
        setQuestions(response.data.results);
        console.log(response.data.results);
      } catch (error) {
        console.error("Error fetching questions:", error);
      }
    };

    fetchQuestions();
  }, []);

    const submitAnswer = () => {
      let newScore = 0;
      for (let i = 0; i < questions.length; i++) {
        const correctAnswer = questions[i]?.correct_answer; 
        const userAnswer = selectedOptions.find(
          (option) => option.id === i
        )?.answerByUser; 

        if (correctAnswer === userAnswer) {
          newScore++;
        }
      }

      setScore(newScore);
      setShowScore(true);
  };


  
  const closeModal = () => {
    setShowScore(false);
    setSelectedOptions([]);
    setScore(0);
    setCurrentQuestion(0)
  }


  return (
    <div className="flex flex-col h-[90vh] justify-center items-center">
      {showScore ? (
        <Result
          score={score}
          questions={questions}
          showScore={showScore}
          closeModal={closeModal}
        />
      ) : (
        <div className="flex flex-col items-start w-11/12 mx-auto">
          <Question
            questions={questions}
            currentQuestion={currentQuestion}
            handleAnswerOption={handleAnswerOption}
            selectedOptions={selectedOptions}
            handleNext={handleNext}
          />
          <Buttons
            questions={questions}
            currentQuestion={currentQuestion}
            handlePrevious={handlePrevious}
            handleNext={handleNext}
            submitAnswer={submitAnswer}
          />
        </div>
      )}
    </div>
  );
};

export default Body;
