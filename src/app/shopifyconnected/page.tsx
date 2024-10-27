'use client'
import StepProgress from "@/components/StepProgress/StepProgress";
import {useState} from "react";
import ShopifyConnected from "@/components/ShopifyConnected/ShopifyConnected";

function WelcomePage() {

    const [step,setStep] = useState(2);
    return (
        <>
            <div className='wrapper'>
                <StepProgress currentStep={step}/>
                <ShopifyConnected setStep={setStep}/>
            </div>
        </>);
}



export default WelcomePage;
