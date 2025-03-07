import React from 'react';
import dynamic from 'next/dynamic';
import 'leaflet/dist/leaflet.css';

const Map = dynamic(
  () => import('./MapComponent').then((mod) => mod.MapComponent),
  {
    ssr: false,
    loading: () => (
      <div className="h-full w-full flex items-center justify-center bg-gray-50">
        <div className="text-gray-400">Loading map...</div>
      </div>
    )
  }
);

const WorldMapCard = () => {
  const regions = [
    { name: 'Europe', lat: 48.8566, lng: 2.3522, followers: 15234 },
    { name: 'Africa', lat: 9.0820, lng: 8.6753, followers: 45678 },
    { name: 'Asia', lat: 34.0479, lng: 100.6197, followers: 32456 },
  ];

  return (
    <div className="border border-[#2CB8C6] rounded-xl bg-white h-full">
      <div className="flex items-center justify-between p-4 border-b border-gray-100">
        <div>
          <h3 className="text-sm font-medium text-gray-800">
            Followers actifs de la Diaspora
          </h3>
          <p className="text-xs text-gray-500 mt-1">par Pays</p>
        </div>
        <div className="flex items-center gap-2">
          <button className="text-gray-400 hover:text-gray-600">•••</button>
        </div>
      </div>

      <div className="p-4">
        <div className="relative h-[240px] bg-gray-50 rounded-lg overflow-hidden mb-4">
          <div className="absolute top-2 right-2 text-xs text-gray-500">
            Aucune données disponible
          </div>
          <Map
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

        <button className="w-full text-sm text-[#2CB8C6] hover:underline py-2 text-center">
          Afficher Les Données démographiques →
        </button>
      </div>
    </div>
  );
};

export default WorldMapCard;
