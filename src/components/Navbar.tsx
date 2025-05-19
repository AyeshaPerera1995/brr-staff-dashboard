"use client";
import { UserContext } from "@/context/userContext";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState, useContext } from "react";

const navItems = [
  { label: "Dashboard", path: "/" },
  { label: "Staff", path: "/staff" },
  { label: "IT Request", path: "/request" },
  { label: "Tickets", path: "/tickets" },
  { label: "To-Do List", path: "/todo" },
];

export default function Navbar() {
  const pathname = usePathname();
  const [isOpen, setIsOpen] = useState(false);
  const currentUser = useContext(UserContext);

  return (
    <nav className="bg-[#3f0074] text-white shadow-md border-b border-gray-700">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 py-4 flex items-center justify-between">

        <div className="text-xl font-bold text-indigo-400 tracking-tight">
          BRR Dashboard
        </div>

        {/* Desktop Nav */}
        <div className="hidden sm:flex items-center gap-10">
          <ul className="flex gap-6 text-sm font-medium">
            {navItems.map((item) => (
              <li key={item.path}>
                <Link href={item.path}>
                  <span
                    className={`px-2 py-1 rounded-md transition duration-150 cursor-pointer ${
                      pathname === item.path
                        ? "text-yellow-300 font-semibold"
                        : "text-gray-300 hover:text-yellow-300"
                    }`}
                  >
                    {item.label}
                  </span>
                </Link>
              </li>
            ))}
          </ul>

          {currentUser && (
            <div className="text-sm border-l border-gray-600 pl-4 ml-4 flex items-center gap-2">
              <span className="bg-indigo-600 text-white font-semibold px-3 py-1 rounded-md text-xs">
                {currentUser.name}
              </span>
              <span className="text-gray-400 text-xs">({currentUser.role})</span>
            </div>
          )}
        </div>

        {/* Mobile Nav */}
        <div className="sm:hidden">
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="text-yellow-300 text-2xl focus:outline-none"
          >
            ☰
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="sm:hidden px-4 pb-4 space-y-2">
          <ul className="space-y-2">
            {navItems.map((item) => (
              <li key={item.path}>
                <Link href={item.path}>
                  <span
                    className={`block px-3 py-2 rounded-md ${
                      pathname === item.path
                        ? "bg-indigo-700 text-yellow-300 font-semibold"
                        : "text-gray-300 hover:bg-gray-800 hover:text-yellow-300"
                    }`}
                  >
                    {item.label}
                  </span>
                </Link>
              </li>
            ))}
          </ul>

          {currentUser && (
            <div className="mt-4 border-t border-gray-700 pt-3 text-sm text-gray-300">
              <span className="bg-indigo-600 text-white font-semibold px-3 py-1 rounded-md text-xs">
                {currentUser.name}
              </span>{" "}
              <span className="text-gray-400 text-xs">({currentUser.role})</span>
            </div>
          )}
        </div>
      )}
    </nav>
  );
}