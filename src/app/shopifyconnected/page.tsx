'use client'
import StepProgress from "@/components/StepProgress/StepProgress";
import ShopifyConnected from "@/components/ShopifyConnected/ShopifyConnected";

function WelcomePage() {
    return (
        <>
            <div className='wrapper'>
                <StepProgress/>
                <ShopifyConnected/>
            </div>
        </>);
}



export default WelcomePage;
