import React, { useState } from 'react';
import { MdOutlineEdit, MdOutlineDeleteOutline } from "react-icons/md";
import type { Product } from '../types';
import { HiOutlineFilter, HiOutlineSearch, HiPlus } from 'react-icons/hi';

const ProductPage: React.FC = () => {
    // Mock data produk
    const [products] = useState<Product[]>([
        { id: 1, name: "Musang King Super", stock: 12, total: 30, price: 150000, harvestTime: "05:30 AM" },
        { id: 2, name: "Bawor Banyumas", stock: 4, total: 20, price: 125000, harvestTime: "06:15 AM" },
        { id: 3, name: "Durian Montong", stock: 25, total: 50, price: 85000, harvestTime: "07:00 AM" },
    ]);

    return (
        <div className="bg-white rounded-[3rem] p-8 shadow-sm min-h-screen">
            {/* Header Section */}
            <div className="flex justify-between items-center mb-10">
                <div>
                    <h2 className="text-2xl font-bold text-slate-800">Product Management</h2>
                    <p className="text-sm text-slate-400">Manage your durian stocks and harvest details</p>
                </div>
                <button className="bg-emerald-600 text-white px-6 py-3 rounded-2xl text-sm font-bold shadow-lg shadow-emerald-100 flex items-center gap-2 hover:bg-emerald-700 transition-all">
                    <HiPlus size={20} />
                    Add New Product
                </button>
            </div>

            {/* Toolbar: Search & Filter */}
            <div className="flex gap-4 mb-8">
                <div className="relative flex-1">
                    <HiOutlineSearch className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400 size={20}" />
                    <input
                        type="text"
                        placeholder="Search durian name..."
                        className="w-full pl-12 pr-4 py-3 bg-slate-50 border-none rounded-2xl text-sm focus:ring-2 focus:ring-emerald-500 outline-none transition-all"
                    />
                </div>
                <button className="flex items-center gap-2 px-6 py-3 bg-slate-50 text-slate-600 rounded-2xl text-sm font-semibold hover:bg-slate-100 transition-all">
                    <HiOutlineFilter size={20} />
                    Filter
                </button>
            </div>

            {/* Table Section */}
            <div className="overflow-x-auto">
                <table className="w-full text-left">
                    <thead>
                        <tr className="text-slate-400 text-[10px] uppercase tracking-[0.2em] border-b border-slate-50">
                            <th className="px-4 py-4 font-bold">Product Name</th>
                            <th className="px-4 py-4 font-bold">Price</th>
                            <th className="px-4 py-4 font-bold">Stock Status</th>
                            <th className="px-4 py-4 font-bold">Harvest Time</th>
                            <th className="px-4 py-4 font-bold text-center">Actions</th>
                        </tr>
                    </thead>
                    <tbody className="divide-y divide-slate-50">
                        {products.map((p) => (
                            <tr key={p.id} className="hover:bg-slate-50/50 transition-colors group">
                                <td className="px-4 py-6">
                                    <div className="flex items-center gap-3">
                                        <div className="w-12 h-12 bg-emerald-50 rounded-2xl flex items-center justify-center text-emerald-600 font-bold">
                                            {p.name.charAt(0)}
                                        </div>
                                        <span className="font-bold text-slate-800">{p.name}</span>
                                    </div>
                                </td>
                                <td className="px-4 py-6 font-semibold text-slate-700">
                                    Rp {p.price.toLocaleString('id-ID')}
                                </td>
                                <td className="px-4 py-6">
                                    <div className="space-y-2 w-32">
                                        <div className="flex justify-between text-[10px] font-bold">
                                            <span className={p.stock < 5 ? 'text-rose-500' : 'text-emerald-600'}>
                                                {p.stock} Units
                                            </span>
                                            <span className="text-slate-300">/ {p.total}</span>
                                        </div>
                                        <div className="w-full bg-slate-100 h-1.5 rounded-full overflow-hidden">
                                            <div
                                                className={`h-full transition-all duration-1000 ${p.stock < 5 ? 'bg-rose-500' : 'bg-emerald-500'}`}
                                                style={{ width: `${(p.stock / p.total) * 100}%` }}
                                            />
                                        </div>
                                    </div>
                                </td>
                                <td className="px-4 py-6">
                                    <span className="bg-orange-50 text-orange-600 text-[10px] font-bold px-3 py-1 rounded-full uppercase tracking-wider">
                                        {p.harvestTime}
                                    </span>
                                </td>
                                <td className="px-4 py-6">
                                    <div className="flex justify-center gap-2">
                                        <button className="p-2 text-slate-400 hover:bg-white hover:text-emerald-600 hover:shadow-sm rounded-xl transition-all">
                                            <MdOutlineEdit size={20} />
                                        </button>
                                        <button className="p-2 text-slate-400 hover:bg-white hover:text-rose-600 hover:shadow-sm rounded-xl transition-all">
                                            <MdOutlineDeleteOutline size={20} />
                                        </button>
                                    </div>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default ProductPage;