import React, { useState } from 'react';
import musangKingImg from '../assets/img/musang king.png';
import { MdOutlineEdit, MdOutlineDeleteOutline } from "react-icons/md";
import type { Product } from '../types';
import { HiOutlineSearch, HiPlus } from 'react-icons/hi';
import { HiOutlineChevronLeft, HiOutlineChevronRight } from 'react-icons/hi2';
import AddProductModal from '../components/AddProductModal';

const ProductPage: React.FC = () => {
    const [products, setProducts] = useState<Product[]>([
        { id: 1, name: "Musang King Super", stock: 12, total: 30, price: 150000, harvestTime: "05:30 AM", image: musangKingImg },
        { id: 2, name: "Bawor Banyumas", stock: 4, total: 20, price: 125000, harvestTime: "06:15 AM", image: musangKingImg },
        { id: 3, name: "Durian Montong", stock: 25, total: 50, price: 85000, harvestTime: "07:00 AM", image: musangKingImg },
    ]);

    const [isModalOpen, setIsModalOpen] = useState(false);
    const [editingProduct, setEditingProduct] = useState<Product | null>(null);
    const [searchQuery, setSearchQuery] = useState('');
    const [activeTab, setActiveTab] = useState('All');

    // Kategori dengan counter angka seperti referensi
    const categories = [
        { name: 'All', count: products.length, color: 'bg-slate-900 text-white' },
        { name: 'Ready', count: products.filter(p => p.stock >= 5).length, color: 'bg-emerald-100 text-emerald-700' },
        { name: 'Low Stock', count: products.filter(p => p.stock < 5 && p.stock > 0).length, color: 'bg-orange-100 text-orange-700' },
        { name: 'Sold Out', count: products.filter(p => p.stock === 0).length, color: 'bg-rose-100 text-rose-700' },
    ];

    const handleSaveProduct = (product: Product) => {
        if (editingProduct) {
            setProducts(products.map(p => p.id === product.id ? product : p));
        } else {
            setProducts([...products, { ...product, id: Date.now() }]);
        }
        setIsModalOpen(false);
        setEditingProduct(null);
    };

    const handleDeleteProduct = (id: number) => {
        if (window.confirm("Are you sure you want to delete this product?")) {
            setProducts(products.filter(p => p.id !== id));
        }
    };

    const filteredProducts = products.filter(product => {
        const matchesSearch = product.name.toLowerCase().includes(searchQuery.toLowerCase());
        if (activeTab === 'Ready') return matchesSearch && product.stock >= 5;
        if (activeTab === 'Low Stock') return matchesSearch && product.stock < 5 && product.stock > 0;
        if (activeTab === 'Sold Out') return matchesSearch && product.stock === 0;
        return matchesSearch;
    });

    return (
        <div className="bg-white rounded-[3rem] p-10 shadow-sm min-h-screen border border-slate-50">
            {/* Header Section terinspirasi dari Lessa Dashboard */}
            <div className="flex justify-between items-center mb-10">
                <div>
                    <h2 className="text-3xl font-black text-slate-800 tracking-tight">Order Line</h2>
                    <p className="text-sm text-slate-400 font-medium mt-1">Manage your fresh harvest inventory</p>
                </div>
                <div className="flex gap-3">
                    <button className="p-3 bg-slate-50 rounded-2xl text-slate-400 hover:bg-slate-100 transition shadow-sm">
                        <HiOutlineChevronLeft size={20} />
                    </button>
                    <button className="p-3 bg-slate-50 rounded-2xl text-slate-400 hover:bg-slate-100 transition shadow-sm">
                        <HiOutlineChevronRight size={20} />
                    </button>
                </div>
            </div>

            {/* Kategori Tabs seperti referensi */}
            <div className="flex flex-wrap gap-3 mb-10">
                {categories.map((cat) => (
                    <button
                        key={cat.name}
                        onClick={() => setActiveTab(cat.name)}
                        className={`flex items-center gap-3 px-6 py-3 rounded-full text-sm font-bold transition-all duration-300 ${activeTab === cat.name ? cat.color + " shadow-lg" : "bg-slate-50 text-slate-400 hover:bg-slate-100"
                            }`}
                    >
                        {cat.name}
                        <span className={`px-2 py-0.5 rounded-full text-[10px] ${activeTab === cat.name ? "bg-white/20 text-white" : "bg-slate-200 text-slate-500"
                            }`}>
                            {cat.count}
                        </span>
                    </button>
                ))}
            </div>

            {/* Toolbar & Add Action */}
            <div className="flex gap-4 mb-10">
                <div className="relative flex-1">
                    <HiOutlineSearch className="absolute left-5 top-1/2 -translate-y-1/2 text-slate-400" size={20} />
                    <input
                        type="text"
                        value={searchQuery}
                        onChange={(e) => setSearchQuery(e.target.value)}
                        placeholder="Search harvest name..."
                        className="w-full pl-14 pr-6 py-4 bg-slate-50 border-none rounded-[2rem] text-sm focus:ring-2 focus:ring-emerald-500 outline-none transition-all shadow-inner"
                    />
                </div>
                <button
                    onClick={() => { setEditingProduct(null); setIsModalOpen(true); }}
                    className="bg-emerald-600 text-white px-8 py-4 rounded-[2rem] text-sm font-bold shadow-xl shadow-emerald-100 flex items-center gap-2 hover:bg-emerald-700 transition-all active:scale-95"
                >
                    <HiPlus size={20} />
                    Add Product
                </button>
            </div>

            {/* Bento Grid Product List */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {filteredProducts.map((p) => (
                    <div key={p.id} className="bg-slate-50/50 rounded-[3rem] p-8 border border-transparent hover:border-emerald-100 hover:bg-white hover:shadow-2xl transition-all duration-500 group relative">
                        <div className="flex justify-between items-start mb-6">
                            <div>
                                <p className="font-black text-slate-800 text-xl tracking-tight leading-none">{p.name}</p>
                                <p className="text-[10px] text-slate-400 font-bold uppercase tracking-widest mt-2">ID: #F094{p.id}</p>
                            </div>
                            <span className="text-[10px] font-black text-slate-300 uppercase tracking-widest">Just Now</span>
                        </div>

                        {/* Image Placeholder inspired by reference */}
                        <div className="relative flex justify-center py-4">
                            <div className="w-32 h-32 bg-white rounded-full shadow-inner flex items-center justify-center overflow-hidden border-4 border-white group-hover:scale-110 transition-transform duration-500">
                                {p.image ? (
                                    <img src={p.image} alt={p.name} className="w-full h-full object-cover" />
                                ) : (
                                    <span className="text-4xl">🍈</span>
                                )}
                            </div>
                        </div>

                        {/* Info & Price */}
                        <div className="mt-6 space-y-4">
                            <div className="flex justify-between items-end">
                                <div>
                                    <p className="text-[10px] font-bold text-slate-400 uppercase">Price per Unit</p>
                                    <p className="text-2xl font-black text-emerald-600 tracking-tighter">Rp {p.price.toLocaleString('id-ID')}</p>
                                </div>
                                <div className="text-right">
                                    <span className={`px-4 py-2 rounded-2xl text-[10px] font-black uppercase tracking-widest ${p.stock < 5 ? 'bg-rose-100 text-rose-600' : 'bg-emerald-100 text-emerald-600'
                                        }`}>
                                        {p.stock < 5 ? 'Low Stock' : 'Ready'}
                                    </span>
                                </div>
                            </div>

                            {/* Stock Progress Bar */}
                            <div className="space-y-2">
                                <div className="flex justify-between text-[10px] font-black uppercase text-slate-400">
                                    <span>Harvest Availability</span>
                                    <span>{p.stock} / {p.total}</span>
                                </div>
                                <div className="w-full bg-slate-200 h-2 rounded-full overflow-hidden">
                                    <div
                                        className={`h-full transition-all duration-1000 ${p.stock < 5 ? 'bg-rose-500' : 'bg-emerald-500'}`}
                                        style={{ width: `${(p.stock / p.total) * 100}%` }}
                                    />
                                </div>
                            </div>
                        </div>

                        {/* Hover Actions */}
                        <div className="absolute top-4 right-4 flex gap-2 opacity-0 group-hover:opacity-100 transition-opacity">
                            <button onClick={() => { setEditingProduct(p); setIsModalOpen(true); }} className="p-2 bg-white text-emerald-600 rounded-xl shadow-md hover:bg-emerald-600 hover:text-white transition">
                                <MdOutlineEdit size={18} />
                            </button>
                            <button onClick={() => handleDeleteProduct(p.id)} className="p-2 bg-white text-rose-600 rounded-xl shadow-md hover:bg-rose-600 hover:text-white transition">
                                <MdOutlineDeleteOutline size={18} />
                            </button>
                        </div>
                    </div>
                ))}
            </div>

            <AddProductModal
                isOpen={isModalOpen}
                onClose={() => setIsModalOpen(false)}
                onSave={handleSaveProduct}
                productToEdit={editingProduct}
            />
        </div>
    );
};

export default ProductPage;