import { useNavigate } from "react-router-dom";

function Roles() {
   
  const navigate = useNavigate();
  return ( 
    <section className="roles">
      <h2>Login as</h2>

      <div className="role-grid">
        <div className="card">
          <h3>Employee</h3>
          <p>Apply leave & track status.</p>
           <button className="login-btn" onClick={() => navigate("/Employeelogin")}>Login</button>
        </div>

        <div className="card">
          <h3>Manager</h3>
          <p>Approve team leave requests.</p>
           <button className="login-btn" onClick={() => navigate("/ManagerLogin")}>Login</button>
        </div>

        <div className="card">
          <h3>HR / Admin</h3>
          <p>Manage policies & reports.</p>
        <button className="login-btn" onClick={() => navigate("/HrLogin")}>Login</button>
        </div>
      </div>
    </section>
  );
}

export default Roles;
