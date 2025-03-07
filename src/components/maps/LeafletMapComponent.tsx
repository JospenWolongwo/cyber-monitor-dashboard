'use client';

import { useEffect, useRef, useState } from 'react';
import L from 'leaflet';
import 'leaflet/dist/leaflet.css';

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

const LeafletMapComponent = ({ center, zoom, markers }: MapProps) => {
  const mapRef = useRef<L.Map | null>(null);
  const mapContainerRef = useRef<HTMLDivElement>(null);
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);
  }, []);

  useEffect(() => {
    if (!isMounted) return;

    // Initialize map
    if (!mapRef.current && mapContainerRef.current) {
      mapRef.current = L.map(mapContainerRef.current, {
        center,
        zoom,
        zoomControl: false,
        dragging: false,
        touchZoom: false,
        doubleClickZoom: false,
        scrollWheelZoom: false,
        boxZoom: false,
        keyboard: false,
        attributionControl: false
      });

      L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
        attribution: ' OpenStreetMap contributors'
      }).addTo(mapRef.current);
    }

    // Update map view if center/zoom changes
    if (mapRef.current) {
      mapRef.current.setView(center, zoom, { animate: false });
    }

    // Clear existing markers
    if (mapRef.current) {
      mapRef.current.eachLayer((layer) => {
        if (layer instanceof L.CircleMarker) {
          layer.remove();
        }
      });
    }

    // Add new markers
    if (mapRef.current) {
      markers.forEach(marker => {
        L.circleMarker(marker.position, {
          ...marker.options,
          radius: marker.radius
        }).addTo(mapRef.current!);
      });
    }

    return () => {
      if (mapRef.current) {
        mapRef.current.remove();
        mapRef.current = null;
      }
    };
  }, [isMounted, center, zoom, markers]);

  if (!isMounted) {
    return (
      <div className="h-full w-full flex items-center justify-center bg-gray-50">
        <div className="text-gray-400">Loading map...</div>
      </div>
    );
  }

  return <div ref={mapContainerRef} className="h-full w-full" />;
};

export default LeafletMapComponent;
