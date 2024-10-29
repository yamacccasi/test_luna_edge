'use client'
import StepProgress from "@/components/StepProgress/StepProgress";
import {useState} from "react";
import NoGmail from "@/components/NoGmail/NoGmail";

function WelcomePage() {

    const [step,setStep] = useState(2);
    return (
        <>
            <div className='wrapper'>
                <StepProgress currentStep={step}/>
                <NoGmail/>
            </div>
        </>);
}



export default WelcomePage;
