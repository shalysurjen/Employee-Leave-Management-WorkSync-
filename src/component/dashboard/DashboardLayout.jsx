import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Sidebar from "./Sidebar";
import Topbar from "./Topbar";

// View Imports... (same as before)


// View Imports...
import DashboardView from "./views/DashboardView";
import MyLeavesView from "./views/MyLeavesView";
import CalendarView from "./views/CalendarView";
import NotificationsView from "./views/NotificationsView";
import TeamCalendarView from "./views/TeamCalendarView";
import ManagerDashboardView from "./views/ManagerDashboardView";
import EmployeesView from "./views/EmployeesView";
import LeaveTypesView from "./views/LeaveTypesView";
import HRReportsView from "./views/HRReportsView";
import AuditLogView from "./views/AuditLogView";
import ApprovalsView from "./views/ApprovalsView";
import LeaveApplicationForm from "./views/LeaveApplicationForm";

const DashboardLayout = ({ role = "Employee" }) => {
  const [activeTab, setActiveTab] = useState("Dashboard");
  const [activeRole, setActiveRole] = useState(role);
  const [sidebarOpen, setSidebarOpen] = useState(false);

  useEffect(() => {
    const defaultTabs = { "HR Admin": "Employees", "Manager": "Dashboard", "Employee": "Dashboard" };
    setActiveTab(defaultTabs[activeRole] || "Dashboard");
  }, [activeRole]);

  const renderView = () => {
    let view;
    // ... logic for switch statements remains same ...
    if (activeRole === "HR Admin") {
      switch (activeTab) {
        case "Employees": view = <EmployeesView />; break;
        case "Leave Types": view = <LeaveTypesView />; break;
        case "Reports": view = <HRReportsView />; break;
        case "Audit Log": view = <AuditLogView />; break;
        default: view = <EmployeesView />;
      }
    } else if (activeRole === "Manager") {
      switch (activeTab) {
        case "Dashboard": view = <ManagerDashboardView />; break;
        case "Approvals": view = <ApprovalsView />; break;
        case "Team Calendar": view = <TeamCalendarView />; break;
        default: view = <ManagerDashboardView />;
      }
    } else {
      switch (activeTab) {
        case "Dashboard": view = <DashboardView />; break;
        case "Apply Leave": view = <LeaveApplicationForm />; break;
        case "My Leaves": view = <MyLeavesView />; break;
        case "Calendar": view = <CalendarView />; break;
        case "Notifications": view = <NotificationsView />; break;
        default: view = <DashboardView />;
      }
    }

    return (
      <motion.div
        key={`${activeRole}-${activeTab}`}
        initial={{ opacity: 0, y: 6 }} // Reduced Y-offset for subtler entrance
        animate={{ opacity: 1, y: 0 }}
        exit={{ opacity: 0, y: -6 }}
        transition={{ duration: 0.2, ease: "circOut" }} // Faster duration
        className="w-full"
      >
        {view}
      </motion.div>
    );
  };

  return (
    <div className="min-h-screen bg-[#F8FAFC] flex overflow-hidden font-sans antialiased text-slate-900">
      <Sidebar
        activeTab={activeTab} setActiveTab={setActiveTab}
        role={activeRole} isOpen={sidebarOpen} setIsOpen={setSidebarOpen}
      />

      <div className="flex-1 flex flex-col min-w-0 md:ml-64 relative">
        <Topbar
          activeTab={activeTab} activeRole={activeRole}
          setActiveRole={setActiveRole} onMenuClick={() => setSidebarOpen(true)}
        />

        {/* LIGHTENED MAIN SECTION */}
        <main className="flex-1 overflow-y-auto custom-scrollbar">
          {/* Reduced padding: 1.5rem on mobile, 2rem on desktop */}
          <div className="p-4 md:p-8 max-w-[1400px] mx-auto w-full"> 
            <AnimatePresence mode="wait">
              {renderView()}
            </AnimatePresence>
          </div>
        </main>
      </div>

      <style jsx global>{`
        /* Slimmer Scrollbar to reduce visual weight */
        .custom-scrollbar::-webkit-scrollbar { width: 4px; }
        .custom-scrollbar::-webkit-scrollbar-track { background: transparent; }
        .custom-scrollbar::-webkit-scrollbar-thumb { background: #e2e8f0; border-radius: 10px; }
        
        /* Reduce spacing between cards/sections globally */
        .space-y-6 > :not([hidden]) ~ :not([hidden]) {
          --tw-space-y-reverse: 0;
          margin-top: 1.25rem; /* 20px instead of 24px */
        }
      `}</style>
    </div>
  );
};

export default DashboardLayout;