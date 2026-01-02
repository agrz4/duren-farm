import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Sidebar from './components/Sidebar';
import Dashboard from './pages/Dashboard';
import ProductPage from './pages/ProductPage';

const App: React.FC = () => {
  return (
    <Router>
      <div className="flex min-h-screen bg-[#F3F4F6]">
        <Sidebar />

        <main className="flex-1 p-8 overflow-y-auto">
          <Routes>
            <Route path="/" element={<Dashboard />} />
            <Route path="/products" element={<ProductPage />} />
          </Routes>
        </main>
      </div>
    </Router>
  );
};

export default App;