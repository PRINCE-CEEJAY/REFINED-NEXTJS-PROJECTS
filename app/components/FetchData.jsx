"use client";
import React, { useState, useEffect } from "react";
import useFetch from "../hooks/UseFetch";

const FetchData = () => {
  const { data, loading, refetch } = useFetch(
    "https://api.adviceslip.com/advice"
  );
  const [loadedAdvice, setLoadedAdvice] = useState("");
  const [dataCount, setDataCount] = useState(0);
  const [retrievedUser, setretrievedUser] = useState(null);

  useEffect(() => {
    try {
      const getUser = localStorage.getItem("storedUser");
      const storedUser = JSON.parse(getUser);
      setretrievedUser(storedUser);
    } catch (error) {
      setretrievedUser("No user found ", error);
    }
  }, []);

  const handleGetAdvice = async () => {
    await refetch(); // trigger fetch
    if (data?.slip?.advice) {
      setLoadedAdvice(data.slip.advice);
      setDataCount((prev) => prev + 1);
    }
  };
  return (
    <div className="flex flex-col justify-center items-center space-y-2 min-h-screen">
      <h1 className="text-center font-bold">
        {retrievedUser ? "Welcome to Advice Tab " : "Advice Tab"}
      </h1>
      <div className="flex flex-col justfiy-center items-center">
        <h2 className="text-center font-bold text-blue-900">
          Number: {dataCount}
        </h2>
        <h1 className="text-center font-bold text-red-900 text-5xl">
          {loading ? "Loading..." : loadedAdvice}
        </h1>
        <button
          className="bg-green-600 cursor-pointer text-white hover:bg-green-400 font-extrabold text-2xl rounded-sm mt-4 p-2"
          onClick={handleGetAdvice}
        >
          Fetch Advice
        </button>
      </div>
    </div>
  );
};

export default FetchData;
