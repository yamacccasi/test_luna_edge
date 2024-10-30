'use client'
import {useGlobalContext} from "@/Context/GlobalContext";

function HellolunaPage() {

    const {store} = useGlobalContext();

    const {email,password} = store

    return (
        <>
            <h1>HELLO LUNA EDGE, MY NAME IS {email}</h1>
            <p>Your password is {password}</p>
        </>);
}



export default HellolunaPage;
