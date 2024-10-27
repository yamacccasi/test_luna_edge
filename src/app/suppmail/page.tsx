'use client'
import SuppMailConnect from "@/components/SuppMailConnect/SuppMailConnect";
import StepProgress from "@/components/StepProgress/StepProgress";
import {useState} from "react";

function WelcomePage() {

    const [step,setStep] = useState(3);
    return (
        <>
            <div className='wrapper'>
                <StepProgress currentStep={step}/>
                <SuppMailConnect setStep={setStep}/>
            </div>
        </>);
}



export default WelcomePage;
