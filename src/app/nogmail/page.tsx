'use client'
import StepProgress from "@/components/StepProgress/StepProgress";
import NoGmail from "@/components/NoGmail/NoGmail";
import {useRouter} from "next/navigation";
import {useGlobalContext} from "@/Context/GlobalContext";

function NoMailPage() {

    const router = useRouter();
    const {store,setStore} = useGlobalContext();

    const onNext = () => {
        setStore({...store,step: store.step + 1})
        router.push('/login')
    }

    const onBack = () => {
        setStore({...store,step: store.step + - 1})
        router.push('/suppmail')
    }
        return (
        <>
            <div className='wrapper'>
                <StepProgress onBack={onBack} onNext={onNext}/>
                <NoGmail/>
            </div>
        </>);
}



export default NoMailPage;
