export default function StepHeader({
  title,
  subtitle
}: {
  title: string;
  subtitle?: string;
}) {
  return (
    <div className={'md:py-8'}>
      <div
        className={'border-border flex flex-col gap-4 border-b py-6 text-black'}
      >
        <h2 className={'text-base font-bold md:text-2xl'}>{title}</h2>
        <p>{subtitle}</p>
      </div>
    </div>
  );
}
