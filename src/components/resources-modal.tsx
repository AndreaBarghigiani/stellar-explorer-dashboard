// Types
import type { Resource, CelestialBody } from '@/types';

// Components
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from '@/components/ui/dialog';
import ResourcesList from '@/components/dashboard/resources-list';

const ResourcesModal = ({
  resources,
  locations,
}: {
  resources: Resource[];
  locations: CelestialBody[];
}) => {
  return (
    <Dialog>
      <DialogTrigger>Resources</DialogTrigger>
      <DialogContent className="sm:max-w-[425px]">
        <DialogHeader>
          <h4 className="text-2xl font-semibold"></h4>

          <DialogTitle>Resources</DialogTitle>
          <DialogDescription>
            A list of resources to help you plan your mission
          </DialogDescription>
        </DialogHeader>
        <div className="grid gap-4 py-4">
          <ResourcesList resources={resources} locations={locations} />
        </div>
      </DialogContent>
    </Dialog>
  );
};

export default ResourcesModal;
