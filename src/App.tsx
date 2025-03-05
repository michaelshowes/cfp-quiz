import Navigation from './components/Navigation';
import ProgressIndicator from './components/ProgressIndicator';
import Step2 from './components/steps/Step2/Step2';

export default function App() {
  const currentStep = 2;

  return (
    <div className={'mx-auto w-full max-w-[950px]'}>
      <ProgressIndicator />
      <Step2 />
      <Navigation step={currentStep} />
    </div>
  );
}
