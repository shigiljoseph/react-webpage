import React from 'react';

export default function HealthStatusCard({ icon, label, statusColor, date }) {
  return (
    <div className="bg-white shadow rounded-xl p-4 w-full">
      <div className="flex items-center justify-between">
        <div className="text-lg font-medium">{icon} {label}</div>
        <div className="text-sm text-gray-400">Date: {date}</div>
      </div>
      <div className="mt-2 h-2 bg-gray-200 rounded-full">
        <div className={`h-2 rounded-full ${statusColor}`} style={{ width: '70%' }}></div>
      </div>
    </div>
  );
}
