import React from "react";
import { FaBell, FaUserCircle } from "react-icons/fa";

const TopBar = ({ activeTab, activeRole, setActiveRole }) => (
  <div className="flex justify-between items-center bg-white p-4 border-b border-slate-200 shadow-sm">
    {/* Left: Current Tab */}
    <h1 className="text-xl font-bold text-slate-900">{activeTab}</h1>

    {/* Right: Notifications & Role Selector */}
    <div className="flex items-center gap-4">
      {/* Notifications */}
      <FaBell className="text-slate-600 w-5 h-5 cursor-pointer" />

      {/* Role Selector */}
      {setActiveRole && (
        <select
          value={activeRole}
          onChange={e => setActiveRole(e.target.value)}
          className="px-3 py-1 border border-slate-200 rounded-lg text-sm text-slate-700 outline-none cursor-pointer"
        >
          <option>Employee</option>
          <option>Manager</option>
          <option>HR</option>
        </select>
      )}

      {/* User Icon */}
      <FaUserCircle className="text-slate-600 w-6 h-6 cursor-pointer" />
    </div>
  </div>
);

export default TopBar;
