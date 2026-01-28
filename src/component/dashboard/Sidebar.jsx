import {
  FaThLarge,
  FaPlus,
  FaListUl,
  FaCalendarAlt,
  FaBell,
  FaChevronLeft,
  FaUsers,
  FaRegClock,
} from "react-icons/fa";

const Sidebar = ({
  activeTab,
  setActiveTab,
  role = "Employee",
  isOpen,
  setIsOpen,
}) => {
const tabs = [
    { name: "Dashboard", icon: <FaThLarge />, roles: ["Employee", "Manager"] },
    { name: "Apply Leave", icon: <FaPlus />, roles: ["Employee", "Manager"] },
    { name: "My Leaves", icon: <FaListUl />, roles: ["Employee", "Manager"] },
    { name: "Calendar", icon: <FaCalendarAlt />, roles: ["Employee"] },
    { name: "Team Calendar", icon: <FaCalendarAlt />, roles: ["Manager"] },
    { name: "Notifications", icon: <FaBell />, roles: ["Employee", "Manager"] },
    { name: "Pending Approvals", icon: <FaRegClock />, roles: ["Manager"] },
    // HR Specific Tabs
    { name: "Employees", icon: <FaUsers />, roles: ["HR Admin"] },
    { name: "Leave Types", icon: <FaListUl />, roles: ["HR Admin"] },
    { name: "Reports", icon: <FaThLarge />, roles: ["HR Admin"] },
    { name: "Audit Log", icon: <FaRegClock />, roles: ["HR Admin"] }
  ];

  const visibleTabs = tabs.filter(tab => tab.roles.includes(role));

  return (
    <>
      {/* Overlay (mobile only) */}
      {isOpen && (
        <div
          className="fixed inset-0 bg-black/40 z-30 md:hidden"
          onClick={() => setIsOpen(false)}
        />
      )}

      <aside
        className={`
          fixed top-0 left-0 z-40 h-screen w-64
          bg-[#0f172a] text-slate-400 p-5
          transition-transform duration-300
          ${isOpen ? "translate-x-0" : "-translate-x-full"}
          md:translate-x-0
        `}
      >
        {/* Header */}
        <div className="flex justify-between items-center mb-10">
          <h2 className="text-xl font-bold text-white">LeaveHub</h2>

          {/* Close button (mobile only) */}
          <FaChevronLeft
            className="md:hidden cursor-pointer"
            onClick={() => setIsOpen(false)}
          />
        </div>

        {/* Tabs */}
        <ul className="flex flex-col gap-2">
          {visibleTabs.map(tab => (
            <li
              key={tab.name}
              onClick={() => {
                setActiveTab(tab.name);
                setIsOpen(false); // ✅ NOW THIS WORKS
              }}
              className={`flex items-center gap-3 p-3 rounded-lg cursor-pointer transition-all ${
                activeTab === tab.name
                  ? "bg-blue-600/20 text-blue-400 border border-blue-500/20"
                  : "hover:bg-slate-800 hover:text-slate-200"
              }`}
            >
              {tab.icon}
              <span className="text-sm font-medium">{tab.name}</span>
            </li>
          ))}
        </ul>
      </aside>
    </>
  );
};

export default Sidebar;
