'use client';

import React, { useState } from 'react';
import Image from 'next/image';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';

const data = [
  { name: '00:00', value: 4000 },
  { name: '03:00', value: 3000 },
  { name: '06:00', value: 2000 },
  { name: '09:00', value: 2780 },
  { name: '12:00', value: 1890 },
  { name: '15:00', value: 2390 },
  { name: '18:00', value: 3490 },
  { name: '21:00', value: 4000 },
];

const platforms = [
  { name: 'Facebook', value: '+12%', followers: '237,896', icon: '/icons/facebook.svg' },
  { name: 'Twitter', value: '+8%', followers: '20,897', icon: '/icons/twitter.svg' },
  { name: 'Instagram', value: '+15%', followers: '5,894', icon: '/icons/instagram.svg' },
  { name: 'TikTok', value: '+24%', followers: '3,345,893', icon: '/icons/tiktok.svg' },
];

const tabs = [
  { id: 'active', name: 'Followers actifs' },
  { id: 'new', name: 'Nouveaux followers' },
  { id: 'live', name: 'Live en cours' },
];

const SocialMediaOverview = () => {
  const [activeTab, setActiveTab] = useState('active');

  return (
    <div className="border border-[#2CB8C6] rounded-xl bg-white p-4 h-full flex flex-col">
      {/* Platform Statistics */}
      <div className="grid grid-cols-4 gap-6 mb-6">
        {platforms.map((platform, index) => (
          <div key={index} className="text-center p-4 rounded-lg bg-gray-50 hover:bg-gray-100 transition-colors">
            <div className="flex flex-col items-center">
              <div className="mb-3">
                <Image
                  src={platform.icon}
                  alt={platform.name}
                  width={40}
                  height={40}
                  className="h-10 w-10"
                />
              </div>
              <div className="text-lg font-semibold text-gray-900">{platform.followers}</div>
              <div className="text-sm font-medium text-green-600 mt-1">{platform.value}</div>
            </div>
          </div>
        ))}
      </div>

      {/* Tabs */}
      <div className="flex space-x-6 border-b border-gray-200">
        {tabs.map((tab) => (
          <button
            key={tab.id}
            onClick={() => setActiveTab(tab.id)}
            className={`
              pb-2 text-sm font-medium transition-colors
              ${activeTab === tab.id
                ? 'border-b-2 border-[#2CB8C6] text-[#2CB8C6]'
                : 'text-gray-600 hover:text-gray-900'
              }
            `}
          >
            {tab.name}
          </button>
        ))}
      </div>

      {/* Graph */}
      <div className="mt-6 flex-1">
        <ResponsiveContainer width="100%" height="100%">
          <LineChart data={data}>
            <CartesianGrid strokeDasharray="3 3" vertical={false} stroke="#EEF2F6" />
            <XAxis
              dataKey="name"
              axisLine={false}
              tickLine={false}
              tick={{ fontSize: 12, fill: '#64748B' }}
            />
            <YAxis
              axisLine={false}
              tickLine={false}
              tick={{ fontSize: 12, fill: '#64748B' }}
            />
            <Tooltip
              contentStyle={{
                backgroundColor: '#fff',
                border: '1px solid #E2E8F0',
                borderRadius: '6px',
                fontSize: '12px',
                boxShadow: '0 2px 4px rgba(0,0,0,0.1)',
              }}
            />
            <Line
              type="monotone"
              dataKey="value"
              stroke="#2CB8C6"
              strokeWidth={2}
              dot={false}
              activeDot={{ r: 4, fill: '#2CB8C6' }}
            />
          </LineChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
};

export default SocialMediaOverview;
