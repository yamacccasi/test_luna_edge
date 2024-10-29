"use client"
import React, {useState} from "react";
import Image from "next/image";
import './ShopifyConnected.css'
import ShopifyLogo from '../../../public/ShopifyLogo.svg'
import {useRouter} from "next/navigation";
import {useStepContext} from "@/Context/StepContext";

const AuthForm: React.FC = () => {

    const [loading, setLoading] = useState(false);
    const {setStep} = useStepContext();
    const router = useRouter();

    const handleClick = (e: React.FormEvent) => {
        e.preventDefault();
        setLoading(true);
        if (setStep) {
            setStep(prevState => prevState + 1);
        }
        router.push('/suppmail');
    }

    return (
        <div className='right_block'>
            <div className='form_wrapper'>
                <div className='box'><Image src={ShopifyLogo} alt="sorry" className='connected_store'/>
                    <h2>Store connected</h2>
                    <p>Chad is now able to manage customer support requests for [STORE-NAME].</p>
                    <button type='submit' disabled={loading} onClick={handleClick}>Continue</button>
                    <p className='link'>Wrong store? <a href="/shopify">Connect another one</a></p></div>
            </div>
        </div>

    )
}

export default AuthForm;