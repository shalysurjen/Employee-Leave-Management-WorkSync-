import React, { useState } from "react";
import { motion } from "framer-motion";
import { FaUserShield, FaLock, FaArrowRight, FaFingerprint, FaQuoteLeft } from "react-icons/fa";

const LoginPage = ({ onLogin }) => {
  const [email, setEmail] = useState("employee@company.com");
  const [password, setPassword] = useState("password123");
  const [isLoading, setIsLoading] = useState(false);

  const handleLogin = (e) => {
    e.preventDefault();
    setIsLoading(true);
    
    setTimeout(() => {
      // Logic correctly handles three distinct roles
      let role = "Employee";
      if (email === "admin@company.com") {
        role = "HR Admin";
      } else if (email === "manager@company.com") {
        role = "Manager";
      }
      
      onLogin(role);
    }, 1500);
  };

  return (
    <div className="min-h-screen flex bg-[#F8FAFC] font-sans antialiased">
      {/* LEFT SIDE: Branding & Professional Quote */}
      <div className="hidden lg:flex w-1/2 bg-slate-900 relative overflow-hidden items-center justify-center p-16">
        <div className="absolute inset-0 opacity-30">
          <div className="absolute top-[-10%] left-[-10%] w-[600px] h-[600px] bg-indigo-600 rounded-full blur-[140px]" />
          <div className="absolute bottom-[-10%] right-[-10%] w-[500px] h-[500px] bg-blue-500 rounded-full blur-[120px]" />
        </div>
        
        <div className="relative z-10 max-w-lg">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="flex items-center gap-4 mb-12"
          >
            <div className="w-14 h-14 bg-white rounded-2xl flex items-center justify-center shadow-2xl">
              <FaFingerprint className="text-slate-900 text-3xl" />
            </div>
            <div className="flex flex-col">
              <span className="text-2xl font-black text-white tracking-tighter leading-none">COMPANY</span>
              <span className="text-sm font-bold text-indigo-400 uppercase tracking-[0.3em]">Portal</span>
            </div>
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
          >
            <h2 className="text-5xl font-black text-white leading-tight mb-8 tracking-tight">
              Leave Management <br/> System
            </h2>
            
            <div className="relative pt-8 border-t border-white/10">
              <FaQuoteLeft className="text-indigo-500 text-3xl mb-4 opacity-50" />
              <p className="text-slate-300 text-xl font-medium italic leading-relaxed">
                "Rest is not idleness, and to lie sometimes on the grass under trees on a summer's day... is by no means a waste of time."
              </p>
              <p className="mt-4 text-slate-500 font-bold uppercase tracking-widest text-[10px]">— Corporate Wellness Initiative</p>
            </div>
          </motion.div>
        </div>

        <div className="absolute bottom-10 left-16 text-[10px] font-bold text-slate-500 uppercase tracking-widest">
          Internal Use Only • © 2026 Company Inc.
        </div>
      </div>

      {/* RIGHT SIDE: Login Form */}
      <div className="w-full lg:w-1/2 flex items-center justify-center p-8 md:p-16">
        <motion.div 
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          className="w-full max-w-md"
        >
          <div className="mb-12 lg:hidden flex items-center gap-3">
             <div className="w-10 h-10 bg-slate-900 rounded-xl flex items-center justify-center">
              <FaFingerprint className="text-white text-lg" />
            </div>
            <span className="text-xl font-black text-slate-900 tracking-tighter uppercase">Leave System</span>
          </div>

          <header className="mb-10">
            <h3 className="text-4xl font-black text-slate-900 tracking-tight mb-2">Sign In</h3>
            <p className="text-slate-500 font-medium text-sm">Welcome to your employee portal.</p>
          </header>

          <form onSubmit={handleLogin} className="space-y-6">
            <div className="space-y-2">
              <label className="text-[11px] font-black uppercase tracking-[0.2em] text-slate-400 ml-1">Company Email</label>
              <div className="relative group">
                <FaUserShield className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400 group-focus-within:text-indigo-600 transition-colors" />
                <input 
                  type="email" 
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="w-full pl-12 pr-4 py-4 bg-white border border-slate-200 rounded-2xl outline-none focus:ring-4 focus:ring-indigo-50 focus:border-indigo-600 transition-all font-bold text-slate-700 shadow-sm"
                  placeholder="employee@company.com"
                  required
                />
              </div>
            </div>

            <div className="space-y-2">
              <div className="flex justify-between items-center ml-1">
                <label className="text-[11px] font-black uppercase tracking-[0.2em] text-slate-400">Password</label>
                <button type="button" className="text-[10px] font-black uppercase tracking-widest text-indigo-600 hover:text-indigo-700 transition-colors">Reset Access</button>
              </div>
              <div className="relative group">
                <FaLock className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400 group-focus-within:text-indigo-600 transition-colors" />
                <input 
                  type="password" 
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  className="w-full pl-12 pr-4 py-4 bg-white border border-slate-200 rounded-2xl outline-none focus:ring-4 focus:ring-indigo-50 focus:border-indigo-600 transition-all font-bold text-slate-700 shadow-sm"
                  placeholder="••••••••"
                  required
                />
              </div>
            </div>

            <button 
              disabled={isLoading}
              className="w-full bg-slate-900 text-white py-5 rounded-2xl font-black uppercase tracking-widest text-xs flex items-center justify-center gap-3 hover:bg-indigo-600 transition-all shadow-xl shadow-slate-200 active:scale-[0.98] disabled:opacity-70 group"
            >
              {isLoading ? (
                <div className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full animate-spin" />
              ) : (
                <>Login <FaArrowRight className="group-hover:translate-x-1 transition-transform" /></>
              )}
            </button>
          </form>

          <footer className="mt-12 pt-8 border-t border-slate-100 flex items-center justify-between text-[10px] font-black text-slate-400 uppercase tracking-widest">
            <span>IT Support: ext 404</span>
            <span className="text-slate-200">|</span>
            <a href="#" className="hover:text-slate-900">Privacy Policy</a>
          </footer>
        </motion.div>
      </div>
    </div>
  );
};

export default LoginPage;