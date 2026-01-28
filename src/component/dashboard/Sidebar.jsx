import { FaThLarge, FaPlus, FaListUl, FaCalendarAlt, FaBell, FaChevronLeft, FaUsers, FaRegClock } from "react-icons/fa";

const Sidebar = ({ activeTab, setActiveTab, role = "Employee" }) => {
  // Tabs visible to each role
  const tabs = [
    { name: "Dashboard", icon: <FaThLarge />, roles: ["Employee", "Manager"] },
    { name: "Apply Leave", icon: <FaPlus />, roles: ["Employee", "Manager"] },
    { name: "My Leaves", icon: <FaListUl />, roles: ["Employee", "Manager"] },
    { name: "Calendar", icon: <FaCalendarAlt />, roles: ["Employee"] },
    { name: "Team Calendar", icon: <FaCalendarAlt />, roles: ["Manager"] },
    { name: "Notifications", icon: <FaBell />, roles: ["Employee", "Manager"] },
    { name: "Pending Approvals", icon: <FaRegClock />, roles: ["Manager"] },
    { name: "Team Members", icon: <FaUsers />, roles: ["Manager"] },
  ];

  // Filter tabs for current role
  const visibleTabs = tabs.filter(tab => tab.roles.includes(role));

  return (
    <div className="w-64 bg-[#0f172a] text-slate-400 h-screen p-5 flex flex-col fixed left-0 top-0 z-20">
      <div className="flex justify-between items-center mb-10">
        <h2 className="text-xl font-bold text-white tracking-tight">LeaveHub</h2>
        <FaChevronLeft className="text-xs cursor-pointer hover:text-white" />
      </div>
      <ul className="flex flex-col gap-2">
        {visibleTabs.map(tab => (
          <li
            key={tab.name}
            onClick={() => setActiveTab(tab.name)}
            className={`flex items-center gap-3 p-3 rounded-lg cursor-pointer transition-all ${
              activeTab === tab.name
                ? "bg-blue-600/20 text-blue-400 border border-blue-500/20"
                : "hover:bg-slate-800 hover:text-slate-200"
            }`}
          >
            <span>{tab.icon}</span>
            <span className="font-medium text-sm">{tab.name}</span>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Sidebar;
