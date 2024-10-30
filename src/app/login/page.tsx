'use client'
import StepProgress from "@/components/StepProgress/StepProgress";
import LoginForm from "@/components/LoginForm/LoginForm";
import {useRouter} from "next/navigation";
import {useGlobalContext} from "@/Context/GlobalContext";

function LoginPage() {

    const router = useRouter();
    const {store,setStore} = useGlobalContext();

    const onBack = () => {
        setStore({...store,step: store.step + - 1})
        router.push('/suppmail')
    }

    return (
        <>
            <div className='wrapper'>
                <StepProgress onBack={onBack}/>
                <LoginForm />
            </div>
        </>);
}



export default LoginPage;
