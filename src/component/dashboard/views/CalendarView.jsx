import React from "react";
import { motion } from "framer-motion";
import { FaChevronLeft, FaChevronRight, FaPrint, FaDownload, FaInfoCircle } from "react-icons/fa";

const CalendarView = () => {
  const days = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sa"];
  
  return (
    <div className="space-y-6 max-w-[1200px] mx-auto">
      {/* 1. DOCUMENT HEADER (Reference Style) */}
      <div className="flex flex-col md:flex-row md:items-end justify-between px-4">
        <div>
          <h1 className="text-3xl font-bold text-slate-900 tracking-tight">Leave Calendar</h1>
          <p className="text-slate-500 text-sm mt-1 flex items-center gap-2">
            <FaInfoCircle className="text-indigo-400" />
            Showing schedule for <span className="font-bold text-slate-700">January 2026</span>
          </p>
        </div>
        
        <div className="flex gap-2 mt-4 md:mt-0">
          <button className="flex items-center gap-2 px-4 py-2 bg-white border border-slate-200 rounded-xl text-xs font-bold text-slate-600 hover:bg-slate-50 transition-all">
            <FaPrint /> Print Report
          </button>
          <button className="flex items-center gap-2 px-4 py-2 bg-indigo-600 rounded-xl text-xs font-bold text-white hover:bg-indigo-700 shadow-lg shadow-indigo-100 transition-all">
            <FaDownload /> Export PDF
          </button>
        </div>
      </div>

      <div className="flex flex-col xl:flex-row gap-6">
        {/* 2. THE GRID CONTAINER */}
        <div className="flex-1 bg-white border border-slate-200 rounded-3xl overflow-hidden shadow-sm">
          {/* Calendar Sub-Header */}
          <div className="bg-slate-50/50 border-b border-slate-100 p-6 flex justify-between items-center">
            <div className="flex items-center gap-4">
               <button className="p-2.5 bg-white border border-slate-200 rounded-lg shadow-sm hover:text-indigo-600 transition-colors">
                <FaChevronLeft size={10} />
              </button>
              <span className="text-lg font-bold text-slate-800">January 2026</span>
              <button className="p-2.5 bg-white border border-slate-200 rounded-lg shadow-sm hover:text-indigo-600 transition-colors">
                <FaChevronRight size={10} />
              </button>
            </div>
            <div className="flex gap-1 bg-slate-100 p-1 rounded-xl border border-slate-200">
               {['Month', 'Week', 'Day'].map(view => (
                 <button key={view} className={`px-4 py-1.5 text-[11px] font-bold rounded-lg transition-all ${view === 'Month' ? 'bg-white shadow-sm text-indigo-600' : 'text-slate-500 hover:text-slate-700'}`}>
                   {view}
                 </button>
               ))}
            </div>
          </div>

          <div className="p-6">
            <div className="grid grid-cols-7 mb-4">
              {days.map(d => (
                <div key={d} className="text-center text-[11px] font-bold text-slate-400 uppercase tracking-tighter">{d}</div>
              ))}
            </div>

            <div className="grid grid-cols-7 gap-px bg-slate-200 border border-slate-200 rounded-2xl overflow-hidden">
              {Array.from({ length: 35 }).map((_, i) => {
                const day = i - 3; // Offset for start day
                const isCurrentMonth = day > 0 && day <= 31;
                const isLeave = day === 15 || day === 16;
                const isToday = day === 28;

                return (
                  <div key={i} className={`h-24 md:h-32 p-2 transition-colors ${isCurrentMonth ? 'bg-white' : 'bg-slate-50/50'}`}>
                    {isCurrentMonth && (
                      <div className="flex flex-col h-full">
                        <span className={`text-xs font-bold w-6 h-6 flex items-center justify-center rounded-lg mb-1 ${isToday ? 'bg-indigo-600 text-white' : 'text-slate-500'}`}>
                          {day}
                        </span>
                        
                        {isLeave && (
                          <div className="mt-1 space-y-1">
                            <div className="px-2 py-1 bg-emerald-50 text-emerald-700 border-l-2 border-emerald-500 text-[10px] font-bold truncate">
                              Approved: Casual
                            </div>
                          </div>
                        )}
                        
                        {day === 1 && (
                          <div className="px-2 py-1 bg-blue-50 text-blue-700 border-l-2 border-blue-500 text-[10px] font-bold truncate">
                            New Year's Day
                          </div>
                        )}
                      </div>
                    )}
                  </div>
                );
              })}
            </div>
          </div>
        </div>

        {/* 3. BALANCE SUMMARY PANEL (Professional Addition) */}
        <div className="xl:w-80 space-y-4">
          <div className="bg-slate-900 p-6 rounded-3xl text-white shadow-xl shadow-slate-200">
            <p className="text-[10px] font-black uppercase tracking-[0.2em] text-indigo-300 mb-4">Leave Entitlement</p>
            <div className="grid grid-cols-2 gap-4">
              <div>
                <p className="text-2xl font-bold">24.5</p>
                <p className="text-[10px] opacity-60 font-medium">Days Available</p>
              </div>
              <div className="border-l border-white/10 pl-4">
                <p className="text-2xl font-bold text-indigo-400">04</p>
                <p className="text-[10px] opacity-60 font-medium">Days Used</p>
              </div>
            </div>
            <div className="mt-6 pt-6 border-t border-white/10">
              <div className="flex justify-between text-xs mb-2">
                <span className="opacity-60">Usage Progress</span>
                <span className="font-bold">14%</span>
              </div>
              <div className="h-1.5 bg-white/10 rounded-full overflow-hidden">
                <div className="h-full bg-indigo-500 w-[14%]" />
              </div>
            </div>
          </div>

          <div className="bg-white border border-slate-200 p-6 rounded-3xl">
            <h3 className="text-sm font-bold text-slate-800 mb-4">Policy Quick Links</h3>
            <ul className="space-y-3">
              {['Annual Leave Policy', 'Sick Leave Guidelines', 'Public Holiday List'].map(item => (
                <li key={item} className="text-xs font-medium text-slate-500 hover:text-indigo-600 cursor-pointer flex items-center justify-between group">
                  {item}
                  <FaChevronRight size={8} className="opacity-0 group-hover:opacity-100 transition-all" />
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CalendarView;