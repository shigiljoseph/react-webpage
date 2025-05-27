import React from 'react';

export default function AppointmentCard({ title, time, doctor, icon }) {
  return (
    <div className="bg-blue-100 p-4 rounded-xl shadow text-sm">
      <div className="font-semibold">{icon} {title}</div>
      <div className="text-gray-600">{time}</div>
      <div className="text-gray-500">with {doctor}</div>
    </div>
  );
}
