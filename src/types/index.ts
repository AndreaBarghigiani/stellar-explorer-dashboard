export type MissionStatus =
  | 'incomplete'
  | 'active'
  | 'completed'
  | 'planned'
  | 'failed';

export type Telemetry = {
  temperature: number;
  fuel_level: number;
  speed: number;
};

export type TelemetryChartData = Telemetry & {
  date: string;
};

export type TelemetryChartRanges = {
  temperature: {
    min: number;
    max: number;
  };
  fuel_level?: {
    min: number;
    max: number;
  };
  speed: {
    min: number;
    max: number;
  };
};

export type ChartType = 'line' | 'bar';

export type Mission = {
  name: string;
  id: string;
  launch_date: string;
  current_location: string;
  status: MissionStatus;
  route: string[];
  telemetry: Telemetry;
};

export type CelestialBody = {
  id: string;
  name: string;
  type: string;
  distance_from_earth: number;
  surface_temperature: number;
  image_url: string;
};

export type Data = {
  missions: Mission[];
  celestial_bodies: CelestialBody[];
};
