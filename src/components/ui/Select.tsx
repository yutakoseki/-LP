import React from "react";

interface SelectProps {
  label: string;
  name: string;
  placeholder?: string;
  required?: boolean;
  value: string;
  onChange: (e: React.ChangeEvent<HTMLSelectElement>) => void;
  error?: string;
  className?: string;
  options: { value: string; label: string }[];
}

const Select: React.FC<SelectProps> = ({
  label,
  name,
  placeholder,
  required = false,
  value,
  onChange,
  error,
  className = "",
  options,
}) => {
  return (
    <div className={`w-full ${className}`}>
      <label
        htmlFor={name}
        className="block text-sm font-medium text-gray-700 mb-2"
      >
        {label}
        {required && <span className="text-red-500 ml-1">*</span>}
      </label>
      <select
        id={name}
        name={name}
        required={required}
        value={value}
        onChange={onChange}
        className={`w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-primary-500 transition-colors duration-200 bg-white text-gray-900 ${
          error ? "border-red-500 focus:ring-red-500 focus:border-red-500" : ""
        }`}
      >
        {placeholder && (
          <option value="" disabled>
            {placeholder}
          </option>
        )}
        {options.map((option) => (
          <option key={option.value} value={option.value}>
            {option.label}
          </option>
        ))}
      </select>
      {error && <p className="mt-1 text-sm text-red-600">{error}</p>}
    </div>
  );
};

export default Select;
