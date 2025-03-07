import { Step5Config } from './steps/Step5/step5.config';
import { Checkbox } from './ui/checkbox';

export default function Checkboxes({
  options,
  setSelectedOptions
}: {
  options: Step5Config['options'];
  setSelectedOptions: (value: string[]) => void;
}) {
  return (
    <div className={'grid grid-cols-[auto_auto] gap-x-12 gap-y-7'}>
      {options.map(({ id, text }) => (
        <div
          key={id}
          className='flex items-center gap-4'
        >
          <Checkbox
            id={id}
            className={'border-blue size-4.5 rounded-none'}
            onCheckedChange={(checked) => {
              if (checked) {
                /* @ts-expect-error fix later */
                setSelectedOptions((prev) => {
                  if (!prev) {
                    return [text];
                  }

                  return [...prev, text];
                });
              } else {
                /* @ts-expect-error fix later */
                setSelectedOptions((prev) => {
                  if (!prev) {
                    return [];
                  }

                  return prev.filter((option: string) => option !== text);
                });
              }
            }}
          />
          <label
            htmlFor={id}
            className={'cursor-pointer'}
          >
            {text}
          </label>
        </div>
      ))}
    </div>
  );
}
