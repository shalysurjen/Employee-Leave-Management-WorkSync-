import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  FaCheck,
  FaCheckCircle,
  FaRegClock,
  FaTimesCircle,
  FaBell,
  FaTrashAlt,
  FaEllipsisV,
} from "react-icons/fa";

const notificationsData = [
  {
    id: 1,
    type: "success",
    title: "Leave Approved",
    desc: "Approved by Michael Chen for Jan 15.",
    time: "2h ago",
    unread: true,
    category: "Personal",
  },
  {
    id: 2,
    type: "info",
    title: "Pending",
    desc: "Sick leave for Jan 22 is awaiting review.",
    time: "5h ago",
    unread: true,
    category: "Personal",
  },
  {
    id: 3,
    type: "error",
    title: "Rejected",
    desc: "Rejected due to department blackout dates.",
    time: "1d ago",
    unread: false,
    category: "System",
  },
  {
    id: 4,
    type: "info",
    title: "Team Update",
    desc: "Michael Chen is out of office today.",
    time: "2d ago",
    unread: false,
    category: "Team",
  },
];

const NotificationsView = () => {
  const [activeFilter, setActiveFilter] = useState("All");
  const categories = ["All", "Personal", "Team", "System"];

  const getIcon = (type) => {
    switch (type) {
      case "success":
        return {
          icon: <FaCheckCircle />,
          color: "text-emerald-500",
          bg: "bg-emerald-50",
        };
      case "info":
        return {
          icon: <FaRegClock />,
          color: "text-amber-500",
          bg: "bg-amber-50",
        };
      case "error":
        return {
          icon: <FaTimesCircle />,
          color: "text-rose-500",
          bg: "bg-rose-50",
        };
      default:
        return {
          icon: <FaBell />,
          color: "text-indigo-500",
          bg: "bg-indigo-50",
        };
    }
  };

  return (
    <div className="w-full max-w-[800px] mx-auto space-y-4 md:space-y-6">
      {/* Header: Responsive flex */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 px-1">
        <div>
          <h1 className="text-2xl md:text-3xl font-black text-slate-900 tracking-tight">
            Activity
          </h1>
          <p className="text-[10px] md:text-xs font-bold text-slate-400 uppercase tracking-widest">
            Update Feed
          </p>
        </div>

        <div className="flex items-center gap-2">
          <button className="flex-1 sm:flex-none flex items-center justify-center gap-2 px-4 py-2 bg-white border border-slate-200 rounded-xl text-[10px] font-black uppercase text-slate-600 active:scale-95 transition-transform">
            <FaCheck /> <span className="hidden xs:inline">Read All</span>
          </button>
          <button className="p-2.5 bg-slate-900 text-white rounded-xl active:scale-95 transition-transform">
            <FaTrashAlt size={12} />
          </button>
        </div>
      </div>

      {/* Mobile-Friendly Filter: Horizontal Scroll on tiny screens */}
      <div className="overflow-x-auto no-scrollbar -mx-2 px-2">
        <div className="flex gap-1 bg-slate-100/80 p-1 rounded-xl w-max sm:w-fit">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setActiveFilter(cat)}
              className={`px-4 py-1.5 rounded-lg text-[10px] font-black uppercase tracking-wider transition-all ${
                activeFilter === cat
                  ? "bg-white text-indigo-600 shadow-sm"
                  : "text-slate-500 hover:text-slate-700"
              }`}
            >
              {cat}
            </button>
          ))}
        </div>
      </div>

      {/* Notifications List: Performance focus */}
      <div className="space-y-2 md:space-y-3">
        <AnimatePresence initial={false}>
          {notificationsData
            .filter(
              (n) => activeFilter === "All" || n.category === activeFilter,
            )
            .map((n) => {
              const theme = getIcon(n.type);
              return (
                <motion.div
                  layout
                  key={n.id}
                  className={`relative p-3 md:p-4 rounded-2xl border transition-all duration-200 ${
                    n.unread
                      ? "bg-white border-indigo-100 shadow-sm hover:shadow-md hover:border-indigo-300"
                      : "bg-slate-50/50 border-transparent hover:bg-slate-100/80 hover:border-slate-200"
                  }`}
                >
                  <div className="flex gap-3 md:gap-4 items-start">
                    {/* Compact Icon */}
                    <div
                      className={`shrink-0 w-10 h-10 rounded-xl ${theme.bg} flex items-center justify-center ${theme.color} text-lg`}
                    >
                      {theme.icon}
                    </div>

                    {/* Content: Better line-clamping for mobile */}
                    <div className="flex-1 min-w-0 pr-4">
                      <div className="flex flex-col xs:flex-row xs:items-center gap-1 xs:gap-2 mb-0.5">
                        <h4
                          className={`text-sm font-bold truncate ${n.unread ? "text-slate-900" : "text-slate-600"}`}
                        >
                          {n.title}
                        </h4>
                        <span className="w-fit text-[8px] font-black uppercase px-1.5 py-0.5 bg-slate-200/50 text-slate-500 rounded">
                          {n.category}
                        </span>
                      </div>
                      <p className="text-xs text-slate-500 line-clamp-2 md:line-clamp-none leading-snug">
                        {n.desc}
                      </p>
                      <span className="text-[9px] font-bold text-slate-400 block mt-1">
                        {n.time}
                      </span>
                    </div>

                    {/* Action Button */}
                    <button className="shrink-0 p-1 text-slate-300">
                      <FaEllipsisV size={10} />
                    </button>

                    {/* Status Dot */}
                    {n.unread && (
                      <div className="absolute right-3 top-4">
                        <div className="w-1.5 h-1.5 bg-indigo-500 rounded-full" />
                      </div>
                    )}
                  </div>
                </motion.div>
              );
            })}
        </AnimatePresence>
      </div>
    </div>
  );
};

export default NotificationsView;
