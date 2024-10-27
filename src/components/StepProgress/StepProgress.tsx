import React from 'react';
import './StepProgress.css'

const steps = ['Welcome',
    'Connect your Shopify store',
    'Connect your customer supply email',
    'Done'
];



const StepProgress: React.FC<{ currentStep: number, step?: number }> = ({currentStep}) => {

    const renderSteps = ()=> {
        return (
            steps.map((step,index) => {
                return (
                    <div key={index} className={`step ${index <= currentStep ? 'active' : ''} ${index < currentStep ? 'completed' : ''}`}>
                        <div className={`circle ${index <= currentStep ? 'active_circle' : ''}
                        ${index < currentStep ? 'completed_circle' : ''}`}>
                            {index < currentStep && '✔'}
                        </div>
                        <span className='step_title'>{step}</span>
                    </div>
                )
            })
        )
    }

    return (
        <div className='left_block'>
            <div>
                {renderSteps()}
            </div>
        </div>)
            }

            export default StepProgress;