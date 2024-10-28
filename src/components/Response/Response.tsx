import Image from "next/image";
import Check from '../../../public/Check.svg'
import React from "react";
import './Response.css'

interface ResponseProps {
    router?: () => void
}

const Response: React.FC = ({router}: ResponseProps) => {

    return (
        <div className='right_block'>
            <div className='form_wrapper'>
                <Image src={Check} alt='sorry' className='img'/>
                <h2>Response received</h2>
                <p>Thank you for your interest in Chad! We’ll be hard at work building integrations to support your
                    email client.</p>
                <button type='submit' onClick={router}>Done</button>
            </div>
        </div>
    )
}
export default Response;