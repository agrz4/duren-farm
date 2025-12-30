import React, { useState } from 'react';
import Header from './components/Header';
import ProductCard from './components/ProductCard';
import DeliveryTracker from './components/DeliveryTracker';
import { StatsDashboard, OrderHistory } from './components/StatsDashboard';
import type { Product, OrderLog } from './types';
import { MdOutlineInventory2 } from 'react-icons/md';

const App: React.FC = () => {
  const [products, setProducts] = useState<Product[]>([
    { id: 1, name: "Musang King", stock: 12, total: 30, price: 150000, harvestTime: "05:30" },
    { id: 2, name: "Durian Bawor", stock: 5, total: 20, price: 120000, harvestTime: "06:15" }
  ]);
  const [revenue, setRevenue] = useState(0);
  const [logs, setLogs] = useState<OrderLog[]>([]);
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
        amount: p.price
      }, ...logs]);
    }
  };

  const handleAddStock = (id: number) => {
    setProducts(prev => prev.map(p => p.id === id ? { ...p, stock: p.stock + 1, total: p.total + 1 } : p));
  };

  return (
    <div className="min-h-screen bg-[#F8FAFC] p-4 md:p-8 space-y-8">
      <div className="max-w-4xl mx-auto space-y-10">
        <Header />
        <StatsDashboard revenue={revenue} sold={logs.length} />
        
        <section className="space-y-6">
          <h2 className="flex items-center gap-2 text-lg font-bold text-slate-800 px-2">
            <MdOutlineInventory2 className="text-emerald-600" /> Stok Hari Ini
          </h2>
          <div className="grid md:grid-cols-2 gap-6">
            {products.map(p => (
              <ProductCard key={p.id} product={p} onBuy={handleBuy} onAddStock={handleAddStock} />
            ))}
          </div>
        </section>

        <DeliveryTracker currentStatus={orderStatus} onUpdateStatus={() => setOrderStatus(s => (s + 1) % 4)} />
        <OrderHistory logs={logs} />
      </div>
    </div>
  );
};

export default App;