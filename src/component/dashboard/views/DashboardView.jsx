import React from "react";
import { motion } from "framer-motion";
import { FaCalendarAlt, FaRegClock, FaBriefcase, FaExclamationTriangle } from "react-icons/fa";
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Legend, ResponsiveContainer, Tooltip as ChartTooltip, PieChart, Pie, Cell } from "recharts";
import StatCard from "../../ui/StatCard";

// Animation Variants
const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.1, delayChildren: 0.2 }
  }
};

const itemVariants = {
  hidden: { y: 20, opacity: 0 },
  visible: { 
    y: 0, 
    opacity: 1, 
    transition: { type: "spring", stiffness: 100, damping: 15 } 
  }
};

const historyData = [
  { month: "Jan", Casual: 1, Sick: 0, Earned: 2 },
  { month: "Feb", Casual: 0, Sick: 1, Earned: 0 },
  { month: "Mar", Casual: 2, Sick: 1, Earned: 0 },
  { month: "Apr", Casual: 1, Sick: 0, Earned: 0 },
];

const summaryStats = [
  { title: "Casual Leaves", value: "4", used: 4, total: 5, period: "This Year", icon: <FaCalendarAlt />, color: "#f97316" },
  { title: "Sick Leaves", value: "2", used: 2, total: 8, period: "This Year", icon: <FaRegClock />, color: "#3b82f6" },
  { title: "Earned Leaves", value: "10", used: 2, total: 12, period: "This Year", icon: <FaBriefcase />, color: "#6366f1" },
  { title: "Loss of Pay", value: "1", used: 1, total: 1, period: "This Year", icon: <FaExclamationTriangle />, color: "#94a3b8" },
];

const LeaveBalanceSummary = () => (
  <div className="order-2 lg:order-1 col-span-12 lg:col-span-8 grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-6">
    {summaryStats.map((stat, i) => (
      <motion.div key={i} variants={itemVariants} whileHover={{ y: -5 }}>
        <StatCard {...stat} />
      </motion.div>
    ))}
  </div>
);

const UsageAnalysis = ({ chartData, totalUsed }) => (
  <motion.div 
    variants={itemVariants}
    className="order-1 lg:order-2 col-span-12 lg:col-span-4 bg-white border border-slate-100 rounded-[2.5rem] shadow-sm p-8 flex flex-col items-center justify-center"
  >
    <h2 className="text-xs font-bold text-slate-400 uppercase tracking-widest mb-10">Usage Analysis</h2>
    <div className="relative w-full h-[280px]">
      <ResponsiveContainer width="100%" height="100%">
        <PieChart>
          <Pie
            data={chartData}
            cx="50%" cy="50%"
            innerRadius="70%" outerRadius="95%"
            paddingAngle={5} dataKey="value" stroke="none"
          >
            {chartData.map((entry, index) => (
              <Cell key={`cell-${index}`} fill={entry.color} cornerRadius={10} />
            ))}
          </Pie>
          <ChartTooltip />
        </PieChart>
      </ResponsiveContainer>
      <div className="absolute inset-0 flex flex-col items-center justify-center pointer-events-none">
        <motion.span 
          initial={{ scale: 0 }}
          animate={{ scale: 1 }}
          transition={{ type: "spring", delay: 0.5 }}
          className="text-5xl font-black text-slate-900"
        >
          {totalUsed}
        </motion.span>
        <span className="text-[10px] font-bold text-slate-400 uppercase tracking-widest mt-2">Total Used</span>
      </div>
    </div>
    <div className="mt-8 w-full space-y-3">
      {chartData.map((item, i) => (
        <div key={i} className="flex justify-between items-center group cursor-default">
          <div className="flex items-center gap-3">
            <div className="w-2.5 h-2.5 rounded-full transition-transform group-hover:scale-125" style={{ backgroundColor: item.color }} />
            <span className="text-xs font-bold text-slate-500">{item.name}</span>
          </div>
          <span className="text-xs font-black text-slate-800">{item.value} Days</span>
        </div>
      ))}
    </div>
  </motion.div>
);

const LeaveHistory = () => (
  <motion.div variants={itemVariants} className="col-span-12 lg:col-span-8 bg-white p-8 rounded-[2.5rem] border border-slate-100 shadow-sm">
    <h2 className="text-xs font-bold text-slate-400 uppercase tracking-widest mb-8">Leave History</h2>
    <div className="h-[300px] w-full">
      <ResponsiveContainer width="100%" height="100%">
        <BarChart data={historyData} margin={{ top: 10, right: 10, left: -20, bottom: 0 }}>
          <CartesianGrid strokeDasharray="3 3" vertical={false} stroke="#f1f5f9" />
          <XAxis dataKey="month" axisLine={false} tickLine={false} tick={{ fill: "#94a3b8", fontSize: 12, fontWeight: 600 }} dy={10} />
          <YAxis axisLine={false} tickLine={false} tick={{ fill: "#94a3b8", fontSize: 12 }} />
          <ChartTooltip cursor={{ fill: "#f8fafc" }} contentStyle={{ borderRadius: "16px", border: "none", boxShadow: "0 20px 25px -5px rgb(0 0 0 / 0.1)" }} />
          <Legend iconType="circle" wrapperStyle={{ paddingTop: "25px", fontWeight: "700", fontSize: "12px", textTransform: "uppercase", letterSpacing: "1px" }} />
          <Bar dataKey="Casual" stackId="a" fill="#f97316" radius={[0, 0, 0, 0]} barSize={35} />
          <Bar dataKey="Sick" stackId="a" fill="#3b82f6" radius={[0, 0, 0, 0]} barSize={35} />
          <Bar dataKey="Earned" stackId="a" fill="#6366f1" radius={[6, 6, 0, 0]} barSize={35} />
        </BarChart>
      </ResponsiveContainer>
    </div>
  </motion.div>
);

const RequestTracking = () => (
  <motion.div variants={itemVariants} className="col-span-12 lg:col-span-4 space-y-6">
    <div className="bg-white p-8 rounded-[2.5rem] border border-slate-100 shadow-sm h-full">
      <h2 className="text-xs font-bold text-slate-400 uppercase tracking-widest mb-8">Status Tracking</h2>
      <div className="space-y-8">
        {[
          { label: "Pending Leave Requests", type: "Sick Leave", date: "Oct 12 - Oct 13", days: 2, color: "bg-amber-400" },
          { label: "Upcoming Approved Leaves", type: "Earned Leave", date: "Dec 20 - Dec 24", days: 5, color: "bg-emerald-400" }
        ].map((item, idx) => (
          <div key={idx} className="group cursor-pointer">
            <h3 className="text-[10px] font-black text-slate-300 uppercase mb-4 tracking-tighter">{item.label}</h3>
            <div className="flex gap-4 p-3 rounded-2xl transition-colors group-hover:bg-slate-50">
              <div className={`flex-shrink-0 w-1.5 h-10 ${item.color} rounded-full`} />
              <div>
                <p className="text-sm font-black text-slate-800">{item.type}</p>
                <p className="text-xs font-bold text-slate-400">{item.date} • {item.days} Days</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  </motion.div>
);

const DashboardView = () => {
  const chartData = summaryStats
    .filter((stat) => stat.title !== "Loss of Pay")
    .map((stat) => ({ name: stat.title, value: stat.used, color: stat.color }));

  const totalUsed = chartData.reduce((acc, curr) => acc + curr.value, 0);

  return (
    <motion.div 
      initial="hidden"
      animate="visible"
      variants={containerVariants}
      className="p-4 sm:p-8 space-y-8 sm:space-y-12"
    >
      <div className="grid grid-cols-12 gap-6 sm:gap-10">
        <LeaveBalanceSummary />
        <UsageAnalysis chartData={chartData} totalUsed={totalUsed} />
      </div>

      <div className="grid grid-cols-12 gap-6 sm:gap-10">
        <LeaveHistory />
        <RequestTracking />
      </div>
    </motion.div>
  );
};

export default DashboardView;