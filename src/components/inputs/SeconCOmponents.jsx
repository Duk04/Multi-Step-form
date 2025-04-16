import React from "react";
import { Input } from "../Input";
import { Header } from "../Header";

export const SeconCOmponents = ({
  addStep,
  formValue,
  prevStep,
  handleInputChange,
  error, // Destructure the error object
}) => {
  const { email, phoneNumber, password, confirmPassword } = formValue;

  return (
    <div className="w-[480px] h-min-[655px] flex flex-col justify-between p-8 gap-2 border-none rounded-[8px] bg-white">
      <div>
        <Header />
        <Input
          name="email"
          type="text"
          value={email}
          placeholder="Enter your email"
          label="Email"
          onChange={handleInputChange}
        />
        {error.email && (
          <p className="text-red-500  text-[14px]">{error.email}</p>
        )}

        <Input
          name="phoneNumber"
          type="number"
          value={phoneNumber}
          placeholder="Enter your phone number"
          label="Phone Number"
          onChange={handleInputChange}
        />
        {error.phoneNumber && (
          <p className="text-red-500  text-[14px]">{error.phoneNumber}</p>
        )}

        <Input
          name="password"
          type="password"
          value={password}
          placeholder="Enter your password"
          label="Password"
          onChange={handleInputChange}
        />
        {error.password && (
          <p className="text-red-500  text-[14px]">{error.password}</p>
        )}

        <Input
          name="confirmPassword"
          type="password"
          value={confirmPassword}
          placeholder="Confirm your password"
          label="Confirm Password"
          onChange={handleInputChange}
        />
        {error.confirmPassword && (
          <p className="text-red-500  text-[14px]">{error.confirmPassword}</p>
        )}
      </div>

      <div className="flex gap-2">
        <button
          onClick={prevStep}
          className="w-[128px] text-black p-2 rounded-md mt-4 px-4 bg-white border flex  hover:bg-gray-300/70 duration-600"
        >
          <img src="chevron_left.svg" alt="" />
          Back
        </button>
        <button
          onClick={addStep}
          className="w-full text-white p-2 rounded-md mt-4 px-4 bg-black flex items-center justify-center  hover:bg-black/70 duration-600"
        >
          Continue 2 / 3
          <img src="chevron_right.svg" alt="" />
        </button>
      </div>
    </div>
  );
};
