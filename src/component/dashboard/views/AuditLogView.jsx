import React from "react";
import { FaSearch, FaFileExport, FaCheckCircle } from "react-icons/fa"; // ✅ import all icons used

const AuditLogView = () => (
  <div className="space-y-4 animate-in fade-in">
    <div className="bg-white border border-slate-200 rounded-2xl p-6 shadow-sm">
      <div className="flex justify-between items-center mb-6">
        <div className="relative w-72">
          <FaSearch className="absolute left-3 top-3 text-slate-400" />
          <input
            type="text"
            placeholder="Search logs..."
            className="w-full pl-10 pr-4 py-2 bg-slate-50 border border-slate-200 rounded-lg text-sm"
          />
        </div>
        <button className="flex items-center gap-2 border border-slate-200 px-4 py-2 rounded-lg text-xs font-bold text-slate-600">
          <FaFileExport /> Export Log
        </button>
      </div>

      <div className="space-y-3">
        {[
          {
            action: "Leave request approved",
            target: "Sarah Johnson",
            actor: "Michael Chen",
            role: "Manager",
            time: "Jan 20, 2026 at 2:34 PM",
            color: "text-green-600",
            bg: "bg-green-50",
          },
          {
            action: "New leave request submitted",
            target: "Sarah Johnson",
            actor: "Sarah Johnson",
            role: "Employee",
            time: "Jan 20, 2026 at 10:15 AM",
            color: "text-blue-600",
            bg: "bg-blue-50",
          },
          {
            action: "Leave request rejected",
            target: "Morgan Brown",
            actor: "Michael Chen",
            role: "Manager",
            time: "Jan 4, 2026 at 4:20 PM",
            color: "text-red-600",
            bg: "bg-red-50",
          },
        ].map((log, i) => (
          <div
            key={i}
            className="flex items-start gap-4 p-4 border border-slate-100 rounded-xl hover:bg-slate-50 transition-colors"
          >
            <div className={`${log.bg} ${log.color} p-2 rounded-lg mt-1`}>
              <FaCheckCircle size={14} />
            </div>
            <div className="flex-1">
              <div className="flex justify-between">
                <p className="font-bold text-slate-800 text-sm">{log.action}</p>
                <p className="text-[10px] text-slate-400 font-medium">{log.time}</p>
              </div>
              <p className="text-xs text-slate-500 mt-1">Casual Leave for {log.target}</p>
              <div className="flex items-center gap-2 mt-2">
                <span className="text-[10px] text-slate-400">by</span>
                <span className="text-[10px] font-bold text-slate-700">{log.actor}</span>
                <span
                  className={`text-[9px] px-1.5 py-0.5 rounded font-bold uppercase ${
                    log.role === "Manager"
                      ? "bg-amber-100 text-amber-700"
                      : "bg-slate-100 text-slate-600"
                  }`}
                >
                  {log.role}
                </span>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  </div>
);

export default AuditLogView;
