// Utils
import * as React from 'react';
import { cn } from '@/lib/utils';

// Components
import { Progress } from '@/components/ui/progress';

const calculateProgress = (totalSteps: number, currentStep: number) => {
  if (totalSteps <= 0) return 0;
  return (currentStep / (totalSteps - 1)) * 100;
};

const Stepper = ({
  activeStepIndex,
  totalSteps,
  className,
}: {
  activeStepIndex: number;
  totalSteps: number;
  className?: string;
}) => {
  // Ensure that the currentStep is within the range of totalSteps
  if (activeStepIndex > totalSteps) {
    activeStepIndex = totalSteps;
  }

  console.log('current', activeStepIndex);

  // As the activeStepIndex range is from 0 to totalSteps and not from 1 to totalSteps, we need to add 1 to it
  // It also rounds the progress to the nearest greater integer to ensure that certain middle steps are connected
  // properly with the bar.
  const progress = calculateProgress(totalSteps, activeStepIndex);

  return (
    <div
      className={cn('relative flex items-center justify-between', className)}
    >
      {Array.from({ length: totalSteps }).map((_, i) => (
        <React.Fragment key={i}>
          <div
            className={cn('z-10 size-4 rounded-full border-2', {
              'border-primary bg-primary': i <= activeStepIndex,
              'border-secondary bg-secondary': i > activeStepIndex,
            })}
          />
        </React.Fragment>
      ))}

      <Progress value={progress} className="absolute" />
    </div>
  );
};

export default Stepper;
