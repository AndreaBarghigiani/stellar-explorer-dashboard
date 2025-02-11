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

export type Mission = {
  name: string;
  id: string;
  launch_date: string;
  current_location: string;
  status: MissionStatus;
  route: string[];
  telemetry: Telemetry;
};

export type Location = {
  id: string;
  name: string;
};

export type Data = {
  missions: Mission[];
  locations: Location[];
};
