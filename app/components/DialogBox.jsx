"use client";
import React, { useEffect, useState } from "react";

const DialogBox = ({ notes, onClose }) => {
  const [action, setAction] = useState("");
  const [show, setShow] = useState(true);

  useEffect(() => {
    if (action === "Yes") {
      try {
        localStorage.setItem("note", JSON.stringify(notes));
        onClose(true);
      } catch (error) {
        onClose(false);
      }
    } else if (action === "No") {
      onClose(true);
    }
  }, [action, notes]);

  const handlePositve = () => {
    setAction("Yes");
  };
  const handleNegative = () => {
    setAction("No");
  };

  return (
    <div
      className={
        show
          ? "flex flex-col justify-center items-center min-h-screen"
          : "hidden"
      }
    >
      <div className="flex flex-col hover:opacity-80 justify-center items-center rounded-md p-3 border-2 border-amber-700">
        <h1 className="text-rose-950 text-2xl font-extrabold border-2 underline decoration-amber-600">
          CONFIRMATION DIALOG BOX
        </h1>
        <h1 className="cursor-pointer font-extrabold text-2xl text-center">
          Are you sure ?
        </h1>
        <div className="h-30">
          <img
            className=""
            src="./are you sure.png"
            alt="Confirm icon"
            width={150}
            height={150}
          />
        </div>
        <div className="flex justify-around w-full space-x-2  ">
          <button
            className="text-white font-bold bg-blue-800 hover:bg-blue-400 hover:cursor-pointer p-1 rounded-sm w-1/2"
            onClick={handlePositve}
          >
            Yes
          </button>
          <button
            onClick={handleNegative}
            className="text-white font-bold bg-blue-800 hover:bg-blue-400 hover:cursor-pointer p-1 rounded-sm w-1/2"
          >
            No
          </button>
        </div>
      </div>
    </div>
  );
};

export default DialogBox;
