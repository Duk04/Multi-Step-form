import Image from "next/legacy/image";
import React from "react";

export const Header = () => {
  return (
    <div className="flex flex-col gap-2 justify-start">
      <Image
        src="/Main-1.svg"
        width={60}
        height={60}
        alt="logo"
        className="justify-start"
        layout="fixed"
      />
      <h1 className=" text-[26px] font-semibold leading-[100%]">Join Us! 😎</h1>
      <p className="text-[18px] font-normal text-[rgba(142,142,142,1)]">
        Please provide all current information accurately.
      </p>
    </div>
  );
};
