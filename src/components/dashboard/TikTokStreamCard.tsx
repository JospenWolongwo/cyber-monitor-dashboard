import React from 'react';

const TikTokStreamCard = () => {
  const currentDate = new Date();
  const daysInMonth = new Date(currentDate.getFullYear(), currentDate.getMonth() + 1, 0).getDate();
  
  // Generate calendar days with proper padding for first day of month
  const firstDayOfMonth = new Date(currentDate.getFullYear(), currentDate.getMonth(), 1).getDay();
  const paddingDays = Array(firstDayOfMonth - 1).fill(null); // -1 because Monday is 1
  const days = Array.from({ length: daysInMonth }, (_, i) => i + 1);
  const allDays = [...paddingDays, ...days];
  
  // Timeline data
  const timelineData = [
    { color: '#FF6B00', height: '30%' },
    { color: '#2CB8C6', height: '85%', active: true, label: '52%' },
    { color: '#4A5568', height: '45%' },
  ];

  return (
    <div className="border border-[#2CB8C6] rounded-xl bg-white h-full">
      <div className="flex items-center justify-between p-4 border-b border-gray-100">
        <div className="flex items-center gap-2">
          <span className="text-[#2CB8C6]">📊</span>
          <h3 className="text-sm font-medium text-gray-800">
            Flux en direct des direct TikTok
          </h3>
        </div>
        <button className="text-gray-400">•••</button>
      </div>

      <div className="p-4">
        <div className="flex mb-6">
          {/* Timeline visualization */}
          <div className="w-1/2 relative h-[240px]">
            <div className="absolute inset-0 flex flex-col">
              {/* Horizontal scale lines */}
              {Array.from({ length: 11 }).map((_, i) => (
                <div 
                  key={i} 
                  className="flex-1 border-t border-gray-100" 
                />
              ))}
            </div>
            
            {/* Timeline bars */}
            <div className="absolute inset-x-8 inset-y-4 flex justify-between items-end">
              {timelineData.map((item, index) => (
                <div
                  key={index}
                  className="relative w-6"
                  style={{ height: '100%' }}
                >
                  <div
                    className="absolute bottom-0 w-full rounded-t-sm"
                    style={{ 
                      height: item.height,
                      backgroundColor: item.color
                    }}
                  />
                  {item.active && (
                    <div 
                      className="absolute w-full text-center text-[#2CB8C6] text-sm font-medium"
                      style={{
                        bottom: `calc(${item.height} + 8px)`
                      }}
                    >
                      {item.label}
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>

          {/* Calendar */}
          <div className="w-1/2 pl-8">
            <h4 className="text-base mb-4 text-gray-700">March</h4>
            <div className="grid grid-cols-7 text-xs leading-loose">
              <div className="text-red-500 font-medium">MO</div>
              <div className="text-gray-500 font-medium">TU</div>
              <div className="text-gray-500 font-medium">WE</div>
              <div className="text-gray-500 font-medium">TH</div>
              <div className="text-gray-500 font-medium">FR</div>
              <div className="text-gray-500 font-medium">SA</div>
              <div className="text-gray-500 font-medium">SU</div>
              
              {allDays.map((day, index) => (
                <div
                  key={index}
                  className={`text-center ${
                    !day ? 'invisible' :
                    day === currentDate.getDate() ? 'text-[#2CB8C6]' :
                    [4, 11, 18, 25].includes(day) ? 'text-red-500' :
                    'text-gray-700'
                  }`}
                >
                  {day}
                </div>
              ))}
            </div>
          </div>
        </div>

        <div className="relative">
          <input
            type="text"
            placeholder="Rechercher un stream..."
            className="w-full px-3 py-2 bg-gray-50 border border-gray-200 rounded-lg text-gray-900 placeholder-gray-500 focus:outline-none focus:border-[#2CB8C6] focus:ring-1 focus:ring-[#2CB8C6]"
          />
          <button className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400">
            🔍
          </button>
        </div>

        <button className="w-full text-sm text-[#2CB8C6] hover:underline py-2 text-center mt-4">
          Afficher Le rapport →
        </button>
      </div>
    </div>
  );
};

export default TikTokStreamCard;
