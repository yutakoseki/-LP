import React, { useRef } from "react";

interface DatePickerProps {
  label: string;
  name: string;
  required?: boolean;
  value: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  error?: string;
  className?: string;
  min?: string;
  max?: string;
}

const DatePicker: React.FC<DatePickerProps> = ({
  label,
  name,
  required = false,
  value,
  onChange,
  error,
  className = "",
  min,
  max,
}) => {
  const inputRef = useRef<HTMLInputElement>(null);

  // 日付のフォーマット（YYYY-MM-DD → YYYY年MM月DD日）
  const formatDisplayDate = (dateString: string) => {
    if (!dateString) return "";
    const date = new Date(dateString);
    const year = date.getFullYear();
    const month = date.getMonth() + 1;
    const day = date.getDate();
    return `${year}年${month}月${day}日`;
  };

  // 今日の日付を取得
  const today = new Date().toISOString().split("T")[0];

  // 100年前の日付を取得
  const hundredYearsAgo = new Date(new Date().getFullYear() - 100, 0, 1)
    .toISOString()
    .split("T")[0];

  const handleInputClick = () => {
    if (inputRef.current) {
      inputRef.current.showPicker();
    }
  };

  const handleDateChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    onChange(e);
  };

  return (
    <div className={`w-full ${className}`}>
      <label
        htmlFor={name}
        className="block text-sm font-medium text-gray-700 mb-2"
      >
        {label}
        {required && <span className="text-red-500 ml-1">*</span>}
      </label>

      <div className="relative">
        <input
          ref={inputRef}
          type="date"
          id={name}
          name={name}
          required={required}
          value={value}
          onChange={handleDateChange}
          min={min || hundredYearsAgo}
          max={max || today}
          className={`w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-primary-500 transition-colors duration-200 bg-white text-gray-900 cursor-pointer ${
            error
              ? "border-red-500 focus:ring-red-500 focus:border-red-500"
              : ""
          }`}
          style={{
            colorScheme: "light",
            WebkitAppearance: "none",
            MozAppearance: "textfield",
          }}
          onClick={handleInputClick}
        />

        {/* カレンダーアイコン */}
        <div className="absolute inset-y-0 right-0 flex items-center pr-3 pointer-events-none">
          <svg
            className="w-5 h-5 text-gray-400"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"
            />
          </svg>
        </div>
      </div>

      {error && <p className="mt-1 text-sm text-red-600">{error}</p>}

      {value && (
        <p className="mt-1 text-sm text-gray-600">
          選択された日付: {formatDisplayDate(value)}
        </p>
      )}

      <p className="mt-1 text-xs text-gray-500">
        カレンダーアイコンをクリックして日付を選択してください
      </p>
    </div>
  );
};

export default DatePicker;
