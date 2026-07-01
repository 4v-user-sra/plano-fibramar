import React, { useState } from 'react';
import { motion } from 'motion/react';
import { ViewState } from '../types';

interface ChartViewProps {
  onNavigate: (view: ViewState) => void;
}

export const ChartView: React.FC<ChartViewProps> = ({ onNavigate }) => {
  const [zoomingTo, setZoomingTo] = useState<'vertical' | 'horizontal' | null>(null);

  const handleZoom = (target: 'vertical' | 'horizontal') => {
    setZoomingTo(target);
    setTimeout(() => {
      onNavigate(target);
    }, 800);
  };

  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.95 }}
      animate={{ 
        opacity: zoomingTo ? 0 : 1, 
        scale: zoomingTo ? 3 : 1 
      }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
      style={{
        transformOrigin: zoomingTo === 'vertical' ? '0% 0%' : zoomingTo === 'horizontal' ? '100% 100%' : '50% 50%'
      }}
      className="absolute inset-0 flex items-center justify-center p-6 md:p-16 lg:p-24 pointer-events-none"
    >
      <div className="relative w-full max-w-6xl aspect-square md:aspect-video border-l-[3px] border-b-[3px] border-gray-900 shadow-2xl bg-white/40 backdrop-blur-md pointer-events-auto overflow-hidden">
        
        {/* Diagonal Line */}
        <svg className="absolute inset-0 w-full h-full pointer-events-none" preserveAspectRatio="none">
          <line x1="0" y1="100%" x2="100%" y2="0" stroke="#94a3b8" strokeWidth="2.5" className="dashed-line" />
        </svg>

        {/* Vertical Scale Zone (Top Left) */}
        <div 
          className="absolute inset-0 z-10 group cursor-pointer"
          style={{ clipPath: 'polygon(0 0, 100% 0, 0 100%)' }}
          onClick={() => handleZoom('vertical')}
        >
          <div className="zone-shine" />
          
          <div className="absolute top-8 left-8 md:top-12 md:left-12 lg:top-20 lg:left-20 max-w-xs md:max-w-md">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-extrabold mb-6 md:mb-8 text-shine-vertical tracking-tight">Escala vertical</h2>
            <ul className="space-y-3 md:space-y-4">
              <li className="bullet-item flex items-center text-gray-800 text-base md:text-lg lg:text-xl font-medium">
                <span className="w-2 h-2 md:w-2.5 md:h-2.5 rounded-full bg-blue-500 mr-4 shadow-[0_0_12px_rgba(59,130,246,0.8)]" />
                Regiões com CPL mais baixo
              </li>
              <li className="bullet-item flex items-center text-gray-800 text-base md:text-lg lg:text-xl font-medium">
                <span className="w-2 h-2 md:w-2.5 md:h-2.5 rounded-full bg-blue-500 mr-4 shadow-[0_0_12px_rgba(59,130,246,0.8)]" />
                Análise de custo por lead
              </li>
              <li className="bullet-item flex items-center text-gray-800 text-base md:text-lg lg:text-xl font-medium">
                <span className="w-2 h-2 md:w-2.5 md:h-2.5 rounded-full bg-blue-500 mr-4 shadow-[0_0_12px_rgba(59,130,246,0.8)]" />
                Próximas ações nas campanhas
              </li>
            </ul>
          </div>
        </div>

        {/* Horizontal Scale Zone (Bottom Right) */}
        <div 
          className="absolute inset-0 z-10 group cursor-pointer"
          style={{ clipPath: 'polygon(100% 0, 100% 100%, 0 100%)' }}
          onClick={() => handleZoom('horizontal')}
        >
          <div className="zone-shine" style={{ transformOrigin: 'bottom right' }} />
          
          <div className="absolute bottom-8 right-8 md:bottom-12 md:right-12 lg:bottom-20 lg:right-20 max-w-xs md:max-w-md text-right flex flex-col items-end">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-extrabold mb-6 md:mb-8 text-shine-horizontal tracking-tight w-full text-right">Escala horizontal</h2>
            <ul className="space-y-3 md:space-y-4 w-full">
              <li className="bullet-item-right flex items-center justify-end text-gray-800 text-base md:text-lg lg:text-xl font-medium">
                Regiões mais promissoras
                <span className="w-2 h-2 md:w-2.5 md:h-2.5 rounded-full bg-purple-500 ml-4 shadow-[0_0_12px_rgba(168,85,247,0.8)]" />
              </li>
              <li className="bullet-item-right flex items-center justify-end text-gray-800 text-base md:text-lg lg:text-xl font-medium">
                Benchmark de regiões
                <span className="w-2 h-2 md:w-2.5 md:h-2.5 rounded-full bg-purple-500 ml-4 shadow-[0_0_12px_rgba(168,85,247,0.8)]" />
              </li>
              <li className="bullet-item-right flex items-center justify-end text-gray-800 text-base md:text-lg lg:text-xl font-medium">
                Plano de ação nas campanhas
                <span className="w-2 h-2 md:w-2.5 md:h-2.5 rounded-full bg-purple-500 ml-4 shadow-[0_0_12px_rgba(168,85,247,0.8)]" />
              </li>
            </ul>
          </div>
        </div>
      </div>
    </motion.div>
  );
}
