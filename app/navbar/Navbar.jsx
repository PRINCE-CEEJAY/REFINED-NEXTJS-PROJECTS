import React from "react";
import Link from "next/link";
import List from "../List.css";

const Navbar = () => {
  return (
    <div className="flex flex-col bg-green-100  min-h-screen p-3 max-w-[37%] lg:w-50 sticky top-0">
      <nav className="flex flex-col space-y-7">
        <div className="flex justify-center hover:cursor-pointer">
          <img src="/welcome.jpg" alt="Profile Pic" width={100} height={100} />
        </div>
        <section className="flex space-x-3 items-center">
          <div>icon</div>
          <Link href="/sidebar/homepage">
            <ul>
              <li>Homepage</li>
            </ul>
          </Link>
        </section>
        <section className="flex space-x-3 items-center">
          <div>icon</div>
          <Link href="/sidebar/dashboard">
            <ul>
              <li>Dashboard</li>
            </ul>
          </Link>
        </section>
        <section className="flex space-x-3 items-center">
          <div>icon</div>
          <Link href="/sidebar/about">
            <ul>
              <li>About Us</li>
            </ul>
          </Link>
        </section>
        <section className="flex space-x-3 items-center">
          <div>icon</div>
          <Link href="/sidebar/feeds">
            <ul>
              <li>Feeds</li>
            </ul>
          </Link>
        </section>
        <section className="flex space-x-3 items-center">
          <div>icon</div>
          <Link href="/sidebar/notifications">
            <ul>
              <li>Notifications</li>
            </ul>
          </Link>
        </section>
      </nav>
    </div>
  );
};

export default Navbar;
