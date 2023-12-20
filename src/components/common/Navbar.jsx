import React from "react";

import { ChevronLeftIcon } from "@heroicons/react/24/outline";
import { HomeIcon } from "@heroicons/react/24/outline";
import { Bars3Icon } from "@heroicons/react/24/outline";

export default function Navbar({ pageTitle }) {
  return (
    <div className="flex justify-between py-5 px-0.5 sticky bg-[#ffffff] top-0 font-display">
      <div className="flex gap-3 font-text font-medium">
        <ChevronLeftIcon className="h-6 w-6 text-gray-500" />
        <span>{pageTitle}</span>
      </div>
      <div className="flex gap-3">
        <HomeIcon className="h-6 w-6 text-gray-500" />
        <Bars3Icon className="h-6 w-6 text-gray-500" />
      </div>
    </div>
  );
}
