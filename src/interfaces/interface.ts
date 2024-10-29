
export default interface AuthFormProps {
    setStep?: (value: (((prevState: number) => number) | number)) => void
}


export default interface ResponseProps {
    router?: () => void
}

interface StepContextType {
    currentStep: number;
    setCurrentStep: (step: number) => void;
}