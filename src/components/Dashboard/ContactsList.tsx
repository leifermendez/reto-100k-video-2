import React from 'react';
import { Search, Phone, Mail } from 'lucide-react';

const contacts = [
  {
    name: 'Jenny Wilson',
    company: 'Facebook',
    source: 'Advertisement',
    avatar: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=100',
  },
  {
    name: 'Kristin Watson',
    company: 'Klarna',
    source: 'Online store',
    avatar: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=100',
  },
  {
    name: 'Darrell Steward',
    company: 'Trello',
    source: 'Referral',
    avatar: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=100',
  },
];

export default function ContactsList() {
  return (
    <div className="bg-white rounded-xl p-6">
      <div className="flex justify-between items-center mb-6">
        <h3 className="text-lg font-semibold">Contacts</h3>
        <div className="relative">
          <input
            type="text"
            placeholder="Search contact..."
            className="pl-8 pr-4 py-2 bg-gray-50 rounded-lg text-sm w-64"
          />
          <Search className="absolute left-2 top-2.5 text-gray-400" size={18} />
        </div>
      </div>

      <div className="grid grid-cols-[auto_1fr_1fr_1fr_auto] gap-4 px-4 py-2 text-sm text-gray-500">
        <div></div>
        <div>Person</div>
        <div>Company</div>
        <div>Lead source</div>
        <div>Contact info</div>
      </div>

      {contacts.map((contact, idx) => (
        <div key={idx} className="grid grid-cols-[auto_1fr_1fr_1fr_auto] gap-4 px-4 py-3 hover:bg-gray-50 rounded-lg items-center">
          <input type="checkbox" className="rounded border-gray-300" />
          <div className="flex items-center gap-3">
            <img src={contact.avatar} alt="" className="w-8 h-8 rounded-full" />
            <span className="font-medium text-gray-900">{contact.name}</span>
          </div>
          <div>{contact.company}</div>
          <div>{contact.source}</div>
          <div className="flex gap-2">
            <button className="p-1.5 hover:bg-gray-100 rounded-lg">
              <Phone size={18} className="text-gray-500" />
            </button>
            <button className="p-1.5 hover:bg-gray-100 rounded-lg">
              <Mail size={18} className="text-gray-500" />
            </button>
          </div>
        </div>
      ))}
    </div>
  );
}