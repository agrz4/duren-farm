import React, { useState } from 'react';
import { HiOutlineXMark } from "react-icons/hi2";
import { MdOutlineSave, MdOutlineImage } from "react-icons/md";
import type { Product } from '../types';

interface AddProductModalProps {
    isOpen: boolean;
    onClose: () => void;
    onAddProduct: (product: Product) => void;
}

const AddProductModal: React.FC<AddProductModalProps> = ({ isOpen, onClose, onAddProduct }) => {
    const [name, setName] = useState('');
    const [price, setPrice] = useState('');
    const [stock, setStock] = useState('');

    if (!isOpen) return null;

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();

        if (!name || !price || !stock) return alert("Mohon isi semua data!");

        const newProduct: Product = {
            id: Date.now(),
            name,
            price: Number(price),
            stock: Number(stock),
            total: Number(stock),
            harvestTime: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })
        };

        onAddProduct(newProduct);

        setName('');
        setPrice('');
        setStock('');
        onClose();
    };

    return (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-slate-900/40 backdrop-blur-sm p-4">
            <div className="bg-white w-full max-w-lg rounded-[2.5rem] shadow-2xl overflow-hidden animate-in fade-in zoom-in duration-300">

                {/* Header Modal */}
                <div className="flex justify-between items-center p-8 border-b border-slate-50">
                    <h3 className="text-xl font-bold text-slate-800">Add New Harvest</h3>
                    <button
                        onClick={onClose}
                        className="p-2 hover:bg-slate-100 rounded-xl text-slate-400 transition-colors"
                    >
                        <HiOutlineXMark size={24} />
                    </button>
                </div>

                {/* Body Form */}
                <form onSubmit={handleSubmit} className="p-8 space-y-6">
                    <div className="space-y-4">
                        {/* Input Nama Produk */}
                        <div>
                            <label className="text-[10px] font-bold text-slate-400 uppercase tracking-widest ml-1">Product Name</label>
                            <input
                                type="text"
                                value={name}
                                onChange={(e) => setName(e.target.value)}
                                placeholder="e.g. Musang King Premium"
                                className="w-full mt-2 px-6 py-4 bg-slate-50 border-none rounded-2xl text-sm focus:ring-2 focus:ring-emerald-500 outline-none transition-all"
                            />
                        </div>

                        <div className="grid grid-cols-2 gap-4">
                            {/* Input Harga */}
                            <div>
                                <label className="text-[10px] font-bold text-slate-400 uppercase tracking-widest ml-1">Price (Rp)</label>
                                <input
                                    type="number"
                                    value={price}
                                    onChange={(e) => setPrice(e.target.value)}
                                    placeholder="150000"
                                    className="w-full mt-2 px-6 py-4 bg-slate-50 border-none rounded-2xl text-sm focus:ring-2 focus:ring-emerald-500 outline-none transition-all"
                                />
                            </div>
                            {/* Input Stok */}
                            <div>
                                <label className="text-[10px] font-bold text-slate-400 uppercase tracking-widest ml-1">Total Stock</label>
                                <input
                                    type="number"
                                    value={stock}
                                    onChange={(e) => setStock(e.target.value)}
                                    placeholder="20"
                                    className="w-full mt-2 px-6 py-4 bg-slate-50 border-none rounded-2xl text-sm focus:ring-2 focus:ring-emerald-500 outline-none transition-all"
                                />
                            </div>
                        </div>

                        {/* Upload Placeholder */}
                        <div>
                            <label className="text-[10px] font-bold text-slate-400 uppercase tracking-widest ml-1">Product Image</label>
                            <div className="mt-2 border-2 border-dashed border-slate-100 rounded-3xl p-8 flex flex-col items-center justify-center text-slate-400 hover:bg-slate-50 hover:border-emerald-200 transition-all cursor-pointer">
                                <MdOutlineImage size={32} />
                                <p className="text-xs mt-2 font-medium">Click to upload image</p>
                            </div>
                        </div>
                    </div>

                    {/* Footer Modal / Action Buttons */}
                    <div className="flex gap-3 pt-4">
                        <button
                            type="button"
                            onClick={onClose}
                            className="flex-1 py-4 text-sm font-bold text-slate-400 hover:text-slate-600 transition-colors"
                        >
                            Cancel
                        </button>
                        <button
                            type="submit"
                            className="flex-[2] bg-emerald-600 text-white py-4 rounded-2xl text-sm font-bold shadow-lg shadow-emerald-100 flex items-center justify-center gap-2 hover:bg-emerald-700 transition-all"
                        >
                            <MdOutlineSave size={20} />
                            Save Product
                        </button>
                    </div>
                </form>
            </div>
        </div>
    );
};

export default AddProductModal;