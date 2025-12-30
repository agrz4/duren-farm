import React from 'react';
import { HiOutlineRefresh } from 'react-icons/hi';
import { HiOutlineTruck } from "react-icons/hi2";
import { MdOutlineCheckCircle } from "react-icons/md";

interface TrackerProps {
  currentStatus: number;
  onUpdateStatus: () => void;
}

const DeliveryTracker: React.FC<TrackerProps> = ({ currentStatus, onUpdateStatus }) => {
  const steps = ['Panen', 'Packing', 'Kirim', 'Tiba'];
  
  return (
    <section className="bg-white rounded-[2rem] p-8 border border-slate-100 shadow-sm">
      <div className="flex justify-between items-center mb-10">
        <h2 className="flex items-center gap-2 text-lg font-bold text-slate-800">
          <HiOutlineTruck className="text-emerald-600 text-2xl" /> Lacak Pesanan
        </h2>
        <button onClick={onUpdateStatus} className="text-emerald-600 hover:bg-emerald-50 p-2 rounded-xl transition">
          <HiOutlineRefresh size={20} />
        </button>
      </div>

      <div className="flex justify-between relative px-2">
        <div className="absolute top-5 left-0 w-full h-0.5 bg-slate-100 z-0"></div>
        <div 
          className="absolute top-5 left-0 h-0.5 bg-emerald-500 z-0 transition-all duration-700"
          style={{ width: `${(currentStatus / (steps.length - 1)) * 100}%` }}
        ></div>

        {steps.map((step, i) => (
          <div key={step} className="relative z-10 flex flex-col items-center gap-3 bg-white px-2">
            <div className={`w-10 h-10 rounded-full flex items-center justify-center border-2 transition-all duration-500
              ${i <= currentStatus ? 'bg-emerald-500 border-emerald-500 text-white shadow-lg' : 'bg-white border-slate-200 text-slate-300'}`}>
              {i < currentStatus ? <MdOutlineCheckCircle size={20} /> : <span className="text-xs font-bold">{i + 1}</span>}
            </div>
            <span className={`text-[10px] font-black uppercase tracking-widest ${i <= currentStatus ? 'text-emerald-700' : 'text-slate-300'}`}>
              {step}
            </span>
          </div>
        ))}
      </div>
    </section>
  );
};

export default DeliveryTracker;