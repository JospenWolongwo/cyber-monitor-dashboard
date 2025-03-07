import React from 'react';

const CalendarCard = () => {
  const days = ['MON', 'TUE', 'WED', 'THU', 'FRI', 'SAT', 'SUN'];
  const currentMonth = 'March';
  
  // Generate calendar days for March 2025
  const getDaysInMonth = () => {
    const days = [];
    // First day of March 2025 is a Saturday (offset 5)
    for (let i = 0; i < 5; i++) {
      days.push(null); // Empty cells for offset
    }
    for (let i = 1; i <= 31; i++) {
      days.push(i);
    }
    return days;
  };

  return (
    <div className="border border-[#2CB8C6] rounded-xl bg-white h-full">
      <div className="flex items-center justify-between p-4">
        <div className="flex items-center gap-3">
          <div className="text-[#2CB8C6]">
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <rect x="3" y="4" width="18" height="18" rx="2" stroke="currentColor" strokeWidth="2"/>
              <path d="M3 10H21" stroke="currentColor" strokeWidth="2"/>
              <path d="M16 2V6" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
              <path d="M8 2V6" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
            </svg>
          </div>
          <h3 className="text-sm font-medium text-gray-800">
            Analyse avancée
          </h3>
        </div>
        <button className="text-gray-400">•••</button>
      </div>

      <div className="p-4">
        <div className="relative mb-4">
          <input
            type="text"
            placeholder="Rechercher un événement..."
            className="w-full px-3 py-2 bg-gray-50 border border-gray-200 rounded-lg text-gray-900 placeholder-gray-500 focus:outline-none focus:border-[#2CB8C6] focus:ring-1 focus:ring-[#2CB8C6]"
          />
          <div className="absolute right-3 top-1/2 -translate-y-1/2">
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" className="text-gray-400">
              <path d="M21 21L16.65 16.65M19 11C19 15.4183 15.4183 19 11 19C6.58172 19 3 15.4183 3 11C3 6.58172 6.58172 3 11 3C15.4183 3 19 6.58172 19 11Z" strokeWidth="2" strokeLinecap="round"/>
            </svg>
          </div>
        </div>

        <div className="text-xl font-medium text-gray-800 mb-4">
          {currentMonth}
        </div>

        <div className="grid grid-cols-7 gap-1">
          {/* Day headers */}
          {days.map((day, index) => (
            <div 
              key={`header-${index}`} 
              className={`text-center text-xs font-medium ${index === 0 ? 'text-red-500' : 'text-gray-800'}`}
            >
              {day}
            </div>
          ))}
          
          {/* Calendar days */}
          {getDaysInMonth().map((day, index) => (
            <div 
              key={`day-${index}`} 
              className={`
                text-center py-1 text-sm
                ${!day ? 'text-transparent' : ''}
                ${day && (index + 1) % 7 === 1 ? 'text-red-500' : 'text-gray-600'}
              `}
            >
              {day || '.'}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default CalendarCard;
