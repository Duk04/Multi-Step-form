import React from "react";
import Image from "next/legacy/image";
export const LastHeader = () => {
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
      <h1 className=" text-[26px] font-semibold leading-[100%]">
        You're All Set 🔥
      </h1>
      <p className="text-[18px] font-normal text-[rgba(142,142,142,1)]">
        We have received your submission. Thank you!
      </p>
    </div>
  );
};
