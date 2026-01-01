import React from 'react';
import { HiOutlineRefresh } from 'react-icons/hi';
import { MdOutlineCheckCircle } from "react-icons/md";

interface TrackerProps {
  currentStatus: number;
  onUpdateStatus: () => void;
}

const DeliveryTracker: React.FC<TrackerProps> = ({ currentStatus, onUpdateStatus }) => {
  const steps = ['Harvested', 'Quality Check', 'In Transit', 'Delivered'];
  
  return (
    <section className="bg-slate-900 rounded-[3rem] p-10 text-white relative overflow-hidden">
      <div className="absolute top-0 right-0 w-64 h-64 bg-emerald-500/10 rounded-full blur-[80px] -mr-32 -mt-32" />
      
      <div className="flex justify-between items-center mb-12 relative z-10">
        <div>
          <h2 className="text-2xl font-bold">Track Order</h2>
          <p className="text-slate-400 text-sm italic">ID: #DUR-2024-X9</p>
        </div>
        <button onClick={onUpdateStatus} className="bg-white/10 hover:bg-white/20 p-3 rounded-2xl transition-all">
          <HiOutlineRefresh size={20} className="text-emerald-400" />
        </button>
      </div>

      <div className="flex justify-between relative px-2">
        <div className="absolute top-[1.2rem] left-0 w-full h-[2px] bg-slate-800 z-0" />
        <div 
          className="absolute top-[1.2rem] left-0 h-[2px] bg-emerald-500 z-0 transition-all duration-1000 shadow-[0_0_15px_rgba(16,185,129,0.5)]"
          style={{ width: `${(currentStatus / (steps.length - 1)) * 100}%` }}
        />

        {steps.map((step, i) => (
          <div key={step} className="relative z-10 flex flex-col items-center gap-4">
            <div className={`w-10 h-10 rounded-full flex items-center justify-center border-4 transition-all duration-500
              ${i <= currentStatus ? 'bg-emerald-500 border-slate-900 text-slate-900 scale-110' : 'bg-slate-800 border-slate-900 text-slate-500'}`}>
              {i < currentStatus ? <MdOutlineCheckCircle size={22} /> : <span className="text-[10px] font-bold">{i + 1}</span>}
            </div>
            <span className={`text-[10px] font-black uppercase tracking-[0.15em] ${i <= currentStatus ? 'text-emerald-400' : 'text-slate-600'}`}>
              {step}
            </span>
          </div>
        ))}
      </div>
    </section>
  );
};

export default DeliveryTracker;