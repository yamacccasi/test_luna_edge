"use client"
import React, {useState, type FC} from "react";
import {useRouter} from "next/navigation";
import {useGlobalContext} from "@/Context/GlobalContext";

import Image from "next/image";
import ShopifyLogo from '../../../public/ShopifyLogo.svg'

import './ShopifyConnected.css'

const ShopifyConnected: FC = () => {

    const [loading, setLoading] = useState(false);

    const {store,setStore} = useGlobalContext();
    const router = useRouter();

    const handleClick = (e: React.FormEvent) => {
        e.preventDefault();
        setLoading(true);
            setStore(({...store, step: store.step + 1}))
        router.push('/suppmail');
    }

    return (
        <div className='right_block'>
            <div className='form_wrapper'>
                <div className='box'>
                    <div className='image_box'>
                    <Image src={ShopifyLogo} alt="sorry" className='connected_store'/>
                    <div className="checkmark"></div>
                    </div>
                    <h2>Store connected</h2>
                    <p>Chad is now able to manage customer support requests for [STORE-NAME].</p>
                    <button type='submit' disabled={loading} onClick={handleClick}>Continue</button>
                    <p className='link'>Wrong store? <a href="/shopify">Connect another one</a></p></div>
            </div>
        </div>
    )
}

export default ShopifyConnected;