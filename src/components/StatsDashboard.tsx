import React from 'react';
import { HiOutlineShoppingBag } from "react-icons/hi2";
import { MdOutlineAgriculture, MdOutlineCheckCircle } from "react-icons/md";
import type { OrderLog } from '../types';

export const StatsDashboard: React.FC<{ revenue: number; sold: number }> = ({ revenue, sold }) => (
  <div className="grid grid-cols-12 gap-6">
    <div className="col-span-8 bg-white p-8 rounded-[2.5rem] border border-slate-100 shadow-sm relative overflow-hidden group hover:shadow-md transition-shadow">
      <div className="relative z-10">
        <div className="flex justify-between items-start mb-4">
          <div>
            <p className="text-sm font-bold text-slate-400 uppercase tracking-widest mb-1">Total Revenue</p>
            <div className="flex items-center gap-2">
              <span className="w-2 h-2 bg-emerald-500 rounded-full animate-pulse"></span>
              <span className="text-[10px] font-bold text-emerald-600 bg-emerald-50 px-2 py-1 rounded-full uppercase tracking-wider">Live Update</span>
            </div>
          </div>
          <div className="bg-emerald-50 p-3 rounded-2xl text-emerald-600">
            <HiOutlineShoppingBag size={24} />
          </div>
        </div>
        <h3 className="text-5xl font-black tracking-tighter text-slate-900">
          Rp {revenue.toLocaleString('id-ID')}
        </h3>
      </div>
      {/* Subtle decoration */}
      <div className="absolute right-0 bottom-0 opacity-5 pointer-events-none">
        <HiOutlineShoppingBag size={150} className="-rotate-12 translate-x-10 translate-y-10" />
      </div>
    </div>

    <div className="col-span-4 bg-white p-8 rounded-[2.5rem] border border-emerald-500/10 shadow-sm flex flex-col justify-center items-center text-center hover:shadow-md transition-shadow relative overflow-hidden">
      <div className="absolute inset-0 bg-emerald-50/50 -z-10"></div>
      <div className="bg-white p-4 rounded-2xl text-emerald-600 mb-3 shadow-sm border border-emerald-100">
        <MdOutlineAgriculture size={32} />
      </div>
      <h3 className="text-4xl font-black text-slate-900 mb-1">{sold}</h3>
      <p className="text-[10px] font-bold text-slate-400 uppercase tracking-widest">Units Sold</p>
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