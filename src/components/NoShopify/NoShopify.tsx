"use client"
import React, {useState} from "react";
import Image from "next/image";
import '../../app/globals.css'
import './NoShopify.css'
import Logo from "../../../public/Logo.svg";
import Dropdown from "@/components/DropDown/DropDown";
import Response from "@/components/Response/Response";
import {useRouter} from "next/navigation";


interface AuthFormProps {
    setStep?: (value: (((prevState: number) => number) | number)) => void
}

const NoShopify: React.FC = ({setStep}: AuthFormProps) => {

    const [loading, setLoading] = useState(false);
    const [platform,setPlatform] = useState(true);
    const router = useRouter();

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        setLoading(true);
        setTimeout(() => {
            if (setStep) {
                setStep(prevState => prevState + 1);
            }
            setPlatform(false);
        },2000)
    }
    const Router = () => {
        router.push('/suppmail')
    }


    return (
        <div className='right_block'>
            {platform ? <>
                <div className='form_wrapper'>
                    <div className='logo'>
                        <Image src={Logo} alt='Sorry'/>
                        <span>Chad</span>
                    </div>
                    {loading ? <h2>Wait a bit!</h2> : <>
                        <form className='form'>
                            <h2>Welcome to Chad</h2>
                            <p>Go live in 10 minutes! Our self-service widget empowers your customers to manage orders
                                and
                                track shipments 24/7 without driving you crazy.</p>
                            <label htmlFor="drop">Platform</label>
                            <Dropdown/>
                            <button type='submit' onClick={handleSubmit} disabled={loading}>Submit</button>
                        </form>
                        <p className='link'>Actually use Shopify? <a href="/shopify">Connect</a></p>
                    </>}
                </div>
            </> : <Response router={Router}/>}

        </div>
    )
}

export default NoShopify;


