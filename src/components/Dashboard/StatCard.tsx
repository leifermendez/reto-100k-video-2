import React from 'react';
import { Info } from 'lucide-react';

interface StatCardProps {
  icon: React.ReactNode;
  title: string;
  value: string;
  change: {
    value: number;
    trend: 'up' | 'down';
  };
  iconBg: string;
}

export default function StatCard({ icon, title, value, change, iconBg }: StatCardProps) {
  return (
    <div className="bg-white rounded-xl p-6">
      <div className="flex justify-between items-start mb-4">
        <div className={`${iconBg} w-10 h-10 rounded-lg flex items-center justify-center`}>
          {icon}
        </div>
        <button className="text-gray-400 hover:text-gray-600">
          <Info size={20} />
        </button>
      </div>
      
      <div className="space-y-1">
        <div className="text-gray-600 text-sm">{title}</div>
        <div className="text-2xl font-semibold">{value}</div>
        <div className="flex items-center gap-2">
          <span className={`text-sm ${
            change.trend === 'up' ? 'text-green-500' : 'text-red-500'
          }`}>
            {change.trend === 'up' ? '↑' : '↓'} {Math.abs(change.value)}%
          </span>
          <span className="text-gray-500 text-sm">from last period</span>
        </div>
      </div>
    </div>
  );
}