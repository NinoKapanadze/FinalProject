import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useAuth } from "../contexts/AuthContext.jsx";
import emailIcon from "../assets/email.png";
import passwordIcon from "../assets/password.png";
import "../css/Login.css";

function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  const navigate = useNavigate();
  const { login } = useAuth();

  const handleLogin = () => {
    if (!email || !password) {
      setError("Email and Password are required.");
      return;
    }
    setError("");

    if (email === "nino2000kapanadze@gmail.com" && password === "12345678") {
      login();
      navigate("/");
    } else {
      setError("Invalid email or password.");
    }
  };

  return (
    <div className="container">
      <div className="header">
        <div className="text">Login</div>
      </div>
      <div className="inputs">
        <div className="input">
          <img src={emailIcon} alt="Email" />
          <input
            type="email"
            placeholder="Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>
        <div className="input">
          <img src={passwordIcon} alt="Password" />
          <input
            type="password"
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </div>
        <button className="submit" onClick={handleLogin}>
          Login
        </button>
      </div>
    </div>
  );
}

export default Login;
