// import { FaChevronLeft, FaSignOutAlt , FaThLarge , FaPlus,FaListUl, FaCalendarAlt, FaBell, FaRegClock, FaUsers } from "react-icons/fa";

// const Sidebar = ({
//   activeTab,
//   setActiveTab,
//   role = "Employee",
//   isOpen,
//   setIsOpen,
//   onLogout
// }) => {
//   // Tabs array remains the same as your logic...
//   const tabs = [
//     { name: "Dashboard", icon: <FaThLarge />, roles: ["Employee", "Manager"] },
//     { name: "Apply Leave", icon: <FaPlus />, roles: ["Employee", "Manager"] },
//     { name: "My Leaves", icon: <FaListUl />, roles: ["Employee", "Manager"] },
//     { name: "Calendar", icon: <FaCalendarAlt />, roles: ["Employee"] },
//     { name: "Team Calendar", icon: <FaCalendarAlt />, roles: ["Manager"] },
//     { name: "Notifications", icon: <FaBell />, roles: ["Employee", "Manager"] },
//     { name: "Pending Approvals", icon: <FaRegClock />, roles: ["Manager"] },
//     { name: "Employees", icon: <FaUsers />, roles: ["HR Admin"] },
//     { name: "Leave Types", icon: <FaListUl />, roles: ["HR Admin"] },
//     { name: "Reports", icon: <FaThLarge />, roles: ["HR Admin"] },
//     { name: "Audit Log", icon: <FaRegClock />, roles: ["HR Admin"] },
//   ];

//   const visibleTabs = tabs.filter((tab) => tab.roles.includes(role));

//   return (
//     <>
//       {/* Overlay */}
//       {isOpen && (
//         <div className="fixed inset-0 bg-slate-900/60 backdrop-blur-sm z-30 md:hidden" onClick={() => setIsOpen(false)} />
//       )}

//       <aside className={`
//         fixed top-0 left-0 z-40 h-screen w-64
//         bg-[#0F172A] text-slate-400 p-6
//         border-r border-slate-800 shadow-2xl
//         transition-all duration-300 ease-[cubic-bezier(0.4,0,0.2,1)]
//         flex flex-col
//         ${isOpen ? "translate-x-0" : "-translate-x-full"} md:translate-x-0
//       `}>
        
//         {/* Brand/Logo Area */}
//         <div className="flex items-center gap-3 px-2 mb-10">
//           <div className="w-8 h-8 rounded-lg bg-indigo-600 flex items-center justify-center shadow-lg shadow-indigo-500/20">
//             <div className="w-4 h-4 bg-white rounded-sm rotate-45" />
//           </div>
//           <h1 className="text-white font-black tracking-tight text-xl italic">LMS<span className="text-indigo-500">.</span></h1>
//         </div>

//         {/* User Profile Card */}
//         <div className="bg-slate-800/40 rounded-2xl p-4 mb-8 border border-slate-700/50 relative overflow-hidden group">
//             <div className="flex items-center gap-3 relative z-10">
//                 <div className="w-10 h-10 rounded-full bg-gradient-to-tr from-amber-500 to-orange-400 border-2 border-slate-700 shadow-inner flex-shrink-0" />
//                 <div className="overflow-hidden">
//                     <p className="text-sm font-bold text-white truncate">Alex Rivera</p>
//                     <p className="text-[10px] font-bold text-slate-500 uppercase tracking-tighter">{role}</p>
//                 </div>
//             </div>
//             {/* Mobile Close Button */}
//             <button onClick={() => setIsOpen(false)} className="md:hidden absolute right-2 top-1/2 -translate-y-1/2 p-2">
//                 <FaChevronLeft className="text-xs" />
//             </button>
//         </div>

//         {/* Navigation Section */}
//         <div className="flex-1">
//             <p className="px-4 text-[10px] font-black text-slate-600 uppercase tracking-[0.2em] mb-4">Main Menu</p>
//             <ul className="space-y-1">
//             {visibleTabs.map((tab) => {
//                 const isActive = activeTab === tab.name;
//                 return (
//                 <li
//                     key={tab.name}
//                     onClick={() => { setActiveTab(tab.name); setIsOpen(false); }}
//                     className={`
//                     group relative flex items-center gap-3 px-4 py-3 rounded-xl cursor-pointer
//                     transition-all duration-200 overflow-hidden
//                     ${isActive ? "bg-indigo-600 text-white shadow-lg shadow-indigo-600/20" : "hover:bg-slate-800/60 hover:text-slate-200"}
//                     `}
//                 >
//                     <span className={`text-lg transition-transform duration-300 ${isActive ? "scale-110" : "group-hover:scale-110"}`}>
//                         {tab.icon}
//                     </span>
//                     <span className="text-sm font-bold tracking-tight">{tab.name}</span>
                    
//                     {/* Subtle Glow for Active Tab */}
//                     {isActive && (
//                         <div className="absolute inset-0 bg-gradient-to-r from-white/10 to-transparent pointer-events-none" />
//                     )}
//                 </li>
//                 );
//             })}
//             </ul>
//         </div>

//         {/* Logout Section */}
//         <div className="pt-6 border-t border-slate-800">
//             <button className="flex items-center gap-3 px-4 py-3 w-full rounded-xl hover:bg-rose-500/10 hover:text-rose-500 transition-colors group">
//                 <FaSignOutAlt className="text-lg group-hover:-translate-x-1 transition-transform" />
//                 <span className="text-sm font-bold">Sign Out</span>
//             </button>
//         </div>
//       </aside>
//     </>
//   );
// };

// export default Sidebar;


import React from "react";
import { 
  FaChevronLeft, FaSignOutAlt, FaThLarge, FaPlus, 
  FaListUl, FaCalendarAlt, FaBell, FaRegClock, FaUsers 
} from "react-icons/fa";

const Sidebar = ({
  activeTab,
  setActiveTab,
  role = "Employee",
  isOpen,
  setIsOpen,
  onLogout
}) => {
  const tabs = [
    { name: "Dashboard", icon: <FaThLarge />, roles: ["Employee", "Manager"] },
    { name: "Apply Leave", icon: <FaPlus />, roles: ["Employee", "Manager"] },
    { name: "My Leaves", icon: <FaListUl />, roles: ["Employee", "Manager"] },
    { name: "Calendar", icon: <FaCalendarAlt />, roles: ["Employee"] },
    { name: "Team Calendar", icon: <FaCalendarAlt />, roles: ["Manager"] },
    { name: "Notifications", icon: <FaBell />, roles: ["Employee", "Manager"] },
    { name: "Pending Approvals", icon: <FaRegClock />, roles: ["Manager"] },
    { name: "Employees", icon: <FaUsers />, roles: ["HR Admin"] },
    { name: "Leave Types", icon: <FaListUl />, roles: ["HR Admin"] },
    { name: "Reports", icon: <FaThLarge />, roles: ["HR Admin"] },
    { name: "Audit Log", icon: <FaRegClock />, roles: ["HR Admin"] },
  ];

  // Logic: Ensure we only show tabs authorized for the current role
  const visibleTabs = tabs.filter((tab) => tab.roles.includes(role));

  return (
    <>
      {/* Overlay: Fixed z-index to ensure it's behind the sidebar but above content */}
      {isOpen && (
        <div 
          className="fixed inset-0 bg-slate-900/60 backdrop-blur-sm z-[35] md:hidden" 
          onClick={() => setIsOpen(false)} 
        />
      )}

      <aside className={`
        fixed top-0 left-0 z-40 h-screen w-64
        bg-[#0F172A] text-slate-400 p-6
        border-r border-slate-800 shadow-2xl
        transition-transform duration-300 ease-in-out
        flex flex-col
        ${isOpen ? "translate-x-0" : "-translate-x-full"} md:translate-x-0
      `}>
        
        {/* Brand Area */}
        <div className="flex items-center justify-between mb-8 px-2 shrink-0">
          <div className="flex items-center gap-3">
            {/* <div className="w-8 h-8 rounded-lg bg-indigo-600 flex items-center justify-center shadow-lg shadow-indigo-500/20"> */}
              {/* <div className="w-4 h-4 bg-white rounded-sm rotate-45" /> */} 
            {/* </div> */}
            <h1 className="text-white font-black tracking-tight text-xl italic">Leave Management System<span className="text-indigo-500">.</span></h1>
          </div>
          <button onClick={() => setIsOpen(false)} className="md:hidden text-slate-500 hover:text-white transition-colors">
            <FaChevronLeft />
          </button>
        </div>

        {/* User Profile Card */}
        <div className="bg-slate-800/40 rounded-2xl p-4 mb-6 border border-slate-700/50 shrink-0">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-full bg-gradient-to-tr from-amber-500 to-orange-400 border-2 border-slate-700 shadow-inner shrink-0" />
            <div className="overflow-hidden">
              <p className="text-sm font-bold text-white truncate">Alex Rivera</p>
              <p className="text-[10px] font-bold text-slate-500 uppercase tracking-tighter">{role}</p>
            </div>
          </div>
        </div>

        {/* Navigation Section: Added 'overflow-y-auto' for Manager role density */}
        <div className="flex-1 overflow-y-auto pr-2 custom-sidebar-scroll">
          <p className="px-4 text-[10px] font-black text-slate-600 uppercase tracking-[0.2em] mb-4">Main Menu</p>
          <ul className="space-y-1.5">
            {visibleTabs.map((tab) => {
              const isActive = activeTab === tab.name;
              return (
                <li
                  key={tab.name}
                  onClick={() => {
                    setActiveTab(tab.name);
                    // Only close sidebar on mobile
                    if (window.innerWidth < 768) setIsOpen(false);
                  }}
                  className={`
                    group relative flex items-center gap-3 px-4 py-3 rounded-xl cursor-pointer
                    transition-all duration-200 select-none
                    ${isActive 
                      ? "bg-indigo-600 text-white shadow-lg shadow-indigo-600/20" 
                      : "hover:bg-slate-800/60 hover:text-slate-200"
                    }
                  `}
                >
                  <span className={`text-lg transition-transform ${isActive ? "scale-110" : "group-hover:scale-110"}`}>
                    {tab.icon}
                  </span>
                  <span className="text-sm font-bold tracking-tight">{tab.name}</span>
                  
                  {isActive && (
                    <div className="absolute inset-0 bg-linear-to-r from-white/10 to-transparent pointer-events-none" />
                  )}
                </li>
              );
            })}
          </ul>
        </div>

        {/* Logout Section */}
        <div className="pt-4 mt-4 border-t border-slate-800 shrink-0">
          <button 
            onClick={onLogout}
            className="flex items-center gap-3 px-4 py-3 w-full rounded-xl hover:bg-rose-500/10 hover:text-rose-500 transition-colors group"
          >
            <FaSignOutAlt className="text-lg group-hover:-translate-x-1 transition-transform" />
            <span className="text-sm font-bold">Sign Out</span>
          </button>
        </div>
      </aside>

      {/* Internal CSS for clean scrolling */}
      <style jsx>{`
        .custom-sidebar-scroll::-webkit-scrollbar {
          width: 4px;
        }
        .custom-sidebar-scroll::-webkit-scrollbar-track {
          background: transparent;
        }
        .custom-sidebar-scroll::-webkit-scrollbar-thumb {
          background: #1e293b;
          border-radius: 10px;
        }
      `}</style>
    </>
  );
};

export default Sidebar;