"use client"
import React, {useState} from "react";
import '../AuthForm/AuthForm.css'
import Image from "next/image";
import Logo from '../../../public/Logo.svg'
import {useRouter} from "next/navigation";
import LoadingIndicator from "@/components/LoadingIndicator/LoadingIndicator";
import Vision from "../../../public/VIsion.svg";
import noVision from "../../../public/noVision.svg";
import {useStepContext} from "@/Context/StepContext";


const LoginForm: React.FC = () => {

    const [email, setEmail] = useState('');
    const {setStep} = useStepContext();
    const [password, setPassword] = useState('');
    const [loading, setLoading] = useState(false);
    const router = useRouter();
    const [visibility, setVisibility] = useState(false);

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        setLoading(true);
        setTimeout(() => {
            setLoading(false);
            if(setStep) {
                setStep(prevState => prevState + 1);
            }
            const username = encodeURIComponent(email.split('@')[0]);
            router.push(`/helloluna?username=${username}`);
        }, 2000)
    }
    return (
        <div className='right_block'>
            <div className='form_wrapper'>
                <div className='logo'>
                    <Image src={Logo} alt='Sorry'/>
                    <span>Chad</span>
                </div>
                {loading ? <LoadingIndicator/>: <>
                    <form onSubmit={handleSubmit} className='form'>
                        <h2>Welcome to Chad</h2>
                        <p>Go live in 10 minutes! Our self-service widget empowers your customers to manage orders and
                            track shipments 24/7 without driving you crazy.</p>
                        <label htmlFor="email">Email</label>
                        <input type="text"
                               placeholder='megachad@gmail.com'
                               className='form_input'
                               id='email'
                               value={email}
                               onChange={(e) => setEmail(e.target.value)}
                        />
                        <label htmlFor="password">Password</label>
                        <div style={{position: 'relative', width: '100%'}}>
                            <input
                                type={visibility ? 'text' : 'password'}
                                placeholder='Enter Password'
                                className='form_input last show-password'
                                id='password'
                                value={password}
                                onChange={(e) => setPassword(e.target.value)}
                            />
                            <button
                                type="button"
                                onClick={() => setVisibility(!visibility)}
                                className="toggle_password"
                            >
                                {visibility ? <Image src={Vision} alt='sorry'/> : <Image src={noVision} alt='sorry'/>}
                            </button>
                        </div>
                        <button type='submit' disabled={loading}>Login</button>
                    </form>
                    <p className='link'>Forgot Password? <a href="#">Reset</a></p>
                </>}

            </div>
        </div>
    )
}


export default LoginForm;