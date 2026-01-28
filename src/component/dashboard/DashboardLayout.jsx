import React, { useState } from "react";
import Sidebar from "./Sidebar";
import Topbar from "./Topbar";

// Views
import DashboardView from "./views/DashboardView";
import ApplyLeaveView from "./views/ApplyLeaveView";
import MyLeavesView from "./views/MyLeavesView";
import CalendarView from "./views/CalendarView";
import NotificationsView from "./views/NotificationsView";
import TeamCalendarView from "./views/TeamCalendarView"; // optional, if needed
import ManagerDashboardView from "./views/ManagerDashboardView"; // optional, if needed

const DashboardLayout = ({ role = "Employee" }) => {
  const [activeTab, setActiveTab] = useState("Dashboard");
  const [activeRole, setActiveRole] = useState(role);

  const renderView = () => {
    switch (activeTab) {
      case "Dashboard":
        return activeRole === "Manager" ? <ManagerDashboardView /> : <DashboardView />;
      case "Apply Leave":
        return <ApplyLeaveView />;
      case "My Leaves":
        return <MyLeavesView />;
      case "Calendar":
        return activeRole === "Manager" ? <TeamCalendarView /> : <CalendarView />;
      case "Notifications":
        return <NotificationsView />;
      default:
        return <DashboardView />;
    }
  };

  return (
    <div className="flex min-h-screen bg-slate-50">
      {/* Sidebar */}
      <Sidebar activeTab={activeTab} setActiveTab={setActiveTab} />

      {/* Main Content */}
      <div className="flex-1 ml-64 flex flex-col">
        {/* Topbar */}
        <Topbar activeRole={activeRole} setActiveRole={setActiveRole} />

        {/* Content */}
        <main className="p-6">{renderView()}</main>
      </div>
    </div>
  );
};

export default DashboardLayout;
