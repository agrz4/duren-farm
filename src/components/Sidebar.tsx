import React from 'react';
import { MdOutlineDashboard, MdOutlineInventory2, MdOutlineAnalytics, MdOutlineChatBubbleOutline, MdOutlineStarOutline } from "react-icons/md";
import { HiOutlineShoppingBag, HiOutlineDocumentText } from "react-icons/hi2";
import { Link, useLocation } from 'react-router-dom';

const Sidebar: React.FC = () => {
  const location = useLocation();

  const menus = [
    { name: 'Dashboard', icon: <MdOutlineDashboard />, path: '/' },
    { name: 'Product', icon: <MdOutlineInventory2 />, path: '/products' },
    { name: 'Analytics', icon: <MdOutlineAnalytics />, path: '/analytics' },
    { name: 'Detail Order', icon: <HiOutlineDocumentText />, path: '/orders/detail' },
    { name: 'Sale', icon: <HiOutlineShoppingBag />, path: '/sales' },
    { name: 'Review', icon: <MdOutlineStarOutline />, path: '/reviews' },
    { name: 'Chat', icon: <MdOutlineChatBubbleOutline />, path: '/chat' },
  ];

  return (
    <div className="w-64 min-h-screen bg-white p-6 border-r border-slate-100 hidden lg:block">
      <div className="flex items-center gap-2 mb-10 px-2">
        <div className="bg-orange-500 w-8 h-8 rounded-lg flex items-center justify-center text-white font-bold">G</div>
        <span className="text-xl font-bold tracking-tight">Duren Farm</span>
      </div>

      <nav className="space-y-2">
        <p className="text-[10px] font-bold text-slate-400 uppercase tracking-widest px-3 mb-4">Menu</p>
        {menus.map((menu) => {
          const isActive = location.pathname === menu.path || (menu.path !== '/' && location.pathname.startsWith(menu.path));

          return (
            <Link key={menu.name} to={menu.path}>
              <div
                className={`flex items-center gap-3 px-4 py-3 rounded-2xl cursor-pointer transition-all mb-1 ${isActive ? 'bg-emerald-600 text-white shadow-lg shadow-emerald-100' : 'text-slate-500 hover:bg-slate-50'
                  }`}
              >
                <span className="text-xl">{menu.icon}</span>
                <span className="text-sm font-semibold">{menu.name}</span>
              </div>
            </Link>
          );
        })}
      </nav>

      {/* Promo Card di Sidebar */}
      <div className="mt-20 p-4 bg-emerald-900 rounded-[2rem] text-white relative overflow-hidden">
        <div className="relative z-10">
          <p className="text-[10px] opacity-70">Special Harvest</p>
          <p className="text-lg font-bold leading-tight mt-1">Get Discount</p>
          <p className="text-3xl font-black mt-2">65%</p>
        </div>
        <div className="absolute -right-4 -bottom-4 w-24 h-24 bg-emerald-500/20 rounded-full blur-2xl"></div>
      </div>
    </div>
  );
};

export default Sidebar;