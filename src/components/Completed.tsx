import { useEffect } from 'react';

import { useQuizStore } from '@/store';

export default function Completed() {
  const store = useQuizStore();

  useEffect(() => {
    console.log(store);
  }, [store]);

  return (
    <div
      className={'flex h-dvh w-full flex-col items-center justify-center px-4'}
    >
      <object
        data='/puzzle.svg'
        type='image/svg+xml'
        className={'size-[174px]'}
      ></object>
      <div className={'text-center text-2xl font-bold'}>
        Finding Your Matches...
      </div>
    </div>
  );
}
