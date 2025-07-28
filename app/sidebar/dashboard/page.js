import React from "react";
import FetchData from "@/app/components/FetchData";
import Notes from "@/app/components/Notes";
import Quiz from "@/app/components/QUIZ";

const DashboardPage = () => {
  return (
    <div className="sticky top-0 left-[36%]">
      <h1>Dashboard</h1>
      <FetchData />
      <Quiz />
      <Notes />
    </div>
  );
};

export default DashboardPage;
