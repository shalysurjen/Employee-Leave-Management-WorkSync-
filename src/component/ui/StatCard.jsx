import { useEffect, useState } from "react";

const StatCard = ({ title, value, icon, period, used, total }) => {
  const [progress, setProgress] = useState(0);

  const percent =
    typeof used === "number" && typeof total === "number"
      ? Math.round((used / total) * 100)
      : null;

  // 1. Bigger Math: Increased radius and viewBox
  const size = 110; // SVG Width/Height
  const strokeWidth = 10; // Thicker stroke looks more premium
  const radius = (size - strokeWidth) / 2;
  const circumference = 2 * Math.PI * radius;
  const offset = circumference - (progress / 100) * circumference;

  const getStrokeColor = () => {
    if (title.toLowerCase().includes("casual")) return "#f97316"; 
    if (title.toLowerCase().includes("sick")) return "#2563eb"; 
    return "#64748b";
  };

  useEffect(() => {
    if (percent !== null) {
      const timer = setTimeout(() => setProgress(percent), 200);
      return () => clearTimeout(timer);
    }
  }, [percent]);

  return (
    <div className="bg-white border border-slate-100 rounded-[2rem] shadow-sm p-7 flex flex-col justify-between h-full hover:shadow-lg transition-all duration-300 group">
      <div className="flex justify-between items-center gap-4">
        <div className="space-y-1">
          <p className="text-xs font-bold text-slate-400 uppercase tracking-widest">{title}</p>
          <h3 className="text-4xl font-black text-slate-900 tracking-tight">{value}</h3>
          
          {percent !== null && (
             <div className="pt-4">
               <span className={`text-[10px] font-bold px-2 py-1 rounded-full bg-slate-50 text-slate-500`}>
                 {progress}% Utilized
               </span>
             </div>
          )}
        </div>

        {/* 🔵 BIG Circular Progress Indicator */}
        {percent !== null ? (
          <div className="relative flex items-center justify-center shrink-0">
            {/* Soft Glow Effect */}
            <div className="absolute inset-0 rounded-full blur-xl opacity-20" style={{ backgroundColor: getStrokeColor() }} />
            
            <svg width={size} height={size} className="transform -rotate-90 relative z-10">
              {/* Background Track */}
              <circle
                cx={size / 2}
                cy={size / 2}
                r={radius}
                stroke="#f1f5f9"
                strokeWidth={strokeWidth}
                fill="transparent"
              />
              {/* Animated Progress Fill */}
              <circle
                cx={size / 2}
                cy={size / 2}
                r={radius}
                stroke={getStrokeColor()}
                strokeWidth={strokeWidth}
                fill="transparent"
                strokeDasharray={circumference}
                style={{ 
                  strokeDashoffset: offset,
                  transition: "stroke-dashoffset 1.2s cubic-bezier(0.4, 0, 0.2, 1)" 
                }}
                strokeLinecap="round"
              />
            </svg>
            
            {/* Center Label */}
            <div className="absolute inset-0 flex flex-col items-center justify-center z-20">
              <span className="text-lg font-black text-slate-800 tracking-tighter">
                {used}<span className=" font-bold mx-0.5 text-black">/</span>{total}
              </span>
            </div>
          </div>
        ) : (
          <div className="p-5 rounded-2xl bg-blue-50 text-blue-600 text-3xl group-hover:scale-110 transition-transform">
            {icon}
          </div>
        )}
      </div>

      {/* Footer Text */}
      <div className="mt-8 flex items-center gap-2">
        <div className="h-1 w-1 rounded-full bg-slate-300" />
        <p className="text-[10px] font-bold text-slate-300 uppercase tracking-[0.2em]">
          {period}
        </p>
      </div>
    </div>
  );
};

export default StatCard;