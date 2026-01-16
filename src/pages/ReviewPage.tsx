import React from 'react';
import { HiStar } from "react-icons/hi2";
import { MdOutlineModeEditOutline, MdOutlinePhotoLibrary } from "react-icons/md";
import musangKingImg from '../assets/img/musang king.png';

const ReviewPage: React.FC = () => {
    const reviews = [
        {
            id: 1,
            user: "Budi Santoso",
            date: "2 jam yang lalu",
            rating: 5,
            comment: "Luar biasa! Musang King-nya benar-benar jatuh pohon. Dagingnya tebal, legit, dan ada rasa pahit sedikit sesuai selera saya. Pengiriman Sameday sangat cepat.",
            product: "Musang King Super",
            image: musangKingImg
        },
        {
            id: 2,
            user: "Siti Aminah",
            date: "Kemarin",
            rating: 4,
            comment: "Durennya manis banget, tapi ukurannya agak kecil dibanding bayangan saya. Tapi kualitas buahnya juara, gak ada yang busuk sama sekali.",
            product: "Bawor Banyumas",
            image: null
        }
    ];

    return (
        <div className="bg-white rounded-[3rem] p-10 shadow-sm min-h-screen border border-slate-50">
            {/* Header Review */}
            <div className="flex justify-between items-end mb-10">
                <div>
                    <h2 className="text-3xl font-black text-slate-800 tracking-tight">Ulasan Pelanggan</h2>
                    <p className="text-slate-400 text-sm mt-1">Apa kata mereka tentang hasil panen DurenFarm</p>
                </div>
                <div className="flex items-center gap-4 bg-emerald-50 px-6 py-3 rounded-2xl border border-emerald-100">
                    <div className="flex text-orange-400">
                        {[...Array(5)].map((_, i) => <HiStar key={i} size={20} fill="currentColor" />)}
                    </div>
                    <span className="font-black text-emerald-700 text-lg">4.9 / 5.0</span>
                </div>
            </div>

            <div className="grid grid-cols-12 gap-10">
                {/* Kolom Kiri: Daftar Review */}
                <div className="col-span-12 lg:col-span-8 space-y-6">
                    {reviews.map((review) => (
                        <div key={review.id} className="group bg-slate-50 p-8 rounded-[2.5rem] border border-transparent hover:border-emerald-200 hover:bg-white hover:shadow-xl transition-all duration-300">
                            <div className="flex justify-between items-start mb-4">
                                <div className="flex items-center gap-3">
                                    <div className="w-12 h-12 bg-slate-200 rounded-2xl flex items-center justify-center font-bold text-slate-500">
                                        {review.user.charAt(0)}
                                    </div>
                                    <div>
                                        <h4 className="font-bold text-slate-800">{review.user}</h4>
                                        <p className="text-[10px] text-slate-400 uppercase font-bold tracking-widest">{review.date}</p>
                                    </div>
                                </div>
                                <div className="flex text-orange-400">
                                    {[...Array(review.rating)].map((_, i) => <HiStar key={i} size={16} fill="currentColor" />)}
                                </div>
                            </div>

                            <div className="bg-white p-2 rounded-lg inline-block mb-4 border border-slate-100 shadow-sm">
                                <p className="text-[10px] font-black text-emerald-600 uppercase px-2 tracking-tighter">
                                    Produk: {review.product}
                                </p>
                            </div>

                            <p className="text-slate-600 leading-relaxed text-sm italic">"{review.comment}"</p>

                            {review.image && (
                                <div className="mt-6">
                                    <img
                                        src={review.image}
                                        alt="review"
                                        className="w-24 h-24 object-cover rounded-2xl border-4 border-white shadow-md hover:scale-105 transition-transform"
                                    />
                                </div>
                            )}
                        </div>
                    ))}
                </div>

                {/* Kolom Kanan: Ringkasan & Aksi */}
                <div className="col-span-12 lg:col-span-4 space-y-6">
                    <div className="bg-slate-900 rounded-[3rem] p-8 text-white">
                        <h3 className="text-xl font-bold mb-6">Analisis Sentimen</h3>
                        <div className="space-y-4">
                            {[
                                { label: 'Manis & Legit', value: '92%', color: 'bg-emerald-500' },
                                { label: 'Kecepatan Kirim', value: '88%', color: 'bg-orange-500' },
                                { label: 'Kualitas Buah', value: '95%', color: 'bg-blue-500' },
                            ].map((item, i) => (
                                <div key={i} className="space-y-2">
                                    <div className="flex justify-between text-[10px] font-bold uppercase tracking-widest text-slate-400">
                                        <span>{item.label}</span>
                                        <span className="text-white">{item.value}</span>
                                    </div>
                                    <div className="h-1.5 w-full bg-slate-800 rounded-full overflow-hidden">
                                        <div className={`h-full ${item.color} transition-all duration-1000`} style={{ width: item.value }} />
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ReviewPage;