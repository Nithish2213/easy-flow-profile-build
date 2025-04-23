
import React from 'react';

function Button({ children, onClick, variant = "primary", icon, fullWidth = false, className = "" }) {
  const baseClasses = "flex items-center justify-center gap-2 font-medium rounded-md py-3 px-4 transition-colors";
  
  const variantClasses = {
    primary: "bg-green-500 hover:bg-green-600 text-white",
    secondary: "bg-gray-400 hover:bg-gray-500 text-white",
    outline: "border border-gray-300 text-gray-700 hover:bg-gray-50",
  };
  
  const widthClass = fullWidth ? "w-full" : "";
  
  return (
    <button
      onClick={onClick}
      className={`${baseClasses} ${variantClasses[variant]} ${widthClass} ${className}`}
    >
      {icon && icon}
      {children}
    </button>
  );
}

export default Button;
