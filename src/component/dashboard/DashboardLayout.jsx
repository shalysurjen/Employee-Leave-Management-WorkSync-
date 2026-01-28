import React, { useState, useEffect } from "react"; // Added useEffect
import Sidebar from "./Sidebar";
import Topbar from "./Topbar";

// Existing Views
import DashboardView from "./views/DashboardView";
import ApplyLeaveView from "./views/ApplyLeaveView";
import MyLeavesView from "./views/MyLeavesView";
import CalendarView from "./views/CalendarView";
import NotificationsView from "./views/NotificationsView";
import TeamCalendarView from "./views/TeamCalendarView";
import ManagerDashboardView from "./views/ManagerDashboardView";
import EmployeesView from "./views/EmployeesView";

// Newly added View Imports (Ensure these files exist!)
import LeaveTypesView from "./views/LeaveTypesView";
import HRReportsView from "./views/HRReportsView";
import AuditLogView from "./views/AuditLogView";
import ApprovalsView from "./views/ApprovalsView";

const DashboardLayout = ({ role = "Employee" }) => {
  const [activeTab, setActiveTab] = useState("Dashboard");
  const [activeRole, setActiveRole] = useState(role);
  const [sidebarOpen, setSidebarOpen] = useState(false);

  // Sync Tab when Role changes
  useEffect(() => {
    if (activeRole === "HR Admin") {
      setActiveTab("Employees");
    } else if (activeRole === "Manager") {
      setActiveTab("Dashboard");
    } else {
      setActiveTab("Dashboard");
    }
  }, [activeRole]);

  const renderView = () => {
    // 1. HR Admin View Logic
    if (activeRole === "HR Admin") {
      switch (activeTab) {
        case "Employees": return <EmployeesView />;
        case "Leave Types": return <LeaveTypesView />;
        case "Reports": return <HRReportsView />;
        case "Audit Log": return <AuditLogView />;
        default: return <EmployeesView />;
      }
    }

    // 2. Manager View Logic
    if (activeRole === "Manager") {
      switch (activeTab) {
        case "Dashboard": return <ManagerDashboardView />;
        case "Approvals": return <ApprovalsView />;
        case "Team Calendar": return <TeamCalendarView />;
        default: return <ManagerDashboardView />;
      }
    }

    // 3. Default Employee View Logic
    switch (activeTab) {
      case "Dashboard": return <DashboardView />;
      case "Apply Leave": return <ApplyLeaveView />;
      case "My Leaves": return <MyLeavesView />;
      case "Calendar": return <CalendarView />;
      case "Notifications": return <NotificationsView />;
      default: return <DashboardView />;
    }
  };

  return (
    <div className="min-h-screen bg-slate-50">
      <Sidebar
        activeTab={activeTab}
        setActiveTab={setActiveTab}
        role={activeRole}
        isOpen={sidebarOpen}
        setIsOpen={setSidebarOpen}
      />

      <div className="flex flex-col md:ml-64">
        <Topbar
          activeTab={activeTab}
          activeRole={activeRole}
          setActiveRole={setActiveRole}
          onMenuClick={() => setSidebarOpen(true)}
        />

        <main className="p-4 md:p-6">
          {renderView()}
        </main>
      </div>
    </div>
  );
};

export default DashboardLayout;