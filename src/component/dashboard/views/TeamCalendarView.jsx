import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  FaChevronLeft,
  FaChevronRight,
  FaPlus,
  FaInfoCircle,
  FaCalendarAlt,
} from "react-icons/fa";

const teamMembers = [
  { name: "Emma Wilson", initial: "EW", status: "Away", color: "bg-rose-500" },
  {
    name: "Sarah Johnson",
    initial: "SJ",
    status: "Active",
    color: "bg-emerald-500",
  },
  {
    name: "Michael Chen",
    initial: "MC",
    status: "Active",
    color: "bg-emerald-500",
  },
  {
    name: "Alex Rivera",
    initial: "AR",
    status: "Active",
    color: "bg-emerald-500",
  },
];

const upcomingLeaves = [
  {
    name: "Emma Wilson",
    type: "Sick Leave",
    date: "Jan 18 - Jan 20",
    day: 18,
    initial: "EW",
    color: "bg-blue-100 text-blue-600",
  },
  {
    name: "Sarah Johnson",
    type: "Casual Leave",
    date: "Jan 15 - Jan 16",
    day: 15,
    initial: "SJ",
    color: "bg-amber-100 text-amber-600",
  },
];

const TeamCalendarView = () => {
  const [selectedDate, setSelectedDate] = useState(29);
  const daysInMonth = Array.from({ length: 31 }, (_, i) => i + 1);

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      className="flex flex-col lg:flex-row gap-6 p-2 md:p-4 max-w-[1400px] mx-auto"
    >
      {/* 1. CALENDAR SECTION */}
      <div className="flex-1 bg-white border-2 border-slate-50 rounded-[2rem] md:rounded-[3rem] p-5 md:p-8 shadow-sm">
        {/* Header with Month Navigation */}
        <div className="flex justify-between items-center mb-8">
          <div>
            <h2 className="text-2xl md:text-3xl font-black text-slate-900 tracking-tight">
              January
            </h2>
            <p className="text-[10px] font-bold text-slate-400 uppercase tracking-widest">
              2026 Schedule
            </p>
          </div>
          <div className="flex gap-2">
            <button className="p-3 bg-slate-50 text-slate-400 rounded-2xl hover:bg-slate-900 hover:text-white transition-all">
              <FaChevronLeft size={12} />
            </button>
            <button className="p-3 bg-slate-50 text-slate-400 rounded-2xl hover:bg-slate-900 hover:text-white transition-all">
              <FaChevronRight size={12} />
            </button>
          </div>
        </div>

        {/* MOBILE: Horizontal Date Scroller (Hidden on Desktop) */}
        <div className="flex lg:hidden overflow-x-auto gap-3 pb-6 no-scrollbar snap-x">
          {daysInMonth.map((day) => {
            const isSelected = selectedDate === day;
            const hasLeave = [15, 18].includes(day);
            return (
              <button
                key={day}
                onClick={() => setSelectedDate(day)}
                className={`flex-shrink-0 w-16 h-20 rounded-2xl flex flex-col items-center justify-center gap-1 snap-center transition-all border-2 ${
                  isSelected
                    ? "bg-slate-900 border-slate-900 text-white shadow-lg shadow-slate-200"
                    : "bg-white border-slate-50 text-slate-400"
                }`}
              >
                <span className="text-[9px] font-black uppercase">Day</span>
                <span className="text-lg font-black">{day}</span>
                {hasLeave && (
                  <div
                    className={`w-1.5 h-1.5 rounded-full ${isSelected ? "bg-indigo-400" : "bg-indigo-500"}`}
                  />
                )}
              </button>
            );
          })}
        </div>

        {/* DESKTOP: Full Grid (Hidden on Mobile) */}
        <div className="hidden lg:grid grid-cols-7 gap-3">
          {["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"].map((d) => (
            <div
              key={d}
              className="text-center text-[10px] font-black text-slate-300 uppercase pb-2 tracking-widest"
            >
              {d}
            </div>
          ))}
          {daysInMonth.map((day) => {
            const isSelected = selectedDate === day;
            const hasLeave = [15, 16, 18, 19, 20].includes(day);
            return (
              <button
                key={day}
                onClick={() => setSelectedDate(day)}
                className={`h-24 p-3 rounded-[1.5rem] border-2 text-left flex flex-col justify-between transition-all ${
                  isSelected
                    ? "bg-slate-900 border-slate-900 text-white shadow-xl shadow-slate-200"
                    : "bg-white border-slate-50 hover:border-slate-100 text-slate-900"
                }`}
              >
                <span className="font-black text-sm">{day}</span>
                {hasLeave && (
                  <div className="w-2 h-2 rounded-full bg-indigo-500 shadow-[0_0_8px_rgba(99,102,241,0.6)]" />
                )}
              </button>
            );
          })}
        </div>

        {/* MOBILE ACTIVE DAY INFO: Shows details of what's happening on the selected mobile day */}
        <div className="mt-6 lg:hidden p-5 bg-indigo-50/50 rounded-3xl border border-indigo-100">
          <h4 className="text-[10px] font-black text-indigo-400 uppercase tracking-[0.2em] mb-2">
            Schedule for Jan {selectedDate}
          </h4>
          {[15, 16, 18, 19, 20].includes(selectedDate) ? (
            <div className="flex items-center gap-3">
              <div className="w-2 h-2 rounded-full bg-indigo-500" />
              <p className="text-sm font-bold text-slate-700">
                Team members on leave
              </p>
            </div>
          ) : (
            <p className="text-sm font-bold text-slate-400">
              No leave requests for this day.
            </p>
          )}
        </div>
      </div>

      {/* 2. SIDEBAR SECTION */}
      {/* 2. SIDEBAR SECTION */}
      <div className="w-full lg:w-96 space-y-6">
        {/* Team Members - Vertical Professional List */}
        <div className="bg-white border-2 border-slate-50 rounded-[2.5rem] p-7 shadow-sm">
          <div className="flex items-center justify-between mb-6">
            <div>
              <h3 className="font-black text-slate-900 tracking-tight">
                Team Members
              </h3>
              <p className="text-[9px] font-bold text-slate-400 uppercase tracking-widest mt-0.5">
                Who's active now
              </p>
            </div>
            <div className="w-8 h-8 bg-slate-50 rounded-xl flex items-center justify-center text-[10px] font-black text-slate-400">
              4
            </div>
          </div>

          <div className="space-y-3">
            {teamMembers.map((m) => (
              <div
                key={m.name}
                className="flex items-center justify-between p-3 bg-slate-50/50 rounded-2xl border border-transparent hover:border-slate-100 hover:bg-white transition-all group"
              >
                <div className="flex items-center gap-4">
                  {/* Avatar with Status Ring */}
                  <div className="relative">
                    <div className="w-10 h-10 rounded-2xl bg-white shadow-sm flex items-center justify-center text-[10px] font-black text-slate-900 border border-slate-100">
                      {m.initial}
                    </div>
                    <div
                      className={`absolute -bottom-1 -right-1 w-3.5 h-3.5 rounded-full border-2 border-white ${m.color}`}
                    />
                  </div>

                  <div>
                    <p className="text-xs font-black text-slate-800 group-hover:text-indigo-600 transition-colors">
                      {m.name}
                    </p>
                    <p className="text-[9px] font-bold text-slate-400 uppercase tracking-widest">
                      {m.status}
                    </p>
                  </div>
                </div>

                <button className="p-2 opacity-0 group-hover:opacity-100 text-slate-300 hover:text-indigo-500 transition-all">
                  <FaInfoCircle size={14} />
                </button>
              </div>
            ))}
          </div>
        </div>

        {/* Upcoming Leaves - Refined Design */}
        <div className="bg-white border-2 border-slate-50 rounded-[2.5rem] p-7 shadow-sm relative overflow-hidden">
          {/* Visual Accent */}
          <div className="absolute top-0 right-0 w-24 h-24 bg-indigo-50 rounded-full -mr-12 -mt-12 blur-2xl opacity-60" />

          <h3 className="font-black text-slate-900 mb-6 tracking-tight relative z-10">
            Upcoming Leaves
          </h3>

          <div className="space-y-4 relative z-10">
            {upcomingLeaves.map((l, i) => (
              <div key={i} className="flex gap-4">
                <div className="flex flex-col items-center">
                  <div
                    className={`w-2 h-2 rounded-full ${i === 0 ? "bg-indigo-500" : "bg-slate-200"} mt-1.5`}
                  />
                  {i !== upcomingLeaves.length - 1 && (
                    <div className="w-0.5 h-full bg-slate-100 my-1" />
                  )}
                </div>
                <div className="pb-4">
                  <p className="text-[11px] font-black text-slate-900 leading-none">
                    {l.name}
                  </p>
                  <p className="text-[9px] font-bold text-slate-400 uppercase mt-1 tracking-wider">
                    {l.type}
                  </p>
                  <div className="inline-block mt-2 px-3 py-1 bg-indigo-50 text-indigo-600 rounded-lg text-[10px] font-black">
                    {l.date}
                  </div>
                </div>
              </div>
            ))}
          </div>

          <button className="w-full mt-4 py-4 bg-slate-900 text-white rounded-[1.5rem] text-[10px] font-black uppercase tracking-[0.2em] shadow-lg hover:bg-indigo-600 transition-all active:scale-95 flex items-center justify-center gap-2">
            <FaPlus size={10} /> Plan Your Leave
          </button>
        </div>
      </div>
    </motion.div>
  );
};

export default TeamCalendarView;
