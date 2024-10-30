'use client'
import StepProgress from "@/components/StepProgress/StepProgress";
import NoShopify from "@/components/NoShopify/NoShopify";
import {useRouter} from "next/navigation";
import {useGlobalContext} from "@/Context/GlobalContext";

function NoShopifyPage() {

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
                <StepProgress onBack={onBack} onNext={onNext}/>
                <NoShopify />
            </div>
        </>);
}



export default NoShopifyPage;
