// Utils
import { useState, useEffect } from 'react';
import { cn } from '@/lib/utils';
import useMediaQuery from '@/hooks/use-media-query';

// Types
import { Data } from '@/types';

// Components
import MissionStatusBadge from '@/components/mission-status-badge';
import MissionDetails from '@/components/dashboard/mission-details';
import LocationDetails from '@/components/dashboard/location-details';
import ResourcesList from '@/components/dashboard/resources-list';

import data from '@/data/index.json';

const Dashboard = ({
  selectedMissionId,
  setSelectedMissionId,
}: {
  selectedMissionId: string;
  setSelectedMissionId: (id: string) => void;
}) => {
  const isDesktop = useMediaQuery('(min-width: 1280px)');
  const { missions, celestial_bodies, resources } = data as Data;
  const selectedMission = missions.find(
    (mission) => mission.id === selectedMissionId,
  );

  const [selectedLocationId, setSelectedLocationId] = useState<string | null>(
    null,
  );

  // Sync location data with selected mission
  useEffect(() => {
    setSelectedLocationId(selectedMission?.current_location ?? null);
  }, [selectedMission?.current_location]);

  const selectedLocation = celestial_bodies.find(
    (location) => location.id === selectedLocationId,
  );

  return (
    <div className="h-full w-full max-w-7xl grid-cols-4 gap-4 p-4 xl:grid">
      {isDesktop && (
        <div className="h-full space-y-4">
          <aside className="rounded-md border bg-gray-900/50 p-4">
            <h4 className="text-2xl font-semibold">Missions</h4>
            <p className="mb-4 text-sm text-neutral-400">
              Select the mission of your interest from the list below
            </p>

            <ul className="flex flex-col items-start gap-2">
              {missions.map((mission) => (
                <li
                  className={cn(
                    'w-full rounded border border-neutral-800 bg-neutral-950/80 hover:bg-neutral-800/70',
                    {
                      'bg-neutral-800/70': mission.id === selectedMissionId,
                    },
                  )}
                  key={mission.id}
                >
                  <button
                    className="flex w-full items-center justify-between py-2 pl-4 pr-2"
                    onClick={() => setSelectedMissionId(mission.id)}
                  >
                    <span>{mission.name}</span>

                    <MissionStatusBadge status={mission.status} />
                  </button>
                </li>
              ))}
            </ul>
          </aside>
          <aside className="rounded-md border bg-gray-900/50 p-4">
            <h4 className="text-2xl font-semibold">Resources</h4>
            <p className="mb-4 text-sm text-neutral-400">
              A list of resources to help you plan your mission
            </p>

            <ResourcesList resources={resources} locations={celestial_bodies} />
          </aside>
        </div>
      )}

      <main className="col-span-3 flex h-full flex-col gap-4">
        {selectedMission && (
          <MissionDetails
            mission={selectedMission}
            locations={celestial_bodies}
            setLocationId={setSelectedLocationId}
          />
        )}

        {selectedLocation && <LocationDetails location={selectedLocation} />}
      </main>
    </div>
  );
};

export default Dashboard;
