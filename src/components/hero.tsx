// Types
import type { Mission } from '@/types';

// Components
import MissionSwitcher from '@/components/mission-switcher';

export function Hero({
  missions,
  onSelect,
}: {
  missions: Mission[];
  onSelect: (mission: string) => void;
}) {
  return (
    <>
      <div className="flex flex-col items-center gap-4">
        <h1 className="pointer-events-none whitespace-pre-wrap bg-gradient-to-b from-white to-slate-500 bg-clip-text text-center text-8xl font-bold leading-none text-transparent">
          Stellar Explorer Dashboard
        </h1>

        <MissionSwitcher missions={missions} onSelect={onSelect} />
      </div>
    </>
  );
}
