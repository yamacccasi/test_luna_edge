'use client'
import ShopifyConnect from "@/components/ShopifyConnect/ShopifyConnect";
import StepProgress from "@/components/StepProgress/StepProgress";

function WelcomePage() {
    return (
        <>
            <div className='wrapper'>
                <StepProgress/>
                <ShopifyConnect/>
            </div>
        </>);
}



export default WelcomePage;
