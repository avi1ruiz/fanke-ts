import { useState } from 'react'
import axios from 'axios';
import envs from '../../config';


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
        <form>
            <div className="form-group">

                <label>Usuario</label>
                <input className='form-control' type="text" name="username" onChange={(e) => setUsername(e.target.value)} />

            </div>
            <div className="form-group my-2" >
                <label>Correo Electronico</label>
                <input className='form-control' type="email" name="email" onChange={(e) => setEmail(e.target.value)} />

            </div>
            <div className="form-group my-2">

                <label>Contraseña</label>
                <input className='form-control' type="password" name="password" onChange={(e) => setPassword(e.target.value)} />

            </div>
            <div className="form-group">

                <label>Confirmar contraseña</label>
                <input className='form-control' type="password" name="confirm" onChange={(e) => setConfirm(e.target.value)} />

            </div>

            <div className="container">
                <div className="col-md-12 text-center">
                    <button className='btn btn-primary mt-4' onClick={(e) => {
                        e.preventDefault();
                        handleSubmit();
                    }}>Registrarme</button>
                </div>
            </div>

        </form>
    )

}