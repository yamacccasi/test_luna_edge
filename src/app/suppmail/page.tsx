'use client'
import SuppMailConnect from "@/components/SuppMailConnect/SuppMailConnect";
import StepProgress from "@/components/StepProgress/StepProgress";

function WelcomePage() {
    return (
        <>
            <div className='wrapper'>
                <StepProgress />
                <SuppMailConnect />
            </div>
        </>);
}



export default WelcomePage;
