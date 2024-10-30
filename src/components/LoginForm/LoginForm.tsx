"use client"
import React, {useEffect, useState} from "react";
import {useGlobalContext} from "@/Context/GlobalContext";
import {useRouter} from "next/navigation";
import '../AuthForm/AuthForm.css'
import Image from "next/image";
import Logo from '../../../public/Logo.svg'

import LoadingIndicator from "@/components/LoadingIndicator/LoadingIndicator";
import Vision from "../../../public/VIsion.svg";
import noVision from "../../../public/noVision.svg";


const LOGIN_STEP = 6;

const LoginForm: React.FC = () => {

    const {store,setStore} = useGlobalContext();
    const [values,setValues] = useState({
        email: '',
        name: '',
        password: ''
    });

    const [loading, setLoading] = useState(false);
    const [visibility, setVisibility] = useState(false);

    const router = useRouter();

    useEffect(() => {
            setStore({
                step: LOGIN_STEP
            })
    },[setStore])

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        setLoading(true);
        setTimeout(() => {
            setLoading(false);
            setStore?.({
                ...values,
                step: store?.step ? store.step + 1 : 1
            })
            router.push('/helloluna');
        }, 2000)
    }

    const onChange = (id:string,value:string): void => {
        setValues({...values, [id]: value})
    }

    return (
        <div className='right_block'>
            <div className='form_wrapper'>
                <div className='logo'>
                    <Image src={Logo} alt='Sorry'/>
                    <span>Chad</span>
                </div>
                {loading ? <LoadingIndicator/>: <>
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
                        <button type='submit' disabled={loading}>Login</button>
                    </form>
                    <p className='link'>Forgot Password? <a href="#">Reset</a></p>
                </>}

            </div>
        </div>
    )
}


export default LoginForm;