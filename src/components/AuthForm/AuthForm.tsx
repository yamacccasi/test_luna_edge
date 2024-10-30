"use client"
import React, {useState, type FC } from "react";
import {useRouter} from "next/navigation";
import {useGlobalContext} from "@/Context/GlobalContext";
import LoadingIndicator from "@/components/LoadingIndicator/LoadingIndicator";

import Image from "next/image";
import Logo from "../../../public/Logo.svg"
import Vision from '../../../public/VIsion.svg'
import noVision from "../../../public/noVision.svg"

import './AuthForm.css';

const AuthForm: FC = () => {

    const {store,setStore} = useGlobalContext()
    const [values,setValues] = useState({
        email: '',
        name: '',
        password: ''
    });

    const [visibility, setVisibility] = useState(false);
    const [loading, setLoading] = useState(false);
    const router = useRouter();

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        setLoading(true);
            setTimeout(() => {
            setLoading(false);
            setStore?.({
                ...values,
                step: store?.step ? store.step + 1 : 1
            })
            router.push('/shopify')
        }, 2000)
    }

    const onChange = (id:string, value:string): void => {
        setValues((prev) => ({...prev, [id]: value}))
    }

    // const getInputClass = (value) => {
    //     return value.trim() === '' ? 'form_input input_error' : 'form_input';
    // };

    return (
        <section className='right_block'>
            <div className='form_wrapper'>
                <div className='logo'>
                    <Image src={Logo} alt='Sorry'/>
                    <span>Chad</span>
                </div>
                    {loading ? <LoadingIndicator/> : <>
                    <form onSubmit={handleSubmit} className='form'>
                        <h2>Welcome to Chad</h2>
                        <p>Go live in 10 minutes! Our self-service widget empowers your customers to manage orders and
                            track shipments 24/7 without driving you crazy.</p>
                        <label htmlFor="email">Email</label>
                        <input type="text"
                               placeholder='megachad@gmail.com'
                               className='form_input'
                               id='email'
                               value={values?.email ?? ''}
                               onChange={({target}) => onChange(target.id, target.value)}
                        />
                        <label htmlFor="name">Your Name</label>
                        <input type="text"
                               placeholder='Mega Chad'
                               className='form_input'
                               id='name'
                               value={values?.name ?? ''}
                               onChange={({target}) => onChange(target.id, target.value)}
                        />
                        <label htmlFor="password">Password</label>
                        <div style={{position: 'relative', width: '100%'}}>
                            <input
                                type={visibility ? 'text' : 'password'}
                                placeholder='Enter Password'
                                className='form_input last show-password'
                                id='password'
                                value={values?.password ?? ''}
                                onChange={({target}) => onChange(target.id, target.value)}
                            />
                            <button
                                type="button"
                                onClick={() => setVisibility(!visibility)}
                                className="toggle_password"
                            >
                                {visibility ? <Image src={Vision} alt='sorry'/> : <Image src={noVision} alt='sorry'/>}
                            </button>
                        </div>
                        <button type='submit' disabled={loading}>Create Account</button>
                    </form>
                    <p className='link'>Already have an account? <a href="/login">Login</a></p>
                </>}
            </div>
        </section>
    )
}


export default AuthForm;