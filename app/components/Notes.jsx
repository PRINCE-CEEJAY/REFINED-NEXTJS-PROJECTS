"use client";
import React, { useState } from "react";

const Notes = () => {
  const [notes, setNotes] = useState("");
  const [status, setStatus] = useState("");

  const handleSave = () => {
    if (notes.trim && notes.length > 0) {
      try {
        const Store = localStorage.setItem("note", JSON.stringify(notes));
        setStatus("Successfully saved");
        setNotes("");
      } catch (error) {
        setStatus("Error occured ...", error);
      }
    }
  };
  const handleDelete = () => {};
  const handleView = () => {};
  const handleEdit = () => {};
  return (
    <div className="flex flex-col min-w-sm min-h-screen ">
      <div className="flex flex-col justify-center align-middle min-w-md mx-auto">
        <h1 className="text-blue-800 font-extrabold text-3xl text-center">
          Note Taker
        </h1>
        <textarea
          className="w-full h-60 border-2 border-red-800 rounded-sm"
          type="text"
          name="note"
          value={notes}
          onChange={(e) => setNotes(e.target.value)}
          placeholder="Enter your notes here..."
        ></textarea>
        <div className="flex gap-2 justify-around">
          <button
            onClick={handleSave}
            className="bg-green-800 hover:bg-green-400  text-white font-bold rounded-sm w-1/3 p-1 mt-2 align-middle hover:cursor-pointer"
          >
            Save
          </button>
          <button
            onClick={handleView}
            className="bg-green-800 hover:bg-green-400 text-white font-bold rounded-sm w-1/3 p-1 mt-2 align-middle hover:cursor-pointer"
          >
            View{" "}
          </button>
          <button
            onClick={handleEdit}
            className="bg-green-800 hover:bg-green-400 text-white font-bold rounded-sm w-1/3 p-1 mt-2 align-middle hover:cursor-pointer"
          >
            Edit{" "}
          </button>
          <button
            onClick={handleDelete}
            className="bg-red-800 hover:bg-red-400 text-white font-bold rounded-sm w-1/3 p-1 mt-2 align-middle hover:cursor-pointer"
          >
            Delete
          </button>
        </div>
        <h2 className="font-bold text-green-900 text-shadow-amber-300">
          {status}
        </h2>
      </div>
      {/* <RenderNotes /> */}
    </div>
  );
};

export default Notes;

export const RenderNotes = () => {
  return (
    <div>
      <h1>View Tab</h1>
    </div>
  );
};
