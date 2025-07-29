// components/Login.js
"use client";
import React, { useState, useEffect, useContext } from "react";
import { auth, provider } from "../firebase";
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  signInWithPopup,
} from "firebase/auth";
import { useRouter } from "next/navigation";
import { userCredential } from "./UserProvider";

const Login = () => {
  const router = useRouter();
  const { setUser } = useContext(userCredential); // now from global context

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [message, setMessage] = useState("");
  const [selectedAction, setSelectedAction] = useState("");

  const handleAuth = async (type) => {
    try {
      setMessage("Loading...");

      if (type === "register") {
        await createUserWithEmailAndPassword(auth, email, password);
      } else {
        await signInWithEmailAndPassword(auth, email, password);
      }

      const currentUser = auth.currentUser.email;
      setUser(currentUser);
      localStorage.setItem("storedUser", JSON.stringify(currentUser));
      router.push("/sidebar/dashboard");
    } catch (error) {
      setMessage(error.message);
    }
  };

  const handleGoogle = async () => {
    try {
      setMessage("Loading...");
      const result = await signInWithPopup(auth, provider);
      const email = result.user.email;
      setUser(email);
      localStorage.setItem("storedUser", JSON.stringify(email));
      router.push("/sidebar/dashboard");
    } catch (error) {
      setMessage(error.message);
    }
  };

  return (
    <div className="flex flex-col justify-center items-center min-h-screen p-4">
      <h1 className="text-2xl font-bold">Login / Register</h1>
      <h4 className="text-green-600">{message}</h4>

      <input
        type="text"
        placeholder="Email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        className="border p-2 m-2 w-full"
      />
      <input
        type="password"
        placeholder="Password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
        className="border p-2 m-2 w-full"
      />

      <select
        value={selectedAction}
        onChange={(e) => setSelectedAction(e.target.value)}
        className="p-2 m-2 w-full"
      >
        <option>Select action...</option>
        <option value="register">Register</option>
        <option value="login">Login</option>
      </select>

      <button
        onClick={() => handleAuth(selectedAction)}
        className="bg-green-500 text-white p-2 w-full my-2 shadow-lg"
      >
        {selectedAction === "register" ? "Register" : "Login"}
      </button>

      <button
        onClick={handleGoogle}
        className="bg-red-500 text-white p-2 w-full my-2"
      >
        Sign in with Google
      </button>
    </div>
  );
};

export default Login;
