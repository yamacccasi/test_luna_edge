"use client"
import React, {useState} from "react";
import Vision from '../../../public/VIsion.svg'
import noVision from "../../../public/noVision.svg"
import Image from "next/image";
import Logo from '../../../public/Logo.svg'
import {useRouter} from "next/navigation";
import LoadingIndicator from "@/components/LoadingIndicator/LoadingIndicator";
import './AuthForm.css';
import {useStepContext} from "@/Context/StepContext";


const AuthForm: React.FC = () => {

    const {setStep} = useStepContext();
    const [email, setEmail] = useState('');
    const [name, setName] = useState('');
    const [password, setPassword] = useState('');
    const [loading, setLoading] = useState(false);
    const [visibility, setVisibility] = useState(false);
    const router = useRouter();


    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        setLoading(true);
        setTimeout(() => {
            setLoading(false);
            if(setStep) {
                setStep(prevStep => prevStep + 1);
            }
            router.push('/shopify')
        }, 2000)
    }

    // const getInputClass = (value) => {
    //     return value.trim() === '' ? 'form_input input_error' : 'form_input';
    // };

    return (
        <section className='right_block'>
            <div className='form_wrapper'>
                <div className='logo'>
                    <Image src={Logo} alt='Sorry'/>
                    <span>Chad</span>
                </div>
                {loading ? <LoadingIndicator/> : <>
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
                        <label htmlFor="name">Your Name</label>
                        <input type="text"
                               placeholder='Mega Chad'
                               className='form_input'
                               id='name'
                               value={name}
                               onChange={(e) => setName(e.target.value)}
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
                        <button type='submit' disabled={loading}>Create Account</button>
                    </form>
                    <p className='link'>Already have an account? <a href="/login">Login</a></p>
                </>}
            </div>
        </section>
    )
}


export default AuthForm;