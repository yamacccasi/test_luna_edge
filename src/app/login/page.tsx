'use client'
import StepProgress from "@/components/StepProgress/StepProgress";
import LoginForm from "@/components/LoginForm/LoginForm";

function LoginPage() {
    return (
        <>
            <div className='wrapper'>
                <StepProgress />
                <LoginForm />
            </div>
        </>);
}



export default LoginPage;
