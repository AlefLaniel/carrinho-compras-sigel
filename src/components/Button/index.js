import React from "react";

const Button = ({ Text, onClick, Type = "button" }) => {
  return (
    <button className="py-4 px-5 cursor-pointer rounded-md w-full bg-blue-600 text-white font-semibold text-base max-w-[350px]" type={Type} onClick={onClick}>
      {Text}
    </button>
  );
};

export default Button;
