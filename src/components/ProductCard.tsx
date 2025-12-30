import React from 'react';
import { HiPlusSmall } from "react-icons/hi2";
import { MdOutlineAgriculture } from "react-icons/md";
import type { Product } from '../types';

interface ProductCardProps {
  product: Product;
  onBuy: (id: number) => void;
  onAddStock: (id: number) => void;
}

const ProductCard: React.FC<ProductCardProps> = ({ product, onBuy, onAddStock }) => {
  const isLowStock = product.stock < 5;

  return (
    <div className="bg-white rounded-[2rem] p-6 border border-slate-100 shadow-sm hover:shadow-md transition-all">
      <div className="flex justify-between items-start">
        <span className="text-[10px] font-black bg-emerald-50 text-emerald-700 px-3 py-1 rounded-full uppercase">Hasil Kebun</span>
        <button onClick={() => onAddStock(product.id)} className="p-1.5 bg-slate-50 text-slate-400 hover:bg-emerald-50 hover:text-emerald-600 rounded-lg transition">
          <HiPlusSmall size={20} />
        </button>
      </div>

      <h3 className="text-xl font-bold mt-4 text-slate-800">{product.name}</h3>
      <p className="text-sm text-slate-400 mb-6 flex items-center gap-1">
         <MdOutlineAgriculture /> Jatuh pukul {product.harvestTime}
      </p>

      <div className="space-y-3">
        <div className="flex justify-between text-xs font-bold uppercase">
          <span className="text-slate-400">Stok</span>
          <span className={isLowStock ? 'text-rose-500' : 'text-emerald-600'}>{product.stock} Sisa</span>
        </div>
        <div className="w-full bg-slate-100 h-2.5 rounded-full overflow-hidden">
          <div 
            className={`h-full transition-all duration-1000 ${isLowStock ? 'bg-rose-500' : 'bg-emerald-500'}`}
            style={{ width: `${(product.stock / product.total) * 100}%` }}
          />
        </div>
      </div>

      <div className="mt-8 flex items-center justify-between">
        <span className="text-2xl font-black text-slate-900">Rp {product.price / 1000}k</span>
        <button 
          onClick={() => onBuy(product.id)}
          disabled={product.stock === 0}
          className={`px-6 py-3 rounded-xl font-bold text-sm transition-all active:scale-95
            ${product.stock > 0 ? 'bg-slate-900 text-white hover:bg-slate-800' : 'bg-slate-100 text-slate-400 cursor-not-allowed'}`}
        >
          {product.stock > 0 ? 'Beli Sekarang' : 'Habis'}
        </button>
      </div>
    </div>
  );
};

export default ProductCard;