"use client";
import React from "react";
import { motion, AnimatePresence } from "framer-motion";
import { red } from "@mui/material/colors";

const Animation = () => {
  return (
    <div className="flex  justify-center">
      <motion.div
        initial={{ opacity: 1, y: 0, x: 0 }}
        animate={{ opacity: 0, translateY: 500, scale: 2, color: red }}
        exit={{ opacity: 1 }}
        transition={{ duration: 15 }}
      >
        <h1 className="text-center text-4xl text-yellow-700 ">
          CODED BY PRINCE CEEJAY NG
        </h1>
      </motion.div>
    </div>
  );
};

export default Animation;
