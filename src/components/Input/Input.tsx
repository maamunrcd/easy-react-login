import React, { ChangeEvent } from "react";
import "./Input.css";

interface InputProps {
  label: string;
  type: string;
  id: string;
  value: string;
  onChange: (e: ChangeEvent<HTMLInputElement>) => void;
  errorMessage?: string;
  required?: boolean;
}

const Input: React.FC<InputProps> = ({
  label,
  type,
  id,
  value,
  onChange,
  errorMessage,
  required = false,
}) => {
  return (
    <div className="input">
      <label className="input__label" htmlFor={id}>
        {label}
      </label>
      <input
        className="input__field"
        type={type}
        id={id}
        value={value}
        onChange={onChange}
        required={required}
      />
      {errorMessage && <p className="input__error">{errorMessage}</p>}
    </div>
  );
};

export default Input;
