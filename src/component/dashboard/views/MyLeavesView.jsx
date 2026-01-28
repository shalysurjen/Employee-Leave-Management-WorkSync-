import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { 
  FaSearch, FaFilter, FaTimes, FaEye, 
  FaCalendarAlt, FaDownload, FaEllipsisV 
} from "react-icons/fa";

const allLeaves = [
  { id: 1, type: "Casual Leave", range: "Jan 10 - Jan 12", days: 3, status: "Approved", applied: "Jan 5, 2026", approvedBy: "Michael Chen" },
  { id: 2, type: "Sick Leave", range: "Jan 22, 2026", days: 1, status: "Pending", applied: "Jan 20, 2026", approvedBy: "—" },
  { id: 3, type: "Casual Leave", range: "Jan 15 - Jan 16", days: 2, status: "Rejected", applied: "Jan 10, 2026", approvedBy: "Michael Chen" },
];

const MyLeavesView = () => {
  const [searchTerm, setSearchTerm] = useState("");

  const statusStyles = {
    Approved: "bg-emerald-50 text-emerald-600 border-emerald-100",
    Pending: "bg-amber-50 text-amber-600 border-amber-100",
    Rejected: "bg-rose-50 text-rose-600 border-rose-100",
  };

  return (
    <div className="w-full space-y-4 md:space-y-6">
      
      {/* 1. COMPACT RESPONSIVE HEADER */}
      <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 px-1">
        <div>
          <h1 className="text-2xl md:text-3xl font-black text-slate-900 tracking-tight">History</h1>
          <p className="text-[10px] md:text-xs font-bold text-slate-400 uppercase tracking-widest mt-1">
            Track your time-off
          </p>
        </div>

        <div className="flex gap-2">
          <button className="flex-1 sm:flex-none flex items-center justify-center gap-2 bg-white px-4 py-2.5 rounded-xl border border-slate-200 text-slate-600 hover:bg-slate-50 active:scale-95 transition-all shadow-sm">
            <FaDownload className="text-xs" />
            <span className="text-[10px] font-black uppercase tracking-wider">Export</span>
          </button>
        </div>
      </div>

      {/* 2. REFINED SEARCH & FILTER BAR */}
      <div className="bg-white p-2 md:p-3 rounded-2xl md:rounded-[2rem] border border-slate-100 shadow-sm flex flex-col md:flex-row gap-2">
        <div className="relative flex-1 group">
          <FaSearch className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400 group-focus-within:text-indigo-500 transition-colors" />
          <input
            type="text"
            placeholder="Search..."
            className="w-full pl-10 pr-4 py-2.5 md:py-3 bg-slate-50 border-none rounded-xl md:rounded-2xl text-sm font-bold text-slate-700 outline-none focus:ring-1 focus:ring-indigo-100 transition-all"
          />
        </div>
        
        <div className="flex gap-2">
          <select className="flex-1 md:flex-none px-4 py-2.5 bg-slate-50 rounded-xl text-[10px] font-black uppercase text-slate-500 outline-none">
            <option>All Status</option>
            <option>Approved</option>
          </select>
          <button className="p-3 bg-slate-900 text-white rounded-xl shadow-lg active:scale-90 transition-transform">
            <FaFilter className="text-xs" />
          </button>
        </div>
      </div>

      {/* 3. RESPONSIVE DATA CONTAINER */}
      <div className="bg-white md:border md:border-slate-100 md:rounded-[2rem] overflow-hidden">
        
        {/* DESKTOP TABLE (Hidden on Mobile) */}
        <div className="hidden md:block overflow-x-auto">
          <table className="w-full text-left border-collapse">
            <thead>
              <tr className="bg-slate-50/50 border-b border-slate-100">
                <th className="px-8 py-5 text-[10px] font-black text-slate-400 uppercase tracking-widest">Type</th>
                <th className="px-8 py-5 text-[10px] font-black text-slate-400 uppercase tracking-widest">Duration</th>
                <th className="px-8 py-5 text-[10px] font-black text-slate-400 uppercase tracking-widest">Status</th>
                <th className="px-8 py-5 text-[10px] font-black text-slate-400 uppercase tracking-widest text-right">Actions</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-50">
              {allLeaves.map((l) => (
                <tr key={l.id} className="group hover:bg-slate-50/80 transition-colors">
                  <td className="px-8 py-6 font-bold text-slate-700">{l.type}</td>
                  <td className="px-8 py-6">
                    <p className="text-sm font-bold text-slate-600">{l.range}</p>
                    <p className="text-[10px] font-black text-slate-400 uppercase tracking-tighter">{l.days} Days</p>
                  </td>
                  <td className="px-8 py-6">
                    <span className={`px-4 py-1.5 rounded-xl text-[10px] font-black uppercase tracking-wider border ${statusStyles[l.status]}`}>
                      {l.status}
                    </span>
                  </td>
                  <td className="px-8 py-6 text-right">
                    <div className="flex justify-end gap-2 opacity-0 group-hover:opacity-100 transition-opacity">
                      <button className="p-3 bg-slate-100 text-slate-600 rounded-xl hover:bg-slate-200"><FaEye size={12}/></button>
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        {/* MOBILE CARDS (Hidden on Desktop) */}
        <div className="md:hidden space-y-3">
          {allLeaves.map((l) => (
            <div key={l.id} className="p-4 bg-white rounded-2xl border border-slate-100 shadow-sm active:scale-[0.98] transition-transform">
              <div className="flex justify-between items-start mb-3">
                <div className="flex items-center gap-2">
                  <div className={`w-1.5 h-4 rounded-full ${l.type.includes('Sick') ? 'bg-blue-500' : 'bg-orange-500'}`} />
                  <span className="font-black text-slate-800 text-sm tracking-tight">{l.type}</span>
                </div>
                <span className={`px-2 py-1 rounded-lg text-[9px] font-black uppercase tracking-tighter border ${statusStyles[l.status]}`}>
                  {l.status}
                </span>
              </div>
              
              <div className="flex justify-between items-end">
                <div className="space-y-1">
                  <div className="flex items-center gap-2 text-slate-500">
                    <FaCalendarAlt size={10} />
                    <span className="text-xs font-bold">{l.range}</span>
                  </div>
                  <p className="text-[10px] font-black text-slate-400 uppercase tracking-widest">Applied on {l.applied}</p>
                </div>
                
                <button className="p-2.5 bg-slate-50 text-slate-400 rounded-xl border border-slate-100">
                  <FaEllipsisV size={12} />
                </button>
              </div>
            </div>
          ))}
        </div>

      </div>
    </div>
  );
};

export default MyLeavesView;