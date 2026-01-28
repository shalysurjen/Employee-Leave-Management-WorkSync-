import React from "react"; // ✅ required for JSX
import { FaCalendarAlt, FaCloudUploadAlt } from "react-icons/fa"; // ✅ import both icons

const ApplyLeaveView = () => (
  <div className="max-w-3xl bg-white p-8 rounded-2xl border border-slate-200 shadow-sm animate-in slide-in-from-bottom-4">
    <div className="space-y-6">
      <div>
        <label className="block text-sm font-bold mb-2 text-slate-700">Leave Type</label>
        <select className="w-full p-3 bg-slate-50 border border-slate-200 rounded-xl outline-none focus:ring-2 focus:ring-blue-500/20 focus:border-blue-500">
          <option>Select leave type</option>
          <option>Casual Leave</option>
          <option>Sick Leave</option>
        </select>
      </div>

      <div className="grid grid-cols-2 gap-4">
        <div>
          <label className="block text-sm font-bold mb-2 text-slate-700">From Date</label>
          <div className="relative">
            <FaCalendarAlt className="absolute left-3 top-4 text-slate-400" />
            <input type="date" className="w-full p-3 pl-10 bg-slate-50 border border-slate-200 rounded-xl" />
          </div>
        </div>
        <div>
          <label className="block text-sm font-bold mb-2 text-slate-700">To Date</label>
          <div className="relative">
            <FaCalendarAlt className="absolute left-3 top-4 text-slate-400" />
            <input type="date" className="w-full p-3 pl-10 bg-slate-50 border border-slate-200 rounded-xl" />
          </div>
        </div>
      </div>

      <div>
        <label className="block text-sm font-bold mb-2 text-slate-700">Reason</label>
        <textarea
          rows="4"
          placeholder="Please provide a reason for your leave request..."
          className="w-full p-3 bg-slate-50 border border-slate-200 rounded-xl outline-none focus:ring-2 focus:ring-blue-500/20"
        ></textarea>
      </div>

      <div>
        <label className="block text-sm font-bold mb-2 text-slate-700">Supporting Document (Optional)</label>
        <div className="border-2 border-dashed border-slate-200 rounded-2xl p-8 flex flex-col items-center justify-center bg-slate-50 text-slate-400 hover:bg-slate-100 cursor-pointer transition-all">
          <FaCloudUploadAlt className="text-3xl mb-2 text-slate-500" />
          <p className="text-sm font-medium">Click to upload or drag and drop</p>
        </div>
      </div>

      <button className="w-full bg-blue-600 text-white py-4 rounded-xl font-bold hover:bg-blue-700 shadow-lg shadow-blue-200">
        Submit Leave Request
      </button>
    </div>
  </div>
);

export default ApplyLeaveView;
