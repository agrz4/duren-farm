import React from 'react';
import { HiOutlineArrowLeft, HiOutlinePrinter, HiOutlineTruck } from "react-icons/hi2";
import { MdOutlineCheckCircle, MdOutlineLocationOn, MdOutlinePhone } from "react-icons/md";

interface OrderDetailProps {
    onBack: () => void;
}

const OrderDetailPage: React.FC<OrderDetailProps> = ({ onBack }) => {
    const steps = [
        { title: 'Pesanan Dibuat', time: '08:00 AM', desc: 'Pembeli melakukan pembayaran', status: 'completed' },
        { title: 'Durian Dipanen', time: '08:30 AM', desc: 'Durian Musang King dipetik segar', status: 'completed' },
        { title: 'Pengemasan', time: '09:15 AM', desc: 'Vacuum seal & styrofoam box', status: 'current' },
        { title: 'Dalam Perjalanan', time: '-', desc: 'Kurir menuju lokasi tujuan', status: 'pending' },
    ];

    return (
        <div className="bg-white rounded-[3rem] p-10 shadow-sm min-h-screen border border-slate-50">
            {/* Header Detail */}
            <div className="flex justify-between items-center mb-10">
                <div className="flex items-center gap-4">
                    <button
                        onClick={onBack}
                        className="p-3 bg-slate-50 hover:bg-slate-200 rounded-2xl text-slate-600 transition-colors duration-200"
                    >
                        <HiOutlineArrowLeft size={20} />
                    </button>
                    <div>
                        <h2 className="text-2xl font-bold text-slate-800 tracking-tight">Detail Pesanan #DUR-9921</h2>
                        <p className="text-sm text-slate-400 font-medium">12 Jan 2026, 08:00 AM</p>
                    </div>
                </div>
                <button className="flex items-center gap-2 px-6 py-3 border border-slate-100 rounded-2xl text-sm font-bold text-slate-600 hover:bg-slate-50 hover:border-slate-200 transition-all">
                    <HiOutlinePrinter size={20} /> Cetak Invoice
                </button>
            </div>

            <div className="grid grid-cols-12 gap-8">
                {/* Kolom Kiri: Info Produk & Pelanggan */}
                <div className="col-span-12 lg:col-span-7 space-y-8">

                    {/* Kartu Info Pelanggan */}
                    <div className="bg-slate-50 p-8 rounded-[2.5rem] grid grid-cols-1 md:grid-cols-2 gap-8 border border-slate-100">
                        <div className="space-y-4">
                            <p className="text-[10px] font-bold text-slate-400 uppercase tracking-widest">Customer</p>
                            <div className="flex items-center gap-3">
                                <div className="w-10 h-10 bg-emerald-600 rounded-xl flex items-center justify-center text-white font-bold shadow-lg shadow-emerald-100">
                                    L
                                </div>
                                <span className="font-bold text-slate-800 text-lg">Liz Farmer</span>
                            </div>
                            <div className="flex items-center gap-2 text-sm text-slate-500 font-medium">
                                <MdOutlinePhone className="text-emerald-600" size={18} /> +62 812 3456 7890
                            </div>
                        </div>

                        <div className="space-y-4">
                            <p className="text-[10px] font-bold text-slate-400 uppercase tracking-widest">Shipping Address</p>
                            <div className="flex gap-2 text-sm text-slate-600 leading-relaxed font-medium">
                                <MdOutlineLocationOn size={24} className="text-emerald-600 shrink-0" />
                                Jl. Kebun Durian No. 45, Jakarta Selatan, 12345
                            </div>
                        </div>
                    </div>

                    {/* Tabel Ringkasan Item */}
                    <div className="space-y-4">
                        <h3 className="font-bold text-slate-800 text-lg px-2 tracking-tight">Ringkasan Item</h3>
                        <div className="bg-white border border-slate-100 rounded-[2.5rem] overflow-hidden">
                            <div className="p-6 flex items-center justify-between border-b border-slate-50">
                                <div className="flex items-center gap-4">
                                    <div className="w-16 h-16 bg-slate-50 rounded-2xl flex items-center justify-center text-2xl border border-slate-100">
                                        🍈
                                    </div>
                                    <div>
                                        <p className="font-bold text-slate-800">Musang King Super</p>
                                        <p className="text-xs text-slate-400 font-medium mt-1 uppercase tracking-wider">1.8 kg • Fresh Harvest</p>
                                    </div>
                                </div>
                                <div className="text-right">
                                    <p className="font-black text-slate-800">Rp 150.000</p>
                                    <p className="text-xs text-slate-400 font-bold uppercase mt-1">Qty: 1</p>
                                </div>
                            </div>
                            <div className="p-6 bg-slate-50/50 flex justify-between items-center px-8">
                                <span className="font-bold text-slate-500 text-sm uppercase tracking-widest">Total Bayar</span>
                                <span className="text-2xl font-black text-emerald-600 tracking-tighter">Rp 150.000</span>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Kolom Kanan: Delivery Tracking Timeline */}
                <div className="col-span-12 lg:col-span-5">
                    <div className="bg-slate-900 rounded-[3rem] p-8 text-white min-h-full shadow-2xl relative overflow-hidden">
                        {/* Dekorasi Cahaya */}
                        <div className="absolute top-0 right-0 w-32 h-32 bg-emerald-500/10 rounded-full blur-3xl"></div>

                        <div className="flex items-center gap-3 mb-12 relative z-10">
                            <div className="p-2.5 bg-emerald-500 rounded-2xl text-slate-900 shadow-lg shadow-emerald-500/20">
                                <HiOutlineTruck size={24} />
                            </div>
                            <div>
                                <h3 className="text-lg font-bold tracking-tight">Lacak Status</h3>
                                <p className="text-[10px] text-emerald-400 font-bold uppercase tracking-widest">Sameday Delivery</p>
                            </div>
                        </div>

                        <div className="space-y-10 relative">
                            {/* Garis Vertikal */}
                            <div className="absolute left-[1.2rem] top-2 bottom-2 w-[2px] bg-slate-800 shadow-inner"></div>

                            {steps.map((step, i) => (
                                <div key={i} className="flex gap-6 relative z-10 group">
                                    <div className={`w-10 h-10 rounded-full flex items-center justify-center border-4 border-slate-900 shrink-0 transition-all duration-300
                    ${step.status === 'completed' ? 'bg-emerald-500 text-slate-900 shadow-[0_0_10px_rgba(16,185,129,0.3)]' :
                                            step.status === 'current' ? 'bg-white text-emerald-600 animate-pulse' :
                                                'bg-slate-800 text-slate-600'}`}
                                    >
                                        {step.status === 'completed' ? <MdOutlineCheckCircle size={20} /> : <span className="text-xs font-black">{i + 1}</span>}
                                    </div>
                                    <div className="flex-1">
                                        <div className="flex items-center justify-between">
                                            <p className={`font-bold text-sm tracking-tight ${step.status === 'pending' ? 'text-slate-600' : 'text-white'}`}>
                                                {step.title}
                                            </p>
                                            <span className="text-[9px] bg-slate-800 text-slate-400 px-2 py-0.5 rounded-md font-black tracking-widest">{step.time}</span>
                                        </div>
                                        <p className="text-[11px] text-slate-500 mt-1 font-medium leading-relaxed uppercase tracking-wider italic">
                                            {step.desc}
                                        </p>
                                    </div>
                                </div>
                            ))}
                        </div>

                        <button className="w-full mt-12 bg-white text-slate-900 py-4 rounded-2xl font-black text-sm uppercase tracking-widest hover:bg-emerald-400 transition-colors shadow-xl">
                            Hubungi Kurir
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default OrderDetailPage;