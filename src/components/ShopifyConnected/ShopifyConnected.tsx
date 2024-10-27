"use client"
import React, {useState} from "react";
import Image from "next/image";
import './ShopifyConnected.css'
import ShopifyLogo from '../../../public/ShopifyLogo.svg'
import {useRouter} from "next/navigation";


interface AuthFormProps {
    setStep?: (value: (((prevState: number) => number) | number)) => void
}

const AuthForm: React.FC = ({setStep}: AuthFormProps) => {

    const [loading, setLoading] = useState(false);
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
                <div className='box'><Image src={ShopifyLogo} alt="sorry"/>
                    <h2>Store connected</h2>
                    <p>Chad is now able to manage customer support requests for [STORE-NAME].</p>
                    <button type='submit' disabled={loading} onClick={handleClick}>Continue</button>
                    <a href="/shopify"><p className='link'>Wrong store? Connect another one</p></a></div>
            </div>
        </div>

    )
}

export default AuthForm;