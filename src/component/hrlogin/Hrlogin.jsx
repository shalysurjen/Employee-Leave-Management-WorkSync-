import { useState } from "react";

const HRLogin = ({ onLogin }) => {

  const [email, setEmail] = useState("");
  const [hrId, setHrId] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    onLogin("hr", {
      email,
      hrId,
      password,
    });
  };

  return (
    <div className="login-container">
      <form className="login-card" onSubmit={handleSubmit}>
        <h2>HR Login</h2>

        <input
          type="email"
          placeholder="HR Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
        />

        <input
          type="text"
          placeholder="HR ID"
          value={hrId}
          onChange={(e) => setHrId(e.target.value)}
          required
        />

        <input
          type="password"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          required
        />

        <button className="login-btn" type="submit">
          Login
        </button>

        <p className="hint">
          Only authorized HR personnel can login
        </p>

        <button className="forgot-btn" type="button">
          Forgot Password?
        </button>
      </form>
    </div>
  );
};

export default HRLogin;
