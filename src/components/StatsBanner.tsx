import React from 'react';

const StatsBanner: React.FC = () => (
  <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
    {[
      { label: 'Total Sales', value: '321k', icon: '💰' },
      { label: 'Visitor', value: '678k', icon: '👥' },
      { label: 'Conversion', value: '7.89%', icon: '📈' },
      { label: 'Total Orders', value: '211k', icon: '🛍️' },
    ].map((stat, i) => (
      <div key={i} className="bg-white border border-slate-100 rounded-[2rem] p-6 hover:shadow-md transition-shadow flex items-center gap-4">
        <div className="w-12 h-12 rounded-full bg-emerald-50 text-xl flex items-center justify-center">
          {stat.icon}
        </div>
        <div>
          <p className="text-[11px] font-bold text-slate-400 uppercase tracking-wider">{stat.label}</p>
          <h3 className="text-2xl font-black text-slate-800 tracking-tight">{stat.value}</h3>
        </div>
      </div>
    ))}
  </div>
);

export default StatsBanner;