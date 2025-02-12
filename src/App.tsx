// Utils
import { useState } from 'react';
import useMediaQuery from '@/hooks/use-media-query';

// Types
import type { Data } from './types';

// Components
import { Hero } from '@/components/hero';
import Dashboard from '@/components/dashboard';
import { Particles } from '@/components/magicui/particles';
import MissionModal from '@/components/mission-modal';
import ResourcesModal from '@/components/resources-modal';

import data from '@/data/index.json';

function App() {
  const isMobile = useMediaQuery('(max-width: 1280px)');
  const { missions, resources, celestial_bodies } = data as Data;
  const [selectedMissionId, setSelectedMissionId] = useState<string | null>(
    null,
  );

  return (
    <>
      <div className="relative flex min-h-screen items-center justify-center overflow-hidden">
        {!selectedMissionId && (
          <Hero missions={missions} onSelect={setSelectedMissionId} />
        )}

        {selectedMissionId && (
          <Dashboard
            selectedMissionId={selectedMissionId}
            setSelectedMissionId={setSelectedMissionId}
          />
        )}

        {isMobile && selectedMissionId && (
          <div className="fixed top-10 flex w-11/12 justify-between">
            <MissionModal missions={missions} onSelect={setSelectedMissionId} />
            <ResourcesModal
              resources={resources}
              locations={celestial_bodies}
            />
          </div>
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
    </>
  );
}

export default App;
