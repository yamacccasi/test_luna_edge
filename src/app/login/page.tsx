'use client'
import StepProgress from "@/components/StepProgress/StepProgress";
import {useState} from "react";
import LoginForm from "@/components/LoginForm/LoginForm";

function LoginPage() {

    const [step,setStep] = useState(6);
    return (
        <>
            <div className='wrapper'>
                <StepProgress currentStep={step} isShopifyConnected={true}/>
                <LoginForm setStep={setStep}/>
            </div>
        </>);
}



export default LoginPage;
