'use client'
import AuthForm from "@/components/AuthForm/AuthForm";
import StepProgress from "@/components/StepProgress/StepProgress";
import {useState} from "react";

function WelcomePage() {

    const [step,setStep] = useState(0);
    return (
        <>
            <div className='wrapper'>
                <StepProgress currentStep={step}/>
                <AuthForm setStep={setStep}/>
            </div>
        </>);
}



export default WelcomePage;
