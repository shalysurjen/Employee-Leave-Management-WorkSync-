import React from "react";
import { FaRegClock, FaListUl, FaCheckCircle, FaCalendarAlt } from "react-icons/fa";

// Example placeholder data
const managerStats = [
  { title: "Pending Approvals", value: 3, icon: <FaRegClock />, color: "amber" },
  { title: "Team Members", value: 12, icon: <FaListUl />, color: "blue" },
  { title: "Approved This Month", value: 8, icon: <FaCheckCircle />, color: "green" },
  { title: "On Leave Today", value: 1, icon: <FaCalendarAlt />, color: "sky" },
];

const teamOnLeave = [
  { name: "Emma Wilson", initial: "EW", type: "Sick Leave", until: "Jan 20" },
];

const pendingApprovals = [
  {
    id: 1,
    initial: "SJ",
    employee: "Sarah Johnson",
    type: "Sick Leave",
    range: "Jan 22, 2026",
    days: 1,
    reason: "Medical appointment",
  },
];

const ManagerDashboardView = () => (
  <div className="space-y-10 animate-in fade-in">

    {/* Manager Stats */}
    <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
      {managerStats.map((stat, i) => (
        <div key={i} className="bg-white p-6 rounded-2xl border border-slate-200 shadow-sm flex justify-between items-center">
          <div>
            <p className="text-slate-500 text-sm font-medium">{stat.title}</p>
            <p className="text-3xl font-bold">{stat.value}</p>
          </div>
          <div className={`bg-${stat.color}-50 text-${stat.color}-500 p-3 rounded-xl`}>{stat.icon}</div>
        </div>
      ))}
    </div>

    {/* Team on Leave */}
    {teamOnLeave.map((member, i) => (
      <div key={i} className="bg-white p-4 rounded-2xl border border-slate-200 shadow-sm inline-flex items-center gap-4">
        <div className="bg-blue-600 text-white w-12 h-12 rounded-full flex items-center justify-center font-bold">{member.initial}</div>
        <div>
          <p className="font-bold text-slate-800">{member.name}</p>
          <p className="text-xs text-slate-500">{member.type} • Until {member.until}</p>
        </div>
      </div>
    ))}

    {/* Pending Approvals Table */}
    <div className="space-y-4">
      <h2 className="text-xl font-bold text-slate-800">Pending Approvals</h2>
      <div className="bg-white border border-slate-200 rounded-2xl overflow-hidden shadow-sm">
        <table className="w-full text-left text-sm">
          <thead className="bg-slate-50 text-slate-500 font-bold uppercase text-[10px]">
            <tr>
              <th className="p-4">Employee</th>
              <th className="p-4">Leave Type</th>
              <th className="p-4">Date Range</th>
              <th className="p-4">Days</th>
              <th className="p-4">Reason</th>
              <th className="p-4">Actions</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-slate-100">
            {pendingApprovals.map((app) => (
              <tr key={app.id} className="hover:bg-slate-50">
                <td className="p-4 flex items-center gap-3">
                  <div className="bg-slate-200 w-8 h-8 rounded-full flex items-center justify-center text-xs font-bold">{app.initial}</div>
                  <span className="font-medium">{app.employee}</span>
                </td>
                <td className="p-4 text-slate-600">{app.type}</td>
                <td className="p-4 text-slate-600">{app.range}</td>
                <td className="p-4 text-slate-600">{app.days}</td>
                <td className="p-4 text-slate-500">{app.reason}</td>
                <td className="p-4 flex gap-2">
                  <button className="bg-green-600 text-white px-3 py-1.5 rounded-lg text-xs font-bold">Approve</button>
                  <button className="border border-red-200 text-red-500 px-3 py-1.5 rounded-lg text-xs font-bold">Reject</button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>

  </div>
);

export default ManagerDashboardView;
