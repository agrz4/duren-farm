import React from 'react';
import {
    Chart as ChartJS,
    CategoryScale,
    LinearScale,
    PointElement,
    LineElement,
    Title,
    Tooltip,
    Legend,
    ArcElement,
    Filler
} from 'chart.js';
import { Line, Doughnut } from 'react-chartjs-2';
import { HiOutlineArrowTrendingUp } from 'react-icons/hi2';

// Registrasi komponen Chart.js
ChartJS.register(
    CategoryScale,
    LinearScale,
    PointElement,
    LineElement,
    ArcElement,
    Title,
    Tooltip,
    Legend,
    Filler
);

const PopulationCard = () => {
    const [activeData, setActiveData] = React.useState({
        value: 45,
        label: 'Musang King',
        color: '#065f46'
    });

    const donutData = {
        labels: ['Musang King', 'Bawor', 'Montong', 'Lainnya'],
        datasets: [
            {
                data: [45, 25, 20, 10],
                backgroundColor: ['#065f46', '#10b981', '#fb923c', '#e2e8f0'],
                hoverOffset: 25,
                borderWidth: 0,
                borderRadius: 8,
                hoverBorderWidth: 5,
                hoverBorderColor: '#ffffff',
            },
        ],
    };

    const donutOptions = {
        cutout: '65%',
        animation: {
            animateScale: true,
            animateRotate: true,
            duration: 1500,
            easing: 'easeOutQuart' as const,
        },
        layout: { padding: 20 },
        onHover: (_: any, elements: any) => {
            if (elements && elements.length > 0) {
                const index = elements[0].index;
                const value = donutData.datasets[0].data[index];
                const label = donutData.labels[index];
                const color = donutData.datasets[0].backgroundColor[index];
                setActiveData({ value, label, color });
            } else {
                setActiveData({
                    value: 45,
                    label: 'Musang King',
                    color: '#065f46'
                });
            }
        },
        plugins: {
            legend: { display: false },
            tooltip: { enabled: false }
        }
    };

    const categories = [
        { name: 'Musang King', value: 45, color: 'bg-[#065f46]' },
        { name: 'Bawor', value: 25, color: 'bg-[#10b981]' },
        { name: 'Montong', value: 20, color: 'bg-[#fb923c]' },
        { name: 'Lainnya', value: 10, color: 'bg-[#e2e8f0]' },
    ];

    return (
        <div className="bg-white p-8 rounded-[2.5rem] border border-slate-50 shadow-sm transition-all duration-500 hover:shadow-lg">
            <div className="flex justify-between items-start mb-8">
                <div>
                    <h3 className="text-lg font-bold text-slate-800">Populasi Produk</h3>
                    <p className="text-xs text-slate-400">Distribusi varietas terjual</p>
                </div>
                <div className="p-2 bg-emerald-50 text-emerald-600 rounded-xl animate-pulse">
                    <HiOutlineArrowTrendingUp size={20} />
                </div>
            </div>

            <div className="relative flex justify-center mb-10">
                <div className="w-64 h-64 transition-transform duration-500 hover:scale-105">
                    <Doughnut data={donutData} options={donutOptions} />
                </div>
                {/* Angka di tengah donat */}
                <div className="absolute inset-0 flex flex-col items-center justify-center pointer-events-none transition-all duration-300">
                    <span
                        className="text-4xl font-black transition-colors duration-300"
                        style={{ color: activeData.color }}
                    >
                        {activeData.value}%
                    </span>
                    <span className="text-sm font-bold text-slate-400 uppercase tracking-widest mt-1">
                        {activeData.label}
                    </span>
                </div>
            </div>

            <div className="space-y-4">
                {categories.map((cat, i) => (
                    <div key={i} className="group cursor-default hover:bg-slate-50 p-2 rounded-xl transition-colors duration-300">
                        <div className="flex justify-between items-center mb-1.5">
                            <div className="flex items-center gap-3">
                                <div className={`w-3 h-3 rounded-full ${cat.color} ring-4 ring-transparent group-hover:ring-emerald-100 transition-all duration-300`} />
                                <span className="text-sm font-semibold text-slate-600 group-hover:text-slate-900 transition-colors">{cat.name}</span>
                            </div>
                            <span className="text-sm font-black text-slate-800">{cat.value}%</span>
                        </div>
                        <div className="w-full bg-slate-100 h-1.5 rounded-full overflow-hidden">
                            <div
                                className={`h-full ${cat.color} transition-all duration-1000 ease-out`}
                                style={{ width: `${cat.value}%` }}
                            />
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

const AnalyticsPage: React.FC = () => {
    // Data untuk Grafik Penjualan (Line Chart)
    // Data untuk Grafik Penjualan (Line Chart)
    const salesData = {
        labels: ['Sen', 'Sel', 'Rab', 'Kam', 'Jum', 'Sab', 'Min'],
        datasets: [
            {
                label: 'Penjualan',
                data: [1200000, 1900000, 1500000, 2200000, 3000000, 4500000, 3800000],
                borderColor: '#10b981',
                backgroundColor: (context: any) => {
                    const ctx = context.chart.ctx;
                    const gradient = ctx.createLinearGradient(0, 0, 0, 400);
                    gradient.addColorStop(0, 'rgba(16, 185, 129, 0.2)');
                    gradient.addColorStop(1, 'rgba(16, 185, 129, 0)');
                    return gradient;
                },
                fill: true,
                tension: 0.4,
                pointBackgroundColor: '#ffffff',
                pointBorderColor: '#10b981',
                pointBorderWidth: 3,
                pointRadius: 6,
                pointHoverRadius: 12,
                pointHoverBorderWidth: 4,
                pointHoverBackgroundColor: '#10b981',
                pointHoverBorderColor: '#ffffff',
            },
        ],
    };

    // Data untuk Distribusi Produk (Doughnut Chart)


    const options = {
        responsive: true,
        plugins: {
            legend: { display: false },
            tooltip: {
                backgroundColor: '#ffffff',
                titleColor: '#000000',
                bodyColor: '#64748b',
                borderColor: '#e2e8f0',
                borderWidth: 1,
                padding: 14,
                displayColors: false,
                titleFont: { size: 14, weight: 'bold' as const },
                bodyFont: { size: 14, weight: 'bold' as const },
                callbacks: {
                    label: (context: any) => `Rp ${context.raw.toLocaleString('id-ID')}`
                }
            }
        },
        interaction: {
            mode: 'index' as const,
            intersect: false,
        },
        scales: {
            y: {
                grid: { display: false },
                ticks: { display: false },
                border: { display: false }
            },
            x: {
                grid: { display: false },
                ticks: { color: '#94a3b8', font: { weight: 'bold' as const } },
                border: { display: false }
            },
        },
        animations: {
            y: {
                duration: 2000,
                easing: 'easeOutQuart' as const
            }
        }
    };

    return (
        <div className="bg-white rounded-[3rem] p-10 shadow-sm min-h-screen">
            <div className="mb-10">
                <h2 className="text-2xl font-bold text-slate-800">Analisis Penjualan</h2>
                <p className="text-sm text-slate-400">Pantau performa kebun durian Anda secara real-time</p>
            </div>

            <div className="grid grid-cols-12 gap-8">
                {/* Grafik Utama */}
                <div className="col-span-12 lg:col-span-8 bg-slate-50 p-8 rounded-[2.5rem]">
                    <div className="flex justify-between items-center mb-6">
                        <h3 className="font-bold text-slate-700">Tren Pendapatan</h3>
                        <span className="text-xs bg-emerald-100 text-emerald-600 px-3 py-1 rounded-full font-bold">+12% dari minggu lalu</span>
                    </div>
                    <Line data={salesData} options={options} />
                </div>

                {/* Grafik Lingkaran & Info Ringkas */}
                <div className="col-span-12 lg:col-span-4 space-y-6">
                    <PopulationCard />

                    <div className="bg-emerald-600 p-8 rounded-[2.5rem] text-white">
                        <p className="text-xs opacity-80 uppercase font-bold tracking-widest">Target Bulanan</p>
                        <h4 className="text-3xl font-black mt-2">Rp 50M</h4>
                        <p className="text-[10px] mt-4 opacity-70 italic">*Tersisa 4 hari lagi untuk mencapai target</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default AnalyticsPage;