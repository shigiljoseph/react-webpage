import React from 'react';
import { Home, Calendar, Clock, BarChart, MessageCircle, Phone, Settings } from 'lucide-react';

const navItems = [
  { icon: <Home size={20} />, label: 'Dashboard' },
  { icon: <Clock size={20} />, label: 'History' },
  { icon: <Calendar size={20} />, label: 'Calendar' },
  { icon: <Clock size={20} />, label: 'Appointments' },
  { icon: <BarChart size={20} />, label: 'Statistics' },
  { icon: <MessageCircle size={20} />, label: 'Chat' },
  { icon: <Phone size={20} />, label: 'Support' },
  { icon: <Settings size={20} />, label: 'Setting' },
];

export default function SidebarNavigation() {
  return (
    <aside className="w-64 bg-white shadow-lg p-6 flex flex-col justify-between">
      <div>
        <h1 className="text-2xl font-bold text-blue-500 mb-8">Health<span className="text-black">care.</span></h1>
        <nav className="space-y-4">
          {navItems.map((item, index) => (
            <div key={index} className="flex items-center gap-3 text-gray-700 hover:text-blue-600 cursor-pointer">
              {item.icon}
              <span>{item.label}</span>
            </div>
          ))}
        </nav>
      </div>
    </aside>
  );
}
