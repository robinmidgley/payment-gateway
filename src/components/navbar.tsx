import Link from "next/link";
import { GlobeAltIcon } from "@heroicons/react/24/outline";

export default function Navbar() {
  return (
    <nav className="flex justify-between items-center py-4 border-b border-black/5">
      <div className="flex-1">
        <div className="flex items-center gap-x-2">
          <GlobeAltIcon className="w-10 h-10 text-blue-600" />
          <span className="font-semibold text-xl">WorldPay</span>
        </div>
      </div>
      <div className="flex-1 flex justify-center">
        <div className="flex gap-x-8 text-black/70">
          <a className="ease-in-out duration-200 hover:text-black">Services</a>
          <a className="ease-in-out duration-200 hover:text-black">
            Developers
          </a>
          <a className="ease-in-out duration-200 hover:text-black">Pricing</a>
        </div>
      </div>
      <div className="flex-1 flex justify-end items-center gap-x-4 font-medium">
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
    </nav>
  );
}
