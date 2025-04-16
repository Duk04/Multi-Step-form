import React from "react";

export const Input = ({ name, placeholder, label, type, onChange, value }) => {
  return (
    <div className="flex flex-col gap-[5px] mt-3">
      <label>
        {label} <span className="text-red-500">*</span>
      </label>
      <div className="w-full rounded-[8px] border p-3 flex justify-between ">
        <input
          type={type}
          name={name}
          value={value}
          placeholder={placeholder}
          className="w-full outline-none"
          onChange={onChange}
        />
      </div>
    </div>
  );
};
