import React from "react";

const leaveTypesList = [
  { name: "Casual Leave", days: 12, status: "ACTIVE" },
  { name: "Sick Leave", days: 10, status: "ACTIVE" },
];

const LeaveTypesView = () => (
  <div className="bg-white border border-slate-200 rounded-2xl overflow-hidden shadow-sm animate-in fade-in">
    <table className="w-full text-left text-sm">
      <thead className="bg-slate-50 text-slate-500 font-bold uppercase text-[10px] tracking-widest border-b border-slate-100">
        <tr>
          <th className="p-5">Policy Name</th>
          <th className="p-5">Days</th>
          <th className="p-5">Status</th>
        </tr>
      </thead>
      <tbody className="divide-y divide-slate-100">
        {leaveTypesList.map((leave, i) => (
          <tr key={i} className="hover:bg-slate-50/50">
            <td className="p-5 font-bold text-slate-700">{leave.name}</td>
            <td className="p-5 text-slate-500">{leave.days} Days</td>
            <td className="p-5">
              <span
                className={`px-2 py-1 rounded text-[10px] font-bold ${
                  leave.status === "ACTIVE" ? "bg-green-100 text-green-700" : "bg-slate-100 text-slate-600"
                }`}
              >
                {leave.status}
              </span>
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  </div>
);

export default LeaveTypesView;
