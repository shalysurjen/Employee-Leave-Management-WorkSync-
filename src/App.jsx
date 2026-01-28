import { Routes, Route, useNavigate } from "react-router-dom";
import Landingpage from "./component/landing/LandingPage";
import Register from "./component/register/Register";
import EmployeeLogin from "./component/employeelogin/Employeelogin";
import ManagerLogin from "./component/managerlogin/ManagerLogin";
import HrLogin from "./component/hrlogin/Hrlogin";  

function App() {
  const navigate = useNavigate();

  const handleLogin = async (role, data) => {
    console.log("ROLE:", role);
    console.log("DATA:", data);

    // 🔜 backend call goes here
    // await fetch(...)
    
    // TEMP: role-based redirect
    if (role === "employee") navigate("/employee-dashboard");
    if (role === "manager") navigate("/manager-dashboard");
    if (role === "hr") navigate("/hr-dashboard");
  };

  return (
    <Routes>
      <Route path="/" element={<Landingpage />} />
      <Route path="/Register" element={<Register />} />

      <Route
        path="/EmployeeLogin"
        element={<EmployeeLogin onLogin={handleLogin} />}
      />

      <Route
        path="/ManagerLogin"
        element={<ManagerLogin onLogin={handleLogin} />}
      />

      <Route
        path="/HrLogin"
        element={<HrLogin onLogin={handleLogin} />}
      />
    </Routes>
  );
}

export default App;
