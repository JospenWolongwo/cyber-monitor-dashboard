'use client';

import React from 'react';
import { BarList } from '@tremor/react';

interface StatItem {
  name: string;
  value: number;
  href: string;
}

const data: StatItem[] = [
  {
    name: "Facebook",
    value: 456,
    href: "https://facebook.com",
  },
  {
    name: "Twitter",
    value: 351,
    href: "https://twitter.com",
  },
  {
    name: "Instagram",
    value: 271,
    href: "https://instagram.com",
  },
  {
    name: "TikTok",
    value: 191,
    href: "https://tiktok.com",
  },
  {
    name: "YouTube",
    value: 91,
    href: "https://youtube.com",
  },
];

const StatsCard = () => {
  return (
    <div className="bg-white rounded-xl shadow-md border border-[#2CB8C6] h-full">
      <div className="p-4 border-b border-gray-200">
        <h3 className="text-lg font-semibold text-gray-900">Statistiques d&apos;engagement</h3>
      </div>
      <div className="p-4">
        <BarList
          data={data}
          valueFormatter={(number: number) =>
            Intl.NumberFormat("fr").format(number).toString()
          }
          className="mt-2 [&>*]:text-gray-900"
        />
      </div>
    </div>
  );
};

export default StatsCard;
