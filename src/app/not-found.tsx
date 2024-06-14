import Link from "next/link";
import { GlobeAltIcon } from "@heroicons/react/24/outline";

export default function NotFound() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen">
      <div className="text-8xl font-medium">404</div>
      <div>This page does not exist!</div>
      <GlobeAltIcon className="w-6 h-6 text-blue-500 mt-4" />
      <Link href="/" className="text-black/65">
        Go back to homepage
      </Link>
    </div>
  );
}
