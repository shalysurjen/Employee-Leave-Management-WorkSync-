import React from "react";
import { motion } from "framer-motion";
import { FaCheckCircle } from "react-icons/fa";

const SuccessModal = ({ 
  title = "Submission Successful!", 
  message = "Your request has been sent for approval.", 
  buttonText = "Back to Dashboard",
  onClose 
}) => {
  return (
    <motion.div 
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="absolute inset-0 z-50 flex items-center justify-center bg-white/80 backdrop-blur-sm rounded-[2.5rem]"
    >
      <motion.div 
        initial={{ scale: 0.8, opacity: 0, y: 20 }}
        animate={{ scale: 1, opacity: 1, y: 0 }}
        transition={{ type: "spring", damping: 25, stiffness: 300 }}
        className="text-center px-8"
      >
        {/* Animated Check Icon */}
        <motion.div 
          initial={{ scale: 0 }}
          animate={{ scale: 1 }}
          transition={{ delay: 0.2, type: "spring", stiffness: 200 }}
          className="w-20 h-20 bg-emerald-100 rounded-full flex items-center justify-center mx-auto mb-6"
        >
          <FaCheckCircle className="text-emerald-500 text-4xl" />
        </motion.div>

        {/* Text Content */}
        <h2 className="text-2xl font-black text-slate-900 mb-2 leading-tight">
          {title}
        </h2>
        <p className="text-sm font-medium text-slate-500 mb-8 leading-relaxed">
          {message}
        </p>

        {/* Action Button */}
        <button 
          onClick={onClose}
          className="w-full py-4 bg-slate-900 text-white rounded-2xl font-black text-[10px] uppercase tracking-[0.2em] shadow-xl shadow-slate-200 active:scale-[0.95] transition-all"
        >
          {buttonText}
        </button>
      </motion.div>
    </motion.div>
  );
};

export default SuccessModal;