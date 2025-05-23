import React from "react";

interface InputProps {
  type: string;
  placeholder: string;
  value?: string;
  isTextArea?: boolean;
}

const Input = ({ type, placeholder, value, isTextArea }: InputProps) => {
  if (isTextArea) {
    return (
      <textarea
        placeholder={placeholder}
        value={value}
        className="border p-2 w-full mb-4 rounded"
      ></textarea>
    );
  }

  return (
    <input
      type={type}
      placeholder={placeholder}
      value={value}
      className="border p-2 w-full mb-4 rounded"
    />
  );
};

export default Input;
