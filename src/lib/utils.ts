// Utils
import { clsx, type ClassValue } from 'clsx';
import { twMerge } from 'tailwind-merge';

// Types
import type { Telemetry } from '@/types';

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

export function formatDate(dateString: string) {
  const date = new Date(dateString);
  return new Intl.DateTimeFormat('en-US', {
    month: 'long',
    day: 'numeric',
    year: 'numeric',
  }).format(date);
}

export function generateTelemetry(
  telemetry: Telemetry,
  launchDate: string,
  prevDays: number,
) {
  const { temperature, fuel_level, speed } = telemetry;
  const startDate = new Date(launchDate);
  const data = [];

  for (let i = prevDays; i >= 0; i--) {
    const date = new Date(startDate);
    date.setDate(date.getDate() - i);

    data.push({
      date: date.toISOString().split('T')[0], // Format as YYYY-MM-DD
      temperature: Math.max(
        -60,
        Math.min(35, temperature + (Math.random() * 10 - 5)),
      ), // ±5 variation
      fuel_level: Math.min(
        100,
        fuel_level + ((100 - fuel_level) / prevDays) * i,
      ), // Gradually increase
      speed: Math.max(0, speed * (1 + (Math.random() * 0.3 - 0.15))), // ±15% variation
    });
  }

  return data;
}
