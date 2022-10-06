import '../../styles/bootstrap.min.css'
import axios from "axios";
import { useState } from "react"
import { useNavigate } from "react-router-dom";
import envs from "../../config";

export function Login() {

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const navigate = useNavigate();

    async function handleLogin() {

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
        <form>

            <div className="form-group">
                <label>Email</label>
                <input type="email" name="email" className="form-control" onChange={(e) => setEmail(e.target.value)} />
            </div>
            <div className="form-group my-2">
                <label>Contraseña</label>
                <input type="password" name="password" className="form-control" onChange={(e) => setPassword(e.target.value)} />
            </div>

            <div className="container">
                <div className="col-md-12 text-center">
                    <button type="submit" className="btn btn-success mt-2" onClick={(e) => {
                        e.preventDefault()
                        handleLogin()
                    }}>Iniciar Sesión</button>
                </div>
            </div>

        </form>
    )

}