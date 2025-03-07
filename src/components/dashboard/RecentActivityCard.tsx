import React from 'react';

const RecentActivityCard = () => {
  const activities = [
    { nom: 'Mr. daniels', pseudonyme: '#129078', date: '11-02-25', status: 'en ligne' },
    { nom: 'Mr. tommy', pseudonyme: '#129079', date: '11-02-25', status: 'en ligne' },
    { nom: 'Mr. yangal', pseudonyme: '#129080', date: '11-02-25', status: 'inactive' },
    { nom: 'Mr. donny', pseudonyme: '#129081', date: '11-02-25', status: 'en cours' },
    { nom: 'Mr. mark', pseudonyme: '#129082', date: '11-02-25', status: 'Terminée' },
    { nom: 'Mr. john', pseudonyme: '#129082', date: '11-02-25', status: 'inactive' }
  ];

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'en ligne':
        return 'text-green-500';
      case 'inactive':
        return 'text-gray-600';
      case 'en cours':
        return 'text-[#2CB8C6]';
      case 'Terminée':
        return 'text-pink-500';
      default:
        return 'text-gray-600';
    }
  };

  const getStatusDot = (status: string) => {
    return status === 'en ligne' ? '●' : '○';
  };

  return (
    <div className="border border-[#2CB8C6] rounded-xl bg-white p-4 h-full flex flex-col">
      <div className="flex items-center gap-2 mb-3">
        <span className="text-gray-800">🌐</span>
        <h3 className="text-sm font-medium text-gray-800">liste des influenceurs</h3>
      </div>

      <div className="mb-3">
        <div className="relative">
          <input
            type="text"
            className="w-full bg-gray-50 rounded-lg px-3 py-1.5 text-sm text-gray-800"
            placeholder="Search..."
          />
          <div className="absolute right-3 top-1/2 transform -translate-y-1/2">
            🔍
          </div>
        </div>
      </div>

      <div className="flex-1 min-h-0">
        <h4 className="text-sm font-medium mb-2 text-gray-800">Activités récente</h4>
        <div className="overflow-y-auto h-[calc(100%-2rem)]">
          <table className="w-full text-sm">
            <thead className="text-gray-800 text-xs sticky top-0 bg-white">
              <tr>
                <th className="text-left font-medium py-1.5">Nom</th>
                <th className="text-left font-medium py-1.5">pseudonyme</th>
                <th className="text-left font-medium py-1.5">date du post</th>
                <th className="text-left font-medium py-1.5">status</th>
              </tr>
            </thead>
            <tbody>
              {activities.map((activity, index) => (
                <tr key={index} className="border-b border-gray-50 last:border-0">
                  <td className="py-1.5 text-gray-800">{activity.nom}</td>
                  <td className="py-1.5 text-gray-600">{activity.pseudonyme}</td>
                  <td className="py-1.5 text-gray-800">{activity.date}</td>
                  <td className={`py-1.5 ${getStatusColor(activity.status)} flex items-center gap-1`}>
                    {getStatusDot(activity.status)} {activity.status}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

      <div className="mt-3 text-right">
        <button className="text-[#2CB8C6] text-sm hover:underline">
          Afficher tous les influenceurs →
        </button>
      </div>
    </div>
  );
};

export default RecentActivityCard;
