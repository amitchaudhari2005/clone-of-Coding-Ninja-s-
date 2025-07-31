import React from 'react';

const Input = ({ label, type = 'text', value, onChange, placeholder, className = '' }) => {
  return (
    <div className={`mb-4 ${className}`}>
      {label && <label className="block mb-1 text-sm text-gray-600">{label}</label>}
      <input
        type={type}
        value={value}
        onChange={onChange}
        placeholder={placeholder}
        className="w-full border border-gray-300 rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-red-400"
      />
    </div>
  );
};

export default Input;
