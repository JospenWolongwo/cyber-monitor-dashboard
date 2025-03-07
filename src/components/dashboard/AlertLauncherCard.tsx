import React from 'react';

const AlertLauncherCard = () => {
  return (
    <div className="border border-[#2CB8C6] rounded-xl bg-white h-full">
      <div className="flex items-center justify-between p-4 border-b border-gray-100">
        <div className="flex items-center gap-2">
          <div className="relative">
            <span className="text-red-500 text-xl">⚠️</span>
            <div className="absolute -top-1 -right-1 w-3 h-3 bg-red-500 rounded-full border-2 border-white"></div>
          </div>
          <h3 className="text-sm font-medium text-gray-800">
            Lanceur d'alerte
          </h3>
        </div>
        <div className="flex items-center gap-2">
          <button className="text-gray-400 hover:text-gray-600">•••</button>
        </div>
      </div>

      <div className="p-4">
        <div className="space-y-4">
          {/* Empty state or placeholder for alerts */}
          <div className="h-[240px] flex items-center justify-center bg-gray-50 rounded-lg">
            <div className="text-center">
              <span className="text-4xl">🔔</span>
              <p className="text-sm text-gray-500 mt-2">Aucune alerte active</p>
            </div>
          </div>
        </div>

        <button className="w-full text-sm text-[#2CB8C6] hover:underline py-2 text-center mt-4">
          Afficher toutes les alertes →
        </button>
      </div>
    </div>
  );
};

export default AlertLauncherCard;
