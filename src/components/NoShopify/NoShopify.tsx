"use client"
import React, {useEffect, useState, type FC} from "react";
import {useRouter} from "next/navigation";
import {useGlobalContext} from "@/Context/GlobalContext";

import Image from "next/image";
import Logo from "../../../public/Logo.svg";

import Dropdown from "@/components/DropDown/DropDown";
import Response from "@/components/Response/Response";
import LoadingIndicator from "@/components/LoadingIndicator/LoadingIndicator";

import '../../app/globals.css'
import './NoShopify.css'

const LOGIN_STEP = 1;

const NoShopify: FC = () => {

    const [loading, setLoading] = useState(false);
    const [platform,setPlatform] = useState(true);

    const {store,setStore} = useGlobalContext()
    const router = useRouter();

    useEffect(() => {
            setStore(({...store, step: LOGIN_STEP}))
    }, [setStore])

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        setLoading(true);
        setTimeout(() => {
                setStore(({...store, step: store.step + 1}))
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
                            <button className='btn_shop' type='submit' onClick={handleSubmit} disabled={loading}>Submit</button>
                        </form>
                        <p className='link'>Actually use Shopify? <a href="/shopify">Connect</a></p>
                    </>}
                </div>
            </> : <Response router={Router} setStep={setStore}/>}
        </div>
    )
}

export default NoShopify;


