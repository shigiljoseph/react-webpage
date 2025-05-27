import React from 'react';

export default function Header() {
  return (
    <div className="flex justify-between items-center">
      <h2 className="text-3xl font-semibold">Dashboard</h2>
      <div className="flex items-center gap-4">
        <input
          type="text"
          placeholder="Search"
          className="px-4 py-2 border border-gray-300 rounded-lg"
        />
        <div className="w-10 h-10 rounded-full bg-green-300 flex items-center justify-center">
          <span>👨‍⚕️</span>
        </div>
        <button className="text-2xl bg-blue-600 text-white w-8 h-8 rounded-lg">+</button>
      </div>
    </div>
  );
}
