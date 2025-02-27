import Image from "next/image";
import React from "react";

function Navbar() {
  return (
    <div className="absolute top-0 w-full z-40  rounded-l-xl px-10 py-4">
      <div className="flex justify-between items-center rounded-l-xl">
        <div className=" flex gap-1 justify-center items-end">
          <Image
            src="/assets/logo.svg"
            alt="Forefront Industrial Solutions"
            width={50}
            height={50}
          />
          <span className=" text-burntumber">
            Forefront Industrial solutions
          </span>
        </div>
        <h4 className="text-xl cursor-pointer">Menu</h4>
      </div>
    </div>
  );
}

export default Navbar;
