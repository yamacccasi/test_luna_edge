'use client'
import StepProgress from "@/components/StepProgress/StepProgress";
import NoShopify from "@/components/NoShopify/NoShopify";

function WelcomePage() {
    return (
        <>
            <div className='wrapper'>
                <StepProgress/>
                <NoShopify />
            </div>
        </>);
}



export default WelcomePage;
