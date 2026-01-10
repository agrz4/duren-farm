import React from 'react';
import { BrowserRouter as Router, Routes, Route, useNavigate } from 'react-router-dom';
import Sidebar from './components/Sidebar';
import Dashboard from './pages/Dashboard';
import ProductPage from './pages/ProductPage';
import AnalyticsPage from './pages/AnalyticsPage';
import OrderDetailPage from './pages/OrderDetailPage';
import ReviewPage from './pages/ReviewPage';
import SettingsPage from './pages/SettingsPage';

const OrderDetailWrapper: React.FC = () => {
  const navigate = useNavigate();
  return <OrderDetailPage onBack={() => navigate(-1)} />;
};

const App: React.FC = () => {
  return (
    <Router>
      <div className="flex min-h-screen bg-[#F3F4F6]">
        <Sidebar />

        <main className="flex-1 p-8 overflow-y-auto">
          <Routes>
            <Route path="/" element={<Dashboard />} />
            <Route path="/products" element={<ProductPage />} />
            <Route path="/analytics" element={<AnalyticsPage />} />
            <Route path="/orders/detail" element={<OrderDetailWrapper />} />
            <Route path="/reviews" element={<ReviewPage />} />
            <Route path="/settings" element={<SettingsPage />} />
          </Routes>
        </main>
      </div>
    </Router>
  );
};

export default App;