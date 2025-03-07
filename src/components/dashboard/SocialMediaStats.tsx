import React from 'react';
import { Card, AreaChart } from '@tremor/react';
import { format } from 'date-fns';

interface Platform {
  name: string;
  icon: string;
  followers: string;
  color: string;
}

const platforms: Platform[] = [
  { name: 'Twitter', icon: 'X', followers: '20,597', color: 'text-gray-800' },
  { name: 'Instagram', icon: 'IG', followers: '5,094', color: 'text-pink-500' },
  { name: 'TikTok', icon: 'TT', followers: '2,345,893', color: 'text-black' },
  { name: 'Facebook', icon: 'FB', followers: '227,396', color: 'text-[#2CB8C6]' },
];

const chartdata = [
  { date: '2024-01', followers: 15000 },
  { date: '2024-02', followers: 18000 },
  { date: '2024-03', followers: 16000 },
  { date: '2024-04', followers: 20000 },
  { date: '2024-05', followers: 17000 },
];

const SocialMediaStats = () => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
      {/* Social Media Overview Card */}
      <Card className="col-span-2 p-4 bg-white rounded-xl border border-[#2CB8C6]">
        <div className="flex items-center justify-between mb-4">
          <div className="flex space-x-6">
            {platforms.map((platform) => (
              <div key={platform.name} className="text-center">
                <span className={`text-lg font-medium ${platform.color}`}>
                  {platform.icon}
                </span>
                <span className="ml-2 text-sm text-gray-600">
                  {platform.followers}
                </span>
              </div>
            ))}
          </div>
          <button className="p-1 rounded-full bg-gray-100">
            <span className="sr-only">More options</span>
            •••
          </button>
        </div>
        
        <div className="mt-4">
          <div className="flex justify-between text-sm text-gray-500 mb-2">
            <span>Nouveaux followers</span>
            <span>Live en cours</span>
          </div>
          <AreaChart
            className="h-32"
            data={chartdata}
            index="date"
            categories={["followers"]}
            colors={["#2CB8C6"]}
            showXAxis={true}
            showYAxis={true}
            showLegend={false}
            showGridLines={false}
            showAnimation={true}
          />
        </div>
      </Card>

      {/* Active Users Card */}
      <Card className="p-4 bg-white rounded-xl">
        <div className="flex items-center justify-between mb-4">
          <h3 className="text-sm font-medium">UTILISATEURS ACTIFS PAR MINUTE</h3>
          <button className="p-1 rounded-full bg-gray-100">•</button>
        </div>
        <div className="space-y-4">
          <div className="flex items-center">
            <div className="w-2 h-2 bg-blue-500 rounded-full mr-2"></div>
            <span className="text-sm text-gray-600">Facebook</span>
            <span className="ml-auto text-sm font-medium">59,453</span>
          </div>
          <div className="flex items-center">
            <div className="w-2 h-2 bg-pink-500 rounded-full mr-2"></div>
            <span className="text-sm text-gray-600">Instagram</span>
            <span className="ml-auto text-sm font-medium">32,845</span>
          </div>
        </div>
        <div className="mt-4 text-right">
          <button className="text-blue-500 text-sm">
            Afficher Temps réel →
          </button>
        </div>
      </Card>

      {/* Recent Activity Card */}
      <Card className="p-4 bg-white rounded-xl">
        <div className="flex items-center justify-between mb-4">
          <h3 className="text-sm font-medium">Activités récente</h3>
          <div className="flex items-center space-x-2">
            <button className="p-1 rounded-full bg-gray-100">
              <span className="sr-only">Search</span>
              🔍
            </button>
            <button className="p-1 rounded-full bg-gray-100">•</button>
          </div>
        </div>
        <div className="space-y-3">
          {[1, 2, 3].map((_, i) => (
            <div key={i} className="flex items-center justify-between text-sm">
              <div>
                <div className="font-medium">Utilisateur_{i + 1}</div>
                <div className="text-gray-500">{format(new Date(), 'HH:mm:ss')}</div>
              </div>
              <span className="text-green-500">en ligne</span>
            </div>
          ))}
        </div>
        <div className="mt-4 text-right">
          <button className="text-blue-500 text-sm">
            Afficher tous les insights →
          </button>
        </div>
      </Card>
    </div>
  );
};

export default SocialMediaStats;
