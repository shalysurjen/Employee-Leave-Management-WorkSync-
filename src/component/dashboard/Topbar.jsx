import { FaBars, FaBell, FaUserCircle, FaChevronDown } from "react-icons/fa";

const Topbar = ({ activeTab, activeRole, setActiveRole, onMenuClick }) => (
  <div className="flex items-center justify-between bg-white/80 backdrop-blur-md px-6 py-3 border-b border-slate-100 sticky top-0 z-40">
    
    {/* Left Section */}
    <div className="flex items-center gap-4">
      <button
        onClick={onMenuClick}
        className="md:hidden p-2 hover:bg-slate-50 rounded-lg text-slate-500 transition-colors"
      >
        <FaBars />
      </button>
      
      <div className="flex flex-col">
        <h1 className="text-lg font-black text-slate-900 tracking-tight leading-none">
          {activeTab}
        </h1>
        <p className="text-[10px] font-bold text-slate-400 uppercase tracking-widest mt-1 hidden sm:block">
          Portal Workspace
        </p>
      </div>
    </div>

    {/* Right Section */}
    <div className="flex items-center gap-2 sm:gap-5">
      
      {/* Role Switcher - Styled as a Custom Component */}
      {setActiveRole && (
        <div className="relative group hidden sm:flex items-center gap-2 bg-slate-50 px-3 py-1.5 rounded-xl border border-slate-100 hover:border-indigo-200 transition-all cursor-pointer">
          <div className="w-1.5 h-1.5 rounded-full bg-indigo-500 animate-pulse" />
          <select
            value={activeRole}
            onChange={e => setActiveRole(e.target.value)}
            className="bg-transparent text-xs font-bold text-slate-700 outline-none appearance-none pr-4 cursor-pointer"
          >
            <option>Employee</option>
            <option>Manager</option>
            <option>HR Admin</option>
          </select>
          <FaChevronDown className="absolute right-2 text-[8px] text-slate-400 pointer-events-none" />
        </div>
      )}

      {/* Vertical Divider */}
      <div className="h-6 w-px bg-slate-100 mx-1 hidden sm:block" />

      {/* Notifications */}
      <div className="relative group">
        <button className="p-2 hover:bg-slate-50 rounded-xl transition-all relative text-slate-500 hover:text-indigo-600">
          <FaBell className="w-4 h-4" />
          <span className="absolute top-2 right-2 w-2 h-2 bg-rose-500 border-2 border-white rounded-full" />
        </button>
      </div>

      {/* User Profile */}
      <button className="flex items-center gap-3 p-1 pr-3 hover:bg-slate-50 rounded-2xl transition-all border border-transparent hover:border-slate-100">
        <div className="relative">
          <FaUserCircle className="text-slate-300 w-8 h-8" />
          <div className="absolute bottom-0 right-0 w-2.5 h-2.5 bg-emerald-500 border-2 border-white rounded-full" />
        </div>
        <div className="hidden lg:flex flex-col items-start text-left">
          <span className="text-xs font-black text-slate-700 leading-none">Alex Rivera</span>
          <span className="text-[10px] font-bold text-slate-400 mt-0.5 uppercase tracking-tighter">Active Now</span>
        </div>
      </button>
    </div>
  </div>
);

export default Topbar;