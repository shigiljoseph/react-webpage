import React from 'react';

export default function ActivityChart() {
  const bars = [50, 80, 65, 90, 60, 75, 70];

  return (
    <div className="bg-white p-4 rounded-xl shadow">
      <h3 className="font-semibold mb-4">Activity</h3>
      <div className="flex items-end gap-2 h-32">
        {bars.map((h, i) => (
          <div key={i} className="w-4 bg-blue-400 rounded" style={{ height: `${h}%` }}></div>
        ))}
      </div>
      <div className="flex justify-between mt-2 text-xs text-gray-600">
        {['Mon', 'Tues', 'Wed', 'Thurs', 'Fri', 'Sat', 'Sun'].map(day => (
          <span key={day}>{day}</span>
        ))}
      </div>
    </div>
  );
}
