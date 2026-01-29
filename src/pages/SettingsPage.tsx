import React, { useState } from 'react';
import { HiOutlineBell, HiOutlineShieldCheck, HiOutlineClock, HiOutlineKey, HiOutlineDevicePhoneMobile } from "react-icons/hi2";
import { MdOutlineStorefront, MdOutlinePayments, MdOutlineSecurity } from "react-icons/md";

const SettingsPage: React.FC = () => {
    const [activeTab, setActiveTab] = useState('Profil Kebun');

    const menuItems = [
        { name: 'Profil Kebun', icon: <MdOutlineStorefront />, id: 'Profil Kebun' },
        { name: 'Akun & Keamanan', icon: <HiOutlineShieldCheck />, id: 'Akun & Keamanan' },
        { name: 'Notifikasi', icon: <HiOutlineBell />, id: 'Notifikasi' },
        { name: 'Metode Pembayaran', icon: <MdOutlinePayments />, id: 'Metode Pembayaran' },
        { name: 'Jam Operasional', icon: <HiOutlineClock />, id: 'Jam Operasional' },
    ];

    const renderContent = () => {
        switch (activeTab) {
            case 'Profil Kebun':
                return (
                    <div className="space-y-8 animate-in fade-in slide-in-from-bottom-4 duration-500">
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
                                    className="w-full px-6 py-4 bg-white border-none rounded-2xl text-sm font-semibold shadow-sm focus:ring-2 focus:ring-emerald-500 outline-none transition-all placeholder:text-slate-300"
                                />
                            </div>
                            <div className="space-y-2">
                                <label className="text-[10px] font-black text-slate-400 uppercase tracking-widest ml-1">Email Bisnis</label>
                                <input
                                    type="email"
                                    defaultValue="owner@durenfarm.com"
                                    className="w-full px-6 py-4 bg-white border-none rounded-2xl text-sm font-semibold shadow-sm focus:ring-2 focus:ring-emerald-500 outline-none transition-all placeholder:text-slate-300"
                                />
                            </div>
                            <div className="space-y-2 md:col-span-2">
                                <label className="text-[10px] font-black text-slate-400 uppercase tracking-widest ml-1">Deskripsi Kebun</label>
                                <textarea
                                    rows={3}
                                    defaultValue="Kebun durian keluarga dengan fokus pada varietas Musang King dan Bawor yang jatuh pohon secara alami."
                                    className="w-full px-6 py-4 bg-white border-none rounded-2xl text-sm font-semibold shadow-sm focus:ring-2 focus:ring-emerald-500 outline-none transition-all resize-none placeholder:text-slate-300"
                                />
                            </div>
                        </div>

                        {/* Toggle Settings */}
                        <div className="space-y-4 pt-4">
                            <p className="text-[10px] font-black text-slate-400 uppercase tracking-widest ml-1">Preferensi Operasional</p>
                            <div className="flex items-center justify-between p-6 bg-white rounded-3xl shadow-sm hover:shadow-md transition-shadow">
                                <div>
                                    <p className="font-bold text-slate-800 text-sm">Update Stok Otomatis</p>
                                    <p className="text-xs text-slate-400 mt-1">Sinkronkan stok saat pesanan masuk</p>
                                </div>
                                <div className="w-12 h-6 bg-emerald-500 rounded-full relative cursor-pointer">
                                    <div className="absolute right-1 top-1 w-4 h-4 bg-white rounded-full shadow-sm"></div>
                                </div>
                            </div>
                        </div>

                        {/* Action Buttons */}
                        <div className="flex gap-4 pt-6 border-t border-slate-200/60">
                            <button className="flex-1 bg-slate-900 text-white py-4 rounded-2xl font-black text-xs uppercase tracking-widest hover:bg-slate-800 transition-all shadow-xl hover:shadow-2xl hover:-translate-y-1">
                                Simpan Perubahan
                            </button>
                            <button className="px-8 py-4 rounded-2xl font-black text-xs uppercase tracking-widest text-slate-400 hover:text-rose-500 hover:bg-rose-50 transition-colors">
                                Reset
                            </button>
                        </div>
                    </div>
                );
            case 'Akun & Keamanan':
                return (
                    <div className="space-y-8 animate-in fade-in slide-in-from-bottom-4 duration-500">
                        {/* Header Section */}
                        <div className="flex items-center gap-4 pb-6 border-b border-slate-200/60">
                            <div className="w-20 h-20 bg-blue-100 rounded-[2rem] flex items-center justify-center text-blue-600 border-4 border-white shadow-sm">
                                <MdOutlineSecurity size={40} />
                            </div>
                            <div>
                                <h4 className="text-xl font-black text-slate-800">Keamanan Akun</h4>
                            </div>
                        </div>

                        {/* Change Password Section */}
                        <div className="space-y-6">
                            <div className="flex items-center gap-3 text-slate-800">
                                <HiOutlineKey className="text-xl text-blue-500" />
                                <h5 className="font-bold">Ganti Kata Sandi</h5>
                            </div>

                            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 p-6 bg-white rounded-[2rem] shadow-sm">
                                <div className="space-y-2 md:col-span-2">
                                    <label className="text-[10px] font-black text-slate-400 uppercase tracking-widest ml-1">Password Saat Ini</label>
                                    <input
                                        type="password"
                                        className="w-full px-6 py-4 bg-slate-50 border-none rounded-2xl text-sm font-semibold focus:bg-white focus:ring-2 focus:ring-blue-500 outline-none transition-all hover:bg-slate-100"
                                        placeholder="••••••••••••"
                                    />
                                </div>
                                <div className="space-y-2">
                                    <label className="text-[10px] font-black text-slate-400 uppercase tracking-widest ml-1">Password Baru</label>
                                    <input
                                        type="password"
                                        className="w-full px-6 py-4 bg-slate-50 border-none rounded-2xl text-sm font-semibold focus:bg-white focus:ring-2 focus:ring-blue-500 outline-none transition-all hover:bg-slate-100"
                                        placeholder="Min. 8 karakter"
                                    />
                                </div>
                                <div className="space-y-2">
                                    <label className="text-[10px] font-black text-slate-400 uppercase tracking-widest ml-1">Konfirmasi Password</label>
                                    <input
                                        type="password"
                                        className="w-full px-6 py-4 bg-slate-50 border-none rounded-2xl text-sm font-semibold focus:bg-white focus:ring-2 focus:ring-blue-500 outline-none transition-all hover:bg-slate-100"
                                        placeholder="Ulangi password baru"
                                    />
                                </div>
                            </div>
                        </div>

                        {/* 2FA Section using Toggle design */}
                        <div className="space-y-4">
                            <div className="flex items-center gap-3 text-slate-800">
                                <HiOutlineShieldCheck className="text-xl text-blue-500" />
                                <h5 className="font-bold">Verifikasi 2 Langkah</h5>
                            </div>

                            <div className="flex items-center justify-between p-6 bg-white rounded-3xl shadow-sm hover:shadow-md transition-shadow">
                                <div className="flex-1 pr-4">
                                    <p className="font-bold text-slate-800 text-sm">Aktifkan Authenticator</p>
                                    <p className="text-xs text-slate-400 mt-1 leading-relaxed">Tambahkan lapisan keamanan ekstra. Kode akan diminta setiap kali login dari perangkat baru.</p>
                                </div>
                                <div className="w-12 h-6 bg-slate-200 rounded-full relative cursor-pointer">
                                    <div className="absolute left-1 top-1 w-4 h-4 bg-white rounded-full shadow-sm"></div>
                                </div>
                            </div>
                        </div>

                        {/* Recent Login History */}
                        <div className="space-y-4">
                            <div className="flex items-center gap-3 text-slate-800">
                                <HiOutlineDevicePhoneMobile className="text-xl text-blue-500" />
                                <h5 className="font-bold">Riwayat Login</h5>
                            </div>

                            <div className="bg-white rounded-[2rem] p-6 shadow-sm space-y-4">
                                {[
                                    { device: "MacBook Pro 14", location: "Jakarta, Indonesia", time: "Sedang Aktif", icon: "💻", active: true },
                                    { device: "iPhone 13 Pro", location: "Bandung, Indonesia", time: "2 jam yang lalu", icon: "📱", active: false }
                                ].map((login, idx) => (
                                    <div key={idx} className="flex items-center gap-4 py-2">
                                        <div className={`w-10 h-10 rounded-xl flex items-center justify-center text-lg ${login.active ? 'bg-blue-50' : 'bg-slate-50'}`}>
                                            {login.icon}
                                        </div>
                                        <div className="flex-1">
                                            <p className="text-sm font-bold text-slate-800">{login.device}</p>
                                            <p className="text-[10px] text-slate-400 font-bold uppercase tracking-wide">{login.location}</p>
                                        </div>
                                        <div className="text-right">
                                            {login.active ? (
                                                <span className="text-[10px] font-black text-emerald-500 bg-emerald-50 px-3 py-1 rounded-full uppercase tracking-widest">Active</span>
                                            ) : (
                                                <span className="text-[10px] font-bold text-slate-400">{login.time}</span>
                                            )}
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>

                        {/* Action Buttons */}
                        <div className="flex gap-4 pt-6 border-t border-slate-200/60">
                            <button className="flex-1 bg-blue-600 text-white py-4 rounded-2xl font-black text-xs uppercase tracking-widest hover:bg-blue-700 transition-all shadow-xl hover:shadow-2xl hover:-translate-y-1 shadow-blue-100">
                                Update Keamanan
                            </button>
                        </div>
                    </div>
                );
            case 'Notifikasi':
                return (
                    <div className="space-y-8 animate-in fade-in slide-in-from-bottom-4 duration-500">
                        {/* Header Section */}
                        <div className="flex items-center gap-4 pb-6 border-b border-slate-200/60">
                            <div className="w-20 h-20 bg-orange-100 rounded-[2rem] flex items-center justify-center text-orange-600 border-4 border-white shadow-sm">
                                <HiOutlineBell size={40} />
                            </div>
                            <div>
                                <h4 className="text-xl font-black text-slate-800">Preferensi Notifikasi</h4>
                                <p className="text-xs text-slate-400 font-bold uppercase tracking-widest mt-1">Atur kapan kami menghubungi Anda</p>
                            </div>
                        </div>

                        {/* Order Alerts */}
                        <div className="space-y-4">
                            <p className="text-[10px] font-black text-slate-400 uppercase tracking-widest ml-1">Notifikasi Pesanan</p>
                            <div className="bg-white rounded-[2rem] p-6 shadow-sm space-y-6">
                                {[
                                    { title: "Pesanan Baru Masuk", desc: "Dapatkan notifikasi real-time saat ada pesanan baru", active: true },
                                    { title: "Status Pembayaran", desc: "Info saat pembayaran berhasil dikonfirmasi", active: true },
                                    { title: "Komplain Pelanggan", desc: "Notifikasi prioritas untuk masalah pesanan", active: true }
                                ].map((item, idx) => (
                                    <div key={idx} className="flex items-center justify-between">
                                        <div className="pr-4">
                                            <p className="font-bold text-slate-800 text-sm">{item.title}</p>
                                            <p className="text-xs text-slate-400 mt-1">{item.desc}</p>
                                        </div>
                                        <div className={`w-12 h-6 rounded-full relative cursor-pointer transition-colors ${item.active ? 'bg-orange-500' : 'bg-slate-200'}`}>
                                            <div className={`absolute top-1 w-4 h-4 bg-white rounded-full shadow-sm transition-all ${item.active ? 'right-1' : 'left-1'}`}></div>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>

                        {/* Inventory Alerts */}
                        <div className="space-y-4">
                            <p className="text-[10px] font-black text-slate-400 uppercase tracking-widest ml-1">Inventaris & Kebun</p>
                            <div className="bg-white rounded-[2rem] p-6 shadow-sm space-y-6">
                                {[
                                    { title: "Stok Menipis", desc: "Peringatan saat stok varietas tertentu di bawah 5 kg", active: true },
                                    { title: "Jadwal Panen", desc: "Reminder H-1 sebelum jadwal panen raya", active: false }
                                ].map((item, idx) => (
                                    <div key={idx} className="flex items-center justify-between">
                                        <div className="pr-4">
                                            <p className="font-bold text-slate-800 text-sm">{item.title}</p>
                                            <p className="text-xs text-slate-400 mt-1">{item.desc}</p>
                                        </div>
                                        <div className={`w-12 h-6 rounded-full relative cursor-pointer transition-colors ${item.active ? 'bg-orange-500' : 'bg-slate-200'}`}>
                                            <div className={`absolute top-1 w-4 h-4 bg-white rounded-full shadow-sm transition-all ${item.active ? 'right-1' : 'left-1'}`}></div>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>

                        {/* Action Buttons */}
                        <div className="flex gap-4 pt-6 border-t border-slate-200/60">
                            <button className="flex-1 bg-slate-900 text-white py-4 rounded-2xl font-black text-xs uppercase tracking-widest hover:bg-slate-800 transition-all shadow-xl hover:shadow-2xl hover:-translate-y-1">
                                Simpan Preferensi
                            </button>
                        </div>
                    </div>
                );
            case 'Jam Operasional':
                return (
                    <div className="space-y-8 animate-in fade-in slide-in-from-bottom-4 duration-500">
                        {/* Header Section */}
                        <div className="flex items-center gap-4 pb-6 border-b border-slate-200/60">
                            <div className="w-20 h-20 bg-emerald-100 rounded-[2rem] flex items-center justify-center text-emerald-600 border-4 border-white shadow-sm">
                                <HiOutlineClock size={40} />
                            </div>
                            <div>
                                <h4 className="text-xl font-black text-slate-800">Jam Operasional</h4>
                                <p className="text-xs text-slate-400 font-bold uppercase tracking-widest mt-1">Atur jadwal buka tutup kebun</p>
                            </div>
                        </div>

                        {/* Store Status Toggle */}
                        <div className="bg-slate-900 rounded-[2rem] p-6 shadow-xl text-white flex items-center justify-between">
                            <div>
                                <p className="font-bold text-lg">Status Toko: BUKA</p>
                                <p className="text-xs text-slate-400 mt-1">Pelanggan dapat memesan durian sekarang</p>
                            </div>
                            <div className="w-16 h-8 bg-emerald-500 rounded-full relative cursor-pointer hover:bg-emerald-400 transition-colors">
                                <div className="absolute right-1 top-1 w-6 h-6 bg-white rounded-full shadow-sm"></div>
                            </div>
                        </div>

                        {/* Weekly Schedule */}
                        <div className="space-y-4">
                            <div className="flex justify-between items-end">
                                <p className="text-[10px] font-black text-slate-400 uppercase tracking-widest ml-1">Jadwal Mingguan</p>
                                <button className="text-[10px] font-bold text-emerald-600 hover:text-emerald-700">Setiap Hari Sama</button>
                            </div>

                            <div className="bg-white rounded-[2rem] p-6 shadow-sm space-y-4">
                                {['Senin', 'Selasa', 'Rabu', 'Kamis', 'Jumat', 'Sabtu', 'Minggu'].map((day, idx) => (
                                    <div key={idx} className="flex items-center justify-between py-2 border-b border-slate-50 last:border-0 hover:bg-slate-50/50 rounded-xl px-2 transition-colors">
                                        <div className="flex items-center gap-4 w-32">
                                            <div className={`w-8 h-4 rounded-full relative cursor-pointer transition-colors ${idx !== 6 ? 'bg-emerald-500' : 'bg-slate-200'}`}>
                                                <div className={`absolute top-0.5 w-3 h-3 bg-white rounded-full shadow-sm transition-all ${idx !== 6 ? 'right-0.5' : 'left-0.5'}`}></div>
                                            </div>
                                            <span className={`text-sm font-bold ${idx !== 6 ? 'text-slate-800' : 'text-slate-400'}`}>{day}</span>
                                        </div>

                                        {idx !== 6 ? (
                                            <div className="flex items-center gap-3">
                                                <div className="relative">
                                                    <input type="time" defaultValue="08:00" className="bg-slate-50 border-none rounded-xl text-xs font-bold text-slate-600 py-2 px-3 focus:ring-2 focus:ring-emerald-500 outline-none" />
                                                </div>
                                                <span className="text-slate-300 font-bold">-</span>
                                                <div className="relative">
                                                    <input type="time" defaultValue="17:00" className="bg-slate-50 border-none rounded-xl text-xs font-bold text-slate-600 py-2 px-3 focus:ring-2 focus:ring-emerald-500 outline-none" />
                                                </div>
                                            </div>
                                        ) : (
                                            <span className="text-xs font-bold text-slate-300 uppercase tracking-widest px-4">Tutup</span>
                                        )}
                                    </div>
                                ))}
                            </div>
                        </div>

                        {/* Action Buttons */}
                        <div className="flex gap-4 pt-6 border-t border-slate-200/60">
                            <button className="flex-1 bg-slate-900 text-white py-4 rounded-2xl font-black text-xs uppercase tracking-widest hover:bg-slate-800 transition-all shadow-xl hover:shadow-2xl hover:-translate-y-1">
                                Simpan Jadwal
                            </button>
                        </div>
                    </div>
                );
            case 'Metode Pembayaran':
                return (
                    <div className="space-y-8 animate-in fade-in slide-in-from-bottom-4 duration-500">
                        {/* Header Section */}
                        <div className="flex items-center gap-4 pb-6 border-b border-slate-200/60">
                            <div className="w-20 h-20 bg-violet-100 rounded-[2rem] flex items-center justify-center text-violet-600 border-4 border-white shadow-sm">
                                <MdOutlinePayments size={40} />
                            </div>
                            <div>
                                <h4 className="text-xl font-black text-slate-800">Metode Pembayaran</h4>
                                <p className="text-xs text-slate-400 font-bold uppercase tracking-widest mt-1">Atur rekening penerimaan dana</p>
                            </div>
                        </div>

                        {/* Connected Accounts */}
                        <div className="space-y-4">
                            <div className="flex justify-between items-end">
                                <p className="text-[10px] font-black text-slate-400 uppercase tracking-widest ml-1">Rekening Terhubung</p>
                                <button className="text-[10px] font-bold text-emerald-600 hover:text-emerald-700 underline">Tambah Rekening</button>
                            </div>

                            <div className="grid grid-cols-1 gap-4">
                                <div className="bg-slate-900 rounded-[2rem] p-6 shadow-xl text-white relative overflow-hidden group">
                                    <div className="absolute top-0 right-0 w-32 h-32 bg-white/5 rounded-full blur-2xl -mr-10 -mt-10"></div>
                                    <div className="flex justify-between items-start mb-6">
                                        <div className="w-12 h-12 bg-white/10 rounded-xl flex items-center justify-center text-xl font-bold">
                                            🏦
                                        </div>
                                        <span className="bg-emerald-500 text-[10px] font-black px-3 py-1 rounded-full uppercase tracking-widest">Utama</span>
                                    </div>
                                    <div className="space-y-1">
                                        <p className="font-mono text-xl tracking-widest text-slate-300">**** **** 8829</p>
                                        <div className="flex justify-between items-end">
                                            <div>
                                                <p className="text-[10px] text-slate-400 font-bold uppercase tracking-widest mt-4">Pemilik Rekening</p>
                                                <p className="font-bold">DurenFarm Official</p>
                                            </div>
                                            <p className="font-black text-xl italic">BCA</p>
                                        </div>
                                    </div>
                                </div>

                                <div className="bg-white border border-slate-100 rounded-[2rem] p-6 hover:shadow-lg transition-all group cursor-pointer">
                                    <div className="flex justify-between items-center">
                                        <div className="flex items-center gap-4">
                                            <div className="w-12 h-12 bg-blue-50 text-blue-600 rounded-xl flex items-center justify-center text-xl font-bold">
                                                💳
                                            </div>
                                            <div>
                                                <p className="font-bold text-slate-800">Mandiri Corporate</p>
                                                <p className="text-xs text-slate-400 font-medium">**** 3321</p>
                                            </div>
                                        </div>
                                        <div className="w-6 h-6 rounded-full border-2 border-slate-200 group-hover:border-emerald-500 group-hover:bg-emerald-50 transition-all"></div>
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* Payment Toggles */}
                        <div className="space-y-4">
                            <p className="text-[10px] font-black text-slate-400 uppercase tracking-widest ml-1">Opsi Pembayaran Aktif</p>
                            <div className="bg-white rounded-[2rem] p-6 shadow-sm space-y-6">
                                {[
                                    { title: "Cash on Delivery (COD)", desc: "Terima tunai saat barang sampai", active: true },
                                    { title: "QRIS Static", desc: "Tampilkan kode QR saat checkout", active: true },
                                    { title: "Virtual Account", desc: "Verifikasi pembayaran otomatis", active: false }
                                ].map((item, idx) => (
                                    <div key={idx} className="flex items-center justify-between">
                                        <div className="pr-4">
                                            <p className="font-bold text-slate-800 text-sm">{item.title}</p>
                                            <p className="text-xs text-slate-400 mt-1">{item.desc}</p>
                                        </div>
                                        <div className={`w-12 h-6 rounded-full relative cursor-pointer transition-colors ${item.active ? 'bg-emerald-500' : 'bg-slate-200'}`}>
                                            <div className={`absolute top-1 w-4 h-4 bg-white rounded-full shadow-sm transition-all ${item.active ? 'right-1' : 'left-1'}`}></div>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>

                        {/* Action Buttons */}
                        <div className="flex gap-4 pt-6 border-t border-slate-200/60">
                            <button className="flex-1 bg-slate-900 text-white py-4 rounded-2xl font-black text-xs uppercase tracking-widest hover:bg-slate-800 transition-all shadow-xl hover:shadow-2xl hover:-translate-y-1">
                                Simpan Konfigurasi
                            </button>
                        </div>
                    </div>
                );
            default:
                return (
                    <div className="flex flex-col items-center justify-center h-96 text-center animate-in fade-in zoom-in duration-500">
                        <div className="w-24 h-24 bg-slate-100 rounded-[2.5rem] flex items-center justify-center mb-6 text-slate-300">
                            {menuItems.find(m => m.name === activeTab)?.icon}
                        </div>
                        <h3 className="text-xl font-black text-slate-800">Fitur Belum Tersedia</h3>
                        <p className="text-slate-400 text-sm mt-2 max-w-xs">Halaman {activeTab} sedang dalam pengembangan. Coba lagi nanti ya!</p>
                    </div>
                );
        }
    };

    return (
        <div className="bg-white rounded-[3rem] p-10 shadow-sm min-h-screen border border-slate-50 font-sans">
            <div className="mb-10">
                <h2 className="text-3xl font-black text-slate-800 tracking-tight">Pengaturan</h2>
                <p className="text-slate-400 text-sm mt-1">Kelola profil kebun dan preferensi sistem Anda</p>
            </div>

            <div className="grid grid-cols-12 gap-10">
                {/* Kolom Kiri: Menu Navigasi Settings */}
                <div className="col-span-12 lg:col-span-4 space-y-2">
                    {menuItems.map((item, i) => (
                        <button
                            key={i}
                            onClick={() => setActiveTab(item.name)}
                            className={`w-full flex items-center gap-4 px-6 py-4 rounded-2xl font-bold text-sm transition-all duration-300 ${activeTab === item.name
                                ? 'bg-slate-900 text-white shadow-xl scale-105'
                                : 'text-slate-400 hover:bg-slate-50 hover:text-slate-600'
                                }`}
                        >
                            <span className={`text-xl ${activeTab === item.name ? 'text-emerald-400' : ''}`}>{item.icon}</span>
                            {item.name}
                        </button>
                    ))}
                </div>

                {/* Kolom Kanan: Form Konten */}
                <div className="col-span-12 lg:col-span-8 bg-slate-50/50 rounded-[2.5rem] p-10 border border-slate-100/80">
                    {renderContent()}
                </div>
            </div>
        </div>
    );
};

export default SettingsPage;