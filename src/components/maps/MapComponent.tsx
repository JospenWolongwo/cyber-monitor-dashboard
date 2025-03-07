import React, { useEffect } from 'react';
import dynamic from 'next/dynamic';
import L from 'leaflet';
import 'leaflet/dist/leaflet.css';

const MapContainer = dynamic(
  () => import('react-leaflet').then((mod) => mod.MapContainer),
  { ssr: false }
);

const TileLayer = dynamic(
  () => import('react-leaflet').then((mod) => mod.TileLayer),
  { ssr: false }
);

const CircleMarker = dynamic(
  () => import('react-leaflet').then((mod) => mod.CircleMarker),
  { ssr: false }
);

type Marker = {
  position: [number, number];
  radius: number;
  options: {
    fillColor: string;
    fillOpacity: number;
    color: string;
    weight: number;
  };
};

type MapComponentProps = {
  center: [number, number];
  zoom: number;
  markers: Marker[];
};

export const MapComponent: React.FC<MapComponentProps> = ({ center, zoom, markers }) => {
  useEffect(() => {
    if (typeof window !== 'undefined') {
      delete (L.Icon.Default.prototype as any)._getIconUrl;
      L.Icon.Default.mergeOptions({
        iconRetinaUrl: 'leaflet/marker-icon-2x.png',
        iconUrl: 'leaflet/marker-icon.png',
        shadowUrl: 'leaflet/marker-shadow.png',
      });
    }
  }, []);

  if (typeof window === 'undefined') {
    return null;
  }

  return (
    <MapContainer
      center={center}
      zoom={zoom}
      style={{ height: '100%', width: '100%' }}
      zoomControl={false}
      scrollWheelZoom={false}
      dragging={false}
      attributionControl={false}
      whenCreated={(map) => {
        // Ensure all panes are created
        map.createPane('overlayPane');
        map.createPane('shadowPane');
        map.createPane('markerPane');
        map.createPane('tooltipPane');
        map.createPane('popupPane');
      }}
    >
      <TileLayer
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a>'
      />
      {markers.map((marker, index) => (
        <CircleMarker
          key={index}
          center={marker.position}
          radius={marker.radius}
          pathOptions={marker.options}
        />
      ))}
    </MapContainer>
  );
};
