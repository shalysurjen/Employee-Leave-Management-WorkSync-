import React, { useState } from "react";
import { motion } from "framer-motion";
import { FaSearch, FaUserPlus, FaEllipsisV, FaFilter } from "react-icons/fa";

const employeesList = [
  { name: "Sarah Johnson", email: "sarah.j@company.com", dept: "Engineering", status: "ACTIVE", role: "Senior Developer", initial: "SJ", color: "bg-indigo-500" },
  { name: "Michael Chen", email: "m.chen@company.com", dept: "Engineering", status: "ACTIVE", role: "Product Designer", initial: "MC", color: "bg-emerald-500" },
  { name: "Alex Rivera", email: "alex.r@company.com", dept: "Engineering", status: "ON LEAVE", role: "QA Engineer", initial: "AR", color: "bg-amber-500" },
  { name: "Jessica Wu", email: "jess.wu@company.com", dept: "Marketing", status: "ACTIVE", role: "Growth Lead", initial: "JW", color: "bg-rose-500" },
];

const EmployeesView = () => {
  const [searchTerm, setSearchTerm] = useState("");

  // Animation Variants
  const containerVars = {
    animate: { transition: { staggerChildren: 0.05 } }
  };

  const rowVars = {
    initial: { opacity: 0, x: -10 },
    animate: { opacity: 1, x: 0 },
  };

  return (
    <div className="space-y-6">
      {/* ACTION BAR */}
      <div className="flex flex-col md:flex-row justify-between items-center gap-4">
        <div className="relative w-full md:w-96">
          <FaSearch className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400" />
          <input 
            type="text"
            placeholder="Search by name, email or role..."
            className="w-full pl-11 pr-4 py-3 bg-white border border-slate-200 rounded-2xl text-sm focus:ring-4 focus:ring-indigo-50 transition-all outline-none font-medium shadow-sm"
            onChange={(e) => setSearchTerm(e.target.value)}
          />
        </div>
        
        <div className="flex items-center gap-3 w-full md:w-auto">
          <button className="flex-1 md:flex-none flex items-center justify-center gap-2 bg-white border border-slate-200 px-4 py-3 rounded-2xl text-xs font-black text-slate-700 hover:bg-slate-50 transition-all shadow-sm">
            <FaFilter /> FILTERS
          </button>
          <button className="flex-1 md:flex-none flex items-center justify-center gap-2 bg-slate-900 text-white px-5 py-3 rounded-2xl text-xs font-black uppercase tracking-widest hover:bg-indigo-600 transition-all shadow-lg shadow-slate-200">
            <FaUserPlus /> ADD EMPLOYEE
          </button>
        </div>
      </div>

      {/* TABLE CONTAINER */}
      <div className="bg-white border border-slate-200 rounded-[2rem] overflow-hidden shadow-sm">
        <div className="overflow-x-auto">
          <table className="w-full text-left">
            <thead className="bg-slate-50/50 border-b border-slate-100">
              <tr>
                <th className="px-6 py-5 text-[10px] font-black uppercase tracking-widest text-slate-400">Employee</th>
                <th className="px-6 py-5 text-[10px] font-black uppercase tracking-widest text-slate-400">Department & Role</th>
                <th className="px-6 py-5 text-[10px] font-black uppercase tracking-widest text-slate-400">Status</th>
                <th className="px-6 py-5 text-[10px] font-black uppercase tracking-widest text-slate-400 text-right">Actions</th>
              </tr>
            </thead>
            
            <motion.tbody 
              variants={containerVars}
              initial="initial"
              animate="animate"
              className="divide-y divide-slate-50"
            >
              {employeesList.map((emp, i) => (
                <motion.tr 
                  key={i} 
                  variants={rowVars}
                  className="hover:bg-slate-50/80 transition-colors group"
                >
                  {/* Name & Avatar */}
                  <td className="px-6 py-5">
                    <div className="flex items-center gap-4">
                      <div className={`w-10 h-10 ${emp.color} rounded-xl flex items-center justify-center text-white text-xs font-black shadow-sm group-hover:scale-110 transition-transform`}>
                        {emp.initial}
                      </div>
                      <div className="flex flex-col">
                        <span className="font-bold text-slate-900 text-sm tracking-tight">{emp.name}</span>
                        <span className="text-[11px] text-slate-400 font-medium">{emp.email}</span>
                      </div>
                    </div>
                  </td>

                  {/* Dept & Role */}
                  <td className="px-6 py-5">
                    <div className="flex flex-col">
                      <span className="text-sm font-bold text-slate-700">{emp.dept}</span>
                      <span className="text-[11px] text-indigo-500 font-black uppercase tracking-tighter">{emp.role}</span>
                    </div>
                  </td>

                  {/* Status Badge */}
                  <td className="px-6 py-5">
                    <span className={`inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-[10px] font-black uppercase tracking-tight border ${
                      emp.status === "ACTIVE" 
                        ? "bg-emerald-50 text-emerald-600 border-emerald-100" 
                        : "bg-amber-50 text-amber-600 border-amber-100"
                    }`}>
                      <span className={`w-1.5 h-1.5 rounded-full bg-current ${emp.status === "ACTIVE" ? 'animate-pulse' : ''}`} />
                      {emp.status}
                    </span>
                  </td>

                  {/* Action Menu */}
                  <td className="px-6 py-5 text-right">
                    <button className="p-2 text-slate-400 hover:text-slate-900 hover:bg-slate-100 rounded-lg transition-all">
                      <FaEllipsisV />
                    </button>
                  </td>
                </motion.tr>
              ))}
            </motion.tbody>
          </table>
        </div>

        {/* PAGINATION FOOTER */}
        <div className="p-5 border-t border-slate-50 bg-slate-50/30 flex justify-between items-center">
          <span className="text-xs font-bold text-slate-400 uppercase tracking-widest">Page 1 of 12</span>
          <div className="flex gap-2">
            <button className="px-4 py-2 bg-white border border-slate-200 rounded-xl text-[10px] font-black text-slate-400 disabled:opacity-50">PREV</button>
            <button className="px-4 py-2 bg-white border border-slate-200 rounded-xl text-[10px] font-black text-slate-900 shadow-sm">NEXT</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default EmployeesView;