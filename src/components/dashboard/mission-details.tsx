// Utils
import { useState, useRef } from 'react';
import { formatDate, generateTelemetry } from '@/lib/utils';

// Types
import type { ChartType, Mission, CelestialBody } from '@/types';

// Components
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select';
import MissionStatusBadge from '@/components/mission-status-badge';
import TelemetryChart from '@/components/dashboard/telemetry-chart';
import Stepper from '@/components/stepper';

const MissionDetails = ({
  mission,
  locations,
  setLocationId,
}: {
  mission: Mission;
  locations: CelestialBody[];
  setLocationId: (id: string) => void;
}) => {
  const [chartType, setChartType] = useState<ChartType>('line');

  const { route } = mission;

  // Only to keep stable the telemetry data while re-renders
  const generatedTelemetryRef = useRef(
    generateTelemetry(mission.telemetry, mission.launch_date, 30),
  );
  const generatedTelemetry = generatedTelemetryRef.current;

  const currentLocationIndex = route.findIndex(
    (location) => location === mission.current_location,
  );

  const routeLocations = locations
    .filter((location) => route.includes(location.id))
    .sort((a, b) => route.indexOf(a.id) - route.indexOf(b.id));

  return (
    <div className="flex flex-col gap-4 rounded-md border bg-gray-900/50 p-4">
      <header className="flex flex-col items-center justify-between gap-2">
        <MissionStatusBadge status={mission.status} />

        <h4 className="text-gray-400">
          Launch Date:{' '}
          <span className="text-gray-300">
            {formatDate(mission.launch_date)}
          </span>
        </h4>

        <h1 className="pointer-events-none whitespace-pre-wrap bg-gradient-to-b from-white to-slate-500 bg-clip-text text-center text-6xl font-bold leading-relaxed text-transparent">
          {mission.name}
        </h1>
      </header>

      <section className="flex flex-col items-center gap-4">
        <div className="w-full text-center">
          <h3 className="mb-2 text-3xl font-semibold">Telemetry</h3>
          <p className="text-sm text-gray-400">Last 30 days</p>

          <Select
            defaultValue="line"
            onValueChange={(type: ChartType) => setChartType(type)}
          >
            <div className="my-4 flex items-center justify-center gap-4">
              <span className="text-sm text-gray-400">Select chart type:</span>
              <SelectTrigger className="w-24">
                <SelectValue placeholder="Select chart type" />
              </SelectTrigger>
            </div>
            <SelectContent>
              <SelectItem value="line">Line</SelectItem>
              <SelectItem value="bar">Bar</SelectItem>
            </SelectContent>
          </Select>

          <TelemetryChart
            telemetry={generatedTelemetry}
            chartType={chartType}
          />
        </div>

        <div className="w-full text-center">
          <h3 className="mb-2 text-3xl font-semibold">The path until here</h3>
          <p className="mb-4 text-sm text-gray-400">
            Click on a location to check details
          </p>

          <Stepper
            totalLocations={routeLocations}
            activeStepIndex={currentLocationIndex}
            setLocationId={setLocationId}
            className="mx-auto w-8/12"
          />
        </div>
      </section>
    </div>
  );
};

export default MissionDetails;
