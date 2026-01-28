import React from "react";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa"; // ✅ import the chevrons

const CalendarView = () => (
  <div className="flex flex-col lg:flex-row gap-8 animate-in fade-in">
    <div className="flex-1 bg-white border border-slate-200 rounded-2xl p-8 shadow-sm">
      <div className="flex justify-between items-center mb-10">
        <button className="p-2 hover:bg-slate-100 rounded-lg text-slate-400">
          <FaChevronLeft />
        </button>
        <h2 className="text-xl font-bold text-slate-800">January 2026</h2>
        <button className="p-2 hover:bg-slate-100 rounded-lg text-slate-400">
          <FaChevronRight />
        </button>
      </div>

      <div className="grid grid-cols-7 mb-4 text-center">
        {["Su", "Mo", "Tu", "We", "Th", "Fr", "Sa"].map((d) => (
          <div key={d} className="text-slate-400 font-bold text-[10px] uppercase tracking-widest">
            {d}
          </div>
        ))}
      </div>

      <div className="grid grid-cols-7 gap-1">
        {Array.from({ length: 4 }).map((_, i) => (
          <div key={`p-${i}`} className="h-16" />
        ))}
        {Array.from({ length: 31 }).map((_, i) => {
          const day = i + 1;
          const isLeave = [15, 16].includes(day);
          const isHoliday = [1].includes(day);
          return (
            <div
              key={day}
              className={`h-16 border border-transparent rounded-xl flex items-center justify-center text-sm font-bold transition-all ${
                isLeave
                  ? "bg-green-100 text-green-700 border-green-300"
                  : isHoliday
                  ? "bg-blue-100 text-blue-700 border-blue-200"
                  : "text-slate-600 hover:bg-slate-50"
              }`}
            >
              {day}
            </div>
          );
        })}
      </div>
    </div>

    <div className="w-80 space-y-6">
      <div className="bg-white p-6 rounded-2xl border border-slate-200 shadow-sm">
        <h3 className="font-bold text-slate-800 mb-4">Legend</h3>
        <div className="space-y-3">
          <div className="flex items-center gap-3 text-sm text-slate-600">
            <div className="w-4 h-4 bg-green-100 border border-green-300 rounded"></div> Your Approved Leaves
          </div>
          <div className="flex items-center gap-3 text-sm text-slate-600">
            <div className="w-4 h-4 bg-blue-100 border border-blue-200 rounded"></div> Public Holidays
          </div>
          <div className="flex items-center gap-3 text-sm text-slate-600">
            <div className="w-4 h-4 bg-slate-50 border border-slate-200 rounded"></div> Today
          </div>
        </div>
      </div>

      <div className="bg-white p-6 rounded-2xl border border-slate-200 shadow-sm">
        <h3 className="font-bold text-slate-800 mb-4">Upcoming Leaves</h3>
        <div className="space-y-3">
          <div className="p-3 bg-slate-50 rounded-xl border border-slate-100">
            <div className="flex justify-between items-center mb-1">
              <p className="text-xs font-bold text-slate-700">Casual Leave</p>
              <span className="text-[9px] bg-green-100 text-green-700 px-1.5 py-0.5 rounded font-bold uppercase">
                approved
              </span>
            </div>
            <p className="text-[10px] text-slate-500">Jan 15 - Jan 16, 2026</p>
          </div>
          <div className="p-3 bg-slate-50 rounded-xl border border-slate-100">
            <div className="flex justify-between items-center mb-1">
              <p className="text-xs font-bold text-slate-700">Sick Leave</p>
              <span className="text-[9px] bg-amber-100 text-amber-700 px-1.5 py-0.5 rounded font-bold uppercase">
                pending
              </span>
            </div>
            <p className="text-[10px] text-slate-500">Jan 22, 2026</p>
          </div>
        </div>
      </div>
    </div>
  </div>
);

export default CalendarView;
