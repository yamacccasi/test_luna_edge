'use client'
import ShopifyConnect from "@/components/ShopifyConnect/ShopifyConnect";
import StepProgress from "@/components/StepProgress/StepProgress";
import {useState} from "react";

function WelcomePage() {

    const [step,setStep] = useState(1);
    return (
        <>
            <div className='wrapper'>
                <StepProgress currentStep={step}/>
                <ShopifyConnect setStep={setStep}/>
            </div>
        </>);
}



export default WelcomePage;
