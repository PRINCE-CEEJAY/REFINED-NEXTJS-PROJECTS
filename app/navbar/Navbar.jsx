import React from "react";
import { Link } from "next/navigation";

const Navbar = () => {
  return (
    <div>
      <Link href="/sidebar/dashboard">
        <ul>
          <li>Dashboard</li>
        </ul>
      </Link>
      <Link href="/sidebar/about">
        <ul>
          <li>About Us</li>
        </ul>
      </Link>
      <Link href="/sidebar/feeds">
        <ul>
          <li>Feeds</li>
        </ul>
      </Link>
      <Link href="/sidebar/notifications">
        <ul>
          <li>Notifications</li>
        </ul>
      </Link>
    </div>
  );
};

export default Navbar;
