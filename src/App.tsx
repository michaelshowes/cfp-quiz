import Navigation from './components/Navigation';
import ProgressIndicator from './components/ProgressIndicator';
import Step1 from './components/steps/Step1/Step1';

export default function App() {
  const currentStep = 2;

  return (
    <div className={'mx-auto w-full max-w-[950px]'}>
      <ProgressIndicator />
      <Step1 />
      <Navigation step={currentStep} />
    </div>
  );
}
