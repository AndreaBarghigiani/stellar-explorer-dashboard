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
}: {
  missions: Mission[];
  onSelect: (mission: string) => void;
}) => {
  return (
    <Select onValueChange={(id) => onSelect(id)}>
      <SelectTrigger className="w-48">
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
