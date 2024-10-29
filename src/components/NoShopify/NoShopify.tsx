"use client"
import React, {useEffect, useState} from "react";
import Image from "next/image";
import '../../app/globals.css'
import './NoShopify.css'
import Logo from "../../../public/Logo.svg";
import Dropdown from "@/components/DropDown/DropDown";
import Response from "@/components/Response/Response";
import {useRouter} from "next/navigation";
import LoadingIndicator from "@/components/LoadingIndicator/LoadingIndicator";
import {useStepContext} from "@/Context/StepContext";

const NoShopify: React.FC = () => {

    const [loading, setLoading] = useState(false);
    const {setStep} = useStepContext();
    const [platform,setPlatform] = useState(true);
    const router = useRouter();

    useEffect(() => {
        if(setStep) {
            setStep(1)
        }
    }, [setStep])

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
                    {loading ? <LoadingIndicator/> : <>
                        <form className='form'>
                            <h2>Don’t use Shopify?</h2>
                            <p>Chad Beta is currently only available on Shopify. We’ll send you an email when Chad becomes available on your platform.</p>
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


