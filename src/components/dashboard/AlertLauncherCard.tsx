'use client';

import React from 'react';

const AlertLauncherCard = () => {
  return (
    <div className="bg-white rounded-xl shadow-md border border-[#2CB8C6] h-full">
      <div className="p-4 border-b border-gray-200">
        <h3 className="text-lg font-semibold text-gray-900">Lanceur d&apos;alertes</h3>
      </div>
      <div className="p-4">
        <div className="space-y-4">
          <button className="w-full bg-red-600 text-white px-4 py-3 rounded-lg hover:bg-red-700 transition-colors font-medium">
            Lancer une alerte d&apos;urgence
          </button>
          <button className="w-full bg-yellow-500 text-white px-4 py-3 rounded-lg hover:bg-yellow-600 transition-colors font-medium">
            Notification de risque modéré
          </button>
          <button className="w-full bg-blue-600 text-white px-4 py-3 rounded-lg hover:bg-blue-700 transition-colors font-medium">
            Information de routine
          </button>
        </div>
      </div>
    </div>
  );
};

export default AlertLauncherCard;
