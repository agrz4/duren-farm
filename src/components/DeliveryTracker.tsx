import React from 'react';
import { HiOutlineRefresh } from 'react-icons/hi';
import {
  MdOutlineCheckCircle,
  MdOutlineAgriculture,
  MdOutlineFactCheck,
  MdOutlineLocalShipping,
  MdOutlineHomeWork
} from "react-icons/md";

interface TrackerProps {
  currentStatus: number;
  onUpdateStatus: () => void;
}

const DeliveryTracker: React.FC<TrackerProps> = ({ currentStatus, onUpdateStatus }) => {
  const steps = [
    { label: 'Harvested', icon: <MdOutlineAgriculture size={20} />, time: '08:00 AM' },
    { label: 'Quality Check', icon: <MdOutlineFactCheck size={20} />, time: '09:30 AM' },
    { label: 'In Transit', icon: <MdOutlineLocalShipping size={20} />, time: '11:15 AM' },
    { label: 'Delivered', icon: <MdOutlineHomeWork size={20} />, time: 'Expected 01:00 PM' }
  ];

  return (
    <div className="w-full">
      <div className="flex justify-between items-center mb-8">
        <div>
          <h2 className="text-xl font-bold text-slate-800">Track Order</h2>
          <p className="text-slate-400 text-xs font-medium mt-1">ID: #DUR-2024-X9</p>
        </div>
        <button
          onClick={onUpdateStatus}
          className="bg-slate-50 hover:bg-emerald-50 text-slate-400 hover:text-emerald-600 p-2.5 rounded-full transition-all duration-300"
          title="Refresh Status"
        >
          <HiOutlineRefresh size={18} />
        </button>
      </div>

      <div className="relative pl-2">
        {/* Continuous Vertical Line */}
        <div className="absolute top-4 left-[1.15rem] w-0.5 h-[calc(100%-2rem)] bg-slate-100 -z-0" />

        {/* Progress Line (Dynamic) */}
        <div
          className="absolute top-4 left-[1.15rem] w-0.5 bg-emerald-500 transition-all duration-1000 -z-0"
          style={{ height: `${Math.max(0, Math.min(100, (currentStatus / (steps.length - 1)) * 100))}%` }}
        />

        <div className="space-y-8">
          {steps.map((step, i) => {
            const isCompleted = i < currentStatus;
            const isCurrent = i === currentStatus;
            const isPending = i > currentStatus;

            return (
              <div key={i} className="flex items-start gap-4 relative z-10 group">
                <div
                  className={`
                    w-10 h-10 rounded-full flex items-center justify-center border-[3px] transition-all duration-500 shadow-sm
                    ${isCompleted
                      ? 'bg-emerald-500 border-emerald-500 text-white scale-100'
                      : isCurrent
                        ? 'bg-white border-emerald-500 text-emerald-600 scale-110 shadow-emerald-100'
                        : 'bg-white border-slate-200 text-slate-300 scale-100'}
                  `}
                >
                  {isCompleted ? <MdOutlineCheckCircle size={20} /> : step.icon}
                </div>

                <div className={`pt-1 transition-all duration-500 ${isCurrent ? 'translate-x-1' : ''}`}>
                  <h4
                    className={`text-sm font-bold transition-colors duration-300
                    ${isCurrent ? 'text-slate-800' : isCompleted ? 'text-slate-600' : 'text-slate-400'}`}
                  >
                    {step.label}
                  </h4>
                  <p
                    className={`text-[10px] font-medium mt-0.5 transition-colors duration-300
                    ${isCurrent ? 'text-emerald-600' : 'text-slate-400'}`}
                  >
                    {step.time}
                  </p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default DeliveryTracker;