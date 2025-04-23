
import React from 'react';

function TextArea({ 
  label, 
  placeholder, 
  value, 
  onChange,
  rows = 4,
  required = false,
  className = ""
}) {
  return (
    <div className={`mb-4 ${className}`}>
      {label && <label className="block text-gray-700 mb-2">{label}</label>}
      <textarea
        placeholder={placeholder}
        value={value}
        onChange={onChange}
        rows={rows}
        required={required}
        className="w-full border border-gray-300 rounded-md py-2 px-4 focus:outline-none focus:ring-2 focus:ring-green-500"
      />
    </div>
  );
}

export default TextArea;
