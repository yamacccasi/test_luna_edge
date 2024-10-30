'use client'
import StepProgress from "@/components/StepProgress/StepProgress";
import ShopifyConnected from "@/components/ShopifyConnected/ShopifyConnected";
import {useRouter} from "next/navigation";
import {useGlobalContext} from "@/Context/GlobalContext";

function ShopifyConnectedPage() {

    const router = useRouter();
    const {store,setStore} = useGlobalContext();

    const onNext = () => {
        setStore({...store,step: store.step + 1})
        router.push('/suppmail')
    }

    const onBack = () => {
        setStore({...store,step: store.step + - 1})
        router.push('/shopify')
    }

    return (
        <>
            <div className='wrapper'>
                <StepProgress onNext={onNext} onBack={onBack}/>
                <ShopifyConnected/>
            </div>
        </>);
}



export default ShopifyConnectedPage;
