"use client"
import React, {useState} from "react";
import Image from "next/image";
import Logo from '../../../public/Logo.svg'
import {useRouter} from "next/navigation";
import AuthFormProps from '../../interfaces/interface'



const AuthForm: React.FC = ({setStep}: AuthFormProps) => {

    const [email, setEmail] = useState('');
    const [name, setName] = useState('');
    const [password, setPassword] = useState('');
    const [loading, setLoading] = useState(false);
    const router = useRouter();

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        setLoading(true);
        setTimeout(() => {
            setLoading(false);
            if(setStep) {
                setStep(prevState => prevState + 1);
            }
            router.push('/shopify')
        }, 2000)
    }
    return (
        <div className='right_block'>
            <div className='form_wrapper'>
                <div className='logo'>
                    <Image src={Logo} alt='Sorry'/>
                    <span>Chad</span>
                </div>
                {loading ? <h2>Wait a bit!</h2> : <>
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
                        <input type="text"
                               placeholder='Enter Password'
                               className='form_input last'
                               id='password'
                               value={password}
                               onChange={(e) => setPassword(e.target.value)}
                        />
                        <button type='submit' disabled={loading}>Create Account</button>
                    </form>
                    <p className='link'>Already have an account? <a href="/login">Login</a></p>
                </>}

            </div>
        </div>
    )
}


export default AuthForm;