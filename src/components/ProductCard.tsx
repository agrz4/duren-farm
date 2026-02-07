import React from 'react';
import { HiPlusSmall } from "react-icons/hi2";
import type { Product } from '../types';

interface ProductCardProps {
  product: Product;
  onBuy: (id: number) => void;
  onAddStock: (id: number) => void;
}

const ProductCard: React.FC<ProductCardProps> = ({ product, onBuy, onAddStock }) => {
  const isLowStock = product.stock < 5;

  return (
    <div className="group bg-white rounded-[2.5rem] p-2 border border-slate-100 shadow-sm hover:shadow-2xl hover:-translate-y-1 transition-all duration-500">
      {/* Area Gambar / Visual */}
      <div className="bg-slate-100 h-48 rounded-[2rem] mb-4 relative overflow-hidden group-hover:scale-[1.02] transition-transform duration-500">
        {product.image ? (
          <img
            src={product.image}
            alt={product.name}
            className={`w-full h-full object-cover ${product.stock === 0 ? 'grayscale opacity-60' : ''}`}
          />
        ) : (
          <div className="w-full h-full bg-slate-200 flex items-center justify-center text-slate-400">
            <span className="text-xs font-bold uppercase">No Image</span>
          </div>
        )}

        {product.stock === 0 && (
          <div className="absolute inset-0 z-20 flex items-center justify-center">
            <div className="bg-black/30 absolute inset-0 backdrop-blur-[2px]"></div>
            <span className="relative bg-rose-500 text-white px-6 py-2 rounded-2xl font-black text-sm uppercase tracking-widest shadow-xl rotate-[-6deg] border-4 border-white/20">
              Habis
            </span>
          </div>
        )}

        <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

        <div className="absolute top-4 left-4 z-10">
          <span className="bg-white/90 backdrop-blur-md px-3 py-1.5 rounded-full text-[10px] font-black uppercase tracking-wider shadow-sm flex items-center gap-1.5">
            <span className={`w-1.5 h-1.5 rounded-full ${product.stock === 0 ? 'bg-rose-500' : 'bg-emerald-500 animate-pulse'}`}></span>
            {product.harvestTime} • Fresh
          </span>
        </div>
      </div>

      <div className="px-5 pb-6">
        <div className="flex justify-between items-center mb-2">
          <h3 className="text-xl font-extrabold text-slate-800">{product.name}</h3>
          <button onClick={() => onAddStock(product.id)} className="text-slate-300 hover:text-emerald-500 transition-colors">
            <HiPlusSmall size={24} />
          </button>
        </div>

        <div className="flex items-baseline gap-1 mb-6">
          <span className="text-2xl font-black text-slate-900">Rp {product.price / 1000}k</span>
          <span className="text-slate-400 text-xs">/pcs</span>
        </div>

        <div className="space-y-4">
          <div className="w-full bg-slate-100 h-1.5 rounded-full overflow-hidden">
            <div
              className={`h-full transition-all duration-1000 ease-out ${isLowStock ? 'bg-orange-500' : 'bg-emerald-500'}`}
              style={{ width: `${(product.stock / product.total) * 100}%` }}
            />
          </div>

          <button
            onClick={() => onBuy(product.id)}
            disabled={product.stock === 0}
            className={`w-full py-4 rounded-2xl font-bold text-sm transition-all duration-300 shadow-lg
              ${product.stock > 0
                ? 'bg-slate-900 text-white hover:bg-emerald-600 hover:shadow-emerald-200'
                : 'bg-slate-100 text-slate-400 cursor-not-allowed shadow-none'}`}
          >
            {product.stock > 0 ? 'Add to Cart' : 'Sold Out'}
          </button>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;