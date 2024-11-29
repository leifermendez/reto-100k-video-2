import React from 'react';
import { LineChart, Line, XAxis, YAxis, Tooltip, ResponsiveContainer } from 'recharts';

const data = [
  { date: 'Jan 28', current: 15000, previous: 12000 },
  { date: 'Feb 4', current: 17500, previous: 13000 },
  { date: 'Feb 11', current: 19000, previous: 13500 },
  { date: 'Feb 18', current: 18500, previous: 14000 },
  { date: 'Feb 25', current: 20000, previous: 13000 },
  { date: 'Feb 28', current: 19500, previous: 12500 },
];

export default function RevenueChart() {
  return (
    <div className="bg-white rounded-xl p-6">
      <div className="flex justify-between items-center mb-6">
        <div className="flex items-center gap-2">
          <h3 className="text-lg font-semibold">Revenue</h3>
          <span className="text-green-500 text-sm">↑ 10.5% from last period</span>
        </div>
        <select className="bg-gray-50 border border-gray-200 rounded-lg px-3 py-1.5 text-sm">
          <option>All Products</option>
        </select>
      </div>

      <div className="h-[300px]">
        <ResponsiveContainer width="100%" height="100%">
          <LineChart data={data}>
            <XAxis dataKey="date" />
            <YAxis />
            <Tooltip />
            <Line 
              type="monotone" 
              dataKey="current" 
              stroke="#4F46E5" 
              strokeWidth={2}
              dot={false}
            />
            <Line 
              type="monotone" 
              dataKey="previous" 
              stroke="#E5E7EB" 
              strokeWidth={2}
              dot={false}
            />
          </LineChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
}