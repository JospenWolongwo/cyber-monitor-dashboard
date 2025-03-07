import React from 'react';

interface MetricCardProps {
  title: string;
  value: string | number;
  icon?: string;
  trend?: {
    value: number;
    isPositive: boolean;
  };
}

const MetricCard = ({ title, value, icon, trend }: MetricCardProps) => {
  return (
    <div className="bg-white rounded-lg shadow-sm p-6">
      <div className="flex items-center justify-between mb-4">
        <h3 className="text-gray-500 text-sm font-medium">{title}</h3>
        {icon && <span className="text-xl">{icon}</span>}
      </div>
      <div className="flex items-end justify-between">
        <div className="text-2xl font-semibold">{value}</div>
        {trend && (
          <div className={`flex items-center ${trend.isPositive ? 'text-green-500' : 'text-red-500'}`}>
            <span className="text-sm">
              {trend.isPositive ? '↑' : '↓'} {Math.abs(trend.value)}%
            </span>
          </div>
        )}
      </div>
    </div>
  );
};

export default MetricCard;
