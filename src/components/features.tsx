import React from "react";

import { ShieldCheckIcon } from "@heroicons/react/16/solid";

export default function Features() {
  return (
    <div className="grid grid-cols-4 gap-x-2">
      <div className="border p-4">
        <ShieldCheckIcon className="w-10 h-10 bg-black/10 rounded" />
      </div>
      <div className="border p-4">1</div>
      <div className="border p-4">1</div>
      <div className="border p-4">1</div>
    </div>
  );
}
