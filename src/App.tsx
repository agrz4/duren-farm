import React, { useState } from 'react';
import Sidebar from './components/Sidebar';
import StatsBanner from './components/StatsBanner';
import { StatsDashboard } from './components/StatsDashboard';
import OrderHistory from './components/OrderHistory';
import ProductCard from './components/ProductCard';
import DeliveryTracker from './components/DeliveryTracker';
import type { Product, OrderLog } from './types';
import { MdOutlineInventory2 } from 'react-icons/md';

const App: React.FC = () => {
  const [products, setProducts] = useState<Product[]>([
    { id: 1, name: "Musang King", stock: 12, total: 30, price: 150000, harvestTime: "05:30" },
    { id: 2, name: "Durian Bawor", stock: 5, total: 20, price: 120000, harvestTime: "06:15" }
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
    <div className="flex min-h-screen bg-[#F3F4F6]">
      <Sidebar />

      <main className="flex-1 p-8 overflow-y-auto">
        {/* Top Navigation */}
        <div className="flex justify-between items-center mb-8">
          <div>
            <h1 className="text-3xl font-bold text-slate-800">Good morning, Liz 👋</h1>
            <p className="text-slate-400 text-sm">Time to rise up for today's harvest</p>
          </div>
          <div className="flex items-center gap-6">
            <div className="text-right">
              <p className="text-[10px] font-bold text-slate-400 uppercase">Your balance</p>
              <p className="text-xl font-bold text-emerald-600">$566.55</p>
            </div>
            <img src="https://ui-avatars.com/api/?name=Liz+Farmer&background=random" className="w-12 h-12 rounded-2xl border-2 border-white shadow-sm" alt="profile" />
          </div>
        </div>

        {/* Dashboard Canvas */}
        <div className="bg-white rounded-[3rem] p-10 shadow-sm min-h-screen">
          <div className="flex justify-between items-center mb-10">
            <h2 className="text-2xl font-bold flex items-center gap-3">
              <span className="bg-emerald-900 p-2 rounded-xl text-white text-lg leading-none">■</span>
              Dashboard
            </h2>
            <div className="flex gap-4">
              <select className="bg-slate-50 border-none rounded-2xl px-6 py-3 text-sm font-semibold outline-none">
                <option>This Year</option>
              </select>
              <button className="bg-emerald-600 text-white px-6 py-3 rounded-2xl text-sm font-bold shadow-lg shadow-emerald-100">
                Download Report
              </button>
            </div>
          </div>

          <div className="space-y-8">
            <StatsBanner />
            <StatsDashboard revenue={revenue} sold={logs.length} />

            <div className="grid grid-cols-12 gap-8">
              {/* Main Content Area */}
              <div className="col-span-12 lg:col-span-8 space-y-8">

                {/* Products Section */}
                <section className="bg-white border border-slate-50 rounded-[2.5rem] p-8 shadow-sm">
                  <div className="flex justify-between items-start mb-6">
                    <h3 className="text-xl font-bold flex items-center gap-2">
                      <MdOutlineInventory2 className="text-emerald-600" /> Stok Hari Ini
                    </h3>
                  </div>
                  <div className="grid md:grid-cols-2 gap-6">
                    {products.map(p => (
                      <ProductCard key={p.id} product={p} onBuy={handleBuy} onAddStock={handleAddStock} />
                    ))}
                  </div>
                </section>

                <OrderHistory logs={logs} />
              </div>

              {/* Sidebar Content Area (Right) */}
              <div className="col-span-12 lg:col-span-4 space-y-6">
                {/* Promo/Info Card */}
                <div className="bg-orange-500 rounded-[2.5rem] p-8 text-white relative overflow-hidden group h-48">
                  <p className="text-lg font-bold relative z-10">Need more information?</p>
                  <p className="text-xs opacity-80 mt-2 relative z-10">Present information in a visually appealing way.</p>
                  <button className="mt-6 bg-white text-orange-600 px-6 py-2 rounded-full text-xs font-bold relative z-10">See more &gt;</button>
                  <div className="absolute top-0 right-0 w-full h-full bg-black/10 group-hover:bg-transparent transition-all"></div>
                </div>

                <div className="bg-white border border-slate-50 rounded-[2.5rem] p-8 shadow-sm">
                  <DeliveryTracker currentStatus={orderStatus} onUpdateStatus={() => setOrderStatus(s => (s + 1) % 4)} />
                </div>

                {/* Best Seller List */}
                <div className="bg-white border border-slate-50 rounded-[2.5rem] p-8 shadow-sm">
                  <div className="flex justify-between items-center mb-6">
                    <h3 className="font-bold">Best Seller</h3>
                    <span className="text-xl">&gt;</span>
                  </div>
                  <div className="space-y-4">
                    {[1, 2, 3].map(i => (
                      <div key={i} className="flex items-center gap-4 p-2 hover:bg-slate-50 rounded-2xl transition">
                        <div className="w-12 h-12 bg-slate-100 rounded-xl"></div>
                        <div>
                          <p className="text-sm font-bold text-slate-800">Durian Musang</p>
                          <p className="text-[10px] text-slate-400">4.8/5 ⭐</p>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
};

export default App;