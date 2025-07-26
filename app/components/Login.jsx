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
  const [selectedAction, setSelectedAction] = useState("Select Action...");

  console.log(selectedAction);

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
  return (
    <div className="flex justify-center align-middle min-w-sm">
      <div>
        <select
          className="w-full hover:cursor-pointer"
          value={selectedAction}
          onChange={(e) => setSelectedAction(e.target.value)}
        >
          <option>None</option> 
          <option>Register</option>
          <option>Login</option>
        </select>
      </div>
      <div className="flex flex-col w-full justify-center text-center align-middle space-y-4 ">
        <h1 className="text-2xl font-extrabold">LOGIN</h1>
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
        <button
          onClick={handleRegister}
          className="bg-green-400 rounded-sm text-white h-10 font-bold hover:cursor-pointer hover:bg-green-300"
        >
          Register
        </button>
        <p>Already registered ?</p>
        <button
          onClick={handleLogin}
          className="bg-green-400 rounded-sm text-white h-10 font-bold hover:cursor-pointer hover:bg-green-300"
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
    </div>
  );
};

export default Login;
