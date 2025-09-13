import React from 'react';
import { Calendar as ReactCalendar, CalendarProps as ReactCalendarProps } from 'react-calendar';
import 'react-calendar/dist/Calendar.css';

type Value = ReactCalendarProps['value'];
type OnChangeFunc = ReactCalendarProps['onChange'];

interface CalendarProps {
    value: Value;
    onDateChange: OnChangeFunc;
}

const Calendar: React.FC<CalendarProps> = ({ onDateChange, value }) => {
    return (
        <div className="calendar-container">
            <ReactCalendar
                onChange={onDateChange}
                value={value}
                selectRange={Array.isArray(value)}
            />
        </div>
    );
};

export default Calendar;