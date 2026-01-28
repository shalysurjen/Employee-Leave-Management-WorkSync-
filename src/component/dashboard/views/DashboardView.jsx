import React from "react";
import { FaCalendarAlt, FaUser, FaUsers } from "react-icons/fa";

// ✅ Dummy summary data
const summaryStats = [
  { title: "Total Leaves Taken", value: 230, icon: <FaCalendarAlt />, period: "This year" },
  { title: "Pending Approvals", value: 12, icon: <FaUser />, period: "This month" },
  { title: "Employees", value: 45, icon: <FaUsers />, period: "Total" },
];

const DashboardView = () => {
  return (
    <div className="space-y-10 animate-in fade-in">
      {/* Summary Cards */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {summaryStats.map((stat, i) => (
          <div key={i} className="bg-white p-6 rounded-2xl border border-slate-200 shadow-sm">
            <p className="text-slate-500 text-sm font-medium">{stat.title}</p>
            <div className="flex justify-between items-end mt-2">
              <h3 className="text-3xl font-black text-slate-900">{stat.value}</h3>
              <div className="bg-blue-50 p-2 rounded-lg text-blue-600">{stat.icon}</div>
            </div>
            <p className="text-[10px] text-slate-400 mt-1">{stat.period}</p>
          </div>
        ))}
      </div>

      {/* Quick Actions / Placeholder */}
      <div className="bg-white p-6 rounded-2xl border border-slate-200 shadow-sm">
        <h2 className="text-lg font-bold text-slate-800 mb-4">Quick Actions</h2>
        <div className="flex gap-4 flex-wrap">
          <button className="bg-blue-600 text-white px-4 py-2 rounded-lg font-bold hover:bg-blue-700 shadow-sm">
            Apply Leave
          </button>
          <button className="bg-amber-50 text-amber-700 px-4 py-2 rounded-lg font-bold border border-amber-100 hover:bg-amber-100">
            View Approvals
          </button>
          <button className="bg-green-50 text-green-700 px-4 py-2 rounded-lg font-bold border border-green-100 hover:bg-green-100">
            View Calendar
          </button>
        </div>
      </div>
    </div>
  );
};

export default DashboardView;
