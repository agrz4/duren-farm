import React from 'react';
import { MdOutlineCheckCircle } from "react-icons/md";
import type { OrderLog } from '../types';

interface OrderHistoryProps {
  logs: OrderLog[];
}

const OrderHistory: React.FC<OrderHistoryProps> = ({ logs }) => {
  return (
    <section className="bg-white rounded-[2rem] p-6 border border-slate-100 shadow-sm">
      <h2 className="text-lg font-bold text-slate-800 mb-4">Aktivitas Terbaru</h2>
      <div className="space-y-3">
        {logs.map((log) => (
          <div key={log.id} className="flex items-center justify-between p-3 bg-slate-50 rounded-2xl border border-slate-100 hover:bg-white hover:shadow-sm transition-all cursor-default">
            <div className="flex items-center gap-3">
              {/* Icon status yang berbeda warna */}
              <div className="bg-emerald-100 p-2 rounded-xl text-emerald-600">
                <MdOutlineCheckCircle size={20} />
              </div>
              <div>
                <p className="text-sm font-bold text-slate-800">{log.productName}</p>
                <p className="text-[10px] text-slate-400 font-medium tracking-wide">
                  {log.time} • <span className="uppercase text-slate-500 font-bold">{log.id}</span>
                </p>
              </div>
            </div>
            <div className="text-right">
              <p className="text-sm font-black text-slate-900">+Rp {log.amount / 1000}k</p>
              <span className="text-[9px] bg-slate-200 text-slate-600 px-1.5 py-0.5 rounded font-bold uppercase">Paid</span>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default OrderHistory;