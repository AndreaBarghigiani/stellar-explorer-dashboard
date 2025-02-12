// Utils
import { cn } from '@/lib/utils';

// Types
import type { Mission } from '@/types';

// Components
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select';

const MissionSwitcher = ({
  missions,
  onSelect,
  className,
}: {
  missions: Mission[];
  onSelect: (mission: string) => void;
  className?: string;
}) => {
  return (
    <Select onValueChange={(id) => onSelect(id)}>
      <SelectTrigger className={cn('w-full xl:w-48', className)}>
        <SelectValue placeholder="Select a mission" />
      </SelectTrigger>
      <SelectContent>
        {missions.map((mission) => (
          <SelectItem key={mission.id} value={mission.id}>
            {mission.name}
          </SelectItem>
        ))}
      </SelectContent>
    </Select>
  );
};

export default MissionSwitcher;
