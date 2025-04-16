import React, { use } from "react";
import { Header } from "../Header";
import { Input } from "@/components/Input";
import { useEffect } from "react";
export const FirstComponent = ({
  addStep,
  handleInputChange,
  formValue,
  error,
}) => {
  const { firstName, lastName, userName } = formValue;

  return (
    <div className="w-[480px] h-[655px] flex flex-col justify-between p-8 gap-2 border-none rounded-[8px] bg-white">
      <div>
        <Header />
        <Input
          name="firstName"
          type="text"
          value={firstName}
          placeholder="Enter your first name"
          label="First Name"
          onChange={handleInputChange}
        />
        {error.firstName && (
          <p className="text-red-500 text-[14px]">{error.firstName}</p>
        )}

        <Input
          name="lastName"
          type="text"
          value={lastName}
          placeholder="Enter your last name"
          label="Last Name"
          onChange={handleInputChange}
        />
        {error.lastName && (
          <p className="text-red-500  text-[14px]">{error.lastName}</p>
        )}

        <Input
          name="userName"
          type="text"
          value={userName}
          placeholder="Enter your username"
          label="Username"
          onChange={handleInputChange}
        />
        {error.userName && (
          <p className="text-red-500  text-[14px]">{error.userName}</p>
        )}
      </div>

      <div>
        <button
          onClick={addStep}
          className="flex flex-1 w-full items-center justify-center h-[44px] gap-x-3 rounded-md bg-[#121316] text-white transition-all duration-300 hover:opacity-80"
        >
          Continue 1 / 3 <img src="chevron_right.svg" alt="" />
        </button>
      </div>
    </div>
  );
};
