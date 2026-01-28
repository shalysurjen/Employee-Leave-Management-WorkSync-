import React from "react";
import { FaCalendarAlt } from "react-icons/fa";

const departments = [
  { name: "Engineering", value: 45, width: "80%" },
  { name: "Marketing", value: 22, width: "40%" },
  { name: "Design", value: 22, width: "40%" },
];

const HRReportsView = () => (
  <div className="space-y-6 animate-in fade-in">
    <div className="grid grid-cols-4 gap-6">
      <div className="bg-white p-6 rounded-2xl border border-slate-200 shadow-sm">
        <p className="text-slate-500 text-sm font-medium">Total Leaves Taken</p>
        <div className="flex justify-between items-end mt-2">
          <h3 className="text-3xl font-black text-slate-900">230</h3>
          <div className="bg-blue-50 p-2 rounded-lg text-blue-600"><FaCalendarAlt /></div>
        </div>
        <p className="text-[10px] text-slate-400 mt-1">This year</p>
      </div>
      {/* Add more stat cards as needed */}
    </div>

    <div className="grid grid-cols-2 gap-6">
      <div className="bg-white p-6 rounded-2xl border border-slate-200 shadow-sm">
        <h3 className="font-bold text-slate-800 mb-6">Leaves by Department</h3>
        <div className="space-y-4">
          {departments.map((dept) => (
            <div key={dept.name} className="space-y-1">
              <div className="flex justify-between text-xs font-bold text-slate-600">
                <span>{dept.name}</span>
                <span>{dept.value}</span>
              </div>
              <div className="w-full bg-slate-100 h-2 rounded-full overflow-hidden">
                <div className="bg-blue-500 h-full" style={{ width: dept.width }}></div>
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className="bg-white p-6 rounded-2xl border border-slate-200 shadow-sm flex flex-col items-center">
        <h3 className="font-bold text-slate-800 mb-6 w-full">Leave Type Distribution</h3>
        <div className="w-48 h-48 rounded-full border-[16px] border-blue-500 border-t-amber-500 border-r-green-500"></div>
        <div className="grid grid-cols-2 gap-4 mt-6 text-[10px] font-bold text-slate-500">
          <div className="flex items-center gap-2"><span className="w-2 h-2 bg-blue-500 rounded-full"></span> Casual</div>
          <div className="flex items-center gap-2"><span className="w-2 h-2 bg-amber-500 rounded-full"></span> Sick</div>
        </div>
      </div>
    </div>
  </div>
);

export default HRReportsView;
