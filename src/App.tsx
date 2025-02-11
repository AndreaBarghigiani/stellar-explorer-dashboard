// Utils
import { useState } from 'react';

// Types
import type { Mission } from './types';

// Components
import { Hero } from '@/components/hero';
import Dashboard from '@/components/dashboard';
import { Particles } from '@/components/magicui/particles';

import data from '@/data/index.json';

function App() {
  const missions = data.missions as Mission[];
  const [selectedMissionId, setSelectedMissionId] = useState<string | null>(
    null,
  );

  return (
    <div className="relative flex h-screen items-center justify-center overflow-hidden">
      {!selectedMissionId && (
        <Hero missions={missions} onSelect={setSelectedMissionId} />
      )}

      {selectedMissionId && (
        <Dashboard
          selectedMissionId={selectedMissionId}
          setSelectedMissionId={setSelectedMissionId}
        />
      )}

      <Particles
        className="absolute inset-0 -z-10"
        quantity={100}
        staticity={50}
        ease={50}
        size={0.4}
        color="#ffffff"
        vx={0}
        vy={0}
      />
    </div>
  );
}

export default App;
