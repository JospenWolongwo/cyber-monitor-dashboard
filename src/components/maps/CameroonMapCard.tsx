import React from 'react';
import Image from 'next/image';
import dynamic from 'next/dynamic';
import 'leaflet/dist/leaflet.css';

// Dynamically import MapContainer to avoid SSR issues
const MapContainer = dynamic(
  () => import('react-leaflet').then((mod) => mod.MapContainer),
  { 
    ssr: false,
    loading: () => (
      <div className="h-full w-full flex items-center justify-center bg-gray-50">
        <div className="text-gray-400">Loading map...</div>
      </div>
    )
  }
);

const TileLayer = dynamic(
  () => import('react-leaflet').then((mod) => mod.TileLayer),
  { ssr: false }
);

const CircleMarker = dynamic(
  () => import('react-leaflet').then((mod) => mod.CircleMarker),
  { ssr: false }
);

// Wrapper component to handle Leaflet initialization
const MapWrapper = ({ children }: { children: React.ReactNode }) => {
  React.useEffect(() => {
    (async () => {
      const L = (await import('leaflet')).default;
      delete (L.Icon.Default.prototype as any)._getIconUrl;
      L.Icon.Default.mergeOptions({
        iconRetinaUrl: 'leaflet/marker-icon-2x.png',
        iconUrl: 'leaflet/marker-icon.png',
        shadowUrl: 'leaflet/marker-shadow.png',
      });
    })();
  }, []);

  return <>{children}</>;
};

const MapComponent = ({ center, zoom, markers }) => {
  return (
    <MapWrapper>
      <MapContainer
        center={center}
        zoom={zoom}
        style={{ height: '100%', width: '100%' }}
        zoomControl={false}
        scrollWheelZoom={false}
        dragging={false}
        attributionControl={false}
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
    </MapWrapper>
  );
};

const CameroonMapCard = () => {
  const data = [
    { region: 'Grade 1', value: 80 },
    { region: 'Grade 2', value: 70 },
    { region: 'Grade 3', value: 60 },
    { region: 'Grade 4', value: 50 },
    { region: 'Grade 5', value: 40 },
  ];

  const regions = [
    { name: 'Nord', lat: 9.3, lng: 13.5, followers: 12345 },
    { name: 'Centre', lat: 4.6, lng: 11.5, followers: 23456 },
    { name: 'Littoral', lat: 4.0, lng: 9.7, followers: 18789 },
  ];

  return (
    <div className="border border-[#2CB8C6] rounded-xl bg-white h-full">
      <div className="flex items-center justify-between p-4 border-b border-gray-100">
        <div>
          <h3 className="text-sm font-medium text-gray-800">
            Followers actifs au Cameroun
          </h3>
          <p className="text-xs text-gray-500 mt-1">Les 30 derniers Minutes</p>
        </div>
        <div className="flex items-center gap-4">
          <div className="flex items-center gap-2">
            <div className="relative w-5 h-5">
              <Image
                src="/icons/tiktok.svg"
                alt="TikTok"
                fill
                style={{ objectFit: 'contain' }}
              />
            </div>
            <span className="text-sm font-medium">23944</span>
          </div>
          <div className="flex items-center gap-2">
            <div className="relative w-5 h-5">
              <Image
                src="/icons/facebook.svg"
                alt="Facebook"
                fill
                style={{ objectFit: 'contain' }}
              />
            </div>
            <span className="text-sm font-medium">23944</span>
          </div>
        </div>
      </div>

      <div className="p-4">
        <div className="flex gap-6">
          <div className="w-1/2">
            <div className="space-y-4">
              {data.map((item, index) => (
                <div key={index} className="flex items-center gap-2">
                  <span className="text-xs text-gray-600 w-14">{item.region}</span>
                  <div className="flex-1 bg-gray-100 h-2 rounded-full overflow-hidden">
                    <div
                      className="bg-[#2CB8C6] h-2 rounded-full"
                      style={{ width: `${item.value}%` }}
                    />
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="w-1/2 relative h-[200px] bg-gray-50 rounded-lg overflow-hidden">
            <MapComponent
              center={[7.3697, 12.3547]}
              zoom={5}
              markers={regions.map(region => ({
                position: [region.lat, region.lng],
                radius: 8,
                options: {
                  fillColor: '#FFD700',
                  fillOpacity: 0.7,
                  color: 'white',
                  weight: 1
                }
              }))}
            />
          </div>
        </div>

        <button className="w-full text-sm text-[#2CB8C6] hover:underline py-2 text-center mt-4">
          Afficher Le rapport d'Audiences par Ville →
        </button>
      </div>
    </div>
  );
};

export default CameroonMapCard;
