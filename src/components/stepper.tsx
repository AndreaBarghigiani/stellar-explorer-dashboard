// Utils
import { cn } from '@/lib/utils';

// Types
import type { Location } from '@/types';

// Components
import { Progress } from '@/components/ui/progress';

const calculateProgress = (totalSteps: number, currentStep: number) => {
  if (totalSteps <= 0) return 0;
  return (currentStep / (totalSteps - 1)) * 100;
};

const Stepper = ({
  activeStepIndex,
  totalLocations,
  className,
  setLocationId,
}: {
  activeStepIndex: number;
  totalLocations: Location[];
  setLocationId: (id: string) => void;
  className?: string;
}) => {
  return (
    <div
      className={cn(
        'relative mb-10 flex items-center justify-between',
        className,
      )}
    >
      {totalLocations.map((location, i) => (
        <button
          key={location.id}
          className="flex flex-col items-center"
          onClick={() => {
            setLocationId(location.id);
          }}
        >
          <div
            className={cn('z-10 size-4 rounded-full border-2', {
              'border-primary bg-primary': i <= activeStepIndex,
              'border-secondary bg-secondary': i > activeStepIndex,
            })}
          />

          <span className="absolute -bottom-8 text-nowrap text-xs">
            {totalLocations.find((l) => l.id === location.id)?.name}
          </span>
        </button>
      ))}

      <Progress
        value={calculateProgress(totalLocations.length, activeStepIndex)}
        className="absolute"
      />
    </div>
  );
};

export default Stepper;
