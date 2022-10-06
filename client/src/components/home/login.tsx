import axios from "axios";
import { useState } from "react"
import { useNavigate } from "react-router-dom";
import envs from "../../config";

export function Login() {

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const navigate = useNavigate();

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
        const token = response.data.token

        localStorage.setItem('token', token)

        navigate('/main')

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