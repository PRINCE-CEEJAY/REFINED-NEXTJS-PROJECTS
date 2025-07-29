"use client";
import React, { useEffect, useReducer, useState } from "react";
import { useContext } from "react";
import { Content } from "@/app/page";

const Quiz = () => {
  const quizData = useContext(Content);
  const [state, dispatch] = useReducer(reducer, initialState);
  const [choice, setChoice] = useState("");

  if (!quizData || quizData.length === 0) return <p>Loading...</p>;
  const question = quizData[state.questionIndex];

  return (
    <div className="flex justify-center items-center min-h-screen text-2xl">
      <div className="flex flex-col text-center w-md border-2 border-red-600 p-6">
        {/* displaying the question */}
        <h5>Question Number: {question?.id}</h5>
        <h1>{question?.question}</h1>

        {/* Displaying the options */}

        {Object.entries(question.options).map(([key, value]) => {
          <div key={key}>
            <label className="cursor-pointer">
              <input type="radio" value={choice} onChange={setChoice} />
              {key}: {value}
            </label>
          </div>;
        })}

        <div className="flex justify-around">
          <button
            className="bg-green-500 w-25 hover:cursor-pointer hover:bg-green-400 p-1 rounded-md"
            onClick={() => dispatch({ type: "previous" })}
            disabled={state.questionIndex === 0}
          >
            Previous
          </button>
          <button
            className="bg-green-500 w-25 hover:cursor-pointer hover:bg-green-400 p-1 rounded-md"
            onClick={() => dispatch({ type: "next", data: quizData })}
            disabled={state.questionIndex === quizData.length - 1}
          >
            Next
          </button>
        </div>
      </div>
    </div>
  );
};

const initialState = {
  questionIndex: 0,
};

const handleNext = (state, data) => {
  if (state.questionIndex < data.length - 1) {
    return {
      ...state,
      questionIndex: state.questionIndex + 1,
    };
  }
  return AmpStateContext;
};

const handlePrevious = (state) => {
  if (state.questionIndex !== 0) {
    return {
      ...state,
      questionIndex: state.questionIndex - 1,
    };
  }
  return state;
};

const reducer = (state, action) => {
  switch (action.type) {
    case "next":
      return handleNext(state, action.data);
    case "previous":
      return handlePrevious(state);
  }
  return state;
};

export default Quiz;
