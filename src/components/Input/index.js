import React from "react";

const Input = ({ type, placeholder, value, onChange }) => {
  return (
    <input className="py-4 px-5 w-full rounded-md text-base bg-[#f0f2f5]"
      value={value}
      onChange={onChange}
      type={type}
      placeholder={placeholder}
    />
  );
};

export default Input;
