import React, { useState } from 'react';
import { HiOutlineArrowLeft, HiOutlinePrinter, HiOutlineTruck, HiOutlineShoppingBag, HiOutlineChevronRight } from "react-icons/hi2";
import { MdOutlineCheckCircle, MdOutlineLocationOn, MdOutlinePhone, MdOutlineAttachMoney, MdOutlineCalendarToday } from "react-icons/md";

// Tipe data untuk Order
interface Order {
    id: string;
    customer: string;
    date: string;
    time: string;
    status: 'Selesai' | 'Proses' | 'Dikirim' | 'Batal';
    total: number;
    items: string;
}

interface OrderDetailProps {
    onBack: () => void;
}

// Mock Data Pesanan
const MOCK_ORDERS: Order[] = [
    { id: 'DUR-9921', customer: 'Liz Farmer', date: '12 Jan 2026', time: '08:00 AM', status: 'Selesai', total: 150000, items: 'Musang King Super' },
    { id: 'DUR-9922', customer: 'Budi Santoso', date: '12 Jan 2026', time: '09:30 AM', status: 'Proses', total: 250000, items: 'Bawor Banyumas, Durian Montong' },
    { id: 'DUR-9923', customer: 'Siti Aminah', date: '11 Jan 2026', time: '04:15 PM', status: 'Dikirim', total: 125000, items: 'Bawor Banyumas' },
    { id: 'DUR-9924', customer: 'Rudi Hermawan', date: '11 Jan 2026', time: '02:00 PM', status: 'Batal', total: 85000, items: 'Durian Montong' },
];

// Component Halaman Depan: List Pesanan
const OrderListView: React.FC<{ onSelectOrder: (order: Order) => void, onBack: () => void }> = ({ onSelectOrder, onBack }) => {
    return (
        <div className="bg-white rounded-[3rem] p-10 shadow-sm min-h-screen border border-slate-50">
            {/* Header List */}
            <div className="flex items-center gap-4 mb-10">
                <button
                    onClick={onBack}
                    className="p-3 bg-slate-50 hover:bg-slate-200 rounded-2xl text-slate-600 transition-colors duration-200"
                >
                    <HiOutlineArrowLeft size={20} />
                </button>
                <div>
                    <h2 className="text-3xl font-black text-slate-800 tracking-tight">Daftar Pesanan</h2>
                    <p className="text-sm text-slate-400 font-medium mt-1">Pilih pesanan untuk melihat detail lengkap</p>
                </div>
            </div>

            {/* Grid List Pesanan */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-6">
                {MOCK_ORDERS.map((order) => (
                    <div
                        key={order.id}
                        onClick={() => onSelectOrder(order)}
                        className="group bg-slate-50 hover:bg-white border border-slate-100 p-6 rounded-[2.5rem] cursor-pointer hover:shadow-xl hover:border-emerald-100 transition-all duration-300 relative overflow-hidden"
                    >
                        <div className="flex justify-between items-start mb-6">
                            <div className="flex gap-4 items-center">
                                <div className={`w-14 h-14 rounded-2xl flex items-center justify-center text-2xl shadow-sm ${order.status === 'Selesai' ? 'bg-emerald-100 text-emerald-600' :
                                        order.status === 'Proses' ? 'bg-orange-100 text-orange-600' :
                                            order.status === 'Dikirim' ? 'bg-blue-100 text-blue-600' : 'bg-rose-100 text-rose-600'
                                    }`}>
                                    <HiOutlineShoppingBag />
                                </div>
                                <div>
                                    <h4 className="font-bold text-slate-800 text-lg tracking-tight">{order.id}</h4>
                                    <p className="text-xs text-slate-500 font-medium">{order.customer}</p>
                                </div>
                            </div>
                            <div className={`px-4 py-2 rounded-xl text-[10px] font-black uppercase tracking-widest ${order.status === 'Selesai' ? 'bg-emerald-100 text-emerald-600' :
                                    order.status === 'Proses' ? 'bg-orange-100 text-orange-600' :
                                        order.status === 'Dikirim' ? 'bg-blue-100 text-blue-600' : 'bg-rose-100 text-rose-600'
                                }`}>
                                {order.status}
                            </div>
                        </div>

                        <div className="space-y-3 mb-6">
                            <div className="flex items-center gap-3 text-sm text-slate-500">
                                <MdOutlineCalendarToday className="text-slate-400" size={18} />
                                <span className="font-semibold">{order.date} • {order.time}</span>
                            </div>
                            <div className="flex items-center gap-3 text-sm text-slate-500">
                                <MdOutlineAttachMoney className="text-slate-400" size={18} />
                                <span className="font-bold text-slate-800">Rp {order.total.toLocaleString('id-ID')}</span>
                            </div>
                        </div>

                        <div className="flex justify-between items-center pt-4 border-t border-slate-200/50">
                            <p className="text-xs text-slate-400 font-medium truncate max-w-[200px]">{order.items}</p>
                            <span className="p-2 bg-white rounded-full text-slate-300 group-hover:bg-emerald-500 group-hover:text-white transition-colors shadow-sm">
                                <HiOutlineChevronRight size={16} />
                            </span>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

// Component Detail: Tampilan Detail Pesanan (Code Lama)
const DetailView: React.FC<{ order: Order, onBack: () => void }> = ({ order, onBack }) => {
    const steps = [
        { title: 'Pesanan Dibuat', time: order.time, desc: 'Pembeli melakukan pembayaran', status: 'completed' },
        { title: 'Durian Dipanen', time: '08:30 AM', desc: 'Durian Musang King dipetik segar', status: 'completed' },
        { title: 'Pengemasan', time: '09:15 AM', desc: 'Vacuum seal & styrofoam box', status: 'current' },
        { title: 'Dalam Perjalanan', time: '-', desc: 'Kurir menuju lokasi tujuan', status: 'pending' },
    ];

    return (
        <div className="bg-white rounded-[3rem] p-10 shadow-sm min-h-screen border border-slate-50 animate-in slide-in-from-right-8 duration-500">
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
                        <h2 className="text-2xl font-bold text-slate-800 tracking-tight">Detail Pesanan #{order.id}</h2>
                        <p className="text-sm text-slate-400 font-medium">{order.date}, {order.time}</p>
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
                                    {order.customer.charAt(0)}
                                </div>
                                <span className="font-bold text-slate-800 text-lg">{order.customer}</span>
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
                                        <p className="font-bold text-slate-800">{order.items}</p>
                                        <p className="text-xs text-slate-400 font-medium mt-1 uppercase tracking-wider">1.8 kg • Fresh Harvest</p>
                                    </div>
                                </div>
                                <div className="text-right">
                                    <p className="font-black text-slate-800">Rp {order.total.toLocaleString('id-ID')}</p>
                                    <p className="text-xs text-slate-400 font-bold uppercase mt-1">Qty: 1</p>
                                </div>
                            </div>
                            <div className="p-6 bg-slate-50/50 flex justify-between items-center px-8">
                                <span className="font-bold text-slate-500 text-sm uppercase tracking-widest">Total Bayar</span>
                                <span className="text-2xl font-black text-emerald-600 tracking-tighter">Rp {order.total.toLocaleString('id-ID')}</span>
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

// Main Helper Component: State Handler
const OrderDetailPage: React.FC<OrderDetailProps> = ({ onBack }) => {
    const [selectedOrder, setSelectedOrder] = useState<Order | null>(null);

    // Jika ada pesanan dipilih, tampilkan detail
    if (selectedOrder) {
        return <DetailView order={selectedOrder} onBack={() => setSelectedOrder(null)} />;
    }

    // Default: Tampilkan List Pesanan
    return <OrderListView onSelectOrder={setSelectedOrder} onBack={onBack} />;
};

export default OrderDetailPage;