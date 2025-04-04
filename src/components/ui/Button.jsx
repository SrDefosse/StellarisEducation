const PrimaryButton = ({ children, className = '', variant = 'default', ...props }) => {
  const variants = {
    default: 'bg-[#303444] hover:bg-[#3967a9] text-white focus:ring-[#3967a9]',
    white: 'bg-white text-[#3B6FB5] hover:bg-white/90 focus:ring-white',
    amber: 'bg-amber-500 hover:bg-amber-600 text-white focus:ring-amber-500'
  };

  return (
    <button 
      className={`inline-flex items-center justify-center px-8 py-4 text-lg font-medium 
        ${variants[variant]} rounded-xl transition-all duration-300 
        transform hover:-translate-y-1 hover:shadow-lg 
        focus:outline-none focus:ring-2 focus:ring-offset-2 ${className}`}
      {...props}
    >
      {children}
    </button>
  );
};

const SecondaryButton = ({ children, className = '', ...props }) => {
  return (
    <button 
      className={`w-full py-3 px-4 rounded-xl font-medium transition-all duration-300 
        bg-white border-2 border-[#303444] text-[#303444] 
        hover:bg-[#303444] hover:text-white
        focus:outline-none focus:ring-2 focus:ring-[#303444] focus:ring-offset-2 ${className}`}
      {...props}
    >
      {children}
    </button>
  );
};

export { PrimaryButton, SecondaryButton }; 