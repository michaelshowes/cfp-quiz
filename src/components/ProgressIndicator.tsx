import { stepCount } from '@/config';

export default function ProgressIndicator() {
  return (
    <div
      className={'my-5 grid w-full gap-1.5 py-10'}
      style={{
        gridTemplateColumns: `repeat(${stepCount}, 1fr)`
      }}
    >
      {Array.from({ length: stepCount }, (_, i) => (
        <div
          key={i}
          className={'h-2.5 bg-gray-300'}
        />
      ))}
    </div>
  );
}
