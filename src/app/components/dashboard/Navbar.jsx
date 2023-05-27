import Link from "next/link";
import React from "react";
import { AiFillSetting } from "react-icons/ai";
import { IoMdNotifications } from "react-icons/io";
import { FaUser } from "react-icons/fa";

function Navbar() {
  return (
    <div className="pt-9 fixed right-16 flex gap-8 items-center">
      <div>
        <input
          className="border-2 pt-1.5 pb-1.5 px-3 text-sm focus:outline-secondary rounded-lg border-border-dark"
          type="text"
          name="search"
          placeholder="Type here..."
        />
      </div>
      <div className="flex gap-4 items-center text-text-secondary">
        <Link href="#" className="flex gap-1 items-center">
          <FaUser fontSize={16} /> &nbsp;Sign In
        </Link>
        <Link href="#">
          <AiFillSetting fontSize={18} />
        </Link>
        <Link href="#">
          <IoMdNotifications fontSize={20} />
        </Link>
      </div>
    </div>
  );
}

export default Navbar;
