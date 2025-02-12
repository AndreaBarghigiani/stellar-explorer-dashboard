// Utils
import { formatDate } from '@/lib/utils';

// Types
import { TelemetryChartData, TelemetryChartRanges } from '@/types';

// Components
import {
  ResponsiveContainer,
  BarChart,
  Bar,
  XAxis,
  YAxis,
  Tooltip,
  Legend,
} from 'recharts';

const TelemetryBarChart = ({
  telemetry,
  ranges,
}: {
  telemetry: TelemetryChartData[];
  ranges: TelemetryChartRanges;
}) => {
  const {
    temperature: { min: minTemp, max: maxTemp },
    speed: { min: minSpeed, max: maxSpeed },
  } = ranges;

  return (
    <ResponsiveContainer width="100%" height="100%">
      <BarChart
        data={telemetry}
        margin={{ top: 5, right: 30, left: 20, bottom: 15 }}
      >
        <XAxis
          hide
          dataKey="date"
          tickFormatter={(value) => formatDate(value)}
          className="text-sm"
        />
        <YAxis hide yAxisId="temperature" domain={[minTemp, maxTemp]} />
        <YAxis hide yAxisId="fuel_level" domain={[0, 100]} />
        <YAxis hide yAxisId="speed" domain={[minSpeed, maxSpeed]} />
        <Tooltip
          contentStyle={{
            backgroundColor: 'hsl(var(--popover))',
            border: '1px solid hsl(var(--border))',
          }}
          labelFormatter={(value) => formatDate(value)}
          formatter={(value: number, name: string) => {
            switch (name) {
              case 'Temperature (°C)':
                return [`${value.toFixed(2)}°C`, name];
              case 'Fuel Level (%)':
                return [`${value.toFixed(2)}%`, name];
              case 'Speed (km/h)':
                return [`${value.toFixed(2)} km/h`, name];
              default:
                return [value, name];
            }
          }}
        />
        <Legend wrapperStyle={{ bottom: -10 }} />
        <Bar
          type="monotone"
          yAxisId="temperature"
          dataKey="temperature"
          name="Temperature (°C)"
          fill="#E7D4B1"
        />
        <Bar
          type="monotone"
          yAxisId="fuel_level"
          name="Fuel Level (%)"
          dataKey="fuel_level"
          fill="#BD75E1"
        />
        <Bar
          type="monotone"
          yAxisId="speed"
          dataKey="speed"
          name="Speed (km/h)"
          fill="#76E3F4"
        />
      </BarChart>
    </ResponsiveContainer>
  );
};

export default TelemetryBarChart;
