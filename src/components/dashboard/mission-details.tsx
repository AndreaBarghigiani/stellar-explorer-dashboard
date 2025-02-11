// Utils
import { cn, formatDate, generateTelemetry } from '@/lib/utils';

// Types
import type { Mission, Location } from '@/types';

// Components
import MissionStatusBadge from '@/components/mission-status-badge';
import Stepper from '@/components/stepper';
const MissionDetails = ({
  mission,
  locations,
}: {
  mission: Mission;
  locations: Location[];
}) => {
  const testTelemetry = generateTelemetry(
    mission.telemetry,
    mission.launch_date,
    30,
  );

  console.log('mission route', mission.route);

  return (
    <div className="flex flex-col gap-4 rounded-md border bg-gray-900/50 p-4">
      <header className="flex items-center justify-between gap-4">
        <div>
          <h2 className="text-2xl font-semibold">{mission.name}</h2>
          <h4 className="text-gray-400">
            Launch Date:{' '}
            <span className="text-xs text-gray-300">
              {formatDate(mission.launch_date)}
            </span>
          </h4>
        </div>
        <MissionStatusBadge status={mission.status} />
      </header>

      <section>
        <Stepper totalSteps={12} activeStepIndex={3} />
      </section>
    </div>
  );
};

export default MissionDetails;
