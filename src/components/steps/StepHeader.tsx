export default function StepHeader({
  title,
  subtitle
}: {
  title: string;
  subtitle?: string;
}) {
  return (
    <div
      className={'border-border flex flex-col gap-4 border-b py-8 text-black'}
    >
      <h2 className={'text-xl font-bold'}>{title}</h2>
      <p>{subtitle}</p>
    </div>
  );
}
