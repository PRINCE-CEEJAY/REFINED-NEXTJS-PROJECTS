"use client";
import React, { useState } from "react";

const DialogBox = () => {
  const [action, setAction] = useState("Save");
  const handlePositve = () => {};
  const handleNegative = () => {};
  return (
    <div className="flex justify-center items-center h-screen ${f}">
      <div className="flex flex-col hover:opacity-80 justify-center items-center space-y-30 rounded-md p-3">
        <h1 className="cursor-pointer font-extrabold text-2xl text-center">
          Are you sure to {action} ?
        </h1>
        <div className="flex justify-around w-full space-x-2">
          <button
            className="text-white font-bold bg-blue-800 hover:bg-blue-400 hover:cursor-pointer p-1 rounded-sm w-1/2"
            onClick={handlePositve}
          >
            {action}
          </button>
          <button
            onClick={handleNegative}
            className="text-white font-bold bg-blue-800 hover:bg-blue-400 hover:cursor-pointer p-1 rounded-sm w-1/2"
          >
            Cancel
          </button>
        </div>
      </div>
    </div>
  );
};

export default DialogBox;
