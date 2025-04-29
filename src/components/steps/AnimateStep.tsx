import { AnimatePresence, motion } from 'motion/react';

type AnimateStepProps = {
  currentStep: number;
  children: React.ReactNode;
};

export default function AnimateStep({
  currentStep,
  children
}: AnimateStepProps) {
  return (
    <AnimatePresence>
      <motion.div
        key={currentStep}
        className={'w-full'}
        initial={{ opacity: 0, translateX: -40, position: 'absolute' }}
        animate={{ opacity: 1, translateX: 0, position: 'static' }}
        exit={{ opacity: 0, position: 'absolute' }}
        transition={{
          duration: 0.3
        }}
      >
        {children}
      </motion.div>
    </AnimatePresence>
  );
}
