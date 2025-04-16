import React from "react";
import { Header } from "./Header";
import { Input } from "./Input";
import { DagImage } from "@/components/DagImage";

export const ThirdComponents = ({
  addStep,
  formValue,
  prevStep,
  handleInputChange,
  error,
}) => {
  const { dateOfBirth, profileImage } = formValue;

  return (
    <div className=" w-[480px] h-[655px] flex flex-col justify-between  p-8 gap-2 border-none rounded-[8px] bg-white">
      <div>
        <Header />
        <Input
          name="dateOfBirth"
          type="Date"
          value={dateOfBirth}
          label="Date of Birth "
          onChange={handleInputChange}
        />
        {error.dateOfBirth && (
          <p className="text-red-500 mt-[12px]  text-[14px]">
            {error.dateOfBirth}
          </p>
        )}
        <DagImage
          label="Profile image"
          onChange={handleInputChange}
          name="profileImage"
          type="file"
          value={profileImage}
        />
        {error.profileImage && (
          <p className="text-red-500 mt-[12px]  text-[14px]">
            {error.profileImage}
          </p>
        )}
      </div>

      <div className="flex gap-2">
        <button
          onClick={prevStep}
          className="w-[128px] text-black p-2 rounded-md mt-4 px-4 bg-white border flex hover:bg-gray-300/70 duration-600"
        >
          <img src="chevron_left.png" alt="" />
          Back
        </button>
        <button
          onClick={addStep}
          className="w-full text-white p-2 rounded-md mt-4 px-4  bg-black flex items-center justify-center gap-1 hover:bg-black/70 duration-600"
        >
          Submit <img src="chevron_right.svg" alt="" />
        </button>
      </div>
    </div>
  );
};
