import React from 'react';
import './StepProgress.css';
import {useStepContext} from "@/Context/StepContext";


const steps = [
    'Welcome',
    'Connect your Shopify store',
    'Shopify Connected',
    'Connect your customer support email',
    'Email Connected',
    'Done'
];

const StepProgress: React.FC = () => {
    // @ts-expect-error: "error"
    const { step: currentStep, setStep} = useStepContext();
    const renderSteps = () => {
        return steps.map((step, index) => {
            const isIntermediate = step === 'Shopify Connected' || step === 'Email Connected';
            if (isIntermediate) return null;

                const isActive = currentStep === index;
                const isCompleted = currentStep > index;


                let circleClass: string = 'circle';
                if(isActive) {
                    circleClass += ' active_circle';
                } else if (isCompleted) {
                    circleClass += ' completed_circle';
                }

                let stepTitle = 'step_title';
                if(isCompleted) {
                    stepTitle += ' step_completed'
                }

            return (
                <div key={index} className={`step ${index <= currentStep ? 'active' : ''} ${index < currentStep ? 'completed' : ''}`}>
                    <div className={circleClass}>
                    </div>
                    <span className={stepTitle}>{step}</span>
                </div>
            );
        });
    };

    let isBackActive = 'router_btn'
        if(currentStep > 0) {
            isBackActive += ' btn_active'
        }

    let isNextActive = 'btn_active router_btn'
        if(currentStep === 5) {
            isNextActive = ' router_btn'
        }

    return (
        <section className='left_block'>
            <div className='steps_wrapper'>
                {renderSteps()}
            </div>
            <div className='routing_buttons'>
                <button className={isBackActive} onClick={() => setStep ? setStep(prevState => prevState - 1) : null}>Back</button>
                <button className={isNextActive} onClick={() => setStep ? setStep(prevState => prevState + 1) : null}>Next</button>
            </div>
        </section>
    );
};

export default StepProgress;
