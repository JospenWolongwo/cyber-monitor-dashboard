'use client';

import React from 'react';
import LeafletMap from './LeafletMap';
import 'leaflet/dist/leaflet.css';

interface RegionData {
  name: string;
  lat: number;
  lng: number;
  followers: number;
}

const WorldMapCard: React.FC = () => {
  const regions: RegionData[] = [
    { name: 'Europe', lat: 48.8566, lng: 2.3522, followers: 15234 },
    { name: 'Africa', lat: 9.0820, lng: 8.6753, followers: 45678 },
    { name: 'Asia', lat: 34.0479, lng: 100.6197, followers: 32456 },
  ];

  return (
    <div className="bg-white rounded-xl shadow-md border border-[#2CB8C6] h-[550px]">
      <div className="p-4 border-b border-gray-200">
        <h3 className="text-lg font-semibold text-gray-900">Followers actifs de la Diaspora</h3>
        <p className="text-sm text-gray-600 mt-1">par Pays</p>
      </div>
      <div className="p-4">
        <div className="h-[300px] relative">
          <LeafletMap
            center={[20, 0]}
            zoom={2}
            markers={regions.map(region => ({
              position: [region.lat, region.lng],
              radius: 10,
              options: {
                fillColor: '#2CB8C6',
                fillOpacity: 0.7,
                color: 'white',
                weight: 1
              }
            }))}
          />
        </div>

        <div className="mt-4 grid grid-cols-3 gap-4">
          {regions.map((region, index) => (
            <div key={index} className="bg-gray-50 p-3 rounded-lg">
              <p className="text-sm font-medium text-gray-900">{region.name}</p>
              <p className="text-2xl font-semibold text-gray-900 mt-1">{region.followers.toLocaleString()}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default WorldMapCard;
