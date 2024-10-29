'use client'
import StepProgress from "@/components/StepProgress/StepProgress";
import {useState} from "react";
import NoShopify from "@/components/NoShopify/NoShopify";

function WelcomePage() {

    const [step,setStep] = useState(1);
    return (
        <>
            <div className='wrapper'>
                <StepProgress currentStep={step} setStep={setStep}/>
                <NoShopify />
            </div>
        </>);
}



export default WelcomePage;
