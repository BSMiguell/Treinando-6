import React from "react";
import { CircularText } from "./Icons";
import Link from "next/link";

const HireMe = () => {
  return (
    <div
      className="fixed left-4 bottom-4
flex items-center justify-center overflow-hidden
"
    >
      <div className="w-48 h-auto flex items-center justify-center relative">
        <CircularText className={"fill-black animate-spin-slow"} />

        <Link
          href="mailto: abcd@gmail.com"
          className="flex items-center justify-center absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 bg-black text-white shadow-md border border-solid border-black w-20 h-20 rounded-full font-semibold hover:bg-white hover:text-black"
        >
          Hire Me
        </Link>
      </div>
    </div>
  );
};

export default HireMe;
