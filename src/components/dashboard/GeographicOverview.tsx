import React from 'react';
import { ComposableMap, Geographies, Geography } from 'react-simple-maps';

const geoUrl = "https://raw.githubusercontent.com/deldersveld/topojson/master/world-countries.json";

const GeographicOverview = () => {
  return (
    <div className="border border-[#2CB8C6] rounded-xl bg-white p-4">
      <div className="flex justify-between items-center mb-4">
        <h3 className="text-sm font-medium">Followers et profils de la Diaspora</h3>
        <div className="flex items-center space-x-4">
          <span className="text-sm text-gray-500">par Pays</span>
          <button className="text-gray-400">•</button>
        </div>
      </div>
      <div className="h-[400px] relative">
        <ComposableMap
          projectionConfig={{
            scale: 147,
          }}
        >
          <Geographies geography={geoUrl}>
            {({ geographies }) =>
              geographies.map((geo) => (
                <Geography
                  key={geo.rsmKey}
                  geography={geo}
                  fill="#EEF2F6"
                  stroke="#E2E8F0"
                  style={{
                    default: { outline: 'none' },
                    hover: { fill: '#BFDBFE', outline: 'none' },
                    pressed: { outline: 'none' }
                  }}
                />
              ))
            }
          </Geographies>
        </ComposableMap>
      </div>
      <div className="mt-4 text-right">
        <button className="text-[#2CB8C6] text-sm">
          Afficher Les Données démographiques →
        </button>
      </div>
    </div>
  );
};

export default GeographicOverview;
