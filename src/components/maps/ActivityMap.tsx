import React from 'react';
import { BarList } from '@tremor/react';

interface RegionData {
  name: string;
  value: number;
  icon?: React.ReactNode;
}

const data: RegionData[] = [
  { name: 'Yaoundé', value: 453 },
  { name: 'Douala', value: 351 },
  { name: 'Bamenda', value: 271 },
  { name: 'Garoua', value: 191 },
  { name: 'Maroua', value: 179 },
];

const ActivityMap = () => {
  return (
    <div className="bg-white p-6 rounded-lg shadow-sm">
      <h3 className="text-lg font-medium mb-4">Activité par région</h3>
      <BarList data={data} className="mt-2" />
    </div>
  );
};

export default ActivityMap;
