/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { useState } from 'react';
import { AnimatePresence } from 'motion/react';
import { ChartView } from './components/ChartView';
import { DetailView } from './components/DetailView';
import { ViewState } from './types';

export default function App() {
  const [view, setView] = useState<ViewState>('chart');

  return (
    <div className="relative w-full h-screen overflow-hidden bg-white">
      {/* Background grid and metallic effect */}
      <div className="absolute inset-0 metallic-bg" />
      <div className="absolute inset-0 grid-bg opacity-60" />

      <AnimatePresence mode="wait">
        {view === 'chart' && <ChartView key="chart" onNavigate={setView} />}
        {view === 'vertical' && <DetailView key="vertical" viewType="vertical" onBack={() => setView('chart')} />}
        {view === 'horizontal' && <DetailView key="horizontal" viewType="horizontal" onBack={() => setView('chart')} />}
      </AnimatePresence>
    </div>
  );
}
