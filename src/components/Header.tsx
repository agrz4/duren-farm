import React from 'react';
import { HiOutlineShoppingBag } from "react-icons/hi2";
import { RiTreeLine } from "react-icons/ri";

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
      <span className="absolute top-0 right-0 w-4 h-4 bg-orange-500 text-white text-[10px] flex items-center justify-center rounded-full border-2 border-white">
        2
      </span>
    </button>
  </header>
);

export default Header;