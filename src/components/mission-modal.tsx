// Types
import type { Mission } from '@/types';

// Components
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from '@/components/ui/dialog';
import MissionSwitcher from '@/components/mission-switcher';

const MissionModal = ({
  missions,
  onSelect,
}: {
  missions: Mission[];
  onSelect: (mission: string) => void;
}) => {
  return (
    <Dialog>
      <DialogTrigger>Missions</DialogTrigger>
      <DialogContent className="sm:max-w-[425px]">
        <DialogHeader>
          <DialogTitle>Missions</DialogTitle>
          <DialogDescription>
            Select the mission of your interest below
          </DialogDescription>
        </DialogHeader>
        <div className="grid gap-4 py-4">
          <MissionSwitcher missions={missions} onSelect={onSelect} />
        </div>
      </DialogContent>
    </Dialog>
  );
};

export default MissionModal;
