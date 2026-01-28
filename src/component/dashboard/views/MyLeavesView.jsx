import React from "react";
import { FaSearch } from "react-icons/fa";

// Example dummy data
const allLeaves = [
  { type: "Casual Leave", range: "Jan 10 - Jan 12", days: 3, status: "Approved", applied: "Jan 5, 2026", approvedBy: "Michael Chen" },
  { type: "Sick Leave", range: "Jan 22, 2026", days: 1, status: "Pending", applied: "Jan 20, 2026", approvedBy: "—" },
  { type: "Casual Leave", range: "Jan 15 - Jan 16", days: 2, status: "Rejected", applied: "Jan 10, 2026", approvedBy: "Michael Chen" },
];

const MyLeavesView = () => (
  <div className="bg-white border border-slate-200 rounded-2xl overflow-hidden shadow-sm animate-in fade-in">

    {/* Filters */}
    <div className="p-4 border-b border-slate-100 flex gap-4">
      <div className="relative flex-1">
        <FaSearch className="absolute left-3 top-3 text-slate-400 text-sm" />
        <input
          type="text"
          placeholder="Search leaves..."
          className="w-full pl-9 pr-4 py-2 bg-slate-50 border border-slate-200 rounded-lg text-sm outline-none"
        />
      </div>
      <select className="px-4 py-2 border border-slate-200 rounded-lg text-sm text-slate-600 font-medium outline-none">
        <option>All Status</option>
      </select>
      <select className="px-4 py-2 border border-slate-200 rounded-lg text-sm text-slate-600 font-medium outline-none">
        <option>All Types</option>
      </select>
    </div>

    {/* Leaves Table */}
    <table className="w-full text-left text-sm">
      <thead className="bg-slate-50 text-slate-500 font-bold uppercase text-[10px] tracking-widest">
        <tr>
          <th className="p-5">Leave Type</th>
          <th className="p-5">Date Range</th>
          <th className="p-5">Days</th>
          <th className="p-5">Status</th>
          <th className="p-5">Applied On</th>
          <th className="p-5">Approved By</th>
          <th className="p-5 text-right">Actions</th>
        </tr>
      </thead>
      <tbody className="divide-y divide-slate-100">
        {allLeaves.map((l, i) => (
          <tr key={i} className="hover:bg-slate-50/50">
            <td className="p-5 font-bold text-slate-700">{l.type}</td>
            <td className="p-5 text-slate-500 font-medium">{l.range}</td>
            <td className="p-5 text-slate-500">{l.days}</td>
            <td className="p-5">
              <span className={`px-3 py-1 rounded-full text-[11px] font-bold uppercase tracking-tighter ${
                l.status === "Approved"
                  ? "bg-green-100 text-green-700"
                  : l.status === "Pending"
                  ? "bg-amber-100 text-amber-700"
                  : "bg-red-100 text-red-700"
              }`}>
                {l.status}
              </span>
            </td>
            <td className="p-5 text-slate-400">{l.applied}</td>
            <td className="p-5 text-slate-500">{l.approvedBy}</td>
            <td className="p-5 text-right font-bold text-slate-800">
              <button className={l.status === "Pending" ? "text-red-500 hover:underline" : "hover:underline"}>
                {l.status === "Pending" ? "Cancel" : "View"}
              </button>
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  </div>
);

export default MyLeavesView;
