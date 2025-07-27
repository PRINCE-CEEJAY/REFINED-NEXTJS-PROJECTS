"use client";
import React, { useState, useEffect, useContext } from "react";
import { LoginData } from "../dashboard/page";

const FetchData = () => {
  const admin = useContext(LoginData);
  const [advice, setAdvice] = useState("");
  const [loadedAdvice, setLoadedAdvice] = useState("");
  const [dataCount, setDataCount] = useState(0);
  const [retrievedUser, setretrievedUser] = useState(null);

  useEffect(() => {
    fetchAdvice();
  }, [advice]);

  useEffect(() => {
    try {
      const getUser = localStorage.getItem("storedUser");
      const storedUser = JSON.parse(getUser);
      setretrievedUser(storedUser);
    } catch (error) {
      setretrievedUser("No user found ", error);
    }
  }, []);

  const fetchAdvice = async () => {
    try {
      const data = await fetch("https://api.adviceslip.com/advice");
      const res = await data.json();
      setLoadedAdvice(res.slip.advice);
    } catch (error) {
      setLoadedAdvice(error.message);
    }
  };
  const handleGetAdvice = () => {
    if (loadedAdvice && loadedAdvice.length !== 0) {
      setAdvice(loadedAdvice);
      setDataCount((prevCount) => prevCount + 1);
    } else {
      setAdvice("Loading...");
    }
  };
  return (
    <div className="flex flex-col justify-center  align-middle space-y-2 max-w-md">
      <h1 className="text-center font-bold">Welcome {retrievedUser} </h1>
      <div className="flex flex-col justfiy-center align-middle">
        <h2 className="text-center font-bold text-blue-900">
          Number: {dataCount}
        </h2>
        <h1 className="text-center font-bold text-red-900">{advice}</h1>
        <button
          className="bg-green-600 text-white hover:bg-green-400 cursor-pointer"
          onClick={handleGetAdvice}
        >
          Fetch Advice
        </button>
      </div>
      <h1 className="text-center font-bold">
        Brought to you by: {admin.name}, contact me on: {admin.phone} or email
        me: {admin.email}
      </h1>
    </div>
  );
};

export default FetchData;
