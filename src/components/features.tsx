import React from "react";

import {
  ShieldCheckIcon,
  BoltIcon,
  CubeTransparentIcon,
} from "@heroicons/react/16/solid";

export default function Features() {
  return (
    <div className="grid grid-cols-3 gap-x-4">
      <div className="flex flex-col gap-y-2 border p-4 rounded-lg hover:translate-y-[-10px] ease-in-out duration-500 hover:bg-blue-600 hover:text-white">
        <ShieldCheckIcon className="w-10 h-10" />
        <span className="text-xl font-medium">Safe and Secure</span>
        <span>
          Security is our number one priority, your transctions are safe and
          private between you and your customers.
        </span>
      </div>
      <div className="flex flex-col gap-y-2 border p-4 rounded-lg hover:translate-y-[-10px] ease-in-out duration-500 hover:bg-blue-600 hover:text-white">
        <BoltIcon className="w-10 h-10" />
        <span className="text-xl font-medium">Lightning Fast</span>
        <span>
          Receive payments in no time and transfer between currencys
          effortlessly.
        </span>
      </div>
      <div className="flex flex-col gap-y-2 border p-4 rounded-lg hover:translate-y-[-10px] ease-in-out duration-500 hover:bg-blue-600 hover:text-white">
        <CubeTransparentIcon className="w-10 h-10" />
        <span className="text-xl font-medium">Easily Integrated</span>
        <span>
          Use our in-depth API to integrate WorldPay into your applications
          seemlessly.
        </span>
      </div>
    </div>
  );
}
