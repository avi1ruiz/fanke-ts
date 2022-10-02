//import { config } from 'dotenv'

//config()

const envs = {
    REGISTER_URI: process.env.REGISTER_URI || 'http://localhost:4000/auth/register',
    LOGIN_URI: process.env.LOGIN_URI || 'http://localhost:4000/auth/login',
}

export default envs