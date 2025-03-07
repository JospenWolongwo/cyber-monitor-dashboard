'use client';

import React from 'react';
import dynamic from 'next/dynamic';

// Dynamically import the map component with no SSR
const LeafletMapComponent = dynamic(() => import('./LeafletMapComponent'), {
  ssr: false,
  loading: () => (
    <div className="h-full w-full flex items-center justify-center bg-gray-50">
      <div className="text-gray-400">Loading map...</div>
    </div>
  ),
});

interface MapProps {
  center: [number, number];
  zoom: number;
  markers: Array<{
    position: [number, number];
    radius: number;
    options: {
      fillColor: string;
      fillOpacity: number;
      color: string;
      weight: number;
    };
  }>;
}

const LeafletMap: React.FC<MapProps> = (props) => {
  return <LeafletMapComponent {...props} />;
};

export default LeafletMap;
