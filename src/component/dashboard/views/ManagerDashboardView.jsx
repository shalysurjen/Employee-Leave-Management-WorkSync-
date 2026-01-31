import React from "react";
import { motion } from "framer-motion";
import { 
  FaRegClock, FaListUl, FaCheckCircle, 
  FaCalendarAlt, FaChevronRight, FaInfoCircle,
  FaArrowUp, FaArrowDown 
} from "react-icons/fa";

// Data stays the same...
const managerStats = [
  { title: "Pending Approvals", value: 3, unit: "requests", change: "+2", up: true, icon: <FaRegClock />, color: "from-amber-500 to-orange-600", light: "bg-amber-50", text: "text-amber-600", progress: 40 },
  { title: "Team Members", value: 12, unit: "people", change: "Stable", up: true, icon: <FaListUl />, color: "from-blue-500 to-indigo-600", light: "bg-blue-50", text: "text-blue-600", progress: 100 },
  { title: "Approved Monthly", value: 8, unit: "leaves", change: "+14%", up: true, icon: <FaCheckCircle />, color: "from-emerald-500 to-teal-600", light: "bg-emerald-50", text: "text-emerald-600", progress: 65 },
  { title: "On Leave Today", value: 1, unit: "member", change: "-2", up: false, icon: <FaCalendarAlt />, color: "from-sky-500 to-blue-600", light: "bg-sky-50", text: "text-sky-600", progress: 10 },
];

const teamOnLeave = [
  { name: "Emma Wilson", initial: "EW", type: "Sick Leave", until: "Jan 20", color: "bg-rose-500" },
  { name: "David Miller", initial: "DM", type: "Annual Leave", until: "Jan 25", color: "bg-indigo-500" },
];

const pendingApprovals = [
  { id: 1, initial: "SJ", employee: "Sarah Johnson", type: "Sick Leave", range: "Jan 22, 2026", days: 1, reason: "Medical appointment", avatarColor: "bg-violet-100 text-violet-600" },
];

// --- COOL ANIMATION VARIANTS ---
const containerVars = {
  initial: { opacity: 0 },
  animate: {
    opacity: 1,
    transition: {
      staggerChildren: 0.08, // Faster stagger for snappiness
      delayChildren: 0.1,
    }
  }
};

const cardVars = {
  initial: { opacity: 0, y: 15, scale: 0.95, filter: "blur(4px)" },
  animate: { 
    opacity: 1, 
    y: 0, 
    scale: 1, 
    filter: "blur(0px)",
    transition: {
      type: "spring",
      stiffness: 260,
      damping: 20
    }
  }
};

const tableRowVars = {
  initial: { opacity: 0, x: -10 },
  animate: { 
    opacity: 1, 
    x: 0,
    transition: { type: "spring", stiffness: 300, damping: 25 }
  }
};

const ManagerDashboardView = () => {
  return (
    <motion.div 
      variants={containerVars}
      initial="initial"
      animate="animate"
      className="space-y-8 md:space-y-10 p-2"
    >
      
      {/* 1. STATS GRID */}
      <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6">
        {managerStats.map((stat, i) => (
          <motion.div 
            key={i} 
            variants={cardVars}
            whileHover={{ scale: 1.02, y: -5 }}
            whileTap={{ scale: 0.98 }}
            className="bg-white p-4 md:p-6 rounded-4xl border border-slate-100 shadow-sm flex flex-col justify-between relative overflow-hidden group"
          >
            <div className={`absolute -right-4 -top-4 w-24 h-24 bg-linear-to-br ${stat.color} opacity-[0.04] rounded-full blur-2xl group-hover:opacity-[0.1] transition-opacity`} />
            
            <div className="flex justify-between items-start mb-4">
              <motion.div 
                initial={{ rotate: -15 }}
                animate={{ rotate: 0 }}
                className={`${stat.light} ${stat.text} p-3 rounded-2xl text-xl shadow-sm`}
              >
                {stat.icon}
              </motion.div>
              <div className={`flex items-center gap-1 px-2.5 py-1 rounded-full text-[9px] font-black ${stat.up ? 'bg-emerald-50 text-emerald-600' : 'bg-rose-50 text-rose-600'}`}>
                {stat.up ? <FaArrowUp size={7} /> : <FaArrowDown size={7} />}
                {stat.change}
              </div>
            </div>

            <div className="mt-2">
              <div className="flex items-baseline gap-1">
                <motion.p 
                  initial={{ scale: 0.5 }}
                  animate={{ scale: 1 }}
                  className="text-2xl md:text-4xl font-black text-slate-900 tracking-tighter"
                >
                  {stat.value}
                </motion.p>
                <span className="text-[10px] font-bold text-slate-400 uppercase tracking-tight">{stat.unit}</span>
              </div>
              <p className="text-slate-500 text-[10px] font-bold uppercase tracking-widest mt-1 opacity-70">
                {stat.title}
              </p>
            </div>

            <div className="mt-5 w-full bg-slate-50 h-1.5 rounded-full overflow-hidden">
              <motion.div 
                initial={{ width: 0 }}
                animate={{ width: `${stat.progress}%` }}
                className={`h-full bg-linear-to-r ${stat.color}`}
                transition={{ duration: 1.2, ease: "circOut", delay: 0.4 }}
              />
            </div>
          </motion.div>
        ))}
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        
        {/* 2. PENDING APPROVALS */}
        <motion.div variants={cardVars} className="lg:col-span-2 space-y-4">
          <div className="flex justify-between items-center px-2">
            <h2 className="text-xl font-black text-slate-900 tracking-tight">Pending Approvals</h2>
            <button className="text-[10px] font-black text-indigo-600 uppercase tracking-widest hover:text-indigo-800 transition-colors">
              View All
            </button>
          </div>
          
          <div className="bg-white border border-slate-100 rounded-[2.5rem] overflow-hidden shadow-sm">
            <table className="w-full text-left">
              <thead className="bg-slate-50/50 border-b border-slate-100">
                <tr>
                  <th className="p-6 text-[10px] font-black uppercase text-slate-400">Employee</th>
                  <th className="hidden sm:table-cell p-6 text-[10px] font-black uppercase text-slate-400 text-center">Duration</th>
                  <th className="p-6 text-[10px] font-black uppercase text-slate-400 text-right">Actions</th>
                </tr>
              </thead>
              <tbody>
                {pendingApprovals.map((app) => (
                  <motion.tr variants={tableRowVars} key={app.id} className="hover:bg-slate-50 transition-colors">
                    <td className="p-6">
                      <div className="flex items-center gap-4">
                        <div className={`w-10 h-10 rounded-xl flex items-center justify-center text-xs font-black ${app.avatarColor}`}>
                          {app.initial}
                        </div>
                        <div>
                          <p className="font-bold text-slate-900 text-sm tracking-tight">{app.employee}</p>
                          <p className="text-[10px] font-bold text-indigo-500 uppercase tracking-tighter">{app.type}</p>
                        </div>
                      </div>
                    </td>
                    <td className="hidden sm:table-cell p-6 text-center">
                      <span className="text-sm font-black text-slate-700">{app.days} Day</span>
                    </td>
                    <td className="p-6 text-right">
                      <button className="bg-slate-900 text-white px-5 py-2.5 rounded-xl text-[10px] font-black uppercase tracking-widest hover:bg-emerald-600 transition-all shadow-md active:scale-90">
                        Approve
                      </button>
                    </td>
                  </motion.tr>
                ))}
              </tbody>
            </table>
          </div>
        </motion.div>

        {/* 3. TEAM STATUS */}
        <motion.div variants={cardVars} className="space-y-4">
          <h2 className="text-xl font-black text-slate-900 tracking-tight px-2">Team Status</h2>
          <div className="bg-slate-900 rounded-[2.5rem] p-8 text-white shadow-2xl relative overflow-hidden h-full">
            <div className="absolute -top-10 -right-10 w-40 h-40 bg-indigo-500/10 rounded-full blur-3xl" />
            <p className="text-[10px] font-black text-slate-500 uppercase tracking-[0.2em] mb-8">Away Today</p>
            
            <div className="space-y-6">
              {teamOnLeave.map((member, i) => (
                <motion.div 
                  key={i} 
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.5 + (i * 0.1) }}
                  className="flex items-center gap-4 group cursor-pointer"
                >
                  <div className={`w-12 h-12 ${member.color} rounded-2xl flex items-center justify-center font-black text-sm shadow-lg`}>
                    {member.initial}
                  </div>
                  <div className="flex-1">
                    <p className="font-bold text-white text-sm group-hover:text-indigo-300 transition-colors">{member.name}</p>
                    <p className="text-[10px] text-slate-400">Until {member.until} • {member.type}</p>
                  </div>
                </motion.div>
              ))}
            </div>

            <button className="w-full mt-10 py-4 bg-white/5 border border-white/10 rounded-2xl text-[10px] font-black uppercase tracking-widest hover:bg-white/10 transition-all active:scale-95">
              Full Calendar
            </button>
          </div>
        </motion.div>

      </div>
    </motion.div>
  );
};

export default ManagerDashboardView;