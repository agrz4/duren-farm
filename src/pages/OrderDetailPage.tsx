import React, { useState } from 'react';
import { HiOutlineArrowLeft, HiOutlineShoppingBag, HiOutlineChevronRight } from "react-icons/hi2";
import { MdOutlineAttachMoney, MdOutlineCalendarToday } from "react-icons/md";

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
    return (
        <div className="bg-white rounded-[3rem] p-8 shadow-sm min-h-screen border border-slate-50 animate-in slide-in-from-right-8 duration-500 font-sans">
            {/* Header Detail */}
            <div className="flex items-center gap-4 mb-8">
                <button
                    onClick={onBack}
                    className="p-3 bg-slate-50 hover:bg-slate-200 rounded-2xl text-slate-600 transition-colors duration-200"
                >
                    <HiOutlineArrowLeft size={20} />
                </button>
                <h2 className="text-2xl font-black text-slate-800 tracking-tight">Order #{order.id}</h2>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-8">
                {/* Column 1: Total & Actions (Left in Ref) */}
                <div className="space-y-8">
                    {/* Total Order Card */}
                    <div className="bg-white border border-slate-100 rounded-[2.5rem] p-8 shadow-sm">
                        <div className="flex justify-between items-start mb-6">
                            <p className="text-[10px] font-bold text-slate-400 uppercase tracking-widest">Total Order</p>
                            <span className="text-slate-300">•••</span>
                        </div>
                        <h1 className="text-5xl font-black text-slate-900 tracking-tighter mb-8">
                            Rp {order.total.toLocaleString('id-ID')}
                        </h1>

                        <div className="bg-slate-50 rounded-2xl p-4 flex items-center justify-between mb-8 border border-slate-100">
                            <div className="flex items-center gap-3">
                                <div className="bg-slate-900 text-white px-2 py-1 rounded-md font-bold text-xs uppercase tracking-widest">VISA</div>
                                <span className="text-xs font-bold text-slate-500">•••• 4242</span>
                            </div>
                            <span className="text-[10px] font-black bg-emerald-100 text-emerald-600 px-3 py-1 rounded-full uppercase tracking-widest">
                                Authorized
                            </span>
                        </div>

                        <div className="space-y-3 border-b border-slate-100 pb-8 mb-8">
                            <div className="flex justify-between text-sm font-medium">
                                <span className="text-slate-500">Subtotal</span>
                                <span className="text-slate-900">Rp {(order.total - 15000).toLocaleString('id-ID')}</span>
                            </div>
                            <div className="flex justify-between text-sm font-medium">
                                <span className="text-slate-500">Shipping Fee</span>
                                <span className="text-slate-900">Rp 15.000</span>
                            </div>
                            <div className="flex justify-between text-sm font-medium">
                                <span className="text-slate-500">Application Fee</span>
                                <span className="text-slate-900">Rp 2.000</span>
                            </div>
                        </div>

                        <div className="space-y-3">
                            <button className="w-full bg-slate-900 text-white py-4 rounded-2xl font-black text-xs uppercase tracking-widest hover:bg-slate-800 transition-colors shadow-lg">
                                Cetak Invoice
                            </button>
                            <button className="w-full bg-white border border-slate-200 text-slate-600 py-4 rounded-2xl font-black text-xs uppercase tracking-widest hover:bg-slate-50 transition-colors">
                                Refund Order
                            </button>
                        </div>
                    </div>

                    {/* Customer Card (Bottom Left in Ref) */}
                    <div className="bg-white border border-slate-100 rounded-[2.5rem] p-8 shadow-sm flex items-center gap-6">
                        <div className="w-16 h-16 bg-emerald-100 text-emerald-600 rounded-2xl flex items-center justify-center text-2xl font-bold shadow-inner">
                            {order.customer.charAt(0)}
                        </div>
                        <div>
                            <h3 className="font-bold text-xl text-slate-900">{order.customer}</h3>
                            <div className="flex gap-4 mt-2">
                                <div>
                                    <p className="text-[9px] text-slate-400 font-bold uppercase tracking-widest">Total Spent</p>
                                    <p className="text-sm font-bold text-slate-800">Rp 4.2jt</p>
                                </div>
                                <div className="w-[1px] bg-slate-100 my-1"></div>
                                <div>
                                    <p className="text-[9px] text-slate-400 font-bold uppercase tracking-widest">Joined</p>
                                    <p className="text-sm font-bold text-slate-800">Dec 2024</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Column 2: Order Details (Middle in Ref) */}
                <div className="bg-white border border-slate-100 rounded-[2.5rem] p-8 shadow-sm h-fit">
                    <h3 className="font-bold text-xl text-slate-900 mb-8">Order Details</h3>

                    <div className="space-y-6">
                        {/* Item 1 */}
                        <div className="flex gap-4">
                            <div className="w-12 h-12 bg-slate-50 rounded-xl flex items-center justify-center text-xl border border-slate-100 shrink-0">
                                🍈
                            </div>
                            <div className="flex-1">
                                <p className="font-bold text-slate-800 text-sm leading-tight">{order.items}</p>
                                <p className="text-xs text-slate-400 mt-1">1.8 kg • Fresh Harvest</p>
                            </div>
                            <p className="font-bold text-slate-800 text-sm">Rp {order.total.toLocaleString('id-ID')}</p>
                        </div>

                        {/* Mock Item 2 for Visual Density */}
                        <div className="flex gap-4">
                            <div className="w-12 h-12 bg-slate-50 rounded-xl flex items-center justify-center text-xl border border-slate-100 shrink-0">
                                📦
                            </div>
                            <div className="flex-1">
                                <p className="font-bold text-slate-800 text-sm leading-tight">Premium Packaging</p>
                                <p className="text-xs text-slate-400 mt-1">Box & Styrofoam</p>
                            </div>
                            <p className="font-bold text-slate-800 text-sm">Free</p>
                        </div>

                        <div className="w-full h-[1px] bg-slate-100 my-4"></div>

                        {/* Discount Row */}
                        <div className="flex gap-4 items-center">
                            <div className="w-12 h-12 bg-orange-50 text-orange-500 rounded-xl flex items-center justify-center text-lg font-bold shrink-0">
                                %
                            </div>
                            <div className="flex-1">
                                <p className="font-bold text-slate-800 text-sm">Voucher Diskon</p>
                                <p className="text-xs text-slate-400 mt-1">DURENLOVER</p>
                            </div>
                            <p className="font-bold text-emerald-500 text-sm">-Rp 15.000</p>
                        </div>

                        {/* Driver Tip Row */}
                        <div className="flex gap-4 items-center">
                            <div className="w-12 h-12 bg-blue-50 text-blue-500 rounded-xl flex items-center justify-center text-lg font-bold shrink-0">
                                🛵
                            </div>
                            <div className="flex-1">
                                <p className="font-bold text-slate-800 text-sm">Tip Kurir</p>
                                <p className="text-xs text-slate-400 mt-1">100% untuk driver</p>
                            </div>
                            <p className="font-bold text-slate-800 text-sm">Rp 10.000</p>
                        </div>
                    </div>
                </div>

                {/* Column 3: Destination/Map (Right in Ref) */}
                <div className="space-y-8">
                    {/* Map Card */}
                    <div className="bg-white border border-slate-100 rounded-[2.5rem] p-4 shadow-sm relative group overflow-hidden">
                        {/* Mock Map Image/Placeholder */}
                        <div className="w-full h-48 bg-slate-100 rounded-[1.5rem] relative overflow-hidden">
                            <div className="absolute inset-0 opacity-50 bg-[radial-gradient(#cbd5e1_1px,transparent_1px)] [background-size:16px_16px]"></div>
                            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-8 h-8 bg-blue-500 rounded-full border-4 border-white shadow-lg shadow-blue-500/30 animate-pulse"></div>
                            <div className="absolute top-4 right-4 bg-white/80 backdrop-blur-md px-3 py-1 rounded-lg text-[10px] font-bold uppercase tracking-widest text-slate-600 shadow-sm">
                                On Delivery
                            </div>
                        </div>

                        <div className="mt-6 px-4 pb-4">
                            <h3 className="font-bold text-lg text-slate-900">Jakarta Selatan</h3>
                            <p className="text-xs text-slate-400 font-medium mt-1">Jl. Kebun Durian No. 45, 12345</p>

                            <div className="mt-6 flex justify-between items-end">
                                <div>
                                    <p className="text-[9px] text-slate-400 font-bold uppercase tracking-widest">Distance</p>
                                    <p className="font-bold text-slate-800 mt-1">4.2 km</p>
                                </div>
                                <div className="text-right">
                                    <p className="text-4xl font-black text-slate-900 tracking-tighter">4.8</p>
                                    <div className="flex text-orange-400 text-xs gap-0.5 mt-1 justify-end">
                                        {'★★★★★'.split('').map((c, i) => <span key={i}>{c}</span>)}
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Transaction Split Card (Bottom Right in Ref - adapted for Driver Info) */}
                    <div className="bg-slate-900 text-white rounded-[2.5rem] p-8 shadow-xl">
                        <h3 className="font-bold text-lg mb-6">Delivery Partner</h3>
                        <div className="flex justify-between items-center mb-8">
                            <div className="flex items-center gap-4">
                                <div className="w-12 h-12 bg-white/10 rounded-xl flex items-center justify-center text-xl">
                                    👨‍✈️
                                </div>
                                <div>
                                    <p className="font-bold text-sm">Budi Kurir</p>
                                    <p className="text-xs text-slate-400 mt-1">ID: #DRV-8821</p>
                                </div>
                            </div>
                            <span className="bg-emerald-500 text-[10px] font-black px-2 py-1 rounded-md uppercase tracking-widest">Active</span>
                        </div>

                        <div className="bg-white/5 rounded-2xl p-4 space-y-3">
                            <div className="flex justify-between text-xs">
                                <span className="text-slate-400">Driver Fee</span>
                                <span className="font-bold">Rp 15.000</span>
                            </div>
                            <div className="flex justify-between text-xs">
                                <span className="text-slate-400">Tip</span>
                                <span className="font-bold">Rp 10.000</span>
                            </div>
                            <div className="w-full h-[1px] bg-white/10 my-2"></div>
                            <div className="flex justify-between text-sm">
                                <span className="text-slate-300 font-medium">Total Earnings</span>
                                <span className="font-bold text-emerald-400">Rp 25.000</span>
                            </div>
                        </div>
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