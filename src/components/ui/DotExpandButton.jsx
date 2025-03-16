import React from "react";
import { FiArrowRight } from "react-icons/fi";

const DotExpandButton = ({ children, onClick, className = "" }) => {
  return (
    <button 
      onClick={onClick}
      className={`group flex h-10 items-center gap-3 rounded-full bg-white/95 text-[#303444] pl-4 pr-5 transition-all duration-300 ease-in-out hover:bg-[#3967a9] hover:pl-2 hover:text-white active:bg-[#3967a9]/80 ${className}`}
    >
      <span className="rounded-full bg-[#3967a9] p-1 text-sm transition-colors duration-300 group-hover:bg-[#d4f1f9]">
        <FiArrowRight className="-translate-x-[200%] text-[0px] text-white transition-all duration-300 group-hover:translate-x-0 group-hover:text-lg group-hover:text-[#3967a9] group-active:-rotate-45" />
      </span>
      <span className="font-medium">{children || "Hover this link"}</span>
    </button>
  );
};

export default DotExpandButton; 