'use client'
import StepProgress from "@/components/StepProgress/StepProgress";
import {useState} from "react";
import NoShopify from "@/components/NoShopify/NoShopify";

function WelcomePage() {

    const [step,setStep] = useState(2);
    return (
        <>
            <div className='wrapper'>
                <StepProgress currentStep={step}/>
                <NoShopify setStep={setStep}/>
            </div>
        </>);
}



export default WelcomePage;
