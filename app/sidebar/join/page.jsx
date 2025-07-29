import Login from "@/app/components/Login";
import React from "react";

const page = () => {
  return (
    <div className="flex justify-center items-center min-h-screen">
      <h1 className="text-center text-3xl text-green-900">Join us today</h1>
      <Login />
    </div>
  );
};

export default page;
