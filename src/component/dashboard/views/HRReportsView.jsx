import React from "react";
import { 
  FaCalendarAlt, FaArrowUp, FaArrowDown, 
  FaDownload, FaUsers, FaClock, FaChartLine 
} from "react-icons/fa";
import { 
  BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, 
  PieChart, Pie, Cell, Legend 
} from "recharts";

// Data for Department Bar Chart
const deptData = [
  { name: "Engineering", leaves: 45, fill: "#6366f1" },
  { name: "Marketing", leaves: 22, fill: "#f43f5e" },
  { name: "Design", leaves: 22, fill: "#fbbf24" },
  { name: "Support", leaves: 18, fill: "#10b981" },
];

// Data for Leave Type Donut Chart
const typeData = [
  { name: "Casual", value: 65, color: "#6366f1" },
  { name: "Sick", value: 20, color: "#fbbf24" },
  { name: "Maternity", value: 15, color: "#10b981" },
];

const HRReportsView = () => {
  return (
    <div className="space-y-8 animate-in fade-in duration-500">
      
      {/* HEADER SECTION */}
      <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4">
        <div>
          <h2 className="text-3xl font-black text-slate-900 tracking-tight">HR Analytics</h2>
          <p className="text-slate-500 text-sm font-medium">Real-time leave trends and organizational insights.</p>
        </div>
        <button className="flex items-center gap-2 bg-slate-900 text-white px-5 py-2.5 rounded-xl text-xs font-black uppercase tracking-widest hover:bg-indigo-600 transition-all shadow-lg active:scale-95">
          <FaDownload /> Generate PDF Report
        </button>
      </div>

      {/* STAT CARDS */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {[
          { label: "Total Leaves", val: "1,240", change: "+14.2%", up: true, icon: <FaCalendarAlt />, color: "text-blue-600", bg: "bg-blue-50" },
          { label: "Active Employees", val: "482", change: "+2", up: true, icon: <FaUsers />, color: "text-indigo-600", bg: "bg-indigo-50" },
          { label: "Pending Approvals", val: "14", change: "-5.1%", up: false, icon: <FaClock />, color: "text-amber-600", bg: "bg-amber-50" },
          { label: "Avg. Duration", val: "3.2d", change: "+0.4d", up: true, icon: <FaChartLine />, color: "text-emerald-600", bg: "bg-emerald-50" },
        ].map((stat, i) => (
          <div key={i} className="bg-white p-6 rounded-4xl border border-slate-200 shadow-sm transition-transform hover:-translate-y-1">
            <div className="flex justify-between items-start">
              <div className={`${stat.bg} ${stat.color} p-3 rounded-2xl text-lg`}>{stat.icon}</div>
              <span className={`flex items-center gap-1 text-[10px] font-black px-2 py-1 rounded-full ${stat.up ? 'bg-emerald-100 text-emerald-700' : 'bg-rose-100 text-rose-700'}`}>
                {stat.up ? <FaArrowUp /> : <FaArrowDown />} {stat.change}
              </span>
            </div>
            <div className="mt-4">
              <h3 className="text-3xl font-black text-slate-900 tracking-tighter">{stat.val}</h3>
              <p className="text-slate-400 text-[11px] font-bold uppercase tracking-widest mt-1">{stat.label}</p>
            </div>
          </div>
        ))}
      </div>

      {/* CHARTS GRID */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        
        {/* BAR CHART: LEAVES BY DEPARTMENT */}
        <div className="lg:col-span-2 bg-white p-8 rounded-[2.5rem] border border-slate-200 shadow-sm min-h-[400px]">
          <h3 className="font-black text-slate-900 text-xl tracking-tight mb-6">Department Distribution</h3>
          <div className="h-75 w-full">
            <ResponsiveContainer width="100%" height="100%">
              <BarChart data={deptData} margin={{ top: 10, right: 10, left: -20, bottom: 0 }}>
                <CartesianGrid strokeDasharray="3 3" vertical={false} stroke="#f1f5f9" />
                <XAxis dataKey="name" axisLine={false} tickLine={false} tick={{fill: '#94a3b8', fontSize: 12, fontWeight: 600}} />
                <YAxis axisLine={false} tickLine={false} tick={{fill: '#94a3b8', fontSize: 12}} />
                <Tooltip 
                  cursor={{fill: '#f8fafc'}}
                  contentStyle={{ borderRadius: '12px', border: 'none', boxShadow: '0 10px 15px -3px rgba(0,0,0,0.1)', fontWeight: 'bold' }}
                />
                <Bar dataKey="leaves" radius={[6, 6, 0, 0]} barSize={40} />
              </BarChart>
            </ResponsiveContainer>
          </div>
        </div>

        {/* PIE CHART: LEAVE TYPES */}
        <div className="bg-slate-900 p-8 rounded-[2.5rem] text-white shadow-2xl flex flex-col">
          <h3 className="font-black text-xl tracking-tight mb-4">Leave Types</h3>
          <div className="flex-1 min-h-62.5 relative">
            <ResponsiveContainer width="100%" height="100%">
              <PieChart>
                <Pie
                  data={typeData}
                  innerRadius={65}
                  outerRadius={90}
                  paddingAngle={8}
                  dataKey="value"
                  stroke="none"
                >
                  {typeData.map((entry, index) => (
                    <Cell key={`cell-${index}`} fill={entry.color} />
                  ))}
                </Pie>
                <Tooltip 
                  contentStyle={{ backgroundColor: '#1e293b', border: 'none', borderRadius: '8px', color: '#fff' }}
                  itemStyle={{ color: '#fff' }}
                />
              </PieChart>
            </ResponsiveContainer>
            {/* Center Text for Donut */}
            <div className="absolute inset-0 flex flex-col items-center justify-center pointer-events-none">
              <span className="text-3xl font-black">65%</span>
              <span className="text-[10px] font-bold uppercase text-slate-500">Casual</span>
            </div>
          </div>
          
          {/* Custom Legend */}
          <div className="grid grid-cols-1 gap-2 mt-4">
            {typeData.map((item, i) => (
              <div key={i} className="flex items-center justify-between text-[11px] font-bold">
                <div className="flex items-center gap-2">
                  <div className="w-2 h-2 rounded-full" style={{ backgroundColor: item.color }} />
                  <span className="text-slate-300">{item.name}</span>
                </div>
                <span className="text-white">{item.value}%</span>
              </div>
            ))}
          </div>
        </div>

      </div>
    </div>
  );
};

export default HRReportsView;