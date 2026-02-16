import React, { useState, useEffect } from 'react';
import { HiOutlineArrowLeft, HiOutlineClipboard, HiCheck } from "react-icons/hi2";
import musangKingImg from '../assets/img/musang king.png';

// Tipe data untuk Order
interface Order {
    id: string;
    customer: string;
    date: string;
    time: string;
    status: 'Selesai' | 'Proses' | 'Dikirim' | 'Batal' | 'Menunggu Pembayaran';
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
    { id: 'DUR-9925', customer: 'Andi Wijaya', date: '10 Jan 2026', time: '10:00 AM', status: 'Menunggu Pembayaran', total: 175000, items: 'Montong Palu' },
];

const TABS = [
    { label: 'All', value: 'all' },
    { label: 'Waiting Payment', value: 'Menunggu Pembayaran' },
    { label: 'Order On Process', value: 'Proses' },
    { label: 'In Delivery', value: 'Dikirim' },
    { label: 'Complete Order', value: 'Selesai' },
    { label: 'Refund/Cancel', value: 'Batal' }
];

// Component Halaman Depan: List Pesanan
const OrderListView: React.FC<{ onSelectOrder: (order: Order) => void, onBack: () => void }> = ({ onSelectOrder, onBack }) => {
    const [activeTab, setActiveTab] = useState('all');
    const [animateItems, setAnimateItems] = useState(false);

    // Filter logic
    const filteredOrders = activeTab === 'all'
        ? MOCK_ORDERS
        : MOCK_ORDERS.filter(o => o.status === activeTab);

    // Trigger animation on tab change
    useEffect(() => {
        setAnimateItems(false);
        const timer = setTimeout(() => setAnimateItems(true), 50);
        return () => clearTimeout(timer);
    }, [activeTab]);

    return (
        <div className="bg-white min-h-screen font-sans flex text-slate-800">
            {/* Main Content */}
            <div className="w-full max-w-6xl mx-auto p-6 md:p-10">
                {/* Header & Tabs */}
                <div className="mb-12">
                    <div className="flex items-center gap-4 mb-8">
                        <button
                            onClick={onBack}
                            className="xl:hidden p-2 bg-slate-50 hover:bg-slate-200 rounded-xl text-slate-600 transition-colors"
                        >
                            <HiOutlineArrowLeft size={20} />
                        </button>
                        <h2 className="text-2xl font-bold">Order List</h2>
                    </div>

                    <div className="flex gap-8 border-b border-slate-100 overflow-x-auto pb-1 no-scrollbar scroll-smooth">
                        {TABS.map((tab) => (
                            <button
                                key={tab.value}
                                onClick={() => setActiveTab(tab.value)}
                                className={`text-sm font-bold whitespace-nowrap pb-4 border-b-2 transition-all duration-300 ${activeTab === tab.value
                                    ? 'text-slate-900 border-slate-900 scale-105'
                                    : 'text-slate-400 border-transparent hover:text-slate-600'
                                    }`}
                            >
                                {tab.label === 'Waiting Payment' ? (
                                    <span>Waiting Payment <span className={`ml-1 px-1.5 py-0.5 rounded-full text-[10px] transition-colors ${activeTab === tab.value ? 'bg-slate-900 text-white' : 'bg-slate-100 text-slate-600'}`}>1</span></span>
                                ) : tab.label}
                            </button>
                        ))}
                    </div>
                </div>

                {/* Orders List */}
                <div className="space-y-6">
                    {filteredOrders.length === 0 ? (
                        <div className="text-center py-20 text-slate-400 animate-pulse">
                            <p>No orders found in this category.</p>
                        </div>
                    ) : (
                        filteredOrders.map((order, index) => (
                            <div
                                key={order.id}
                                className={`group transform transition-all duration-500 ${animateItems ? 'translate-y-0 opacity-100' : 'translate-y-4 opacity-0'}`}
                                style={{ transitionDelay: `${index * 100}ms` }}
                            >
                                {/* Order Item Card */}
                                <div
                                    onClick={() => onSelectOrder(order)}
                                    className="bg-white border border-slate-100 rounded-3xl p-4 md:p-6 hover:shadow-xl hover:border-slate-200 transition-all cursor-pointer flex flex-col md:flex-row gap-6 md:gap-8 items-start md:items-center group"
                                >
                                    {/* Product Image */}
                                    <div className="w-24 h-28 bg-slate-50 rounded-xl flex-shrink-0 relative overflow-hidden border border-slate-100 shadow-sm group-hover:shadow-md transition-all">
                                        <img src={musangKingImg} alt={order.items} className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-700 ease-out" />

                                        {/* Status Badge on Image */}
                                        <div className="absolute top-2 left-2">
                                            <span className={`text-[10px] font-bold px-2 py-1 rounded-full shadow-sm backdrop-blur-md ${order.status === 'Selesai' ? 'bg-emerald-100/90 text-emerald-700' :
                                                order.status === 'Proses' ? 'bg-amber-100/90 text-amber-700' :
                                                    order.status === 'Dikirim' ? 'bg-blue-100/90 text-blue-700' :
                                                        'bg-slate-100/90 text-slate-700'
                                                }`}>
                                                {order.status}
                                            </span>
                                        </div>
                                    </div>

                                    {/* Info */}
                                    <div className="flex-1 w-full text-left">
                                        <div className="flex justify-between items-start">
                                            <p className="text-[11px] font-bold text-slate-400 mb-1">Harvest Season Collection</p>
                                            <span className="text-[10px] text-slate-400 font-medium group-hover:text-slate-600 transition-colors">{order.date}</span>
                                        </div>
                                        <h4 className="text-lg font-bold text-slate-900 mb-4 group-hover:text-emerald-800 transition-colors">{order.items}</h4>

                                        <div className="flex items-center gap-4 text-xs font-bold text-slate-500">
                                            <span className="bg-slate-50 px-2 py-1 rounded-lg border border-slate-100">1.8 kg</span>
                                            <span className="bg-slate-50 px-2 py-1 rounded-lg border border-slate-100">Super Grade</span>
                                        </div>
                                    </div>

                                    {/* Price / Qty */}
                                    <div className="border border-slate-200 px-6 py-3 rounded-2xl bg-slate-50 group-hover:bg-emerald-50 group-hover:border-emerald-100 group-hover:text-emerald-700 transition-all self-center md:self-center">
                                        <span className="font-bold text-sm">
                                            Rp {(order.total).toLocaleString('id-ID')}
                                        </span>
                                    </div>
                                </div>
                            </div>
                        ))
                    )}
                </div>
            </div>
        </div>
    );
};



// Component Detail: Tampilan Detail Pesanan (Code Baru dengan Interaksi)
const DetailView: React.FC<{ order: Order, onBack: () => void }> = ({ order, onBack }) => {
    const [copied, setCopied] = useState(false);

    const handleCopy = () => {
        navigator.clipboard.writeText(order.id);
        setCopied(true);
        setTimeout(() => setCopied(false), 2000);
    };

    // Calculate progress step based on status
    const getStepStatus = () => {
        if (order.status === 'Selesai') return 4;
        if (order.status === 'Dikirim') return 3;
        if (order.status === 'Proses') return 2;
        if (order.status === 'Menunggu Pembayaran') return 1;
        return 0; // Batal
    };
    const currentStep = getStepStatus();

    return (
        <div className="bg-white rounded-[3rem] p-8 shadow-sm min-h-screen border border-slate-50 animate-in slide-in-from-right-8 duration-500 font-sans">
            {/* Header Detail */}
            <div className="flex items-center gap-4 mb-8">
                <button
                    onClick={onBack}
                    className="p-3 bg-slate-50 hover:bg-slate-200 rounded-2xl text-slate-600 transition-colors duration-200 hover:scale-105 active:scale-95"
                >
                    <HiOutlineArrowLeft size={20} />
                </button>
                <div className="flex items-center gap-3">
                    <h2 className="text-2xl font-black text-slate-800 tracking-tight">Order #{order.id}</h2>
                    <button
                        onClick={handleCopy}
                        className="p-2 rounded-xl text-slate-400 hover:bg-slate-100 hover:text-slate-600 transition-colors relative"
                        title="Copy Order ID"
                    >
                        {copied ? <HiCheck className="text-emerald-500" size={18} /> : <HiOutlineClipboard size={18} />}
                        {copied && (
                            <span className="absolute -top-8 left-1/2 -translate-x-1/2 bg-slate-800 text-white text-[10px] py-1 px-2 rounded-md animate-bounce">
                                Copied!
                            </span>
                        )}
                    </button>
                </div>
            </div>

            {/* Status Timeline - Valid for non-cancelled orders */}
            {order.status !== 'Batal' && (
                <div className="mb-12 px-4 overflow-x-auto pb-4 no-scrollbar">
                    <div className="flex items-center min-w-[600px] justify-between relative">
                        {/* Progress Bar Background */}
                        <div className="absolute left-0 top-1/2 -translate-y-1/2 w-full h-1 bg-slate-100 rounded-full -z-10"></div>
                        {/* Progress Bar Active */}
                        <div
                            className="absolute left-0 top-1/2 -translate-y-1/2 h-1 bg-emerald-500 rounded-full -z-10 transition-all duration-1000 ease-out"
                            style={{ width: `${((currentStep - 1) / 3) * 100}%` }}
                        ></div>

                        {['Payment', 'Processed', 'Shipped', 'Delivered'].map((step, idx) => {
                            const stepNum = idx + 1;
                            const isActive = stepNum <= currentStep;
                            const isCurrent = stepNum === currentStep;

                            return (
                                <div key={step} className="flex flex-col items-center gap-3 group cursor-default">
                                    <div className={`w-8 h-8 rounded-full flex items-center justify-center border-4 transition-all duration-500 ${isActive
                                        ? 'bg-emerald-500 border-white shadow-lg shadow-emerald-200 scale-110'
                                        : 'bg-white border-slate-200 text-slate-300'
                                        } ${isCurrent ? 'animate-pulse' : ''}`}>
                                        {isActive && <HiCheck className="text-white text-xs font-bold" />}
                                    </div>
                                    <span className={`text-xs font-bold transition-colors ${isActive ? 'text-slate-800' : 'text-slate-400'}`}>
                                        {step}
                                    </span>
                                </div>
                            );
                        })}
                    </div>
                </div>
            )}

            <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-8">
                {/* Column 1: Total & Actions (Left in Ref) */}
                <div className="space-y-8 animate-in slide-in-from-right-8 duration-700 delay-0 fill-mode-backwards">
                    {/* Total Order Card */}
                    <div className="bg-white border border-slate-100 rounded-[2.5rem] p-8 shadow-sm hover:shadow-md transition-shadow">
                        <div className="flex justify-between items-start mb-6">
                            <p className="text-[10px] font-bold text-slate-400 uppercase tracking-widest">Total Order</p>
                            <button className="text-slate-300 hover:text-slate-600 transition-colors">•••</button>
                        </div>
                        <h1 className="text-5xl font-black text-slate-900 tracking-tighter mb-8">
                            Rp {order.total.toLocaleString('id-ID')}
                        </h1>

                        <div className="bg-slate-50 rounded-2xl p-4 flex items-center justify-between mb-8 border border-slate-100 group cursor-pointer hover:border-slate-300 transition-colors">
                            <div className="flex items-center gap-3">
                                <div className="bg-slate-900 text-white px-2 py-1 rounded-md font-bold text-xs uppercase tracking-widest group-hover:scale-105 transition-transform">VISA</div>
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
                            <button className="w-full bg-slate-900 text-white py-4 rounded-2xl font-black text-xs uppercase tracking-widest hover:bg-slate-800 active:scale-95 transition-all shadow-lg hover:shadow-xl">
                                Cetak Invoice
                            </button>
                            <button className="w-full bg-white border border-slate-200 text-slate-600 py-4 rounded-2xl font-black text-xs uppercase tracking-widest hover:bg-slate-50 hover:border-slate-300 transition-all">
                                Refund Order
                            </button>
                        </div>
                    </div>

                    {/* Customer Card (Bottom Left in Ref) */}
                    <div className="bg-white border border-slate-100 rounded-[2.5rem] p-8 shadow-sm flex items-center gap-6 hover:translate-x-2 transition-transform duration-300">
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
                <div className="bg-white border border-slate-100 rounded-[2.5rem] p-8 shadow-sm h-fit animate-in slide-in-from-right-8 duration-700 delay-100 fill-mode-backwards">
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
                <div className="space-y-8 animate-in slide-in-from-right-8 duration-700 delay-200 fill-mode-backwards">
                    {/* Map Card */}
                    <div className="bg-white border border-slate-100 rounded-[2.5rem] p-4 shadow-sm relative group overflow-hidden hover:shadow-xl transition-all duration-500">
                        {/* Mock Map Image/Placeholder */}
                        <div className="w-full h-48 bg-slate-100 rounded-[1.5rem] relative overflow-hidden group-hover:scale-[1.02] transition-transform duration-700">
                            <div className="absolute inset-0 opacity-50 bg-[radial-gradient(#cbd5e1_1px,transparent_1px)] [background-size:16px_16px]"></div>

                            {/* Animated Pulse Marker */}
                            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
                                <span className="relative flex h-8 w-8">
                                    <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-blue-400 opacity-75"></span>
                                    <span className="relative inline-flex rounded-full h-8 w-8 bg-blue-500 border-4 border-white shadow-lg shadow-blue-500/30"></span>
                                </span>
                            </div>

                            <div className="absolute top-4 right-4 bg-white/90 backdrop-blur-md px-3 py-1.5 rounded-xl text-[10px] font-bold uppercase tracking-widest text-slate-600 shadow-sm border border-slate-100 flex items-center gap-2">
                                <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse"></span>
                                On Delivery
                            </div>
                        </div>

                        <div className="mt-6 px-4 pb-4">
                            <div className="flex justify-between items-start">
                                <div>
                                    <h3 className="font-bold text-lg text-slate-900 group-hover:text-blue-600 transition-colors">Jakarta Selatan</h3>
                                    <p className="text-xs text-slate-400 font-medium mt-1">Jl. Kebun Durian No. 45, 12345</p>
                                </div>
                                <button className="p-2 bg-slate-50 rounded-full hover:bg-blue-50 hover:text-blue-500 transition-colors">
                                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="w-5 h-5">
                                        <path fillRule="evenodd" d="M12.232 4.232a2.5 2.5 0 013.536 3.536l-8.5 8.5a2.5 2.5 0 01-3.536 0l-1.5-1.5a2.5 2.5 0 010-3.536l8.5-8.5zm-2.828 2.828l-5.415 5.414 1.415 1.414 5.414-5.414-1.414-1.414z" clipRule="evenodd" />
                                    </svg>
                                </button>
                            </div>

                            <div className="mt-6 flex justify-between items-end border-t border-slate-50 pt-4">
                                <div>
                                    <p className="text-[9px] text-slate-400 font-bold uppercase tracking-widest">Distance</p>
                                    <p className="font-bold text-slate-800 mt-1">4.2 km</p>
                                </div>
                                <div className="text-right">
                                    <p className="text-4xl font-black text-slate-900 tracking-tighter group-hover:scale-110 transition-transform origin-right">4.8</p>
                                    <div className="flex text-orange-400 text-xs gap-0.5 mt-1 justify-end">
                                        {'★★★★★'.split('').map((c, i) => <span key={i} className="animate-pulse" style={{ animationDelay: `${i * 100}ms` }}>{c}</span>)}
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