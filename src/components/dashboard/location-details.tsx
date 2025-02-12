// Types
import { CelestialBody } from '@/types';

// Components

const LocationDetails = ({ location }: { location: CelestialBody }) => {
  return (
    <div className="flex flex-col items-center gap-4 rounded-md border bg-gray-900/50 p-4">
      <h3 className="text-center text-4xl font-semibold">{location.name}</h3>
      <img
        className="size-24 border"
        src={location.image_url}
        alt={location.name}
      />

      <h4 className="text-2xl font-semibold">Celestial Body Details</h4>
      <ul>
        <li>
          <strong>Type: </strong>
          <span className="text-gray-400">{location.type}</span>
        </li>
        <li>
          <strong>Distance from Earth: </strong>
          <span className="text-gray-400">
            {location.distance_from_earth} km
          </span>
        </li>
        <li>
          <strong>Surface Temperature: </strong>
          <span className="text-gray-400">
            {location.surface_temperature} °C
          </span>
        </li>
      </ul>
    </div>
  );
};

export default LocationDetails;
