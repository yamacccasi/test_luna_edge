import {useGlobalContext} from "@/Context/GlobalContext";
import React, {useState, type FC} from "react";

import './StepProgress.css';

const steps = [
    'Welcome',
    'Connect your Shopify store',
    'Shopify Connected',
    'Connect your customer support email',
    'Email Connected',
    'Done'
];

const slides = [
    {id: 1, content: "Acquiring a new customer is 5x more costly than making an unhappy customer happy", label: "5X"},
    {id: 2, content: "It costs 6 times more to attract a new customer than to retain an old one", label: "6X"},
    {id: 3, content: "Customer retention can increase profits by up to 95%", label: "95%"},
    {id: 4, content: "70% of unhappy customers whose issues are resolved are willing to shop again", label: "70%"},
    {id: 5, content: "Acquiring a new customer is 5x more costly than making an unhappy customer happy", label: '2X'}
];

interface StepProgressProps {
    onNext?: () => void
    onBack?: () => void
}

const StepProgress: FC<StepProgressProps> = ({onBack, onNext}) => {
    const {store} = useGlobalContext();
    const {step: currentStep} = store

    const renderSteps = () => {
        return steps.map((step, index) => {
            const isIntermediate = step === 'Shopify Connected' || step === 'Email Connected';
            if (isIntermediate) return null;

            const isActive = currentStep === index;
            const isCompleted = currentStep > index;

            let circleClass: string = 'circle';
            if (isActive) {
                circleClass += ' active_circle';
            } else if (isCompleted) {
                circleClass += ' completed_circle';
            }

            let stepTitle = 'step_title';
            if (isCompleted) {
                stepTitle += ' step_completed'
            }

            return (
                <div key={index}
                     className={`step ${index <= currentStep ? 'active' : ''} ${index < currentStep ? 'completed' : ''}`}>
                    <div className={circleClass}>
                    </div>
                    <span className={stepTitle}>{step}</span>
                </div>
            );
        });
    };

    let isBackActive = 'router_btn'
    if (currentStep > 0) {
        isBackActive += ' btn_active'
    }

    let isNextActive = 'btn_active router_btn'
    if (currentStep === 6) {
        isNextActive = ' router_btn'
    }

    const [currentSlide, setCurrentSlide] = useState(0);

    const goToSlide = (index: number) => {
        setCurrentSlide(index);
    };

    const renderSlides = () => {
        return (
            <>
                <div className='random_quote'>
                    <div className="slide" key={slides[currentSlide].id}>
                        <h2>{slides[currentSlide].label}</h2>
                        <p>{slides[currentSlide].content}</p>
                    </div>
                    <div className='dots'>
                        {slides.map((_, index) => (
                            <span
                                key={index}
                                className={`dot ${index === currentSlide ? 'active' : ''}`}
                                onClick={() => goToSlide(index)}
                            ></span>
                        ))}
                    </div>
                </div>
            </>
        )
    }

    return (
        <section className='left_block'>
            <div className='steps_wrapper'>
                {renderSteps()}
            </div>
            <div className='routing_buttons'>
                <button disabled={currentStep <= 0} className={isBackActive + ' left'} onClick={onBack}>Back</button>
                <button disabled={currentStep === 6} className={isNextActive + ' right'} onClick={onNext}>Next</button>
            </div>
            {renderSlides()}
        </section>
    );
};

export default StepProgress;
