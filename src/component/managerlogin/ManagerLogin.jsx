import { useState } from "react";

const ManagerLogin = ({ onLogin }) => {

  const [email, setEmail] = useState("");
  const [managerId, setManagerId] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    onLogin("manager", {
      email,
      managerId,
      password,
    });
  };

  return (
    <div className="login-container">
      <form className="login-card" onSubmit={handleSubmit}>
        <h2>Manager Login</h2>

        <input
          type="email"
          placeholder="Manager Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
        />

        <input
          type="text"
          placeholder="Manager ID"
          value={managerId}
          onChange={(e) => setManagerId(e.target.value)}
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
          Only authorized managers can login
        </p>

        <button className="forgot-btn" type="button">
          Forgot Password?
        </button>
      </form>
    </div>
  );
};

export default ManagerLogin;
