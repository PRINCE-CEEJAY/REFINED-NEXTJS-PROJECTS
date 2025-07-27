"use client";
import React from "react";
import { motion, AnimatePresence } from "framer-motion";

const Animation = () => {
  return (
    <div className="flex  justify-center">
      <motion.div
        initial={{ opacity: 1, rotate: 0, y: 0 }}
        animate={{ opacity: 0, translateY: 350, y: 200 }}
        exit={{ opacity: 1 }}
        transition={{ duration: 5 }}
      >
        <h1 className="text-center text-4xl text-blue-900 ">
          PRINCE CEEJAY NG
        </h1>
      </motion.div>
    </div>
  );
};

export default Animation;
