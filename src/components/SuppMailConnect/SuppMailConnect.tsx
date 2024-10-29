"use client"
import React, {useState, useEffect} from "react";
import Image from "next/image";
import Logo from '../../../public/Logo.svg'
import './SuppMailConnect.css'
import MailLogo from '../../../public/MailLogo.svg'
import {useRouter} from "next/navigation";
import LoadingIndicator from "@/components/LoadingIndicator/LoadingIndicator";
import {useStepContext} from "@/Context/StepContext";

const SuppMailConnect: React.FC = () => {

    const [loading, setLoading] = useState(false);
    const {setStep} = useStepContext();
    const router = useRouter();

    useEffect(() => {
        if(setStep) {
            setStep(3)
        }
    }, [setStep])


    const handleClick = (e: React.FormEvent) => {
        e.preventDefault();
        setLoading(true);
        setTimeout(() => {
            setLoading(false);
            if (setStep) {
                setStep(prevState => prevState + 1);
            }
            router.push('/login')
        }, 2000)

    }

    return (
        <div className='right_block'>
            <div className='form_wrapper'>
                <div className='logo'>
                    <Image src={Logo} alt='Sorry'/>
                    <span>Chad</span>
                </div>
                {loading ? <LoadingIndicator/> : <>
                    <div className='form'>
                        <h2>Connect your customer support email</h2>
                        <p>Allows Chad to send automated responses on your behalf from your usual support mailbox</p>
                        <div className='benefits'>
                            <div className='benefit'>
                                <h3>Contextual responses</h3>
                                <p>Custom responses to any support situation from “where’s my stuff?” to “I want a
                                    refund”</p>
                            </div>
                            <div className='benefit'>
                                <h3>Reply from anywhere</h3>
                                <p>Respond to your customers via email or Chad chat—it’s all saved in the same
                                    threads</p>
                            </div>
                            <div className='benefit'>
                                <h3>Categorical inbox tags</h3>
                                <p>Tags your emails by category so you know what to expect before even opening an
                                    email</p>
                            </div>
                        </div>
                        <div className='btn_gmail'>
                            <div className='mail_logo'>
                                <Image src={MailLogo} alt='sorry'/>
                            </div>
                            <button disabled={loading} onClick={handleClick}>Connect Gmail account</button>
                        </div>
                    </div>
                    <a href="/nogmail"><p className='link'>I don’t use Gmail</p></a>
                </>}
            </div>
        </div>

    )
}

export default SuppMailConnect;