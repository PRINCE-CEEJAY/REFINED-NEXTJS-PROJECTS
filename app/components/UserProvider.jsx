"use client";
import React, { createContext } from "react";
import { useState, useEffect, useContext } from "react";

export const userCredential = createContext();

const UserProvider = ({ children }) => {
  const [user, setUser] = useState(null);

  useEffect(() => {
    const stored = localStorage.getItem("storedUser");
    if (stored) {
      setUser(JSON.parse(stored));
    }
  }, []);

  return (
    <userCredential.Provider value={{ user, setUser }}>
      {children}
    </userCredential.Provider>
  );
};

export default UserProvider;
