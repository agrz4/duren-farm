import React from 'react';
import { HiOutlineUser, HiOutlineBell, HiOutlineShieldCheck, HiOutlineClock } from "react-icons/hi2";
import { MdOutlineStorefront, MdOutlinePayments } from "react-icons/md";

const SettingsPage: React.FC = () => {
    return (
        <div className="bg-white rounded-[3rem] p-10 shadow-sm min-h-screen border border-slate-50 font-sans">
            <div className="mb-10">
                <h2 className="text-3xl font-black text-slate-800 tracking-tight">Pengaturan</h2>
                <p className="text-slate-400 text-sm mt-1">Kelola profil kebun dan preferensi sistem Anda</p>
            </div>

            <div className="grid grid-cols-12 gap-10">
                {/* Kolom Kiri: Menu Navigasi Settings */}
                <div className="col-span-12 lg:col-span-4 space-y-2">
                    {[
                        { name: 'Profil Kebun', icon: <MdOutlineStorefront />, active: true },
                        { name: 'Akun & Keamanan', icon: <HiOutlineShieldCheck /> },
                        { name: 'Notifikasi', icon: <HiOutlineBell /> },
                        { name: 'Metode Pembayaran', icon: <MdOutlinePayments /> },
                        { name: 'Jam Operasional', icon: <HiOutlineClock /> },
                    ].map((item, i) => (
                        <button
                            key={i}
                            className={`w-full flex items-center gap-4 px-6 py-4 rounded-2xl font-bold text-sm transition-all ${item.active
                                    ? 'bg-emerald-600 text-white shadow-lg shadow-emerald-100'
                                    : 'text-slate-500 hover:bg-slate-50'
                                }`}
                        >
                            <span className="text-xl">{item.icon}</span>
                            {item.name}
                        </button>
                    ))}
                </div>

                {/* Kolom Kanan: Form Konten */}
                <div className="col-span-12 lg:col-span-8 bg-slate-50 rounded-[2.5rem] p-10 border border-slate-100">
                    <div className="space-y-8">
                        {/* Header Form */}
                        <div className="flex items-center gap-4 pb-6 border-b border-slate-200/60">
                            <div className="w-20 h-20 bg-emerald-100 rounded-[2rem] flex items-center justify-center text-emerald-600 border-4 border-white shadow-sm">
                                <MdOutlineStorefront size={40} />
                            </div>
                            <div>
                                <h4 className="text-xl font-black text-slate-800">DurenFarm Utama</h4>
                                <p className="text-xs text-slate-400 font-bold uppercase tracking-widest mt-1">Kebun ID: #FARM-001</p>
                            </div>
                        </div>

                        {/* Input Group */}
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                            <div className="space-y-2">
                                <label className="text-[10px] font-black text-slate-400 uppercase tracking-widest ml-1">Nama Kebun</label>
                                <input
                                    type="text"
                                    defaultValue="DurenFarm Utama"
                                    className="w-full px-6 py-4 bg-white border-none rounded-2xl text-sm font-semibold shadow-sm focus:ring-2 focus:ring-emerald-500 outline-none transition-all"
                                />
                            </div>
                            <div className="space-y-2">
                                <label className="text-[10px] font-black text-slate-400 uppercase tracking-widest ml-1">Email Bisnis</label>
                                <input
                                    type="email"
                                    defaultValue="owner@durenfarm.com"
                                    className="w-full px-6 py-4 bg-white border-none rounded-2xl text-sm font-semibold shadow-sm focus:ring-2 focus:ring-emerald-500 outline-none transition-all"
                                />
                            </div>
                            <div className="space-y-2 md:col-span-2">
                                <label className="text-[10px] font-black text-slate-400 uppercase tracking-widest ml-1">Deskripsi Kebun</label>
                                <textarea
                                    rows={3}
                                    defaultValue="Kebun durian keluarga dengan fokus pada varietas Musang King dan Bawor yang jatuh pohon secara alami."
                                    className="w-full px-6 py-4 bg-white border-none rounded-2xl text-sm font-semibold shadow-sm focus:ring-2 focus:ring-emerald-500 outline-none transition-all resize-none"
                                />
                            </div>
                        </div>

                        {/* Toggle Settings */}
                        <div className="space-y-4 pt-4">
                            <p className="text-[10px] font-black text-slate-400 uppercase tracking-widest ml-1">Preferensi Operasional</p>
                            <div className="flex items-center justify-between p-6 bg-white rounded-3xl shadow-sm">
                                <div>
                                    <p className="font-bold text-slate-800 text-sm">Update Stok Otomatis</p>
                                    <p className="text-xs text-slate-400">Sinkronkan stok saat pesanan masuk</p>
                                </div>
                                <div className="w-12 h-6 bg-emerald-500 rounded-full relative cursor-pointer">
                                    <div className="absolute right-1 top-1 w-4 h-4 bg-white rounded-full shadow-sm"></div>
                                </div>
                            </div>
                        </div>

                        {/* Action Buttons */}
                        <div className="flex gap-4 pt-6 border-t border-slate-200/60">
                            <button className="flex-1 bg-slate-900 text-white py-4 rounded-2xl font-black text-xs uppercase tracking-widest hover:bg-slate-800 transition-all shadow-xl">
                                Simpan Perubahan
                            </button>
                            <button className="px-8 py-4 rounded-2xl font-black text-xs uppercase tracking-widest text-slate-400 hover:text-rose-500 transition-colors">
                                Reset
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default SettingsPage;