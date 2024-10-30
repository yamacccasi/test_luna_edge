'use client'
import ShopifyConnect from "@/components/ShopifyConnect/ShopifyConnect";
import StepProgress from "@/components/StepProgress/StepProgress";
import {useRouter} from "next/navigation";
import {useGlobalContext} from "@/Context/GlobalContext";

function WelcomePage() {

    const router = useRouter();
    const {store,setStore} = useGlobalContext();

    const onNext = () => {
        setStore({...store,step: store.step + 1})
        router.push('/suppmail')
    }

    const onBack = () => {
        setStore({...store,step: store.step + - 1})
        router.push('/')
    }

    return (
        <>
            <div className='wrapper'>
                <StepProgress onNext={onNext} onBack={onBack}/>
                <ShopifyConnect/>
            </div>
        </>);
}



export default WelcomePage;
