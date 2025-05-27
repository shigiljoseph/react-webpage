import React from 'react';

export default function UpcomingSchedule({ data }) {
  return (
    <div className="bg-white p-4 rounded-xl shadow space-y-3">
      <h3 className="font-semibold mb-2">The Upcoming Schedule</h3>
      {data.map((dayItem, idx) => (
        <div key={idx}>
          <div className="text-sm font-semibold text-gray-600">{dayItem.day}</div>
          <div className="grid grid-cols-1 gap-2 mt-1">
            {dayItem.events.map((event, i) => (
              <div key={i} className="bg-gray-100 p-2 rounded-lg flex items-center justify-between">
                <span>{event.icon} {event.title}</span>
                <span className="text-sm text-gray-500">{event.time}</span>
              </div>
            ))}
          </div>
        </div>
      ))}
    </div>
  );
}
