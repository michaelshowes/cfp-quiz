import Navigation from './components/Navigation';
import ProgressIndicator from './components/ProgressIndicator';

export default function App() {
  const currentStep = 2;

  return (
    <div className={'mx-auto w-full max-w-[950px]'}>
      <ProgressIndicator />
      <Navigation step={currentStep} />
    </div>
  );
}
