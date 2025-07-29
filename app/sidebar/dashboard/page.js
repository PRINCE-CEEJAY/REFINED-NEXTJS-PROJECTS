// app/sidebar/dashboard.js
"use client";
import React, { useContext } from "react";
import FetchData from "@/app/components/FetchData";
import Notes from "@/app/components/Notes";
import Quiz from "@/app/components/QUIZ";
import { userCredential } from "@/app/components/UserProvider";

const DashboardPage = () => {
  const { user } = useContext(userCredential);

  return (
    <div className="sticky top-0 left-[36%]">
      <h1 className="text-center text-lg font-bold">
        Welcome {user || "Guest"}
      </h1>
      <FetchData />
      <Quiz />
      <Notes />
    </div>
  );
};

export default DashboardPage;
