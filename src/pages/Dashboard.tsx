import React, { useState } from 'react';
import StatsBanner from '../components/StatsBanner';
import { StatsDashboard } from '../components/StatsDashboard';
import OrderHistory from '../components/OrderHistory';
import ProductCard from '../components/ProductCard';
import DeliveryTracker from '../components/DeliveryTracker';
import type { Product, OrderLog } from '../types';
import { MdOutlineInventory2 } from 'react-icons/md';
import musangKingImg from '../assets/img/musang king.png';

const Dashboard: React.FC = () => {
    const [products, setProducts] = useState<Product[]>([
        { id: 1, name: "Musang King", stock: 12, total: 30, price: 150000, harvestTime: "05:30", image: musangKingImg },
        { id: 2, name: "Durian Bawor", stock: 5, total: 20, price: 120000, harvestTime: "06:15", image: musangKingImg }
    ]);
    const [revenue, setRevenue] = useState(0);
    const [logs, setLogs] = useState<OrderLog[]>([
        {
            id: "DUR-8821",
            productName: "Musang King Super",
            time: "10:45",
            amount: 150000,
            status: 'Selesai'
        },
        {
            id: "DUR-8819",
            productName: "Durian Bawor",
            time: "09:12",
            amount: 120000,
            status: 'Selesai'
        },
        {
            id: "DUR-8815",
            productName: "Musang King",
            time: "08:30",
            amount: 150000,
            status: 'Selesai'
        },
        {
            id: "DUR-8790",
            productName: "Durian Montong",
            time: "Kemarin, 19:20",
            amount: 95000,
            status: 'Selesai'
        },
        {
            id: "DUR-8788",
            productName: "Black Thorn",
            time: "Kemarin, 16:45",
            amount: 250000,
            status: 'Selesai'
        }
    ]);

    const [orderStatus, setOrderStatus] = useState(1);

    const handleBuy = (id: number) => {
        const p = products.find(prod => prod.id === id);
        if (p && p.stock > 0) {
            setProducts(prev => prev.map(item => item.id === id ? { ...item, stock: item.stock - 1 } : item));
            setRevenue(prev => prev + p.price);
            setLogs([{
                id: Math.random().toString(36).substr(2, 9),
                productName: p.name,
                time: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }),
                amount: p.price,
                status: 'Selesai'
            }, ...logs]);
        }
    };

    const handleAddStock = (id: number) => {
        setProducts(prev => prev.map(p => p.id === id ? { ...p, stock: p.stock + 1, total: p.total + 1 } : p));
    };

    return (
        <div className="flex flex-col gap-8">
            {/* Top Navigation */}
            <div className="flex flex-col md:flex-row justify-between items-end md:items-center gap-4">
                <div>
                    <h1 className="text-3xl font-black text-slate-800 tracking-tight">Good morning, Liz ☀️</h1>
                    <p className="text-slate-400 font-medium text-sm mt-1">Ready to manage your harvest today?</p>
                </div>
                <div className="flex items-center gap-4">
                    <select className="bg-white border border-slate-200 rounded-xl px-4 py-2 text-sm font-bold text-slate-600 outline-none hover:border-emerald-500 transition-colors cursor-pointer">
                        <option>This Year</option>
                    </select>
                    <button className="bg-emerald-600 text-white px-6 py-2.5 rounded-xl text-sm font-bold shadow-lg shadow-emerald-200 hover:bg-emerald-700 transition-all hover:scale-105 active:scale-95">
                        Download Report
                    </button>
                    <div className="w-10 h-10 rounded-xl bg-slate-200 overflow-hidden border-2 border-white shadow-sm ml-2">
                        <img src="https://ui-avatars.com/api/?name=Liz+Farmer&background=random" className="w-full h-full object-cover" alt="profile" />
                    </div>
                </div>
            </div>

            <div className="space-y-6">
                <StatsBanner />
                <StatsDashboard revenue={revenue} sold={logs.length} />

                <div className="grid grid-cols-12 gap-6">
                    {/* Main Content Area */}
                    <div className="col-span-12 lg:col-span-8 space-y-6">

                        {/* Products Section */}
                        <section className="bg-white border border-slate-100 rounded-[2rem] p-6 shadow-sm">
                            <div className="flex justify-between items-center mb-6">
                                <h3 className="text-lg font-bold flex items-center gap-2 text-slate-800">
                                    <div className="p-2 bg-emerald-50 rounded-lg text-emerald-600">
                                        <MdOutlineInventory2 size={20} />
                                    </div>
                                    Stok Hari Ini
                                </h3>
                                <button className="text-xs font-bold text-emerald-600 hover:text-emerald-700">View All</button>
                            </div>
                            <div className="grid md:grid-cols-2 gap-4">
                                {products.map(p => (
                                    <ProductCard key={p.id} product={p} onBuy={handleBuy} onAddStock={handleAddStock} />
                                ))}
                            </div>
                        </section>

                        <OrderHistory logs={logs} />
                    </div>

                    {/* Sidebar Content Area (Right) */}
                    <div className="col-span-12 lg:col-span-4 space-y-6">

                        <div className="bg-white border border-slate-100 rounded-[2rem] p-6 shadow-sm">
                            <DeliveryTracker currentStatus={orderStatus} onUpdateStatus={() => setOrderStatus(s => (s + 1) % 4)} />
                        </div>

                        {/* Best Seller List */}
                        <div className="bg-white border border-slate-100 rounded-[2rem] p-6 shadow-sm">
                            <div className="flex justify-between items-center mb-6">
                                <h3 className="font-bold text-slate-800">Best Seller</h3>
                                <button className="w-8 h-8 flex items-center justify-center rounded-full bg-slate-50 text-slate-400 hover:bg-slate-100 hover:text-slate-600 transition-colors">
                                    &gt;
                                </button>
                            </div>
                            <div className="space-y-3">
                                {[1, 2, 3].map(i => (
                                    <div key={i} className="flex items-center gap-4 p-3 hover:bg-slate-50 rounded-2xl transition cursor-pointer group">
                                        <span className="font-black text-slate-300 w-4 group-hover:text-emerald-500 transition-colors">#{i}</span>
                                        <img src={musangKingImg} alt="Best Seller" className="w-10 h-10 rounded-xl object-cover border border-slate-100 shadow-sm" />
                                        <div>
                                            <p className="text-sm font-bold text-slate-800 group-hover:text-emerald-600 transition-colors">Durian Musang</p>
                                            <p className="text-[10px] text-slate-400 font-medium">4.8/5 ⭐ • 1.2k Sold</p>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Dashboard;
