import React from 'react';

const StatsCard = () => {
  const stats = {
    totalActions: 183749,
    totalUsers: 5855,
    totalInterventions: 565
  };

  const timeLabels = {
    totalActions: '30 JOURS',
    totalUsers: '7 JOURS',
    totalInterventions: '1 JOUR'
  };

  return (
    <div className="border border-[#2CB8C6] rounded-xl bg-white h-full">
      <div className="flex items-center justify-between p-4 border-b border-gray-100">
        <div className="flex items-center gap-2">
          <div className="relative w-5 h-5">
            <span className="text-red-500">⚠️</span>
          </div>
          <h3 className="text-sm font-medium text-gray-800">
            Gestion d'alertes & interventions
          </h3>
        </div>
        <div className="flex items-center gap-2">
          <button className="text-gray-400 hover:text-gray-600">•••</button>
        </div>
      </div>

      <div className="p-4">
        <div className="grid grid-cols-3 gap-4 mb-8">
          <div className="flex flex-col items-center">
            <div className="relative w-24 h-24">
              <svg className="w-full h-full -rotate-90" viewBox="0 0 36 36">
                <circle
                  cx="18"
                  cy="18"
                  r="16"
                  fill="none"
                  className="stroke-current text-gray-200"
                  strokeWidth="2"
                />
                <circle
                  cx="18"
                  cy="18"
                  r="16"
                  fill="none"
                  className="stroke-current text-[#2CB8C6]"
                  strokeWidth="2"
                  strokeDasharray="100"
                  strokeDashoffset="35"
                />
              </svg>
              <div className="absolute inset-0 flex items-center justify-center">
                <span className="text-lg font-medium">65%</span>
              </div>
            </div>
          </div>

          <div className="flex flex-col items-center">
            <div className="relative w-24 h-24">
              <svg className="w-full h-full -rotate-90" viewBox="0 0 36 36">
                <circle
                  cx="18"
                  cy="18"
                  r="16"
                  fill="none"
                  className="stroke-current text-gray-200"
                  strokeWidth="2"
                />
                <circle
                  cx="18"
                  cy="18"
                  r="16"
                  fill="none"
                  className="stroke-current text-[#FFD700]"
                  strokeWidth="2"
                  strokeDasharray="100"
                  strokeDashoffset="10"
                />
              </svg>
              <div className="absolute inset-0 flex items-center justify-center">
                <span className="text-lg font-medium">90%</span>
              </div>
            </div>
          </div>

          <div className="flex flex-col items-center">
            <div className="relative w-24 h-24">
              <svg className="w-full h-full -rotate-90" viewBox="0 0 36 36">
                <circle
                  cx="18"
                  cy="18"
                  r="16"
                  fill="none"
                  className="stroke-current text-gray-200"
                  strokeWidth="2"
                />
                <circle
                  cx="18"
                  cy="18"
                  r="16"
                  fill="none"
                  className="stroke-current text-gray-400"
                  strokeWidth="2"
                  strokeDasharray="100"
                  strokeDashoffset="65"
                />
              </svg>
              <div className="absolute inset-0 flex items-center justify-center">
                <span className="text-lg font-medium">35%</span>
              </div>
            </div>
          </div>
        </div>

        {/* User Icons */}
        <div className="mb-8">
          <div className="flex justify-center">
            {[...Array(10)].map((_, i) => (
              <div
                key={i}
                className={`w-4 h-8 ${i >= 4 ? 'text-gray-300' : 'text-gray-600'}`}
              >
                👤
              </div>
            ))}
          </div>
          <div className="flex justify-center mt-2">
            <div className="h-1 bg-gray-200 w-full max-w-[200px]">
              <div className="h-full bg-gray-400" style={{ width: '40%' }}></div>
            </div>
          </div>
          <div className="flex justify-center text-xs text-gray-500 mt-1 space-x-16">
            <span>21K</span>
            <span>157K</span>
            <span>543K</span>
          </div>
        </div>

        {/* Stats */}
        <div className="space-y-3">
          <div className="flex items-center justify-between">
            <span className="text-sm text-gray-600">{timeLabels.totalActions}</span>
            <span className="text-lg font-semibold">{stats.totalActions.toLocaleString()}</span>
          </div>
          <div className="flex items-center justify-between">
            <span className="text-sm text-gray-600">{timeLabels.totalUsers}</span>
            <span className="text-lg font-semibold">{stats.totalUsers.toLocaleString()}</span>
          </div>
          <div className="flex items-center justify-between">
            <span className="text-sm text-gray-600">{timeLabels.totalInterventions}</span>
            <span className="text-lg font-semibold">{stats.totalInterventions.toLocaleString()}</span>
          </div>
        </div>

        <button className="w-full text-sm text-[#2CB8C6] hover:underline py-2 text-center mt-6">
          Afficher tous les Interventions →
        </button>
      </div>
    </div>
  );
};

export default StatsCard;
