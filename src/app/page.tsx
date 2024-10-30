'use client'
import AuthForm from "@/components/AuthForm/AuthForm";
import StepProgress from "@/components/StepProgress/StepProgress";
import {useGlobalContext} from "@/Context/GlobalContext";
import {useRouter} from "next/navigation";

function WelcomePage() {

    const router = useRouter();
    const {store,setStore} = useGlobalContext();

    const onNext = () => {
        setStore({...store,step: store.step + 1})
        router.push('/shopify')
    }

    return (
        <>
            <div className='wrapper'>
                <StepProgress onNext={onNext}/>
                <AuthForm/>
            </div>
        </>);
}



export default WelcomePage;
