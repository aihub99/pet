import React from 'react';
import { animals } from './data';
import { AnimalCard } from './components/AnimalCard';
import { PawPrint, HeartHandshake } from 'lucide-react';
import { motion } from 'motion/react';

export default function App() {
  return (
    <div className="min-h-screen bg-slate-50 font-sans text-slate-900">
      {/* Header */}
      <header className="bg-white shadow-sm sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">
          <div className="flex items-center gap-2 text-emerald-600">
            <PawPrint size={28} strokeWidth={2.5} />
            <span className="text-xl font-bold tracking-tight">Paws & Homes</span>
          </div>
          <nav className="hidden md:flex gap-6 text-sm font-medium text-slate-600">
            <a href="#" className="hover:text-emerald-600 transition-colors">首頁</a>
            <a href="#" className="text-emerald-600 transition-colors">尋找毛孩</a>
            <a href="#" className="hover:text-emerald-600 transition-colors">認養須知</a>
            <a href="#" className="hover:text-emerald-600 transition-colors">關於我們</a>
          </nav>
          <button className="bg-emerald-600 hover:bg-emerald-700 text-white px-4 py-2 rounded-full text-sm font-medium transition-colors flex items-center gap-2">
            <HeartHandshake size={16} />
            支持我們
          </button>
        </div>
      </header>

      {/* Hero Section */}
      <section className="bg-emerald-900 text-white py-20 px-4 relative overflow-hidden">
        <div className="absolute inset-0 opacity-20 bg-[url('https://images.unsplash.com/photo-1548199973-03cce0bbc87b?auto=format&fit=crop&q=80&w=2000')] bg-cover bg-center" />
        <div className="max-w-7xl mx-auto relative z-10 text-center">
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-4xl md:text-5xl lg:text-6xl font-extrabold tracking-tight mb-6"
          >
            給牠們一個溫暖的家
          </motion.h1>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-lg md:text-xl text-emerald-100 max-w-2xl mx-auto mb-10"
          >
            每一隻毛孩都值得被愛。在這裡尋找與你有緣的夥伴，開啟一段美好的旅程。
          </motion.p>
        </div>
      </section>

      {/* Main Content */}
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="flex justify-between items-end mb-10">
          <div>
            <h2 className="text-3xl font-bold text-slate-800 mb-2">等待認養的毛孩</h2>
            <p className="text-slate-500">目前有 {animals.length} 隻可愛的動物正在尋找新家</p>
          </div>
          
          {/* Simple Filter Mockup */}
          <div className="hidden sm:flex gap-2">
            <select className="bg-white border border-slate-200 text-slate-700 text-sm rounded-lg focus:ring-emerald-500 focus:border-emerald-500 block p-2.5 outline-none">
              <option>所有種類</option>
              <option>狗狗</option>
              <option>貓咪</option>
            </select>
            <select className="bg-white border border-slate-200 text-slate-700 text-sm rounded-lg focus:ring-emerald-500 focus:border-emerald-500 block p-2.5 outline-none">
              <option>所有性別</option>
              <option>公</option>
              <option>母</option>
            </select>
          </div>
        </div>

        {/* Animal Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {animals.map((animal) => (
            <AnimalCard key={animal.id} animal={animal} />
          ))}
        </div>
      </main>

      {/* Footer */}
      <footer className="bg-slate-900 text-slate-400 py-12 text-center">
        <div className="max-w-7xl mx-auto px-4 flex flex-col items-center">
          <PawPrint size={32} className="text-emerald-500 mb-4" />
          <p className="mb-2">&copy; 2026 Paws & Homes 動物認養平台. All rights reserved.</p>
          <p className="text-sm">以領養代替購買，以結紮代替撲殺。</p>
        </div>
      </footer>
    </div>
  );
}
