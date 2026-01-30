import React, { useState, useCallback } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { 
  FaSearch, FaCheck, FaTimes, 
  FaFilter, FaUserAlt 
} from "react-icons/fa";

// Ensure these paths match your folder structure
import SuccessModal from "../../ui/SuccessModal";
import FailureModal from "../../ui/FailureModal";

const initialApprovals = [
  { id: 1, initial: "JD", employee: "John Doe", dept: "Engineering", type: "Casual Leave", range: "Jan 10 - Jan 12", days: 3, avatarColor: "bg-blue-100 text-blue-600" },
  { id: 2, initial: "AS", employee: "Alice Smith", dept: "Marketing", type: "Sick Leave", range: "Jan 15 - Jan 16", days: 2, avatarColor: "bg-rose-100 text-rose-600" },
  { id: 3, initial: "BW", employee: "Bob White", dept: "Design", type: "Casual Leave", range: "Jan 20", days: 1, avatarColor: "bg-amber-100 text-amber-600" },
];

const ApprovalsView = () => {
  const [list, setList] = useState(initialApprovals);
  const [activeModal, setActiveModal] = useState(null); // 'success', 'error', or null
  const [modalContent, setModalContent] = useState({ title: "", message: "" });
  const [isProcessing, setIsProcessing] = useState(null); // Tracks ID of button being clicked

  const handleAction = useCallback(async (id, type) => {
    setIsProcessing(id);
    
    // Simulate network delay for realism
    await new Promise(res => setTimeout(res, 800));

    if (id === 3) { // Mock error for Bob White
      setModalContent({
        title: "Sync Error",
        message: "We couldn't reach the HR server. Please check your connection and try again."
      });
      setActiveModal('error');
      setIsProcessing(null);
      return;
    }

    const employee = list.find(item => item.id === id);
    const verb = type === 'approve' ? 'Approved' : 'Rejected';

    setModalContent({
      title: `Successfully ${verb}!`,
      message: `${employee.employee}'s request has been moved to the processed tab.`
    });

    setList(prev => prev.filter(item => item.id !== id));
    setActiveModal('success');
    setIsProcessing(null);
  }, [list]);

  // Animation Configs
  const containerVars = { animate: { transition: { staggerChildren: 0.06 } } };
  const itemVars = {
    initial: { opacity: 0, y: 15 },
    animate: { opacity: 1, y: 0, transition: { type: "spring", stiffness: 300, damping: 25 } },
    exit: { opacity: 0, scale: 0.95, transition: { duration: 0.2 } }
  };

  return (
    <motion.div variants={containerVars} initial="initial" animate="animate" className="p-4 max-w-5xl mx-auto space-y-8">
      
      {/* HEADER */}
      <header className="flex flex-col md:flex-row md:items-center justify-between gap-6">
        <div>
          <h1 className="text-3xl font-black text-slate-900 tracking-tight">Team Approvals</h1>
          <p className="text-xs font-bold text-slate-400 uppercase tracking-[0.2em] mt-1">Manage pending leave requests</p>
        </div>
        
        <div className="flex items-center gap-3">
          <div className="relative">
            <FaSearch className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-300" />
            <input 
              type="text" 
              placeholder="Filter by name..." 
              className="pl-11 pr-4 py-3 bg-slate-50 border-2 border-transparent focus:border-indigo-500/20 focus:bg-white rounded-2xl outline-none text-sm w-full md:w-64 transition-all" 
            />
          </div>
          <button className="p-4 bg-slate-50 text-slate-400 hover:text-indigo-600 rounded-2xl transition-colors">
            <FaFilter size={14} />
          </button>
        </div>
      </header>

      {/* TABS */}
      <nav className="flex gap-2 p-1.5 bg-slate-100/50 rounded-2xl w-fit">
        <button className="bg-white text-indigo-600 shadow-sm px-6 py-2.5 rounded-xl text-xs font-black uppercase tracking-wider flex items-center gap-3">
          Pending 
          <span className="bg-indigo-600 text-white px-2 py-0.5 rounded-lg text-[10px]">{list.length}</span>
        </button>
        <button className="text-slate-500 hover:text-slate-700 px-6 py-2.5 rounded-xl text-xs font-black uppercase tracking-wider transition-all">
          Processed
        </button>
      </nav>

      {/* REQUESTS LIST */}
      <section className="relative min-h-[400px]">
        <AnimatePresence mode="popLayout">
          {list.length > 0 ? (
            <div className="grid gap-4">
              {list.map((app) => (
                <motion.div
                  key={app.id}
                  variants={itemVars}
                  layout
                  className="bg-white border-2 border-slate-50 rounded-[2.5rem] p-6 shadow-sm hover:shadow-md transition-shadow flex flex-col lg:flex-row lg:items-center gap-8"
                >
                  {/* User Profile */}
                  <div className="flex items-center gap-4 min-w-[220px]">
                    <div className={`w-14 h-14 rounded-2xl ${app.avatarColor} flex items-center justify-center text-sm font-black shadow-inner`}>
                      {app.initial}
                    </div>
                    <div>
                      <h4 className="text-base font-black text-slate-900 leading-none">{app.employee}</h4>
                      <p className="text-[10px] font-bold text-slate-400 uppercase tracking-widest mt-1.5">{app.dept}</p>
                    </div>
                  </div>

                  {/* Info Grid */}
                  <div className="flex-1 grid grid-cols-2 md:grid-cols-3 gap-6 border-y lg:border-y-0 lg:border-x border-slate-100 py-6 lg:py-0 lg:px-10">
                    <DetailItem label="Leave Type" value={app.type} />
                    <DetailItem label="Schedule" value={app.range} />
                    <DetailItem label="Duration" value={`${app.days} Working Days`} />
                  </div>

                  {/* Actions */}
                  <div className="flex items-center gap-3">
                    <button 
                      disabled={isProcessing !== null}
                      onClick={() => handleAction(app.id, "approve")}
                      className="flex-1 lg:flex-none flex items-center justify-center gap-2 bg-slate-900 text-white px-7 py-4 rounded-2xl text-[10px] font-black uppercase tracking-widest hover:bg-emerald-600 disabled:opacity-50 transition-all active:scale-95"
                    >
                      {isProcessing === app.id ? <div className="w-3 h-3 border-2 border-white/30 border-t-white rounded-full animate-spin" /> : <FaCheck />} 
                      Approve
                    </button>
                    <button 
                      disabled={isProcessing !== null}
                      onClick={() => handleAction(app.id, "reject")}
                      className="flex-1 lg:flex-none flex items-center justify-center gap-2 border-2 border-slate-100 text-slate-400 px-7 py-4 rounded-2xl text-[10px] font-black uppercase tracking-widest hover:border-rose-100 hover:text-rose-500 disabled:opacity-50 transition-all active:scale-95"
                    >
                      <FaTimes /> Reject
                    </button>
                  </div>
                </motion.div>
              ))}
            </div>
          ) : (
            <motion.div 
              initial={{ opacity: 0 }} 
              animate={{ opacity: 1 }} 
              className="flex flex-col items-center justify-center py-20 bg-slate-50/50 rounded-[3rem] border-2 border-dashed border-slate-200"
            >
              <div className="w-16 h-16 bg-white rounded-full flex items-center justify-center shadow-sm mb-4">
                <FaUserAlt className="text-slate-200" size={24} />
              </div>
              <p className="text-slate-400 font-bold italic">Queue cleared. No pending approvals.</p>
            </motion.div>
          )}
        </AnimatePresence>
      </section>

      {/* MODAL SYSTEM */}
      <AnimatePresence>
        {activeModal === 'success' && (
          <SuccessModal 
            title={modalContent.title}
            message={modalContent.message}
            onClose={() => setActiveModal(null)}
          />
        )}
        {activeModal === 'error' && (
          <FailureModal 
            title={modalContent.title}
            message={modalContent.message}
            onClose={() => setActiveModal(null)}
          />
        )}
      </AnimatePresence>
    </motion.div>
  );
};

const DetailItem = ({ label, value }) => (
  <div className="space-y-1">
    <p className="text-[9px] font-black text-slate-300 uppercase tracking-widest">{label}</p>
    <p className="text-xs font-bold text-slate-700">{value}</p>
  </div>
);

export default ApprovalsView;