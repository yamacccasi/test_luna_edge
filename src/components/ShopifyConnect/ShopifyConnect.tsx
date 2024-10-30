"use client"
import React, {useState, useEffect, type FC} from "react";
import {useRouter} from "next/navigation";
import {useGlobalContext} from "@/Context/GlobalContext";

import LoadingIndicator from "@/components/LoadingIndicator/LoadingIndicator";

import Image from "next/image";
import Logo from '../../../public/Logo.svg'

import './ShopifyConnect.css'

const LOGIN_STEP = 1;

const ShopifyConnect: FC = () => {

    const {store,setStore} = useGlobalContext();
    const router = useRouter();

    const [loading, setLoading] = useState(false);

    useEffect(() => {
        setStore(({...store, step: LOGIN_STEP}))
    }, [setStore])

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        setLoading(true);
        setTimeout(() => {
                setLoading(false);
                setStore(({...store, step: store.step + 1}))
            router.push('/shopifyconnected');
        }, 3000)

    }

    return (
        <div className='right_block'>
            <div className='form_wrapper'>
                <div className='logo'>
                    <Image src={Logo} alt='Sorry'/>
                    <span>Chad</span>
                </div>
                {loading ? <LoadingIndicator/> : <>
                    <form onSubmit={handleSubmit} className='form'>
                        <h2>Connect your Shopify store</h2>
                        <p>Installs the Chad widget in your Shopify store and sets it up to display your customers’
                            order information and self-serve options.</p>
                        <div className='benefits'>
                            <div className='benefit'>
                                <h3>Track orders and shipping</h3>
                                <p>Global coverage with 600+ couriers supported</p>
                            </div>
                            <div className='benefit'>
                                <h3>Manage orders</h3>
                                <p>Allow customers to track, return, exchange, or report problems with their orders</p>
                            </div>
                            <div className='benefit'>
                                <h3>Process returns and exchanges</h3>
                                <p>Automatically checks your store policy and existing inventory before resolving or
                                    escalating each request</p>
                            </div>
                        </div>
                        <button type='submit' disabled={loading}>Connect Store</button>
                    </form>
                    <a href="/noshopify"><p className='link'>I don’t use Shopify</p></a></>}
            </div>
        </div>
    )
}

export default ShopifyConnect;