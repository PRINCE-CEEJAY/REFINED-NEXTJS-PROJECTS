"use client";
import React, { useEffect, useState } from "react";
import { auth, googleAuth, provider } from "../firebase";
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  signInWithPopup,
} from "firebase/auth";
import dashboard from "../dashboard/page";
import Dashboard from "../dashboard/page";
import { useRouter } from "next/navigation";

const Login = () => {
  const router = useRouter();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [message, setMessage] = useState("");
  const [loggedIn, setLoggedIn] = useState(false);
  const [registered, setRegistered] = useState(false);
  const [selectedAction, setSelectedAction] = useState("");
  const [user, setUser] = useState(null);

  const handleRegister = async () => {
    try {
      setMessage("Loading...");
      await createUserWithEmailAndPassword(auth, email, password);
      setMessage(`Successfully registered ${auth.currentUser.email}`);
      setEmail("");
      setPassword("");
      setRegistered(true);
      setUser(auth.currentUser.email);
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
      setUser(auth.currentUser.email);
    } catch (error) {
      setMessage(error.message);
      setLoggedIn(false);
    }
  };

  const handleLoginWithGoogle = async () => {
    try {
      setMessage("Loading...");
      const result = await signInWithPopup(auth, provider);
      setMessage(`Successfully logged in as ${result.user}`);
      setLoggedIn(true);
      setEmail("");
      setPassword("");
      setUser(result.user);
    } catch (error) {
      setMessage(error.message);
      setLoggedIn(false);
    }
  };

  useEffect(() => {
    if (user) {
      try {
        router.push("/dashboard");
      } catch (error) {
        console.log("failed to load", error);
      }
    }
  }, [user]);

  //storing user in localStorage too
  if (user) {
    const storedUser = localStorage.setItem("storedUser", JSON.stringify(user));
  }

  return (
    <div className="flex flex-col rounded-sm justify-center items-center min-h-screen p-2 ">
      <h1 className="text-2xl text-center max-w-md font-extrabold">
        REGISTER / LOGIN
      </h1>

      <div className="flex flex-col w-md  justify-center text-center space-y-4 ">
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
          <div className="space-y-3">
            <button
              onClick={handleLogin}
              className="bg-green-400 rounded-sm text-white h-10 font-bold hover:cursor-pointer hover:bg-green-300 w-full"
            >
              Login
            </button>
            <button
              onClick={handleLoginWithGoogle}
              className="bg-green-400 rounded-sm text-white h-10 font-bold hover:cursor-pointer hover:bg-green-300 w-full"
            >
              SignIn with Google
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
        <div className="flex justify-center max-w-md item-center">
          <select
            className=" min-w-sm hover:cursor-pointer  p-2 font-bold"
            value={selectedAction}
            onChange={(e) => setSelectedAction(e.target.value)}
          >
            <option>Select action...</option>
            <option>None</option>
            <option>Register</option>
            <option>Login</option>
          </select>
        </div>
      </div>
    </div>
  );
};

export default Login;
