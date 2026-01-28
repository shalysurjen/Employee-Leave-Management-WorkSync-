import React from "react";
import { FaCheck, FaCheckCircle, FaRegClock, FaTimesCircle, FaBell } from "react-icons/fa";

// Example dummy data
const notificationsData = [
  { id: 1, type: "success", title: "Leave Approved", desc: "Your leave request for Jan 15 has been approved.", time: "2h ago", unread: true },
  { id: 2, type: "info", title: "Pending Approval", desc: "Your leave request for Jan 22 is pending approval.", time: "5h ago", unread: true },
  { id: 3, type: "error", title: "Leave Rejected", desc: "Your leave request for Jan 10 was rejected.", time: "1d ago", unread: false },
  { id: 4, type: "info", title: "Team Leave Update", desc: "Michael Chen is on leave today.", time: "2d ago", unread: false },
];

const NotificationsView = () => (
  <div className="space-y-6 animate-in fade-in">

    {/* Mark all as read */}
    <div className="flex justify-end">
      <button className="flex items-center gap-2 px-4 py-2 border border-slate-200 rounded-xl text-sm font-bold text-slate-700 hover:bg-slate-50 transition-all shadow-sm">
        <FaCheck className="text-xs" /> Mark all as read
      </button>
    </div>

    {/* Notification list */}
    <div className="space-y-4">
      {notificationsData.map((n) => (
        <div
          key={n.id}
          className={`p-5 rounded-2xl border flex gap-4 transition-all hover:shadow-md relative overflow-hidden ${
            n.unread ? "bg-white border-blue-200 shadow-blue-50" : "bg-white border-slate-100"
          }`}
        >
          {n.unread && <div className="absolute left-0 top-0 bottom-0 w-1 bg-blue-500"></div>}

          {/* Icon */}
          <div className="mt-1">
            {n.type === "success" ? (
              <div className="p-2 bg-green-50 text-green-500 rounded-full border border-green-100">
                <FaCheckCircle className="text-lg" />
              </div>
            ) : n.type === "info" ? (
              <div className="p-2 bg-amber-50 text-amber-500 rounded-full border border-amber-100">
                <FaRegClock className="text-lg" />
              </div>
            ) : n.type === "error" ? (
              <div className="p-2 bg-red-50 text-red-500 rounded-full border border-red-100">
                <FaTimesCircle className="text-lg" />
              </div>
            ) : (
              <div className="p-2 bg-blue-50 text-blue-500 rounded-full border border-blue-100">
                <FaBell className="text-lg" />
              </div>
            )}
          </div>

          {/* Content */}
          <div className="flex-1">
            <div className="flex justify-between items-start">
              <h4 className="font-bold text-slate-800">{n.title}</h4>
              <div className="flex items-center gap-2">
                <span className="text-[11px] text-slate-400 font-medium">{n.time}</span>
                {n.unread && <div className="w-2 h-2 bg-blue-500 rounded-full"></div>}
              </div>
            </div>
            <p className="text-sm text-slate-500 mt-1">{n.desc}</p>
          </div>
        </div>
      ))}
    </div>
  </div>
);

export default NotificationsView;
