import React from 'react';
import { 
  LayoutDashboard, 
  Bell, 
  CheckSquare, 
  FileText, 
  Mail, 
  Calendar,
  BarChart2,
  Building2,
  Users,
  Users2,
  Puzzle,
  HelpCircle,
} from 'lucide-react';

const menuItems = [
  { section: 'Main Menu', items: [
    { icon: LayoutDashboard, label: 'Dashboard', active: true },
    { icon: Bell, label: 'Notifications' },
    { icon: CheckSquare, label: 'Tasks' },
    { icon: FileText, label: 'Notes' },
    { icon: Mail, label: 'Email' },
    { icon: Calendar, label: 'Calendar' },
  ]},
  { section: 'Record', items: [
    { icon: BarChart2, label: 'Reports' },
    { icon: Building2, label: 'Companies' },
    { icon: Users, label: 'Contacts' },
  ]},
  { section: '', items: [
    { icon: Users2, label: 'Invite Team' },
    { icon: Puzzle, label: 'Integration' },
    { icon: HelpCircle, label: 'Help & First step' },
  ]},
];

export default function Sidebar() {
  return (
    <div className="w-64 h-screen bg-white border-r border-gray-200 p-4">
      <div className="flex items-center gap-2 mb-6">
        <div className="w-8 h-8 bg-blue-600 rounded-lg flex items-center justify-center">
          <span className="text-white font-semibold">C</span>
        </div>
        <span className="text-lg font-semibold">Clario</span>
      </div>

      <div className="relative mb-6">
        <input
          type="text"
          placeholder="Search"
          className="w-full pl-8 pr-4 py-2 bg-gray-50 rounded-lg text-sm"
        />
        <span className="absolute left-2 top-2.5 text-gray-400">🔍</span>
      </div>

      {menuItems.map((section, idx) => (
        <div key={idx} className="mb-6">
          {section.section && (
            <div className="text-xs text-gray-500 mb-2">{section.section}</div>
          )}
          {section.items.map((item, itemIdx) => (
            <div
              key={itemIdx}
              className={`flex items-center gap-3 px-3 py-2 rounded-lg mb-1 cursor-pointer ${
                item.active ? 'bg-blue-50 text-blue-600' : 'text-gray-600 hover:bg-gray-50'
              }`}
            >
              <item.icon size={20} />
              <span className="text-sm">{item.label}</span>
            </div>
          ))}
        </div>
      ))}

      <div className="absolute bottom-4 left-4 right-4">
        <div className="flex items-center gap-3 p-2 hover:bg-gray-50 rounded-lg cursor-pointer">
          <div className="w-8 h-8 rounded-full bg-gray-200" />
          <div>
            <div className="text-sm font-medium">Alexandra Andria</div>
            <div className="text-xs text-gray-500">alexandra@gmail.com</div>
          </div>
        </div>
      </div>
    </div>
  );
}