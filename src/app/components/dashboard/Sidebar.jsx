"use client";
import React from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { AiFillHome } from "react-icons/ai";
import { FaBoxOpen } from "react-icons/fa";
import { TbMessages } from "react-icons/tb";
import { RiTodoFill } from "react-icons/ri";
import { IoMdNotifications } from "react-icons/io";
import { BiHelpCircle } from "react-icons/bi";

function Sidebar() {
  const pathname = usePathname();

  const navLinks = [
    { name: "Home", href: "/dashboard", icon: <AiFillHome fontSize={20} /> },
    {
      name: "Products",
      href: "/dashboard/products",
      icon: <FaBoxOpen fontSize={20} />,
    },
    {
      name: "Messages",
      href: "/dashboard/messages",
      icon: <TbMessages fontSize={20} />,
    },
    {
      name: "Orders",
      href: "/dashboard/orders",
      icon: <RiTodoFill fontSize={20} />,
    },
    {
      name: "Notifications",
      href: "/dashboard/notifications",
      icon: <IoMdNotifications fontSize={20} />,
    },
    {
      name: "Help/Support",
      href: "/dashboard/help&support",
      icon: <BiHelpCircle fontSize={20} />,
    },
  ];

  return (
    <div className="w-64 flex flex-col gap-9 py-9 pl-9 pr-5">
      <h1
        className="h1 text-center border-b-2 border-border-light 
      "
      >
        ReUseIt Dashboard
      </h1>
      <nav className="flex flex-col">
        {navLinks.map((link) => {
          const isActive = pathname === link.href;
          return (
            <Link
              href={link.href}
              key={link.name}
              className={
                isActive ? "link bg-mode-extralight shadow-lg" : "link"
              }
            >
              <span
                className={
                  isActive
                    ? "shadow-md p-2 rounded-lg  text-white bg-gradient-to-tl from-primary to-fournery"
                    : "shadow-md p-2 rounded-lg"
                }
              >
                {link.icon}
              </span>
              {link.name}
            </Link>
          );
        })}
      </nav>
    </div>
  );
}

export default Sidebar;
