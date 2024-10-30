import React, {type FC} from "react";

import Image from "next/image";
import Check from '../../../public/Check.svg'

import ResponseProps from '../../interfaces/interface'

import './Response.css'

const Response: FC<ResponseProps> = ({router}) => {
    return (
        <div className='right_block'>
            <div className='form_wrapper'>
                <Image src={Check} alt='sorry' className='img'/>
                <h2>Response received</h2>
                <p className='ty'>Thank you for your interest in Chad! We’ll be hard at work building integrations to
                    support your
                    email client.</p>
                <button type='submit' onClick={router}>Done</button>
            </div>
        </div>
    )
}
export default Response;