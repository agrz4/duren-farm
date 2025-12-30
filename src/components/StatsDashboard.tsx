import React from 'react';
import { HiOutlineShoppingBag } from "react-icons/hi2";
import { MdOutlineAgriculture, MdOutlineCheckCircle } from "react-icons/md";
import type { OrderLog } from '../types';

export const StatsDashboard: React.FC<{ revenue: number; sold: number }> = ({ revenue, sold }) => (
  <div className="grid grid-cols-2 gap-4">
    <div className="bg-emerald-600 p-6 rounded-[2rem] text-white shadow-lg shadow-emerald-100 relative overflow-hidden">
      <p className="text-[10px] font-bold uppercase tracking-wider opacity-80">Pendapatan</p>
      <h3 className="text-xl font-black mt-1">Rp {revenue.toLocaleString('id-ID')}</h3>
      <HiOutlineShoppingBag className="absolute -right-2 -bottom-2 opacity-10 text-6xl" />
    </div>
    <div className="bg-white p-6 rounded-[2rem] border border-slate-100 shadow-sm relative overflow-hidden">
      <p className="text-[10px] font-bold uppercase tracking-wider text-slate-400">Terjual</p>
      <h3 className="text-xl font-black mt-1 text-slate-800">{sold} Butir</h3>
      <MdOutlineAgriculture className="absolute -right-2 -bottom-2 text-emerald-50 opacity-50 text-6xl" />
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