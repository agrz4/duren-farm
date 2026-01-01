import React from 'react';

const StatsBanner: React.FC = () => (
  <div className="bg-emerald-600 rounded-[2.5rem] p-8 grid grid-cols-4 gap-4 text-white">
    {[
      { label: 'Total Sales', value: '321k' },
      { label: 'Visitor', value: '678k' },
      { label: 'Cvr', value: '7,89' },
      { label: 'Total Orders', value: '211k' },
    ].map((stat, i) => (
      <div key={i} className={`flex flex-col items-center justify-center ${i !== 3 ? 'border-r border-white/10' : ''}`}>
        <p className="text-[10px] font-medium opacity-80 uppercase tracking-widest mb-1">{stat.label}</p>
        <h3 className="text-3xl font-bold">{stat.value}</h3>
      </div>
    ))}
  </div>
);

export default StatsBanner;