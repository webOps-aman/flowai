import React from 'react';

const Button = ({ children, variant = 'primary', className = '' }) => {
  const baseClasses = "px-8 py-4 rounded-lg font-semibold text-lg transition";
  const variants = {
    primary: "bg-purple-600 hover:bg-purple-700 text-white",
    secondary: "border border-purple-500/50 hover:border-purple-400 text-white"
  };

  return (
    <button className={`${baseClasses} ${variants[variant]} ${className}`}>
      {children}
    </button>
  );
};

export default Button;