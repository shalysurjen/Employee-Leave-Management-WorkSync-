import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import { FaChevronLeft, FaPaperclip, FaSun, FaMoon } from "react-icons/fa";
import SuccessModal from "../../ui/SuccessModal";// Ensure the path is correct

const LeaveApplicationForm = () => {
  const [step, setStep] = useState(1);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [formData, setFormData] = useState({
    leaveType: "",
    fromDate: null,
    toDate: null,
    reason: "",
    isHalfDay: false,
    halfDayPeriod: "First Half",
  });

  const leaveTypes = [
    { id: "casual", label: "Casual", balance: 5, color: "bg-orange-500" },
    { id: "sick", label: "Sick", balance: 8, color: "bg-blue-500" },
    { id: "earned", label: "Earned", balance: 12, color: "bg-indigo-500" },
  ];

  const calculateDuration = () => {
    if (!formData.fromDate || !formData.toDate) return 0;
    const diffDays = Math.ceil(Math.abs(formData.toDate - formData.fromDate) / (1000 * 60 * 60 * 24)) + 1;
    return formData.isHalfDay ? diffDays - 0.5 : diffDays;
  };

  const handleFinalSubmit = async () => {
    setIsLoading(true);
    // Simulate API Delay
    await new Promise((resolve) => setTimeout(resolve, 1500));
    setIsLoading(false);
    setIsSubmitted(true);
  };

  return (
    <div className="flex-1 h-full min-h-[calc(100vh-104px)] flex items-center justify-center overflow-hidden bg-[#F8FAFC] p-4">
      <style>{`
        .react-datepicker-wrapper { width: 100%; }
        .react-datepicker { border: none; font-family: inherit; border-radius: 1rem; box-shadow: 0 10px 25px rgba(0,0,0,0.1); border: 1px solid #f1f5f9; }
        .react-datepicker__header { background: white; border-bottom: 1px solid #f1f5f9; }
        .react-datepicker__day--selected { background: #4f46e5 !important; border-radius: 0.5rem !important; }
      `}</style>

      {/* Main Container - Relative is required for absolute Modal positioning */}
      <div className="w-full max-w-100 h-fit bg-white rounded-[2.5rem] shadow-[0_20px_50px_rgba(0,0,0,0.04)] border border-slate-100 flex flex-col flex-shrink-0 relative overflow-hidden">
        
        {/* SUCCESS MODAL OVERLAY */}
        <AnimatePresence>
          {isSubmitted && (
            <SuccessModal 
              title="Request Sent!"
              message="Your leave application has been submitted and is waiting for manager approval."
              onClose={() => {
                setIsSubmitted(false);
                setStep(1); // Reset form
              }}
            />
          )}
        </AnimatePresence>

        {/* Header */}
        <div className="px-6 pt-5 flex items-center justify-between">
          {step > 1 ? (
            <button onClick={() => setStep(step - 1)} className="p-2 hover:bg-slate-50 rounded-xl transition-all">
              <FaChevronLeft className="text-slate-400 text-xs" />
            </button>
          ) : <div className="w-8 h-8" />}
          <div className="flex gap-1.5">
            {[1, 2, 3].map((s) => (
              <div key={s} className={`h-1 rounded-full transition-all duration-500 ${step === s ? "w-6 bg-indigo-600" : "w-1.5 bg-slate-100"}`} />
            ))}
          </div>
          <div className="w-8" />
        </div>

        {/* Form Content */}
        <div className="px-7 py-5">
          <AnimatePresence mode="wait">
            {step === 1 && (
              <motion.div key="s1" initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: -10 }} className="space-y-3">
                <div className="text-center mb-4"><h2 className="text-lg font-black text-slate-900 tracking-tight">Select Leave Type</h2></div>
                {leaveTypes.map((type) => (
                  <button key={type.id} onClick={() => setFormData({ ...formData, leaveType: type.id })}
                    className={`w-full flex items-center justify-between p-3.5 rounded-2xl border-2 transition-all ${formData.leaveType === type.id ? "border-indigo-600 bg-indigo-50/30" : "border-slate-50 hover:border-slate-200 bg-slate-50/30"}`}>
                    <div className="flex items-center gap-3">
                      <div className={`w-2 h-2 rounded-full ${type.color}`} />
                      <span className="font-bold text-slate-700 text-sm">{type.label}</span>
                    </div>
                    <span className="text-[9px] font-black text-slate-400 uppercase tracking-widest">{type.balance} Days Left</span>
                  </button>
                ))}
              </motion.div>
            )}

            {step === 2 && (
              <motion.div key="s2" initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: -10 }} className="space-y-4">
                <div className="text-center mb-2"><h2 className="text-lg font-black text-slate-900 tracking-tight">Timeline</h2></div>
                <div className="flex gap-2">
                  <div className="flex-1 space-y-1">
                    <label className="text-[9px] font-black text-slate-400 ml-1 uppercase">Start</label>
                    <DatePicker selected={formData.fromDate} onChange={(date) => setFormData({ ...formData, fromDate: date })}
                      className="w-full bg-slate-50 border-none rounded-xl p-3 text-xs font-bold text-slate-700 outline-none ring-1 ring-slate-100 focus:ring-2 focus:ring-indigo-500/20 transition-all" placeholderText="Select Date" />
                  </div>
                  <div className="flex-1 space-y-1">
                    <label className="text-[9px] font-black text-slate-400 ml-1 uppercase">End</label>
                    <DatePicker selected={formData.toDate} onChange={(date) => setFormData({ ...formData, toDate: date })} minDate={formData.fromDate}
                      className="w-full bg-slate-50 border-none rounded-xl p-3 text-xs font-bold text-slate-700 outline-none ring-1 ring-slate-100 focus:ring-2 focus:ring-indigo-500/20 transition-all" placeholderText="Select Date" />
                  </div>
                </div>
                <div className="bg-slate-50/50 p-3.5 rounded-2xl flex items-center justify-between border border-slate-100">
                  <div className="flex items-center gap-3">
                    <div className={`p-2 rounded-lg ${formData.isHalfDay ? "bg-indigo-600 text-white" : "bg-white text-slate-300"} transition-all shadow-sm`}>
                      {formData.halfDayPeriod === "First Half" ? <FaSun className="text-xs" /> : <FaMoon className="text-xs" />}
                    </div>
                    <span className="text-[11px] font-bold text-slate-700">Apply for Half Day</span>
                  </div>
                  <button onClick={() => setFormData({ ...formData, isHalfDay: !formData.isHalfDay })}
                    className={`w-9 h-5 rounded-full relative transition-all ${formData.isHalfDay ? "bg-indigo-600" : "bg-slate-200"}`}>
                    <div className={`absolute top-0.5 w-4 h-4 bg-white rounded-full transition-all ${formData.isHalfDay ? "translate-x-4" : "translate-x-0"}`} />
                  </button>
                </div>
                <div className="p-4 bg-slate-900 rounded-2xl text-white flex justify-between items-center">
                  <p className="text-[10px] font-black uppercase tracking-widest opacity-40">Total Days</p>
                  <p className="text-xl font-black">{calculateDuration()}</p>
                </div>
              </motion.div>
            )}

            {step === 3 && (
              <motion.div key="s3" initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: -10 }} className="space-y-3">
                <div className="text-center"><h2 className="text-lg font-black text-slate-900 tracking-tight">Final Details</h2></div>
                <textarea placeholder="Reason for leave..." onChange={(e) => setFormData({ ...formData, reason: e.target.value })}
                  className="w-full bg-slate-50 border-none rounded-xl p-4 text-xs font-medium text-slate-700 outline-none ring-1 ring-slate-100 focus:ring-2 focus:ring-indigo-500/20 transition-all min-h-25 resize-none" />
                <div className="border-2 border-dashed border-slate-100 rounded-xl p-4 flex flex-col items-center gap-1 hover:bg-slate-50 transition-all cursor-pointer">
                  <FaPaperclip className="text-slate-300 text-xs" />
                  {/* <span className="text-[10px] font-bold text-slate-400 uppercase tracking-widest">Add Attachment</span> */}
                 <span> <input type="file" className="text-[10px] font-bold text-slate-400 uppercase tracking-widest placeholder=Add Attachment"/></span>
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </div>

        {/* Footer Action */}
        <div className="px-7 pb-6">
          <button
            disabled={(step === 1 && !formData.leaveType) || isLoading}
            onClick={step === 3 ? handleFinalSubmit : () => setStep(step + 1)}
            className={`w-full py-4 rounded-xl font-black text-[10px] uppercase tracking-[0.2em] transition-all active:scale-[0.97] flex justify-center items-center ${
              step === 3 ? "bg-emerald-500 shadow-emerald-100" : "bg-indigo-600 shadow-indigo-100 shadow-xl"
            } text-white disabled:opacity-30`}
          >
            {isLoading ? (
              <motion.div animate={{ rotate: 360 }} transition={{ repeat: Infinity, duration: 1, ease: "linear" }}
                className="w-4 h-4 border-2 border-white/30 border-t-white rounded-full" />
            ) : (
              step === 3 ? "Submit Application" : "Continue"
            )}
          </button>
        </div>
      </div>
    </div>
  );
};

export default LeaveApplicationForm;