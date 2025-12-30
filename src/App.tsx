import React, { useState } from 'react';
import { HiOutlineRefresh } from 'react-icons/hi';
import { 
  HiOutlineShoppingBag, 
  HiOutlineTruck, 
  HiPlusSmall 
} from "react-icons/hi2";
import { 
  MdOutlineAgriculture, 
  MdOutlineInventory2, 
  MdOutlineCheckCircle 
} from "react-icons/md";
import { RiTreeLine } from "react-icons/ri";

// --- 1. Interfaces ---
interface Product {
  id: number;
  name: string;
  stock: number;
  total: number;
  price: number;
  harvestTime: string;
}

// --- 2. Sub-Components ---

const Header: React.FC = () => (
  <header className="flex justify-between items-center bg-white p-4 rounded-2xl shadow-sm border border-slate-100">
    <div className="flex items-center gap-3">
      <div className="bg-emerald-600 p-2 rounded-xl shadow-lg shadow-emerald-100">
        <RiTreeLine className="text-white text-2xl" />
      </div>
      <div>
        <h1 className="text-xl font-black text-slate-800 leading-none">DUREN<span className="text-emerald-600">APP</span></h1>
        <p className="text-[10px] font-bold text-slate-400 tracking-[0.2em] uppercase">Farm to Table</p>
      </div>
    </div>
    <button className="relative p-2 text-slate-600 hover:bg-slate-50 rounded-full transition">
      <HiOutlineShoppingBag size={24} />
      <span className="absolute top-0 right-0 w-4 h-4 bg-orange-500 text-white text-[10px] flex items-center justify-center rounded-full border-2 border-white">2</span>
    </button>
  </header>
);

interface ProductCardProps {
  product: Product;
  onBuy: (id: number) => void;
  onAddStock: (id: number) => void;
}

const ProductCard: React.FC<ProductCardProps> = ({ product, onBuy, onAddStock }) => {
  const stockPercentage = (product.stock / product.total) * 100;
  
  return (
    <div className="bg-white rounded-[2rem] p-6 border border-slate-100 shadow-sm hover:shadow-md transition-all">
      <div className="flex justify-between items-start">
        <span className="text-[10px] font-black bg-emerald-50 text-emerald-700 px-3 py-1 rounded-full uppercase">Organic</span>
        <button 
          onClick={() => onAddStock(product.id)}
          className="p-1.5 bg-slate-50 text-slate-400 hover:bg-emerald-50 hover:text-emerald-600 rounded-lg transition"
        >
          <HiPlusSmall size={20} />
        </button>
      </div>

      <h3 className="text-xl font-bold mt-4 text-slate-800">{product.name}</h3>
      <p className="text-sm text-slate-400 mb-6 flex items-center gap-1">
         <MdOutlineAgriculture /> Jatuh pukul {product.harvestTime}
      </p>

      <div className="space-y-3">
        <div className="flex justify-between text-xs font-bold">
          <span className="text-slate-400 uppercase tracking-tighter">Availability</span>
          <span className={product.stock < 5 ? 'text-rose-500' : 'text-emerald-600'}>
            {product.stock} Sisa
          </span>
        </div>
        <div className="w-full bg-slate-100 h-2.5 rounded-full overflow-hidden">
          <div 
            className={`h-full transition-all duration-1000 ${product.stock < 5 ? 'bg-rose-500' : 'bg-emerald-500'}`}
            style={{ width: `${stockPercentage}%` }}
          />
        </div>
      </div>

      <div className="mt-8 flex items-center justify-between">
        <span className="text-2xl font-black text-slate-900">Rp {product.price / 1000}k</span>
        <button 
          onClick={() => onBuy(product.id)}
          disabled={product.stock === 0}
          className={`px-6 py-3 rounded-xl font-bold text-sm transition-all active:scale-95
            ${product.stock > 0 
              ? 'bg-slate-900 text-white hover:bg-slate-800 shadow-lg shadow-slate-200' 
              : 'bg-slate-100 text-slate-400 cursor-not-allowed'}`}
        >
          {product.stock > 0 ? 'Beli Sekarang' : 'Habis'}
        </button>
      </div>
    </div>
  );
};

interface TrackerProps {
  currentStatus: number;
  onUpdateStatus: () => void;
}

const DeliveryTracker: React.FC<TrackerProps> = ({ currentStatus, onUpdateStatus }) => {
  const steps = ['Panen', 'Packing', 'Kirim', 'Tiba'];
  
  return (
    <section className="bg-white rounded-[2rem] p-8 border border-slate-100 shadow-sm">
      <div className="flex justify-between items-center mb-10">
        <h2 className="flex items-center gap-2 text-lg font-bold text-slate-800">
          <HiOutlineTruck className="text-emerald-600 text-2xl" /> Lacak Durian Anda
        </h2>
        <button 
          onClick={onUpdateStatus}
          className="text-emerald-600 hover:bg-emerald-50 p-2 rounded-xl transition"
        >
          <HiOutlineRefresh size={20} />
        </button>
      </div>

      <div className="flex justify-between relative px-2">
        <div className="absolute top-5 left-0 w-full h-0.5 bg-slate-100 z-0"></div>
        <div 
          className="absolute top-5 left-0 h-0.5 bg-emerald-500 z-0 transition-all duration-700"
          style={{ width: `${(currentStatus / (steps.length - 1)) * 100}%` }}
        ></div>

        {steps.map((step, i) => (
          <div key={step} className="relative z-10 flex flex-col items-center gap-3 bg-white px-2">
            <div className={`w-10 h-10 rounded-full flex items-center justify-center border-2 transition-all duration-500
              ${i <= currentStatus ? 'bg-emerald-500 border-emerald-500 text-white shadow-lg shadow-emerald-200' : 'bg-white border-slate-200 text-slate-300'}`}>
              {i < currentStatus ? <MdOutlineCheckCircle size={20} /> : <span className="text-xs font-bold">{i + 1}</span>}
            </div>
            <span className={`text-[10px] font-black uppercase tracking-widest ${i <= currentStatus ? 'text-emerald-700' : 'text-slate-300'}`}>
              {step}
            </span>
          </div>
        ))}
      </div>
    </section>
  );
};

// --- 3. Main App Component ---

const App: React.FC = () => {
  const [products, setProducts] = useState<Product[]>([
    { id: 1, name: "Musang King", stock: 12, total: 30, price: 150000, harvestTime: "05:30" },
    { id: 2, name: "Durian Bawor", stock: 5, total: 20, price: 120000, harvestTime: "06:15" }
  ]);

  const [orderStatus, setOrderStatus] = useState<number>(1);

  const handlePurchase = (id: number) => {
    setProducts(prev => prev.map(p => 
      p.id === id && p.stock > 0 ? { ...p, stock: p.stock - 1 } : p
    ));
  };

  const addStock = (id: number) => {
    setProducts(prev => prev.map(p => 
      p.id === id ? { ...p, stock: p.stock + 1, total: p.total + 1 } : p
    ));
  };

  const updateStatus = () => setOrderStatus((prev) => (prev + 1) % 4);

  return (
    <div className="min-h-screen bg-[#F8FAFC] p-4 md:p-8 font-sans">
      <div className="max-w-4xl mx-auto space-y-10">
        <Header />

        <section className="space-y-6">
          <h2 className="flex items-center gap-2 text-lg font-bold text-slate-800">
            <MdOutlineInventory2 className="text-emerald-600 text-xl" /> Stok Panen Terbaru
          </h2>
          <div className="grid md:grid-cols-2 gap-6">
            {products.map(product => (
              <ProductCard 
                key={product.id} 
                product={product} 
                onBuy={handlePurchase} 
                onAddStock={addStock} 
              />
            ))}
          </div>
        </section>

        <DeliveryTracker 
          currentStatus={orderStatus} 
          onUpdateStatus={updateStatus} 
        />
      </div>
    </div>
  );
};

export default App;