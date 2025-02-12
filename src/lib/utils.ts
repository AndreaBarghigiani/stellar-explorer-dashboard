// Utils
import { clsx, type ClassValue } from 'clsx';
import { twMerge } from 'tailwind-merge';

// Types
import type {
  Telemetry,
  TelemetryChartData,
  TelemetryChartRanges,
} from '@/types';

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

/**
 * Capitalizes the first letter of a given string.
 *
 * @param {string} string - The input string to capitalize.
 * @return {string} The modified string with the first letter capitalized.
 */
export function capitalizeFirstLetter(string: string) {
  return string.charAt(0).toUpperCase() + string.slice(1).toLowerCase();
}

/**
 * Formats a date string to a human-readable format.
 *
 * @param {dateString} string - The date string to format
 * @returns {string} - The formatted date
 */
export function formatDate(dateString: string) {
  const date = new Date(dateString);
  return new Intl.DateTimeFormat('en-US', {
    month: 'short',
    day: 'numeric',
    year: 'numeric',
  }).format(date);
}

/**
 * Generate telemetry data for a mission
 *
 * @param telemetry Telemetry - The original telemetry data we have for the mission
 * @param launchDate string - The launch date of the mission
 * @param prevDays number - The number of days to generate data for
 * @returns TelemetryChartData[]
 */
export function generateTelemetry(
  telemetry: Telemetry,
  launchDate: string,
  prevDays: number,
): TelemetryChartData[] {
  const { temperature, fuel_level, speed } = telemetry;
  const startDate = new Date(launchDate);
  const data = [];

  for (let i = prevDays; i >= 0; i--) {
    const date = new Date(startDate);
    date.setDate(date.getDate() - i);

    data.push({
      // Format as YYYY-MM-DD
      date: date.toISOString().split('T')[0],
      // ±5 variation
      temperature: Math.max(
        -60,
        Math.min(35, temperature + (Math.random() * 10 - 5)),
      ),
      // Gradually decrease
      fuel_level: Math.min(
        100,
        fuel_level + ((100 - fuel_level) / prevDays) * i,
      ),
      // ±15% variation
      speed: Math.max(0, speed * (1 + (Math.random() * 0.3 - 0.15))),
    });
  }

  return data;
}

/**
 * Calculate the min and max values for telemetry data, useful to customize YAxis of the chart
 * @param {data} TelemetryChartData[] -
 * @returns TelemetryChartRanges
 */
export function getTelemetryRanges(
  data: TelemetryChartData[],
): TelemetryChartRanges {
  const temperature = {
    min: Math.min(...data.map((d) => d.temperature)),
    max: Math.max(...data.map((d) => d.temperature)),
  };
  const fuel_level = {
    min: Math.min(...data.map((d) => d.fuel_level)),
    max: Math.max(...data.map((d) => d.fuel_level)),
  };
  const speed = {
    min: Math.min(...data.map((d) => d.speed)),
    max: Math.max(...data.map((d) => d.speed)),
  };

  return { temperature, fuel_level, speed };
}
