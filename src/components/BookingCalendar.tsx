import React, { useState } from 'react';
import { useLanguage } from '../contexts/LanguageContext';

interface BookingCalendarProps {
  pricePerNight: number;
  minimumStay: number;
  checkIn: string;
  checkOut: string;
  maxGuests: number;
  available: boolean;
  blackoutDates?: string[]; // Array of dates in YYYY-MM-DD format
}

const BookingCalendar: React.FC<BookingCalendarProps> = ({
  pricePerNight,
  minimumStay,
  checkIn,
  checkOut,
  maxGuests,
  available,
  blackoutDates = []
}) => {
  const { language, t } = useLanguage();
  const [selectedStartDate, setSelectedStartDate] = useState<Date | null>(null);
  const [selectedEndDate, setSelectedEndDate] = useState<Date | null>(null);
  const [guests, setGuests] = useState<number>(1);
  const [isSelectingEndDate, setIsSelectingEndDate] = useState<boolean>(false);
  
  // Current calendar view state
  const today = new Date();
  const [currentViewMonth, setCurrentViewMonth] = useState<number>(today.getMonth());
  const [currentViewYear, setCurrentViewYear] = useState<number>(today.getFullYear());

  // Helper function to format date as YYYY-MM-DD
  const formatDateForComparison = (date: Date): string => {
    return date.toISOString().split('T')[0];
  };

  // Check if a date is blacked out
  const isDateBlackedOut = (date: Date): boolean => {
    const dateString = formatDateForComparison(date);
    return blackoutDates.includes(dateString);
  };

  // Generate calendar days for a specific month
  const generateCalendarDays = (month: number, year: number) => {
    const firstDay = new Date(year, month, 1);
    const lastDay = new Date(year, month + 1, 0);
    const daysInMonth = lastDay.getDate();
    const startingWeekday = firstDay.getDay();

    const days = [];
    
    // Add empty slots for days before the first day of the month
    for (let i = 0; i < startingWeekday; i++) {
      days.push(null);
    }
    
    // Add all days of the month
    for (let day = 1; day <= daysInMonth; day++) {
      days.push(new Date(year, month, day));
    }
    
    return days;
  };

  const currentCalendarDays = generateCalendarDays(currentViewMonth, currentViewYear);

  // Navigation functions
  const goToPreviousMonth = () => {
    if (currentViewMonth === 0) {
      setCurrentViewMonth(11);
      setCurrentViewYear(currentViewYear - 1);
    } else {
      setCurrentViewMonth(currentViewMonth - 1);
    }
  };

  const goToNextMonth = () => {
    if (currentViewMonth === 11) {
      setCurrentViewMonth(0);
      setCurrentViewYear(currentViewYear + 1);
    } else {
      setCurrentViewMonth(currentViewMonth + 1);
    }
  };

  // Check if we can go to previous month (can't go before current month)
  const canGoPrevious = () => {
    const currentDate = new Date();
    const currentMonth = currentDate.getMonth();
    const currentYear = currentDate.getFullYear();
    
    if (currentViewYear > currentYear) return true;
    if (currentViewYear === currentYear && currentViewMonth > currentMonth) return true;
    return false;
  };

  const handleDateClick = (date: Date) => {
    if (date < today || isDateBlackedOut(date)) return; // Can't select past dates or blacked out dates

    if (!selectedStartDate || (selectedStartDate && selectedEndDate)) {
      // Starting new selection
      setSelectedStartDate(date);
      setSelectedEndDate(null);
      setIsSelectingEndDate(true);
    } else if (isSelectingEndDate) {
      // Selecting end date
      if (date < selectedStartDate) {
        // If clicked date is before start date, make it the new start date
        setSelectedStartDate(date);
        setSelectedEndDate(null);
      } else {
        // Check if there are any blacked out dates in the range
        const hasBlackoutInRange = hasBlackoutDateInRange(selectedStartDate, date);
        if (hasBlackoutInRange) {
          // Reset selection if there's a blackout date in range
          setSelectedStartDate(date);
          setSelectedEndDate(null);
          return;
        }
        
        // Valid end date selection
        const daysDifference = Math.ceil((date.getTime() - selectedStartDate.getTime()) / (1000 * 60 * 60 * 24));
        if (daysDifference >= minimumStay) {
          setSelectedEndDate(date);
          setIsSelectingEndDate(false);
        }
      }
    }
  };

  // Check if there are blackout dates between start and end date
  const hasBlackoutDateInRange = (startDate: Date, endDate: Date): boolean => {
    const currentDate = new Date(startDate);
    currentDate.setDate(currentDate.getDate() + 1); // Start checking from the day after startDate
    
    while (currentDate < endDate) {
      if (isDateBlackedOut(currentDate)) {
        return true;
      }
      currentDate.setDate(currentDate.getDate() + 1);
    }
    return false;
  };

  const isDateInRange = (date: Date) => {
    if (!selectedStartDate || !selectedEndDate) return false;
    return date >= selectedStartDate && date <= selectedEndDate;
  };

  const isDateSelected = (date: Date) => {
    return (selectedStartDate && date.toDateString() === selectedStartDate.toDateString()) ||
           (selectedEndDate && date.toDateString() === selectedEndDate.toDateString());
  };

  const calculateTotal = () => {
    if (!selectedStartDate || !selectedEndDate) return 0;
    const nights = Math.ceil((selectedEndDate.getTime() - selectedStartDate.getTime()) / (1000 * 60 * 60 * 24));
    return nights * pricePerNight;
  };

  const calculateNights = () => {
    if (!selectedStartDate || !selectedEndDate) return 0;
    return Math.ceil((selectedEndDate.getTime() - selectedStartDate.getTime()) / (1000 * 60 * 60 * 24));
  };

  const formatDate = (date: Date) => {
    return date.toLocaleDateString(language === 'en' ? 'en-US' : 'es-ES', {
      month: 'short',
      day: 'numeric'
    });
  };

  const monthNames = {
    en: ['January', 'February', 'March', 'April', 'May', 'June',
         'July', 'August', 'September', 'October', 'November', 'December'],
    es: ['Enero', 'Febrero', 'Marzo', 'Abril', 'Mayo', 'Junio',
         'Julio', 'Agosto', 'Septiembre', 'Octubre', 'Noviembre', 'Diciembre']
  };

  const weekDays = {
    en: ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'],
    es: ['Dom', 'Lun', 'Mar', 'Mié', 'Jue', 'Vie', 'Sáb']
  };

  const renderCalendar = (days: (Date | null)[], month: number, year: number) => (
    <div className="calendar-month">
      <div className="calendar-header">
        <button 
          className="nav-button prev" 
          onClick={goToPreviousMonth}
          disabled={!canGoPrevious()}
          aria-label={language === 'en' ? 'Previous month' : 'Mes anterior'}
        >
          ‹
        </button>
        <h4 className="calendar-month-title">
          {monthNames[language][month]} {year}
        </h4>
        <button 
          className="nav-button next" 
          onClick={goToNextMonth}
          aria-label={language === 'en' ? 'Next month' : 'Mes siguiente'}
        >
          ›
        </button>
      </div>
      <div className="calendar-weekdays">
        {weekDays[language].map((day, index) => (
          <div key={index} className="calendar-weekday">
            {day}
          </div>
        ))}
      </div>
      <div className="calendar-grid">
        {days.map((date, index) => (
          <div
            key={index}
            className={`calendar-day ${
              !date ? 'empty' : 
              date < today ? 'disabled' :
              isDateBlackedOut(date) ? 'blackout' :
              isDateSelected(date) ? 'selected' :
              isDateInRange(date) ? 'in-range' :
              'available'
            }`}
            onClick={() => date && handleDateClick(date)}
            title={date && isDateBlackedOut(date) ? 
              (language === 'en' ? 'Not available' : 'No disponible') : 
              undefined
            }
          >
            {date ? date.getDate() : ''}
          </div>
        ))}
      </div>
    </div>
  );

  return (
    <div className="booking-calendar-card">
      {/* Price Header */}
      <div className="price-section">
        <span className="price">
          {t('currency')}{pricePerNight}
        </span>
        <span className="price-unit">{t('pricePerNight')}</span>
      </div>

      {/* Date Selection Status */}
      <div className="date-selection-status">
        {!selectedStartDate ? (
          <p className="selection-instruction">
            {language === 'en' ? 'Select your arrival date' : 'Selecciona tu fecha de llegada'}
          </p>
        ) : !selectedEndDate ? (
          <p className="selection-instruction">
            {language === 'en' ? 'Select your departure date' : 'Selecciona tu fecha de salida'}
          </p>
        ) : (
          <div className="selected-dates">
            <div className="date-range">
              <span className="date">{formatDate(selectedStartDate)}</span>
              <span className="arrow">→</span>
              <span className="date">{formatDate(selectedEndDate)}</span>
            </div>
            <p className="nights-count">
              {calculateNights()} {t('nights')}
            </p>
          </div>
        )}
      </div>

      {/* Calendar */}
      <div className="calendar-container">
        {renderCalendar(currentCalendarDays, currentViewMonth, currentViewYear)}
      </div>

      {/* Guest Selection */}
      <div className="guest-selection">
        <label htmlFor="guests">{t('guests')}:</label>
        <select
          id="guests"
          value={guests}
          onChange={(e) => setGuests(Number(e.target.value))}
          className="guest-select"
        >
          {Array.from({ length: maxGuests }, (_, i) => i + 1).map(num => (
            <option key={num} value={num}>
              {num} {num === 1 ? (language === 'en' ? 'guest' : 'huésped') : (language === 'en' ? 'guests' : 'huéspedes')}
            </option>
          ))}
        </select>
      </div>

      {/* Booking Details */}
      <div className="booking-details">
        <div className="detail-row">
          <span>{t('minimumStay')}:</span>
          <span>{minimumStay} {t('nights')}</span>
        </div>
        <div className="detail-row">
          <span>{t('checkIn')}:</span>
          <span>{checkIn}</span>
        </div>
        <div className="detail-row">
          <span>{t('checkOut')}:</span>
          <span>{checkOut}</span>
        </div>
      </div>

      {/* Total Price */}
      {selectedStartDate && selectedEndDate && (
        <div className="total-section">
          <div className="total-breakdown">
            <div className="breakdown-row">
              <span>{t('currency')}{pricePerNight} × {calculateNights()} {t('nights')}</span>
              <span>{t('currency')}{calculateTotal()}</span>
            </div>
          </div>
          <div className="total-price">
            <strong>
              {language === 'en' ? 'Total: ' : 'Total: '}
              {t('currency')}{calculateTotal()}
            </strong>
          </div>
        </div>
      )}

      {/* Book Button */}
      <button 
        className={`book-button ${!available ? 'unavailable' : selectedStartDate && selectedEndDate ? 'ready' : 'incomplete'}`}
        disabled={!available || !selectedStartDate || !selectedEndDate}
      >
        {!available ? 
          (language === 'en' ? 'Currently Unavailable' : 'No Disponible Actualmente') :
          !selectedStartDate || !selectedEndDate ?
          t('bookNow') :
          (language === 'en' ? 'Reserve Now' : 'Reservar Ahora')
        }
      </button>
    </div>
  );
};

export default BookingCalendar;
