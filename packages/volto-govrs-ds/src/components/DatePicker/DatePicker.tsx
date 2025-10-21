
import React, { useRef, useEffect, useState } from 'react'
import flatpickr from 'flatpickr'
import 'flatpickr/dist/flatpickr.min.css'


interface FilterSectionProps {
  setDateRange: (dates: Date[]) => void
  dateRange: Date[] | null
  mode?: "single" | "range" | "multiple"
  enableTime?: boolean
  noCalendar?: boolean
  maxDate?: string | Date
  minDate?: string | Date
  placeholder?: string
}


const FilterSection: React.FC<FilterSectionProps> = ({
  setDateRange,
  dateRange,
  mode = "range",
  enableTime = false,
  noCalendar = false,
  maxDate,
  minDate,
  placeholder = 'Selecione o período'
}) => {
  const dateInputRef = useRef<HTMLInputElement>(null);
  const flatpickrRef = useRef<any>(null);
  const [clearDate, setClearDate] = useState(false);

  useEffect(() => {
    if (dateInputRef.current) {
      const options: any = {
        mode: mode,
        enableTime: enableTime,
        noCalendar: noCalendar,
        dateFormat: enableTime ? (noCalendar ? 'H:i' : 'd/m/Y H:i') : 'd/m/Y',
        time_24hr: true,
        onChange: (selectedDates: Date[]) => {
          setDateRange([...selectedDates]);
          setClearDate(true);
        }
      };

      if (maxDate !== undefined) {
        options.maxDate = maxDate;
      }

      if (minDate !== undefined) {
        options.minDate = minDate;
      }

      const fp = flatpickr(dateInputRef.current, options);
      flatpickrRef.current = fp;
      return () => {
        fp.destroy();
      };
    }
  }, [mode, enableTime, noCalendar, maxDate, minDate, setDateRange]);

  const handleClearDate = () => {
    if (flatpickrRef.current) {
      flatpickrRef.current.clear();
      setDateRange([]);
      setClearDate(false);
    }
  };

  return (
    <div className="date-picker-wrapper">
      <input
        ref={dateInputRef}
        type="text"
        placeholder={placeholder}
        className="date-picker-input"
        readOnly
      />
      <div className="date-picker-icons">
        <svg
          className="calendar-icon"
          viewBox="0 0 24 24"
          width="20"
          height="20"
        >
          <path fill="#1A7235" d="M19 4h-1V2h-2v2H8V2H6v2H5c-1.11 0-1.99.9-1.99 2L3 20c0 1.1.89 2 2 2h14c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 16H5V10h14v10zM9 14H7v-2h2v2zm4 0h-2v-2h2v2zm4 0h-2v-2h2v2zm-8 4H7v-2h2v2zm4 0h-2v-2h2v2zm4 0h-2v-2h2v2z"/>
        </svg>
        {clearDate && (
          <button
            type="button"
            onClick={handleClearDate}
            className="clear-button"
            aria-label="Clear date"
          >
            <svg
              viewBox="0 0 24 24"
              width="20"
              height="20"
            >
              <path fill="#1A7235" d="M19 6.41L17.59 5 12 10.59 6.41 5 5 6.41 10.59 12 5 17.59 6.41 19 12 13.41 17.59 19 19 17.59 13.41 12 19 6.41z"/>
            </svg>
          </button>
        )}
      </div>
    </div>
  )
}

export default FilterSection
