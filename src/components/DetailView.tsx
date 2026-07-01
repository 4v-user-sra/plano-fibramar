import React from 'react';
import { motion } from 'motion/react';
import { ArrowLeft, TrendingUp, Map, Target, BarChart2, AlertCircle, Zap } from 'lucide-react';
import { ViewState } from '../types';
import { verticalData, horizontalData, CardData } from '../data';

interface DetailViewProps {
  viewType: 'vertical' | 'horizontal';
  onBack: () => void;
}

export const DetailView: React.FC<DetailViewProps> = ({ viewType, onBack }) => {
  const isVertical = viewType === 'vertical';
  const data = isVertical ? verticalData : horizontalData;
  
  const getIcon = (type: CardData['iconType']) => {
    switch (type) {
      case 'trending-up': return <TrendingUp size={28} />;
      case 'map': return <Map size={28} />;
      case 'target': return <Target size={28} />;
      case 'alert-circle': return <AlertCircle size={28} />;
      case 'zap': return <Zap size={28} />;
      default: return <BarChart2 size={28} />;
    }
  };
  
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.6 }}
      className="absolute inset-0 bg-white/90 backdrop-blur-2xl z-50 flex flex-col p-6 md:p-12 lg:p-20 overflow-y-auto"
    >
      <div className="w-full max-w-6xl mx-auto mt-8 md:mt-12 pb-24">
        <div className="flex flex-col md:flex-row md:justify-between md:items-end gap-6 mb-12">
          <div>
            <motion.div 
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.2 }}
              className={`inline-block px-4 py-1.5 rounded-full text-sm font-bold mb-4 uppercase tracking-wider ${
                isVertical ? 'bg-blue-100 text-blue-700' : 'bg-purple-100 text-purple-700'
              }`}
            >
              Visão Detalhada
            </motion.div>
            <motion.h1 
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.3 }}
              className="text-4xl md:text-5xl lg:text-6xl font-extrabold text-gray-900 tracking-tight mb-4"
            >
              {data.title}
            </motion.h1>
            <motion.p
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.4 }}
              className="text-lg md:text-xl text-gray-600 max-w-2xl font-medium"
            >
              {data.subtitle}
            </motion.p>
          </div>
          <motion.button 
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.4 }}
            onClick={onBack}
            className="flex items-center gap-2 px-6 py-3.5 rounded-full bg-gray-900 text-white hover:bg-gray-800 transition-all hover:scale-105 active:scale-95 shadow-xl hover:shadow-2xl flex-shrink-0"
          >
            <ArrowLeft size={20} />
            <span className="font-semibold">Voltar ao Gráfico</span>
          </motion.button>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8 mb-16">
          {data.cards.map((card, i) => (
             <motion.div 
               key={i}
               initial={{ opacity: 0, y: 30 }}
               animate={{ opacity: 1, y: 0 }}
               transition={{ delay: 0.4 + i * 0.1 }}
               className="p-8 rounded-3xl bg-white border border-gray-100 shadow-xl shadow-gray-200/40 hover:shadow-2xl hover:-translate-y-1.5 transition-all duration-300"
             >
               <div className={`w-14 h-14 rounded-2xl flex items-center justify-center mb-6 shadow-inner ${
                 card.iconType === 'alert-circle' ? 'bg-red-50 text-red-600' :
                 isVertical ? 'bg-blue-50 text-blue-600' : 'bg-purple-50 text-purple-600'
               }`}>
                 {getIcon(card.iconType)}
               </div>
               <div className="text-sm font-bold tracking-wider text-gray-400 uppercase mb-1">{card.title}</div>
               <h3 className="text-2xl font-bold text-gray-900 mb-3">{card.value}</h3>
               <p className="text-gray-500 leading-relaxed font-medium">
                 {card.detail}
               </p>
             </motion.div>
          ))}
        </div>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12">
          {/* Tabela de Regiões */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.7 }}
          >
            <h3 className="text-2xl font-bold text-gray-900 mb-6 flex items-center gap-3">
              <Map className={isVertical ? "text-blue-500" : "text-purple-500"} />
              Status por Região
            </h3>
            <div className="bg-white rounded-3xl border border-gray-100 shadow-xl shadow-gray-200/40 overflow-hidden">
              <div className="overflow-x-auto">
                <table className="w-full text-left border-collapse">
                  <thead>
                    <tr className="bg-gray-50 border-b border-gray-100 text-sm uppercase tracking-wider text-gray-500">
                      <th className="p-5 font-semibold">Região</th>
                      <th className="p-5 font-semibold">Volume / CPL</th>
                      <th className="p-5 font-semibold">Status</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-gray-50">
                    {data.regions.map((region, idx) => (
                      <tr key={idx} className="hover:bg-gray-50/50 transition-colors">
                        <td className="p-5 font-bold text-gray-900">{region.name}</td>
                        <td className="p-5">
                          <div className="font-medium text-gray-900">{region.volume}</div>
                          <div className="text-sm text-gray-500 mt-0.5">{region.cpl}</div>
                        </td>
                        <td className="p-5">
                          <span className={`inline-flex items-center px-3 py-1 rounded-full text-xs font-bold ${
                            region.type === 'success' ? 'bg-green-100 text-green-700' :
                            region.type === 'warning' ? 'bg-amber-100 text-amber-700' :
                            region.type === 'danger' ? 'bg-red-100 text-red-700' :
                            'bg-gray-100 text-gray-700'
                          }`}>
                            {region.status}
                          </span>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          </motion.div>

          {/* Diretrizes Estratégicas */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.8 }}
          >
            <h3 className="text-2xl font-bold text-gray-900 mb-6 flex items-center gap-3">
              <Target className={isVertical ? "text-blue-500" : "text-purple-500"} />
              Diretrizes Estratégicas
            </h3>
            <div className="space-y-4">
              {data.strategies.map((strategy, idx) => (
                <div key={idx} className="bg-white rounded-3xl p-6 md:p-8 border border-gray-100 shadow-xl shadow-gray-200/40 hover:shadow-2xl transition-shadow">
                  <div className="flex gap-4 items-start">
                    <div className={`mt-1 rounded-full p-1.5 flex-shrink-0 ${
                      strategy.type === 'risk' ? 'bg-red-100 text-red-600' : 
                      isVertical ? 'bg-blue-100 text-blue-600' : 'bg-purple-100 text-purple-600'
                    }`}>
                      {strategy.type === 'risk' ? <AlertCircle size={20} /> : <Zap size={20} />}
                    </div>
                    <div>
                      <h4 className="text-xl font-bold text-gray-900 mb-2">{strategy.title}</h4>
                      <p className="text-gray-600 leading-relaxed font-medium">
                        {strategy.description}
                      </p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </motion.div>
  );
}
