import React from 'react'

const Buttons = () => {
  return (
    <div className="flex justify-between w-full mt-4">
      <button className="w-[20%] btn btn-primary text-lg rounded-lg">
        Previous
      </button>
      <button className="w-[20%] btn btn-primary text-lg rounded-lg">
        Next
      </button>
    </div>
  );
}

export default Buttons