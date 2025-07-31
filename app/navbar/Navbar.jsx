"use client";
import React from "react";
import { motion, AnimatePresence } from "framer-motion";

import { useState } from "react";
import Link from "next/link";
import { IoOptions } from "react-icons/io5";
import { IoHome } from "react-icons/io5";
import { BiSolidDashboard } from "react-icons/bi";
import { SlFeed } from "react-icons/sl";
import { IoNotificationsCircle } from "react-icons/io5";
import { FcAbout } from "react-icons/fc";
import { FcFaq } from "react-icons/fc";
import { MdJoinFull } from "react-icons/md";

const Navbar = () => {
  const [showOptions, setShowOptions] = useState(false);

  return (
    <div className="flex-col flex-grow max-w-40 min-h-full p-3 ">
      <IoOptions
        onClick={() => setShowOptions(!showOptions)}
        className="cursor-pointer text-center"
      />
      <AnimatePresence>
        <motion.nav
          className={showOptions ? "flex flex-col space-y-7" : "hidden"}
          initial={{ opacity: 0, x: -250 }}
          animate={{ opacity: 1, x: 0 }}
          exit={{ opacity: 0, x: -250 }}
          transition={{ duration: 5 }}
        >
          <div className="flex justify-center hover:cursor-pointer">
            <img
              src="/welcome.jpg"
              alt="Profile Pic"
              width={100}
              height={100}
            />
          </div>
          <Link
            href="/sidebar/homepage"
            className="flex space-x-2 hover:text-blue-800 items-center"
          >
            <IoHome />
            <li>Homepage</li>
          </Link>

          <Link
            href="/sidebar/dashboard"
            className="flex space-x-2 hover:text-blue-800 items-center"
          >
            <BiSolidDashboard />
            <li>Dashboard</li>
          </Link>
          <Link
            href="/sidebar/feeds"
            className="flex space-x-2 hover:text-blue-800 items-center"
          >
            <SlFeed />
            <li>Feeds</li>
          </Link>
          <Link
            href="/sidebar/notifications"
            className="flex space-x-2 hover:text-blue-800 items-center"
          >
            <IoNotificationsCircle />
            <li>Notifications</li>
          </Link>
          <Link
            href="/sidebar/about"
            className="flex space-x-2 hover:text-blue-800 items-center"
          >
            <FcAbout />
            <li>About Us</li>
          </Link>
          <Link
            href="/sidebar/join"
            className="flex space-x-2 hover:text-blue-800 items-center"
          >
            <MdJoinFull />
            <li>Join Us</li>
          </Link>
          <Link
            href="/sidebar/faq"
            className="flex space-x-2 hover:text-blue-800 items-center"
          >
            <FcFaq />
            <li>FAQ</li>
          </Link>
        </motion.nav>
      </AnimatePresence>
    </div>
  );
};

export default Navbar;
