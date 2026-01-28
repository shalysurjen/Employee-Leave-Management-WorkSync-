import { FaBars, FaBell, FaUserCircle } from "react-icons/fa";

const Topbar = ({ activeTab, activeRole, setActiveRole, onMenuClick }) => (
  <div className="flex items-center justify-between bg-white p-4 border-b border-slate-200 shadow-sm">
    
    {/* Left */}
    <div className="flex items-center gap-3">
      <button
        onClick={onMenuClick}
        className="md:hidden text-slate-600"
      >
        <FaBars />
      </button>
      <h1 className="text-lg md:text-xl font-bold text-slate-900">
        {activeTab}
      </h1>
    </div>

    {/* Right */}
    <div className="flex items-center gap-4">
      <FaBell className="text-slate-600 w-5 h-5 cursor-pointer" />

      {setActiveRole && (
        <select
          value={activeRole}
          onChange={e => setActiveRole(e.target.value)}
          className="hidden sm:block px-3 py-1 border rounded-lg text-sm"
        >
          <option>Employee</option>
          <option>Manager</option>
          <option>HR Admin</option>
        </select>
      )}

      <FaUserCircle className="text-slate-600 w-6 h-6 cursor-pointer" />
    </div>
  </div>
);

export default Topbar;
