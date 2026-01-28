import React from 'react';

const Register = () => {
  return (
    <>
    <div className="register-page">
      <div className="register-card">
        <h2>New Employee Registration</h2>
        <p>Create your account to access ELMSync</p>

        <form>
          <input type="text" placeholder="Full Name" />
          <input type="email" placeholder="Email Address" />
          <input type="text" placeholder="Employee ID" />
          <input type="text" placeholder="Department" />
          <input type="password" placeholder="Password" />
          <input type="password" placeholder="Confirm Password" />

          <button type="submit">Register</button>
        </form>
      </div>
    </div>
    </>
  );
};

export default Register;
