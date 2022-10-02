import { useState } from 'react'
import axios from 'axios';
import envs from '../../config';
import './auth.css'

//import { } from 'react-icons/fa'

export function Register() {

    const [username, setUsername] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [confirm, setConfirm] = useState('');

    async function handleSubmit() {
        if (confirm !== password) {
            alert('Contraseñas no coinciden')
        }

        const response = await axios({
            method: 'post',
            url: envs.REGISTER_URI,
            headers: { 'content-type': 'application/json' },
            data: {
                usernameForm: username,
                emailForm: email,
                passwordForm: password
            }
        })

        if (response.data.state) {
            alert('Registro exitoso')
        }

    }

    return (
        <>
            <form className='authForm'>
                <label className='labelForm' >Usuario</label>
                <input className='inputForm' type="text" name="username" onChange={(e) => setUsername(e.target.value)} />
                
                <label className='labelForm' >Correo Electronico</label>
                <input className='inputForm' type="email" name="email" onChange={(e) => setEmail(e.target.value)} />
                
                <label className='labelForm' >Contraseña</label>
                <input className='inputForm' type="password" name="password" onChange={(e) => setPassword(e.target.value)} />
                
                <label className='labelForm' >Confirmar contraseña</label>
                <input className='inputForm' type="password" name="confirm" onChange={(e) => setConfirm(e.target.value)} />

                <button className='btnSub' onClick={(e) => {
                    e.preventDefault();
                    handleSubmit();
                }}>Register</button>
            </form>
        </>
    )

}