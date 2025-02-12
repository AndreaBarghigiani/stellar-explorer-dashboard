// Types
import type { Resource, CelestialBody } from '@/types';

const ResourcesList = ({
  resources,
  locations,
}: {
  resources: Resource[];
  locations: CelestialBody[];
}) => {
  return (
    <ul className="flex max-h-96 flex-col gap-2 overflow-y-scroll">
      {resources.map((resource) => {
        const location = locations.find(
          (location) => location.id === resource.location,
        );

        return (
          <li key={resource.type + resource.location} className="border p-4">
            <h5 className="text-xl font-semibold">{resource.type}</h5>
            <p>
              <strong>Quantity: </strong>
              {resource.quantity}
            </p>
            <p>
              <strong>Location: </strong>
              {location?.name}
            </p>
          </li>
        );
      })}
    </ul>
  );
};

export default ResourcesList;
