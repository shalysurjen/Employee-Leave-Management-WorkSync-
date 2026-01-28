import React from "react";
import { FaSearch } from "react-icons/fa"; // ✅ import FaSearch

// ✅ Example dummy data
const pendingApprovalsList = [
  {
    id: 1,
    initial: "JD",
    employee: "John Doe",
    dept: "Engineering",
    type: "Casual Leave",
    range: "Jan 10 - Jan 12",
    days: 3,
    reason: "Family function",
  },
  {
    id: 2,
    initial: "AS",
    employee: "Alice Smith",
    dept: "Marketing",
    type: "Sick Leave",
    range: "Jan 15 - Jan 16",
    days: 2,
    reason: "Medical",
  },
  {
    id: 3,
    initial: "BW",
    employee: "Bob White",
    dept: "Design",
    type: "Casual Leave",
    range: "Jan 20",
    days: 1,
    reason: "Personal work",
  },
];

const ApprovalsView = () => (
  <div className="space-y-6 animate-in fade-in">
    <div className="relative max-w-md">
      <FaSearch className="absolute left-3 top-3 text-slate-400" />
      <input
        type="text"
        placeholder="Search by employee name..."
        className="w-full pl-10 pr-4 py-2 bg-white border border-slate-200 rounded-lg outline-none"
      />
    </div>

    <div className="flex gap-2">
      <button className="bg-amber-50 text-amber-700 px-4 py-1.5 rounded-lg text-sm font-bold border border-amber-100">
        Pending <span className="ml-1 bg-amber-500 text-white px-1.5 rounded-full text-[10px]">3</span>
      </button>
      <button className="text-slate-500 px-4 py-1.5 rounded-lg text-sm font-medium hover:bg-slate-100">
        Processed
      </button>
    </div>

    <div className="bg-white border border-slate-200 rounded-2xl overflow-hidden shadow-sm">
      <table className="w-full text-left text-sm">
        <thead className="bg-slate-50/50 text-slate-500 font-bold text-[11px] uppercase tracking-wider border-b border-slate-100">
          <tr>
            <th className="p-4">Employee</th>
            <th className="p-4">Leave Type</th>
            <th className="p-4">Date Range</th>
            <th className="p-4">Days</th>
            <th className="p-4">Reason</th>
            <th className="p-4">Status</th>
            <th className="p-4">Actions</th>
          </tr>
        </thead>
        <tbody className="divide-y divide-slate-100">
          {pendingApprovalsList.map((app) => (
            <tr key={app.id} className="hover:bg-slate-50/50">
              <td className="p-4">
                <div className="flex items-center gap-3">
                  <div className="bg-slate-100 text-slate-600 w-8 h-8 rounded-full flex items-center justify-center text-[10px] font-bold">
                    {app.initial}
                  </div>
                  <div>
                    <p className="font-bold text-slate-700">{app.employee}</p>
                    <p className="text-[10px] text-slate-400">{app.dept}</p>
                  </div>
                </div>
              </td>
              <td className="p-4 text-slate-600 font-medium">{app.type}</td>
              <td className="p-4 text-slate-500">{app.range}</td>
              <td className="p-4 text-slate-500">{app.days}</td>
              <td className="p-4 text-slate-400 max-w-[200px] truncate">{app.reason}</td>
              <td className="p-4">
                <span className="bg-amber-100 text-amber-700 px-2 py-0.5 rounded text-[10px] font-bold uppercase">
                  Pending
                </span>
              </td>
              <td className="p-4">
                <div className="flex gap-2">
                  <button className="bg-green-600 text-white px-3 py-1.5 rounded-lg font-bold text-xs">
                    Approve
                  </button>
                  <button className="border border-red-200 text-red-500 px-3 py-1.5 rounded-lg font-bold text-xs">
                    Reject
                  </button>
                </div>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  </div>
);

export default ApprovalsView;
