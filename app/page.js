"use client";
import DialogBox from "./components/DialogBox";
import FetchData from "./components/FetchData";
import Login from "./components/Login";
import { createContext } from "react";

import Animation from "./components/Animation";

export const Content = createContext();

let quizData = [
  {
    id: 1,
    question: "What is HTML ?",
    options: {
      a: "High Make-Up Language",
      b: "HyperText Markup Language",
      c: "Higher Term Machine Language",
      d: "None of the above",
    },
    answer: "HyperText Markup Language",
  },
  {
    id: 2,
    question: "What is CSS ?",
    options: {
      a: "Cassave System Store",
      b: "Care of Statistics System",
      c: "Carbon Systematic Science",
      d: "Cascading Style Sheet",
    },
    answer: "Cascading Style Sheet",
  },
  {
    id: 3,
    question: "Is Javascript a programming language ?",
    options: {
      a: "No Idea",
      b: "No",
      c: "Yes",
      d: "None of the above",
    },
    answer: "Yes",
  },
  {
    id: 4,
    question: "Who invented Facebook ?",
    options: {
      a: "Isaac Newton",
      b: "Elon Musk",
      c: "Mark Zuckerberg",
      d: "None of the above",
    },
    answer: "Mark Zuckerberg",
  },
  {
    id: 5,
    question: "What is the meaning of IDE ?",
    options: {
      a: "Independent Edition",
      b: "Integrated Development Environment",
      c: "Independent Data Export",
      d: "Independent Data Edition",
    },
    answer: "Integrated Development Environment",
  },
  {
    id: 6,
    question: "What is the VRE ?",
    options: {
      a: "Virtual Runtime Environment",
      b: "Vacuum Real Environment",
      c: "Virtual Rate Mechanism",
      d: "None of the above",
    },
    answer: "Virtual Runtime Environment",
  },
];

export default function Home() {
  const isLocked = process.env.NEXT_PUBLIC_PRIVATE_MODE === "true";

  if (isLocked) {
    return (
      <div className="flex items-center justify-center min-h-screen bg-black text-white">
        <div className="text-center">
          <h1 className="text-2xl font-bold">🚧 Site Under Construction</h1>
          <p className="mt-4">
            This project is not yet public. Please check back later.
          </p>
        </div>
      </div>
    );
  }

  return (
    <main>
      <Content.Provider value={quizData}>
        <div className="relative min-h-screen overflow-hidden min-w-screen">
          <Animation />
          <Login />
        </div>
      </Content.Provider>
    </main>
  );
}
