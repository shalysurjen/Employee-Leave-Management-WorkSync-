// import { Routes, Route, useNavigate } from "react-router-dom";
// import Landingpage from "./component/landing/LandingPage";
// import Register from "./component/register/Register";
// import EmployeeLogin from "./component/employeelogin/Employeelogin";
// import ManagerLogin from "./component/managerlogin/ManagerLogin";
// import HrLogin from "./component/hrlogin/Hrlogin";  

// function App() {
//   const navigate = useNavigate();

//   const handleLogin = async (role, data) => {
//     console.log("ROLE:", role);
//     console.log("DATA:", data);

//     // 🔜 backend call goes here
//     // await fetch(...)
    
//     // TEMP: role-based redirect
//     if (role === "employee") navigate("/employee-dashboard");
//     if (role === "manager") navigate("/manager-dashboard");
//     if (role === "hr") navigate("/hr-dashboard");
//   };

//   return (
//     <Routes>
//       <Route path="/" element={<Landingpage />} />
//       <Route path="/Register" element={<Register />} />

//       <Route
//         path="/EmployeeLogin"
//         element={<EmployeeLogin onLogin={handleLogin} />}
//       />

//       <Route
//         path="/ManagerLogin"
//         element={<ManagerLogin onLogin={handleLogin} />}
//       />

//       <Route
//         path="/HrLogin"
//         element={<HrLogin onLogin={handleLogin} />}
//       />
//     </Routes>
//   );
// }

// export default App;


import React, { useState, useEffect } from "react";
import { AnimatePresence, motion } from "framer-motion";
import LoginPage from "./component/login/LoginPage";
import DashboardLayout from "./component/dashboard/DashboardLayout";

const App = () => {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [userRole, setUserRole] = useState("Employee"); // Default to Employee

  const handleLogin = (role) => {
    setUserRole(role);
    setIsAuthenticated(true);
  };

  const handleLogout = () => {
    setIsAuthenticated(false);
    setUserRole(null);
  };

  return (
    <div className="antialiased text-slate-900">
      <AnimatePresence mode="wait">
        {!isAuthenticated ? (
          <motion.div key="login" exit={{ opacity: 0, scale: 0.95 }}>
            <LoginPage onLogin={handleLogin} />
          </motion.div>
        ) : (
          <motion.div key="dashboard" initial={{ opacity: 0 }} animate={{ opacity: 1 }}>
            {/* IMPORTANT: Pass the role to the layout */}
            <DashboardLayout role={userRole} onLogout={handleLogout} />
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default App;

