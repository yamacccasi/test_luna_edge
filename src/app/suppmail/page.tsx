'use client'
import SuppMailConnect from "@/components/SuppMailConnect/SuppMailConnect";
import StepProgress from "@/components/StepProgress/StepProgress";
import {useGlobalContext} from "@/Context/GlobalContext";
import {useRouter} from "next/navigation";

function SuppMailPage() {

    const router = useRouter();
    const {store,setStore} = useGlobalContext();

    const onNext = () => {
        setStore({...store,step: store.step + 1})
        router.push('/login')
    }

    const onBack = () => {
        setStore({...store,step: store.step + - 1})
        router.push('/shopifyconnected')
    }

    return (
        <>
            <div className='wrapper'>
                <StepProgress onNext={onNext} onBack={onBack}/>
                <SuppMailConnect />
            </div>
        </>);
}



export default SuppMailPage;
