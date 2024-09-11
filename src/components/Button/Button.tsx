import React from "react";
import "./Button.css";

interface ButtonProps {
  label: string;
  type: "button" | "submit" | "reset";
}

const Button: React.FC<ButtonProps> = ({ label, type }) => {
  return (
    <button className="button" type={type}>
      {label}
    </button>
  );
};

export default Button;
