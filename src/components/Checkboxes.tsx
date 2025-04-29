import { Step5Config } from './steps/Step5/step5.config';
import { Checkbox } from './ui/checkbox';

export default function Checkboxes({
  options,
  setSelectedOptions
}: {
  options: Step5Config['options'];
  setSelectedOptions: (
    value: string[] | ((prev: string[]) => string[])
  ) => void;
}) {
  return (
    <div
      className={
        'flex grid-cols-[auto_auto] flex-col gap-x-6 gap-y-4 md:grid md:gap-y-7 lg:gap-x-12'
      }
    >
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
                setSelectedOptions((prev: string[]) => {
                  const newAnswers = !prev ? [text] : [...prev, text];
                  return newAnswers;
                });
              } else {
                setSelectedOptions((prev: string[]) => {
                  if (!prev) return [];
                  const newAnswers = prev.filter(
                    (option: string) => option !== text
                  );
                  return newAnswers;
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
