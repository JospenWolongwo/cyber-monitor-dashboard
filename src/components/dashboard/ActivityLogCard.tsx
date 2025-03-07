'use client';

import React from 'react';

interface Activity {
  id: number;
  type: string;
  description: string;
  time: string;
}

const activities: Activity[] = [
  {
    id: 1,
    type: 'alert',
    description: 'Nouvelle alerte de sécurité détectée',
    time: 'Il y a 5 min'
  },
  {
    id: 2,
    type: 'update',
    description: 'Mise à jour de la base de données',
    time: 'Il y a 15 min'
  },
  {
    id: 3,
    type: 'notification',
    description: 'Rapport quotidien généré',
    time: 'Il y a 1 heure'
  }
];

const ActivityLogCard = () => {
  return (
    <div className="bg-white rounded-xl shadow-md border border-[#2CB8C6] h-full">
      <div className="p-4 border-b border-gray-200">
        <h3 className="text-lg font-semibold text-gray-900">Journal d&apos;activité</h3>
      </div>
      <div className="p-4">
        <div className="space-y-4">
          {activities.map((activity) => (
            <div key={activity.id} className="flex items-start space-x-3">
              <div className="flex-shrink-0">
                <div className="w-2 h-2 mt-2 rounded-full bg-[#2CB8C6]" />
              </div>
              <div className="flex-1 min-w-0">
                <p className="text-sm font-medium text-gray-900">{activity.description}</p>
                <p className="text-sm text-gray-600">{activity.time}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ActivityLogCard;
