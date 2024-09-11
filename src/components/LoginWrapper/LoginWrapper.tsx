import React, { useState } from "react";
import Login from "../Login/Login";
import Display from "../Display/Display";

const LoginWrapper: React.FC = () => {
  const [username, setUsername] = useState<string | null>(null);

  const handleLogin = (credentials: { username: string; password: string }) => {
    console.log("Login credentials:", credentials);
    setUsername(credentials.username);
  };
  const handleLogout = () => {
    setUsername(null);
  };
  return (
    <div>
      {!username ? (
        <>
          <h1>Login Page</h1>
          <Login onLogin={handleLogin} buttonLabel="Sign In" />
        </>
      ) : (
        <Display username={username} onLogout={handleLogout} />
      )}
    </div>
  );
};
export default LoginWrapper;
