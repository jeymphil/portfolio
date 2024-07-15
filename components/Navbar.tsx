"use client";
import "../app/globals.css";
import Link from "next/link";
import { FolderKanban, House, Info, Smartphone } from "lucide-react";
import { ModeToggle } from "./ui/ModeToggle";

export default function Navbar() {
  const navList = {
    items: [
      {
        link: "/",
        icon: <House />,
        text: "Home",
      },
      {
        link: "/about",
        icon: <Info />,
        text: "About",
      },
      {
        link: "/projects",
        icon: <FolderKanban />,
        text: "Projects",
      },
    ],
  };
  return (
    <div className="shadow-md bg-white dark:bg-[#030303] dark:shadow-gray-900 navbar z-10 bg-[rgba] fixed w-full flex justify-center gap-3 h-[50px] items-center ">
      {navList.items.map((option: any, optionkey: number) => (
        <a
          className="nav flex gap-1 cursor-pointer p-2 transition hover:bg-black hover:text-white rounded-lg"
          key={optionkey}
          href={option.link}
        >
          {option.icon}
          {option.text}
        </a>
      ))}
    </div>
  );
}
