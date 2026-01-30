import React from "react";
import { motion } from "framer-motion";
import { 
  FaSun, FaMedkit, FaBaby, 
  FaUmbrellaBeach, FaPlus, FaEllipsisH 
} from "react-icons/fa";

const leaveTypesList = [
  { 
    name: "Casual Leave", 
    days: 12, 
    status: "ACTIVE", 
    description: "Standard leave for personal errands and relaxation.",
    icon: <FaUmbrellaBeach />,
    color: "indigo" 
  },
  { 
    name: "Sick Leave", 
    days: 10, 
    status: "ACTIVE", 
    description: "Medical leave for recovery and health appointments.",
    icon: <FaMedkit />,
    color: "rose" 
  },
  { 
    name: "Maternity Leave", 
    days: 90, 
    status: "ACTIVE", 
    description: "Support for new parents during their transition.",
    icon: <FaBaby />,
    color: "emerald" 
  },
];

const LeaveTypesView = () => {
  const containerVars = {
    animate: { transition: { staggerChildren: 0.1 } }
  };

  const cardVars = {
    initial: { opacity: 0, y: 20 },
    animate: { opacity: 1, y: 0 }
  };

  return (
    <div className="space-y-6">
      {/* HEADER SECTION */}
      <div className="flex justify-between items-center">
        <div>
          <h2 className="text-2xl font-black text-slate-900 tracking-tight">Leave Policies</h2>
          <p className="text-slate-500 text-sm font-medium mt-1">Manage entitlements and annual quotas.</p>
        </div>
        <button className="flex items-center gap-2 bg-slate-900 text-white px-5 py-2.5 rounded-2xl text-[10px] font-black uppercase tracking-widest hover:bg-indigo-600 transition-all shadow-lg shadow-slate-200 active:scale-95">
          <FaPlus className="text-xs" /> New Policy
        </button>
      </div>

      {/* POLICY GRID */}
      <motion.div 
        variants={containerVars}
        initial="initial"
        animate="animate"
        className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
      >
        {leaveTypesList.map((leave, i) => (
          <motion.div
            key={i}
            variants={cardVars}
            whileHover={{ y: -5 }}
            className="bg-white border border-slate-200 rounded-[2rem] p-6 shadow-sm relative overflow-hidden group"
          >
            {/* Action Menu */}
            <button className="absolute top-6 right-6 text-slate-300 hover:text-slate-600 transition-colors">
              <FaEllipsisH />
            </button>

            {/* Icon Header */}
            <div className={`w-14 h-14 rounded-2xl mb-6 flex items-center justify-center text-xl shadow-inner
              ${leave.color === 'indigo' ? 'bg-indigo-50 text-indigo-500' : ''}
              ${leave.color === 'rose' ? 'bg-rose-50 text-rose-500' : ''}
              ${leave.color === 'emerald' ? 'bg-emerald-50 text-emerald-500' : ''}
            `}>
              {leave.icon}
            </div>

            {/* Content */}
            <div className="space-y-2">
              <div className="flex items-center gap-3">
                <h3 className="font-black text-slate-900 text-lg tracking-tight">{leave.name}</h3>
                <span className="bg-emerald-100 text-emerald-700 text-[9px] font-black px-2 py-0.5 rounded-full uppercase">
                  {leave.status}
                </span>
              </div>
              <p className="text-xs text-slate-500 font-medium leading-relaxed">
                {leave.description}
              </p>
            </div>

            {/* Footer Stat */}
            <div className="mt-8 pt-6 border-t border-slate-50 flex items-center justify-between">
              <div className="flex flex-col">
                <span className="text-2xl font-black text-slate-900 leading-none">{leave.days}</span>
                <span className="text-[10px] font-bold text-slate-400 uppercase tracking-widest mt-1">Days Per Year</span>
              </div>
              <button className="text-[10px] font-black text-indigo-600 uppercase tracking-widest hover:underline decoration-2 underline-offset-4">
                Edit Policy
              </button>
            </div>
          </motion.div>
        ))}
      </motion.div>
    </div>
  );
};

export default LeaveTypesView;