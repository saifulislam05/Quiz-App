import React from "react";

import Buttons from "./Buttons";
import Question from "./Question";

const Body = () => {
  return (
    <div className="flex flex-col h-[90vh] justify-center items-center">
      <div className="flex flex-col items-start w-11/12 mx-auto">
        <Question/>
        <Buttons/>
      </div>
    </div>
  );
};

export default Body;
