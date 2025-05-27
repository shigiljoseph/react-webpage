import React from 'react';

export default function CalendarSchedule() {
  const days = ['Mon', 'Tues', 'Wed', 'Thurs', 'Fri', 'Sat', 'Sun'];
  const dates = [25, 26, 27, 28, 29, 30, 31];

  return (
    <div className="bg-white p-4 rounded-xl shadow">
      <h3 className="font-semibold mb-2">October 2021</h3>
      <div className="grid grid-cols-7 text-center gap-1 text-sm text-gray-700">
        {dates.map((date, i) => (
          <div key={i} className="flex flex-col items-center">
            <span>{days[i]}</span>
            <div className={`w-8 h-8 flex items-center justify-center rounded-full ${date === 26 ? 'bg-blue-500 text-white' : 'bg-gray-100'}`}>
              {date}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
