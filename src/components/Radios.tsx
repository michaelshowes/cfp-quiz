import { Label } from './ui/label';
import { RadioGroup, RadioGroupItem } from './ui/radio-group';

export default function Radios({
  options,
  setSelectedOption
}: {
  options: { id: string; text: string }[];
  setSelectedOption: (option: string) => void;
}) {
  return (
    <RadioGroup
      onValueChange={(value) => {
        setSelectedOption(value);
      }}
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
