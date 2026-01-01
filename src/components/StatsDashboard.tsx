import React from 'react';
import { HiOutlineShoppingBag } from "react-icons/hi2";
import { MdOutlineAgriculture, MdOutlineCheckCircle } from "react-icons/md";
import type { OrderLog } from '../types';

export const StatsDashboard: React.FC<{ revenue: number; sold: number }> = ({ revenue, sold }) => (
  <div className="grid grid-cols-12 gap-4">
    <div className="col-span-8 bg-emerald-600 p-8 rounded-[2.5rem] text-white relative overflow-hidden glow-emerald">
      <div className="relative z-10">
        <p className="text-sm font-medium opacity-80 mb-1">Total Revenue</p>
        <h3 className="text-4xl font-black tracking-tight">
          Rp {revenue.toLocaleString('id-ID')}
        </h3>
        <div className="mt-4 flex items-center gap-2 bg-white/20 w-fit px-3 py-1 rounded-full text-xs">
          <span className="w-2 h-2 bg-white rounded-full animate-pulse" />
          Live Update
        </div>
      </div>
      <HiOutlineShoppingBag className="absolute -right-4 -bottom-4 text-[10rem] opacity-10 rotate-12" />
    </div>
    
    <div className="col-span-4 bg-white p-8 rounded-[2.5rem] border border-slate-100 shadow-sm flex flex-col justify-center items-center text-center">
      <div className="bg-emerald-50 p-4 rounded-2xl text-emerald-600 mb-3">
        <MdOutlineAgriculture size={32} />
      </div>
      <h3 className="text-3xl font-black text-slate-800">{sold}</h3>
      <p className="text-xs font-bold text-slate-400 uppercase tracking-widest">Units Sold</p>
    </div>
  </div>
);

export const OrderHistory: React.FC<{ logs: OrderLog[] }> = ({ logs }) => (
  <section className="bg-white rounded-[2rem] p-6 border border-slate-100 shadow-sm">
    <h2 className="text-lg font-bold text-slate-800 mb-4">Aktivitas Terbaru</h2>
    <div className="space-y-3">
      {logs.map((log) => (
        <div key={log.id} className="flex items-center justify-between p-3 bg-slate-50 rounded-2xl border border-slate-100">
          <div className="flex items-center gap-3">
            <MdOutlineCheckCircle className="text-emerald-500" size={20} />
            <div>
              <p className="text-sm font-bold text-slate-800">{log.productName}</p>
              <p className="text-[10px] text-slate-400">{log.time}</p>
            </div>
          </div>
          <p className="text-sm font-black text-slate-900">+Rp {log.amount / 1000}k</p>
        </div>
      ))}
    </div>
  </section>
);