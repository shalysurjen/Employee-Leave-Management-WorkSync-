import React from "react";

const employeesList = [
  { name: "Sarah Johnson", dept: "Engineering", status: "ACTIVE" },
  { name: "Michael Chen", dept: "Engineering", status: "ACTIVE" },
  { name: "Alex Rivera", dept: "Engineering", status: "ACTIVE" },
];

const EmployeesView = () => (
  <div className="bg-white border border-slate-200 rounded-2xl overflow-hidden shadow-sm animate-in fade-in">
    <table className="w-full text-left text-sm">
      <thead className="bg-slate-50 text-slate-500 font-bold uppercase text-[10px] tracking-widest border-b border-slate-100">
        <tr>
          <th className="p-5">Name</th>
          <th className="p-5">Department</th>
          <th className="p-5">Status</th>
          <th className="p-5 text-right">Actions</th>
        </tr>
      </thead>
      <tbody className="divide-y divide-slate-100">
        {employeesList.map((emp, i) => (
          <tr key={i} className="hover:bg-slate-50/50">
            <td className="p-5 font-bold text-slate-700">{emp.name}</td>
            <td className="p-5 text-slate-500">{emp.dept}</td>
            <td className="p-5">
              <span
                className={`px-2 py-1 rounded text-[10px] font-bold ${
                  emp.status === "ACTIVE" ? "bg-green-100 text-green-700" : "bg-slate-100 text-slate-600"
                }`}
              >
                {emp.status}
              </span>
            </td>
            <td className="p-5 text-right text-blue-600 font-bold cursor-pointer">Edit</td>
          </tr>
        ))}
      </tbody>
    </table>
  </div>
);

export default EmployeesView;
