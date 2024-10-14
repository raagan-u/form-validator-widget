import React from "react";
import InputComponent from "./InputComponent";

interface DateInputProps {
  minDate?: string;       // Format: YYYY-MM-DD
  maxDate?: string;       // Format: YYYY-MM-DD
  value: string;          // Controlled value from parent
  label?: string;         // Custom label for input
  disabledDays?: (date: Date) => boolean; // Function to disable specific days
  onDateChange: (date: string) => void;  // Callback to handle date change
  name: string;
}

const DateInput = ({
  minDate,
  maxDate,
  value,
  label = "Pick a Date",
  disabledDays,
  onDateChange,
  name,
  ...props
}: DateInputProps) => {

  const handleDateChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const newDate = e.target.value;
    const dateObj = new Date(newDate);

    if (disabledDays && disabledDays(dateObj)) {
      alert("This day is disabled. Please select another day.");
      return;
    }

    onDateChange(newDate);
  };

  return (
    <div className="date-picker">
      <label htmlFor="date">{label}:</label>
      <InputComponent
		name={name}
        type="date"
        value={value}
        onChange={handleDateChange}
        min={minDate}
        max={maxDate}
		{...props}
      />
    </div>
  );
};

export default DateInput;
