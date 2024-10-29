'use client'
import AuthForm from "@/components/AuthForm/AuthForm";
import StepProgress from "@/components/StepProgress/StepProgress";

function WelcomePage() {

    return (
        <>
            <div className='wrapper'>
                <StepProgress/>
                <AuthForm/>
            </div>
        </>);
}



export default WelcomePage;
