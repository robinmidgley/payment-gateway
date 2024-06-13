"use client";

import { useState } from "react";
import Link from "next/link";
import {
  GlobeAltIcon,
  Bars3Icon,
  XMarkIcon,
} from "@heroicons/react/24/outline";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="flex justify-between items-center p-4 my-3 rounded-lg shadow-sm border border-black/5 sticky top-3 z-50 bg-white/60 backdrop-blur-md">
      <div className="flex-1 flex items-center gap-x-2">
        <GlobeAltIcon className="w-10 h-10 text-blue-600" />
        <span className="font-semibold text-xl">WorldPay</span>
      </div>
      <div className="flex-1 hidden md:flex justify-center">
        <div className="flex gap-x-8 text-black/70">
          <a className="ease-in-out duration-200 hover:text-black">Features</a>
          <a className="ease-in-out duration-200 hover:text-black">
            Developers
          </a>
          <a className="ease-in-out duration-200 hover:text-black">Pricing</a>
        </div>
      </div>
      <div className="flex-1 hidden md:flex justify-end items-center gap-x-4 font-medium">
        <Link
          href="login"
          className="border border-black/15 px-5 py-2 rounded-md ease-in-out duration-200 hover:bg-black/5"
        >
          Log In
        </Link>
        <Link
          href="register"
          className="border border-blue-600 bg-gradient-to-b from-blue-600 to-blue-600/90 px-5 py-2 text-white rounded-md ease-in-out duration-200 hover:bg-blue-600"
        >
          Sign Up
        </Link>
      </div>
      <div className="flex md:hidden">
        <button onClick={() => setIsOpen(!isOpen)} className="text-black">
          {isOpen ? (
            <XMarkIcon className="w-6 h-6" />
          ) : (
            <Bars3Icon className="w-6 h-6" />
          )}
        </button>
      </div>
      {isOpen && (
        <div className="absolute top-16 left-0 w-full bg-white shadow-lg rounded-lg p-4 flex flex-col items-center gap-y-4 z-50 md:hidden">
          <a className="ease-in-out duration-200 hover:text-black">Features</a>
          <a className="ease-in-out duration-200 hover:text-black">
            Developers
          </a>
          <a className="ease-in-out duration-200 hover:text-black">Pricing</a>
          <Link
            href="login"
            className="border border-black/15 px-5 py-2 rounded-md ease-in-out duration-200 hover:bg-black/5 w-full text-center"
          >
            Log In
          </Link>
          <Link
            href="register"
            className="border border-blue-600 bg-gradient-to-b from-blue-600 to-blue-600/90 px-5 py-2 text-white rounded-md ease-in-out duration-200 hover:bg-blue-600 w-full text-center"
          >
            Sign Up
          </Link>
        </div>
      )}
    </nav>
  );
}
