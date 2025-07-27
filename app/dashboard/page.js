"use client";
import React from "react";
import FetchData from "../components/FetchData";
import { createContext } from "react";

export const LoginData = createContext();
const admin = {
  name: "Prince Ceejay NG",
  contact: "ceejaydroidprince@gmail.com",
  phone: "09049426376",
};

const page = () => {
  return (
    <LoginData.Provider value={admin}>
      <FetchData />
    </LoginData.Provider>
  );
};

export default page;
