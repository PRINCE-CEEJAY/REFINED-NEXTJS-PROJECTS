"use client";
import React, { useState } from "react";

const Notes = () => {
  const [note, setNote] = useState({
    id: null,
    title: "",
    note: "",
  });

  const [result, setResult] = useState({
    title: "",
    note: "",
  });

  const [warning, setWarning] = useState("");

  const handleChange = (e) => {
    setNote((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!note.title || !note.note) {
      setWarning("Please fill in both fields.");
      return;
    }

    const newNote = {
      id: Date.now(),
      title: note.title.trim(),
      note: note.note.trim(),
    };

    localStorage.setItem(newNote.title, JSON.stringify(newNote));
    setResult(newNote);
    setNote({ id: null, title: "", note: "" });
    setWarning("");
  };

  const handleFetch = () => {
    const fetchTitle = prompt("Enter the title of the note you want to fetch:");
    if (!fetchTitle || fetchTitle.trim().length < 1) {
      setWarning("You must enter a valid title.");
      return;
    }

    const storedNote = localStorage.getItem(fetchTitle.trim());
    if (!storedNote) {
      setWarning(`No note found with the title "${fetchTitle.trim()}"`);
      return;
    }

    const parsedNote = JSON.parse(storedNote);
    setResult(parsedNote);
    setWarning("");
  };

  const handleDelete = () => {
    const deleteTitle = prompt(
      "Enter the title of the note you want to delete:"
    );
    if (!deleteTitle || deleteTitle.trim().length < 1) {
      setWarning("You must enter a valid title to delete.");
      return;
    }

    const trimmedTitle = deleteTitle.trim();

    if (!localStorage.getItem(trimmedTitle)) {
      setWarning(`No note found with the title "${trimmedTitle}"`);
      return;
    }

    localStorage.removeItem(trimmedTitle);
    setResult({ title: "", note: "" });
    setWarning(`Successfully deleted the note titled "${trimmedTitle}"`);
  };

  const handleEdit = () => {
    const editTitle = prompt("Enter the title of the note you want to edit:");
    if (!editTitle || editTitle.trim().length < 1) {
      setWarning("You must enter a valid title to edit.");
      return;
    }

    const existingNote = localStorage.getItem(editTitle.trim());
    if (!existingNote) {
      setWarning(`No note found with the title "${editTitle.trim()}"`);
      return;
    }

    const parsedNote = JSON.parse(existingNote);
    const newNote = prompt("Enter the new note content:", parsedNote.note);

    if (newNote === null || newNote.trim().length < 1) {
      setWarning("Edit cancelled or empty note provided.");
      return;
    }

    const updatedNote = {
      ...parsedNote,
      note: newNote.trim(),
    };

    localStorage.setItem(editTitle.trim(), JSON.stringify(updatedNote));
    setResult(updatedNote);
    setWarning(`Successfully updated "${editTitle.trim()}"`);
  };

  return (
    <div className="max-w-md mx-auto p-4rounded-lg shadow-md mt-10">
      <div className="w-full h-12 bg-blue-500 rounded-t-full items-center">
        <h1 className="text-xl text-center font-extrabold mb-4 ">
          React LocalStorage Note App
        </h1>
      </div>

      <form onSubmit={handleSubmit} className="flex flex-col gap-3">
        <input
          type="text"
          name="title"
          placeholder="Enter title"
          value={note.title}
          onChange={handleChange}
          className="p-2 border rounded"
        />
        <textarea
          name="note"
          placeholder="Enter note"
          value={note.note}
          onChange={handleChange}
          className="p-2 border rounded"
        ></textarea>
        <button
          type="submit"
          className="bg-blue-500 text-white font-extrabold px-4 py-2 rounded hover:bg-blue-600 hover:cursor-pointer"
        >
          Save Note
        </button>
      </form>

      <div className="flex gap-2 mt-4">
        <button
          onClick={handleFetch}
          className="bg-green-500 text-white font-extrabold px-4 py-2 rounded hover:bg-green-600 hover:cursor-pointer"
        >
          Fetch Note
        </button>
        <button
          onClick={handleEdit}
          className="bg-yellow-500 font-extrabold text-white px-4 py-2 rounded hover:bg-yellow-600 hover:cursor-pointer"
        >
          Edit Note
        </button>
        <button
          onClick={handleDelete}
          className="bg-red-500 text-white font-extrabold px-4 py-2 rounded hover:bg-red-600 hover:cursor-pointer"
        >
          Delete Note
        </button>
      </div>

      {warning && <p className="mt-4 text-red-600 font-semibold">{warning}</p>}

      {result.title && (
        <div className="mt-6 bg-white p-4 rounded shadow">
          <h2 className="font-bold text-lg">📌 {result.title}</h2>
          <p>{result.note}</p>
        </div>
      )}
      <div className="w-full h-12 bg-blue-500 rounded-b-full mt-3 items-center">
        <h1 className="text-xl text-center font-bold mb-4">
          Coded by Prince Ceejay NG
        </h1>
      </div>
    </div>
  );
};

export default Notes;
