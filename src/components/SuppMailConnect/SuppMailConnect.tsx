"use client"
import React, {useState} from "react";
import Image from "next/image";
import Logo from '../../../public/Logo.svg'
import './SuppMailConnect.css'
import MailLogo from '../../../public/MailLogo.svg'

interface AuthFormProps {
    setStep?: (value: (((prevState: number) => number) | number)) => void
}

const AuthForm: React.FC = ({setStep}: AuthFormProps) => {

    const [loading, setLoading] = useState(false);
    // const router = useRouter();

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        setLoading(true);
        if (setStep) {
            setStep(prevState => prevState + 1);
        }
    }

    return (
        <div className='right_block'>
            <div className='form_wrapper'>
                <div className='logo'>
                    <Image src={Logo} alt='Sorry'/>
                    <span>Chad</span>
                </div>
                <form onSubmit={handleSubmit} className='form'>
                    <h2>Connect your customer support email</h2>
                    <p>Allows Chad to send automated responses on your behalf from your usual support mailbox</p>
                    <div className='benefits'>
                        <div className='benefit'>
                            <h3>Contextual responses</h3>
                            <p>Custom responses to any support situation from “where’s my stuff?” to “I want a refund”</p>
                        </div>
                        <div className='benefit'>
                            <h3>Reply from anywhere</h3>
                            <p>Respond to your customers via email or Chad chat—it’s all saved in the same threads</p>
                        </div>
                        <div className='benefit'>
                            <h3>Categorical inbox tags</h3>
                            <p>Tags your emails by category so you know what to expect before even opening an email</p>
                        </div>
                    </div>
                    <div className='btn_gmail'>
                        <div className='mail_logo'>
                            <Image src={MailLogo} alt='sorry'/>
                        </div>
                        <button type='submit' disabled={loading}>Connect Gmail account</button>
                    </div>
                </form>
                <a href="#"><p className='link'>I don’t use Gmail</p></a>
            </div>
        </div>

    )
}

export default AuthForm;