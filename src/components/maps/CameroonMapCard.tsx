'use client';

import React from 'react';
import LeafletMap from './LeafletMap';
import Link from 'next/link';
import 'leaflet/dist/leaflet.css';

interface RegionData {
  name: string;
  lat: number;
  lng: number;
  followers: number;
}

const CameroonMapCard: React.FC = () => {
  const allRegions: RegionData[] = [
    { name: 'Yaoundé', lat: 3.848, lng: 11.502, followers: 12500 },
    { name: 'Douala', lat: 4.050, lng: 9.700, followers: 15000 },
    { name: 'Bamenda', lat: 5.960, lng: 10.146, followers: 8000 },
    { name: 'Garoua', lat: 9.302, lng: 13.392, followers: 6000 },
    { name: 'Maroua', lat: 10.591, lng: 14.315, followers: 5000 },
  ];

  // Show only top 2 regions in the card
  const displayedRegions = allRegions.slice(0, 2);

  const center: [number, number] = [7.3697, 12.3547]; // Cameroon center coordinates
  const markers = allRegions.map(region => ({
    position: [region.lat, region.lng] as [number, number],
    radius: 8,
    options: {
      fillColor: '#FF0000',
      fillOpacity: 0.6,
      color: '#FF0000',
      weight: 2
    }
  }));

  return (
    <div className="bg-white rounded-xl shadow-md border border-[#2CB8C6] h-[550px]">
      <div className="p-4 border-b border-gray-200">
        <h3 className="text-lg font-semibold text-gray-900">Carte du Cameroun</h3>
        <p className="text-sm text-gray-600 mt-1">Mise à jour en temps réel</p>
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-[1fr,250px] h-[calc(100%-80px)]">
        <div className="relative h-full min-h-[200px]">
          <LeafletMap
            center={center}
            zoom={5.8}
            markers={markers}
          />
        </div>
        
        <div className="p-6 border-t md:border-t-0 md:border-l border-gray-200">
          <h4 className="text-base font-semibold text-gray-900 mb-6">Statistiques par région</h4>
          <div className="space-y-5">
            {displayedRegions.map((region, index) => (
              <div key={index} className="flex items-center justify-between">
                <span className="text-base text-gray-900">{region.name}</span>
                <span className="text-base font-medium text-gray-900">{region.followers.toLocaleString()}</span>
              </div>
            ))}
          </div>
          <Link 
            href="/regions" 
            className="mt-6 block text-sm text-[#2CB8C6] hover:text-[#229AA6] font-medium"
          >
            Voir toutes les régions →
          </Link>
        </div>
      </div>
    </div>
  );
};

export default CameroonMapCard;
