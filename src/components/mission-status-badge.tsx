// Utils
import { capitalizeFirstLetter, cn } from '@/lib/utils';

// Types
import type { MissionStatus } from '@/types';

const MissionStatusBadge = ({ status }: { status: MissionStatus }) => {
  return (
    <span
      className={cn('rounded-full px-3 py-1 text-xs', {
        'bg-orange-600/50': status === 'active',
        'bg-neutral-600/50': status === 'planned',
        'bg-green-600/50': status === 'completed',
        'bg-yellow-600/50': status === 'incomplete',
        'bg-red-600/50': status === 'failed',
      })}
    >
      {capitalizeFirstLetter(status)}
    </span>
  );
};

export default MissionStatusBadge;
