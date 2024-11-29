import React from 'react';
import { FileText, DollarSign, Users } from 'lucide-react';
import Sidebar from './components/Layout/Sidebar';
import StatCard from './components/Dashboard/StatCard';
import RevenueChart from './components/Dashboard/RevenueChart';
import ContactsList from './components/Dashboard/ContactsList';
import TasksList from './components/Dashboard/TasksList';

function App() {
  return (
    <div className="flex min-h-screen bg-gray-50">
      <Sidebar />
      
      <main className="flex-1 p-8">
        <div className="flex justify-between items-center mb-8">
          <div className="flex items-center gap-2">
            <h1 className="text-2xl font-semibold">Dashboard</h1>
            <div className="px-3 py-1 bg-gray-100 rounded-lg text-sm text-gray-600">
              Last updated: Feb 28, 2024
            </div>
          </div>
          
          <div className="flex gap-4">
            <button className="px-4 py-2 text-sm font-medium text-gray-700 bg-white rounded-lg border border-gray-200 hover:bg-gray-50">
              Filter
            </button>
            <button className="px-4 py-2 text-sm font-medium text-white bg-blue-600 rounded-lg hover:bg-blue-700">
              Import/Export
            </button>
          </div>
        </div>

        <div className="grid grid-cols-3 gap-6 mb-8">
          <StatCard
            icon={<FileText className="text-blue-600" />}
            title="Total Sales"
            value="$23,569.00"
            change={{ value: 10.5, trend: 'up' }}
            iconBg="bg-blue-50"
          />
          <StatCard
            icon={<DollarSign className="text-green-600" />}
            title="Avg. Sale value"
            value="$12,680.00"
            change={{ value: 3.4, trend: 'up' }}
            iconBg="bg-green-50"
          />
          <StatCard
            icon={<Users className="text-purple-600" />}
            title="Total Deals"
            value="1,204"
            change={{ value: 0.8, trend: 'down' }}
            iconBg="bg-purple-50"
          />
        </div>

        <div className="mb-8">
          <RevenueChart />
        </div>

        <div className="grid grid-cols-[2fr_1fr] gap-6">
          <ContactsList />
          <TasksList />
        </div>
      </main>
    </div>
  );
}

export default App;