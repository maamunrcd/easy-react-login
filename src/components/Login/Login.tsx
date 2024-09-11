import React, { useState, ChangeEvent, FormEvent } from "react";
import Input from "../Input";
import Button from "../Button";
import "./Login.css";

interface LoginProps {
  onLogin: (credentials: { username: string; password: string }) => void;
  buttonLabel?: string;
  generalError?: string;
  className?: string;
}

interface FormState {
  username: string;
  password: string;
}

interface ErrorState {
  username?: string;
  password?: string;
}

const Login: React.FC<LoginProps> = ({
  onLogin,
  buttonLabel = "Login",
  generalError,
  className,
}) => {
  const [formData, setFormData] = useState<FormState>({
    username: "",
    password: "",
  });
  const [errors, setErrors] = useState<ErrorState>({});

  const handleInputChange = (e: ChangeEvent<HTMLInputElement>) => {
    const { id, value } = e.target;
    setFormData((prevState) => ({
      ...prevState,
      [id]: value,
    }));
  };

  const validateFields = (): boolean => {
    const newErrors: ErrorState = {};
    if (!formData.username.trim()) newErrors.username = "Username is required";
    if (!formData.password.trim()) newErrors.password = "Password is required";

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (validateFields()) {
      onLogin({ username: formData.username, password: formData.password });
    }
  };

  return (
    <form className={`login__form ${className}`} onSubmit={handleSubmit}>
      {generalError && <p className="login__error">{generalError}</p>}
      <Input
        label="Username"
        type="text"
        id="username"
        value={formData.username}
        onChange={handleInputChange}
        errorMessage={errors.username}
      />

      <Input
        label="Password"
        type="password"
        id="password"
        value={formData.password}
        onChange={handleInputChange}
        errorMessage={errors.password}
      />

      <Button type="submit" label={buttonLabel} />
    </form>
  );
};

export default Login;
