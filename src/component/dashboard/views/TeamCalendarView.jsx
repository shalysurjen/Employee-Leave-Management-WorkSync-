import React from "react";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";

// Example dummy data
const teamMembers = [
  { name: "Emma Wilson", initial: "EW" },
  { name: "Sarah Johnson", initial: "SJ" },
  { name: "Michael Chen", initial: "MC" },
  { name: "Alex Rivera", initial: "AR" },
];

const upcomingLeaves = [
  { name: "Emma Wilson", type: "Sick Leave", date: "Jan 18 - Jan 20", initial: "EW" },
  { name: "Sarah Johnson", type: "Casual Leave", date: "Jan 15 - Jan 16", initial: "SJ" },
];

const TeamCalendarView = () => (
  <div className="flex gap-8 animate-in fade-in">

    {/* Calendar */}
    <div className="flex-1 bg-white border border-slate-200 rounded-2xl p-8 shadow-sm">
      <div className="flex justify-between items-center mb-10">
        <button className="p-2 text-slate-400"><FaChevronLeft /></button>
        <h2 className="text-xl font-bold text-slate-800">January 2026</h2>
        <button className="p-2 text-slate-400"><FaChevronRight /></button>
      </div>
      <div className="grid grid-cols-7 gap-4 text-center">
        {["Su", "Mo", "Tu", "We", "Th", "Fr", "Sa"].map((d) => (
          <div key={d} className="text-slate-400 font-bold text-xs">{d}</div>
        ))}

        {Array.from({ length: 31 }).map((_, i) => (
          <div
            key={i}
            className={`h-16 border border-transparent rounded-xl flex items-center justify-center text-sm font-bold ${
              [15, 16, 18, 19, 20].includes(i + 1) ? "bg-green-100 text-green-700 border-green-300" : "text-slate-600 hover:bg-slate-50"
            }`}
          >
            {i + 1}
          </div>
        ))}
      </div>
    </div>

    {/* Sidebar */}
    <div className="w-80 space-y-6">

      {/* Team Members */}
      <div className="bg-white p-6 rounded-2xl border border-slate-200 shadow-sm">
        <h3 className="font-bold text-slate-800 mb-4">Team Members</h3>
        <div className="grid grid-cols-3 gap-2">
          {teamMembers.map((m) => (
            <div key={m.name} className="flex items-center gap-1.5 bg-slate-50 p-1.5 rounded-full border border-slate-100">
              <div className="w-6 h-6 bg-blue-600 text-white rounded-full flex items-center justify-center text-[8px] font-bold">
                {m.initial}
              </div>
              <span className="text-[10px] font-bold text-slate-600">{m.name}</span>
            </div>
          ))}
        </div>
      </div>

      {/* Upcoming Leaves */}
      <div className="bg-white p-6 rounded-2xl border border-slate-200 shadow-sm">
        <h3 className="font-bold text-slate-800 mb-4">Upcoming Leaves</h3>
        <div className="space-y-3">
          {upcomingLeaves.map((l, i) => (
            <div key={i} className="flex items-center gap-3 p-3 bg-slate-50 rounded-xl border border-slate-100">
              <div className="w-8 h-8 bg-green-100 text-green-700 rounded-full flex items-center justify-center text-[10px] font-bold">
                {l.initial}
              </div>
              <div>
                <p className="text-xs font-bold text-slate-700">{l.name}</p>
                <p className="text-[10px] text-slate-500">{l.type} • {l.date}</p>
              </div>
            </div>
          ))}
        </div>
      </div>

    </div>
  </div>
);

export default TeamCalendarView;
