import { stepCount } from '@/config';
import { cn } from '@/lib/utils';

export default function ProgressIndicator({
  currentStep
}: {
  currentStep: number;
}) {
  return (
    <div
      className={'grid w-full gap-1.5 px-4 md:px-0'}
      style={{
        gridTemplateColumns: `repeat(${stepCount}, 1fr)`
      }}
    >
      {Array.from({ length: stepCount }, (_, i) => (
        <div
          key={i}
          className={cn('relative h-2.5 bg-gray-300', {
            'bg-yellow-300': i < currentStep - 1
          })}
        >
          <div
            className={cn(
              'absolute top-0 bottom-0 left-0 w-0 bg-yellow-300 transition-all duration-1000',
              {
                'w-full': i < currentStep
              }
            )}
          />
        </div>
      ))}
    </div>
  );
}
