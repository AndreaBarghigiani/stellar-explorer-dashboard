// Utils
import { formatDate, getTelemetryRanges } from '@/lib/utils';

// Types
import { ChartType, TelemetryChartData } from '@/types';

// Components
import TelemetryBarChart from './telemetry-bar-chart';
import TelemetryLineChart from './telemetry-line-chart';

const TelemetryChart = ({
  telemetry,
  chartType,
}: {
  telemetry: TelemetryChartData[];
  chartType: ChartType;
}) => {
  const ranges = getTelemetryRanges(telemetry);

  return (
    <div className="h-96 w-full rounded-lg p-4">
      {chartType === 'line' && (
        <TelemetryLineChart telemetry={telemetry} ranges={ranges} />
      )}

      {chartType === 'bar' && (
        <TelemetryBarChart telemetry={telemetry} ranges={ranges} />
      )}
    </div>
  );
};

export default TelemetryChart;
