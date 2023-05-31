"use client";
import Link from "next/link";
import { useEffect, useState } from "react";
import { AiFillSetting } from "react-icons/ai";
import { IoMdNotifications } from "react-icons/io";
import { FaUser } from "react-icons/fa";
import { usePathname } from "next/navigation";

function Navbar() {
  const [path, setPath] = useState([]);
  const pathname = usePathname();

  useEffect(() => {
    const modifiedPathname = pathname.split("/");
    setPath(modifiedPathname);
    console.log(path);
  }, [pathname]);

  return (
    <div className="pt-9 pr-10 flex gap-8 items-center justify-between">
      <h1 className="h1">
        {path[1] === "dashboard" && !path[2]
          ? "Home"
          : path[2]
          ? path[2]
          : path[1]}
      </h1>
      <section className="flex gap-8 items-center">
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
      </section>
    </div>
  );
}

export default Navbar;
