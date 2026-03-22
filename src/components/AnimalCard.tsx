import React from 'react';
import { Animal } from '../types';
import { Carousel } from './Carousel';
import { Heart, Info, Activity, User, Hash } from 'lucide-react';
import { motion } from 'motion/react';

interface AnimalCardProps {
  animal: Animal;
  key?: React.Key;
}

export function AnimalCard({ animal }: AnimalCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      whileHover={{ y: -5 }}
      className="bg-white rounded-2xl shadow-sm hover:shadow-md transition-all duration-300 border border-slate-100 overflow-hidden flex flex-col"
    >
      <Carousel photos={animal.photos} />
      
      <div className="p-5 flex flex-col flex-grow">
        <div className="flex justify-between items-start mb-3">
          <div>
            <h3 className="text-xl font-bold text-slate-800 flex items-center gap-2">
              {animal.name}
              <span className={`text-sm px-2 py-0.5 rounded-full font-medium ${
                animal.gender === '公' ? 'bg-blue-100 text-blue-700' : 'bg-pink-100 text-pink-700'
              }`}>
                {animal.gender}
              </span>
            </h3>
            <p className="text-slate-500 text-sm mt-1">{animal.breed}</p>
          </div>
          <button className="text-slate-300 hover:text-rose-500 transition-colors">
            <Heart size={24} />
          </button>
        </div>

        <div className="space-y-3 mt-2 flex-grow">
          <div className="flex items-start gap-2 text-sm">
            <Hash className="w-4 h-4 text-slate-400 mt-0.5 shrink-0" />
            <div>
              <span className="font-medium text-slate-700">年齡：</span>
              <span className="text-slate-600">{animal.age}</span>
            </div>
          </div>
          
          <div className="flex items-start gap-2 text-sm">
            <User className="w-4 h-4 text-slate-400 mt-0.5 shrink-0" />
            <div>
              <span className="font-medium text-slate-700">個性：</span>
              <span className="text-slate-600 leading-relaxed">{animal.personality}</span>
            </div>
          </div>

          <div className="flex items-start gap-2 text-sm">
            <Activity className="w-4 h-4 text-slate-400 mt-0.5 shrink-0" />
            <div>
              <span className="font-medium text-slate-700">健康狀況：</span>
              <span className="text-slate-600 leading-relaxed">{animal.health}</span>
            </div>
          </div>
        </div>

        <div className="mt-6 pt-4 border-t border-slate-100">
          <button className="w-full bg-emerald-600 hover:bg-emerald-700 text-white font-medium py-2.5 rounded-xl transition-colors flex items-center justify-center gap-2">
            <Info size={18} />
            了解更多認養資訊
          </button>
        </div>
      </div>
    </motion.div>
  );
}
