import { cn } from '@/lib/utils';

import { Label } from './ui/label';
import { RadioGroup, RadioGroupItem } from './ui/radio-group';

type RadioProps = {
  options: { id: string; text: string }[];
  setSelectedOption: (option: string) => void;
  className?: string;
  defaultValue?: string | undefined;
};

export default function Radios({
  options,
  setSelectedOption,
  className,
  defaultValue = undefined
}: RadioProps) {
  return (
    <RadioGroup
      onValueChange={(value) => {
        setSelectedOption(value);
      }}
      defaultValue={defaultValue}
      className={cn('gap-4 md:gap-7', className)}
    >
      {options.map(({ id, text }) => (
        <div
          key={id}
          className='flex items-center gap-4'
        >
          <RadioGroupItem
            value={text}
            id={id}
          />
          <Label
            htmlFor={id}
            className={'cursor-pointer'}
          >
            {text}
          </Label>
        </div>
      ))}
    </RadioGroup>
  );
}
