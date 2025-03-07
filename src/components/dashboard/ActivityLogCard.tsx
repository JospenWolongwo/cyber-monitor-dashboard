import React from 'react';

const ActivityLogCard = () => {
  return (
    <div className="border border-[#2CB8C6] rounded-xl bg-white h-full">
      <div className="flex items-center justify-between p-4">
        <div className="flex items-center gap-3">
          <div className="text-[#2CB8C6]">
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <rect x="3" y="3" width="18" height="18" rx="2" stroke="currentColor" strokeWidth="2"/>
              <path d="M7 9L17 9" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
              <path d="M7 13L17 13" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
              <path d="M7 17L13 17" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
            </svg>
          </div>
          <h3 className="text-sm font-medium text-gray-800">
            Journal d'activité et suivi des décisions prises
          </h3>
        </div>
        <button className="text-gray-400">•••</button>
      </div>

      <div className="p-4">
        <div className="flex items-center justify-center h-[200px] text-gray-500 text-sm">
          Aucune données disponible
        </div>
      </div>
    </div>
  );
};

export default ActivityLogCard;
