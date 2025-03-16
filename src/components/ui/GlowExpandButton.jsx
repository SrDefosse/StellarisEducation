import React from "react";
import { FiArrowRight } from "react-icons/fi";

const GlowExpandButton = ({ children, onClick, className = "", primary = false }) => {
  const baseClasses = primary 
    ? "bg-[#3967a9] text-white hover:bg-[#3967a9]/90" 
    : "bg-white text-[#303444] hover:bg-white/90";
  
  return (
    <button 
      onClick={onClick}
      className={`group flex h-10 items-center gap-3 rounded-full ${baseClasses} pl-4 pr-5 transition-all duration-300 ease-in-out hover:pl-3 ${className}`}
    >
      <span className={`rounded-full ${primary ? 'bg-[#d4f1f9]' : 'bg-[#ffdab9]'} p-1.5 text-sm transition-all duration-300 group-hover:bg-white group-hover:rotate-[360deg]`}>
        <FiArrowRight className={`${primary ? 'text-[#3967a9]' : 'text-[#303444]'} transform transition-all duration-300 group-hover:translate-x-1 group-hover:scale-110`} />
      </span>
      <span className="font-medium">{children || "Explore Now"}</span>
    </button>
  );
};

export default GlowExpandButton; 