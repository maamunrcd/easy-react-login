import React from "react";
import "./Display.css";

interface DisplayProps {
  username: string;
  onLogout: () => void;
}

const Display: React.FC<DisplayProps> = ({ username, onLogout }) => {
  return (
    <header className="">
      <h2>Welcome, {username}!</h2>
      <button onClick={onLogout}>Logout</button>
    </header>
  );
};

export default Display;
