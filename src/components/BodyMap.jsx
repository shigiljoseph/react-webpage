import React from 'react';
import bodyImage from '../assets/body-map.png'; // or use an online image source

export default function BodyMap() {
  return (
    <div className="bg-white rounded-xl p-4 shadow w-full max-w-sm relative">
      <img src={bodyImage} alt="Human Body" className="w-full" />
      <div className="absolute top-12 left-1/3 bg-blue-100 text-blue-800 px-2 py-1 rounded-full text-xs">💙 Healthy Heart</div>
      <div className="absolute bottom-8 left-1/4 bg-cyan-100 text-cyan-800 px-2 py-1 rounded-full text-xs">🦿 Healthy Leg</div>
    </div>
  );
}
