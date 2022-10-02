import { useState } from 'react'
import axios from 'axios';
import envs from '../config';
//import { } from 'react-icons/fa'

export function Register() {

    const [ username, setUsername ] = useState('');
    const [ email, setEmail ] = useState('');
    const [ password, setPassword ] = useState('');
    const [ confirm, setConfirm ] = useState('');

    async function handleSubmit() {
        if(confirm !== password) {
            alert('Contraseñas no coinciden')
        }

        const response = await axios({
            method: 'post',
            url: envs.REGISTER_HOST,
            headers: { 'content-type': 'application/json'},
            data: {
                usernameForm: username,
                emailForm: email,
                passwordForm: password
            }
        })

        console.log(response.data.state)

    }

    return (
        <div>
            <form>

                <label>Usuario</label>
                <input type="text" name="username" onChange={(e) => setUsername(e.target.value)}/>
                <label>Correo Electronico</label>
                <input type="email" name="email" onChange={(e) => setEmail(e.target.value)}/>
                <label>Contraseña</label>
                <input type="password" name="password" onChange={(e) => setPassword(e.target.value)}/>
                <label>Confirmar contraseña</label>
                <input type="password" name="confirm" onChange={(e) => setConfirm(e.target.value)}/>

                <button onClick={(e) => {
                    e.preventDefault();
                    handleSubmit();
                }}>Register</button>
            </form>
        </div>
    )

}