"use client";
import React, { useState } from "react";
import { auth } from "../firebase";
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
} from "firebase/auth";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [message, setMessage] = useState("");
  const [loggedIn, setLoggedIn] = useState(false);
  const [registered, setRegistered] = useState(false);
  const [selectedAction, setSelectedAction] = useState("");

  const handleRegister = async () => {
    try {
      setMessage("Loading...");
      await createUserWithEmailAndPassword(auth, email, password);
      setMessage(`Successfully registered ${auth.currentUser.email}`);
      setEmail("");
      setPassword("");
      setRegistered(true);
    } catch (error) {
      console.log(error);
      setMessage(error.message);
      setRegistered(false);
    }
  };

  const handleLogin = async () => {
    try {
      setMessage("Loading...");
      await signInWithEmailAndPassword(auth, email, password);
      setMessage(`Successfully logged in as ${auth.currentUser.email}`);
      setLoggedIn(true);
      setEmail("");
      setPassword("");
    } catch (error) {
      setMessage(error.message);
      setLoggedIn(false);
    }
  };
  // const setDisplay = (display) => {
  //   if (selectedAction.toUpperCase() === "LOGIN") {
  //     return "hidden";
  //   } else if (selectedAction.toUpperCase() === "REGISTER") {
  //     return "";
  //   }
  //   return display;
  // };

  return (
    <div className="flex flex-col rounded-sm justify-center align-middle min-w-sm bg-red-300 p-2">
      <h1 className="text-2xl text-center font-extrabold">REGISTER / LOGIN</h1>
      <div className="flex justify-center w-full">
        <select
          className=" min-w-sm hover:cursor-pointer bg-yellow-200 p-2 font-bold"
          value={selectedAction}
          onChange={(e) => setSelectedAction(e.target.value)}
        >
          <option>Select action...</option>
          <option>None</option>
          <option>Register</option>
          <option>Login</option>
        </select>
      </div>
      <div className="flex flex-col w-full justify-center text-center align-middle space-y-4 ">
        <h4 className="text-green-900">{message}</h4>
        <label htmlFor="email">Enter your email:</label>
        <input
          name="email"
          type="text"
          id="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
        />
        <label htmlFor="email">Enter your Password</label>
        <input
          name="password"
          type="password"
          id="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          required
        />

        <div>
          {selectedAction.toLowerCase() === "register" && (
            <button
              onClick={handleRegister}
              className="bg-green-400 rounded-sm text-white h-10 font-bold hover:cursor-pointer hover:bg-green-300 w-full"
            >
              Register
            </button>
          )}
        </div>

        {selectedAction.toLowerCase() === "login" && (
          <div>
            <button
              onClick={handleLogin}
              className="bg-green-400 rounded-sm text-white h-10 font-bold hover:cursor-pointer hover:bg-green-300 w-full"
            >
              Login
            </button>

            <div className="flex text-left justify-around align-middle">
              <label htmlFor="check">Remember me</label>
              <input
                className="hover: cursor-pointer w-4"
                name="check"
                type="checkbox"
                id="check"
              />
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default Login;
