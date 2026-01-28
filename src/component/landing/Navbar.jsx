import { useNavigate } from "react-router-dom";

function Navbar() {
  const navigate = useNavigate();
  return (
    <>
      <section className="hero">
        <nav className="navbar">
          <h2>WorkSync</h2>

          <ul>
            <li>
              <button className="login-btn" onClick={() => navigate("/Register")}>
                Register
              </button>
            </li>
          </ul>
        </nav>

        <h1>Employee Leave Management System</h1>
        <p>
          Smart solution for leave application, approval, and tracking.
        </p>
      </section>
    </>
  );
}

export default Navbar;
