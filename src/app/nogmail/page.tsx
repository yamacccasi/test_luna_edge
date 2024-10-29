'use client'
import StepProgress from "@/components/StepProgress/StepProgress";
import NoGmail from "@/components/NoGmail/NoGmail";

function WelcomePage() {

    return (
        <>
            <div className='wrapper'>
                <StepProgress/>
                <NoGmail/>
            </div>
        </>);
}



export default WelcomePage;
