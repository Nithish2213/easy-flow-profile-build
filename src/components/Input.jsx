
import React from 'react';

function Input({ 
  label, 
  type = "text", 
  placeholder, 
  value, 
  onChange,
  icon,
  prefix,
  readOnly = false,
  required = false,
  className = ""
}) {
  return (
    <div className={`mb-4 ${className}`}>
      {label && <label className="block text-gray-700 text-sm font-medium mb-2">{label}</label>}
      <div className="relative">
        {prefix && (
          <div className="absolute inset-y-0 left-0 flex items-center px-3 bg-gray-50 border-r border-gray-200 rounded-l-md">
            {prefix}
          </div>
        )}
        <input
          type={type}
          placeholder={placeholder}
          value={value}
          onChange={onChange}
          readOnly={readOnly}
          required={required}
          className={`w-full bg-white text-gray-900 border border-gray-200 rounded-md py-2.5 px-4 focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-transparent transition-colors ${
            prefix ? 'pl-16' : ''
          } ${
            icon ? 'pr-10' : ''
          }`}
        />
        {icon && (
          <div className="absolute inset-y-0 right-0 flex items-center pr-3 pointer-events-none text-gray-500">
            {icon}
          </div>
        )}
      </div>
    </div>
  );
}

export default Input;
