// Utils
import { capitalizeFirstLetter, cn } from '@/lib/utils';

// Types
import type { MissionStatus } from '@/types';

const MissionStatusBadge = ({ status }: { status: MissionStatus }) => {
  return (
    <span
      className={cn('rounded-full border px-3 py-1 text-xs', {
        'bg-status-active/40 border-status-active': status === 'active',
        'bg-status-planned/40 border-status-planned': status === 'planned',
        'bg-status-complete/40 border-status-complete': status === 'completed',
        'bg-status-incomplete/40 border-status-incomplete':
          status === 'incomplete',
        'bg-status-failed/40 border-status-failed': status === 'failed',
      })}
    >
      {capitalizeFirstLetter(status)}
    </span>
  );
};

export default MissionStatusBadge;
