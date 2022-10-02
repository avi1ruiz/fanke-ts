import axios from "axios";
import { useState } from "react"
import envs from "../../config";
import './auth.css'

export function Login() {

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    async function handleSubmit() {
        
        const response = await axios({
            method: 'post',
            headers: { 'content-type': 'application/json' },
            data: {
                emailForm: email,
                passwordForm: password
            },
            url: envs.LOGIN_URI 
        })

        console.log(response.data.token)

    }

    return (
        <>
            <form>
                <label className='labelForm'>Correo Electronico</label>
                <input className='inputForm' type="email" name="emailForm" onChange={(e) => setEmail(e.target.value)} />

                <label className='labelForm'>Contraseña</label>
                <input className='inputForm' type="password" name="passwordForm" onChange={(e) => setPassword(e.target.value)} />

                <button className='btnSub' onClick={(e) => {
                    e.preventDefault()
                    handleSubmit()
                }}>Login</button>
            </form>
        </>
    )

}